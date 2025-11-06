import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

async function getVerifiedTransporter() {
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) return null
  const attempts = [
    { host: 'smtp.gmail.com', port: 465, secure: true },
    { host: 'smtp.gmail.com', port: 587, secure: false }
  ]
  const errors = []
  for (const cfg of attempts) {
    const transporter = nodemailer.createTransport({
      ...cfg,
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
    })
    try {
      await transporter.verify()
      return transporter
    } catch (err) {
      errors.push({ cfg, message: err.message })
    }
  }
  console.error('Email transporter verify failed:', errors)
  return null
}

export async function GET() {
  try {
    const transporter = await getVerifiedTransporter()
    if (!transporter) {
      return NextResponse.json({ success: false, error: 'MAIL_USER/MAIL_PASS not configured' }, { status: 500 })
    }

    const to = process.env.MAIL_TO || process.env.MAIL_USER
    const info = await transporter.sendMail({
      from: `"InheritX Chatbot" <${process.env.MAIL_USER}>`,
      to,
      subject: 'Test Email from Chatbot API',
      text: 'This is a test email to verify Gmail SMTP settings.',
    })

    return NextResponse.json({ success: true, messageId: info.messageId, to })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}


