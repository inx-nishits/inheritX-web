import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
  try {
    const hasUser = !!process.env.MAIL_USER
    const hasPass = !!process.env.MAIL_PASS
    const to = process.env.MAIL_TO || '(not set)'

    if (!hasUser || !hasPass) {
      return NextResponse.json({
        success: false,
        error: 'Missing MAIL_USER or MAIL_PASS',
        env: { hasUser, hasPass, to }
      }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
    })

    let verifyOk = false
    try {
      await transporter.verify()
      verifyOk = true
    } catch (err) {
      return NextResponse.json({
        success: false,
        stage: 'verify',
        error: err.message,
        env: { hasUser, hasPass, to }
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      verifyOk,
      env: { hasUser, hasPass, to }
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}


