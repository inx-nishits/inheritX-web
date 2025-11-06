import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs/promises'
import path from 'path'

/**
 * Chatbot Lead Submission API
 * 
 * This endpoint receives lead information from the chatbot and:
 * 1. Validates and sanitizes input
 * 2. Sends email to admin using Nodemailer
 * 3. Saves to submissions.json file
 * 4. Returns success/error response
 */

// Sanitize input to prevent XSS
function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  const replacements = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  }
  return input.replace(/[<>"'/]/g, char => replacements[char])
}

// Create verified email transporter
async function getVerifiedTransporter() {
  // Check environment variables
  const hasUser = !!process.env.MAIL_USER
  const hasPass = !!process.env.MAIL_PASS
  
  if (!hasUser || !hasPass) {
    console.error('⚠️ Email credentials not configured')
    console.error('   MAIL_USER:', hasUser ? '✓ Set' : '✗ Missing')
    console.error('   MAIL_PASS:', hasPass ? '✓ Set' : '✗ Missing')
    console.error('   NODE_ENV:', process.env.NODE_ENV || 'not set')
    return null
  }

  const configs = [
    { host: 'smtp.gmail.com', port: 465, secure: true },
    { host: 'smtp.gmail.com', port: 587, secure: false }
  ]

  const errors = []
  for (const cfg of configs) {
    try {
      const transporter = nodemailer.createTransport({
        ...cfg,
        auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
      })
      await transporter.verify()
      console.log(`✅ Email transporter verified on port ${cfg.port}`)
      return transporter
    } catch (err) {
      const errorMsg = `Port ${cfg.port} failed: ${err.message}`
      console.warn(`⚠️ ${errorMsg}`)
      errors.push(errorMsg)
    }
  }
  console.error('❌ All email configs failed')
  console.error('   Errors:', errors.join('; '))
  console.error('   Make sure:')
  console.error('   1. MAIL_USER and MAIL_PASS are set in production environment')
  console.error('   2. You are using a Gmail App Password (not regular password)')
  console.error('   3. 2-Step Verification is enabled on Gmail account')
  return null
}

// Generate email HTML based on category
function generateEmailHTML(data) {
  const category = data.category
  const isHireTeam = category === 'hire-team'
  const isJobApplication = category === 'apply-job'
  
  const titles = {
    'hire-team': '👥 Hire Dedicated Team Request',
    'apply-job': '💼 New Job Application',
    'default': '🎯 New Project Inquiry'
  }
  const categoryTitle = titles[category] || titles.default

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { 
          font-family: 'Arial', sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f4f4f4; 
        }
        .container { 
          max-width: 600px; 
          margin: 20px auto; 
          background: #ffffff; 
          border-radius: 10px; 
          overflow: hidden; 
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        }
        .header { 
          background: linear-gradient(135deg, #00C5DE 0%, #00A3B8 100%); 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
        }
        .header h2 { 
          margin: 0 0 10px 0; 
          font-size: 24px; 
        }
        .header p { 
          margin: 0; 
          opacity: 0.95; 
          font-size: 16px; 
        }
        .content { 
          padding: 30px 20px; 
        }
        .field { 
          margin-bottom: 20px; 
          padding-bottom: 15px; 
          border-bottom: 1px solid #e5e7eb; 
        }
        .field:last-child { 
          border-bottom: none; 
        }
        .label { 
          font-weight: bold; 
          color: #00C5DE; 
          margin-bottom: 5px; 
          font-size: 14px; 
          display: block; 
        }
        .value { 
          color: #333; 
          font-size: 15px; 
          word-wrap: break-word; 
          white-space: pre-wrap; 
        }
        .footer { 
          background: #f8f9fa; 
          text-align: center; 
          padding: 20px; 
          color: #6b7280; 
          font-size: 13px; 
        }
        .footer a { 
          color: #00C5DE; 
          text-decoration: none; 
        }
        .footer a:hover { 
          text-decoration: underline; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${categoryTitle}</h2>
          <p>${data.selectedService || 'Chat Inquiry'}</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">👤 Name</span>
            <div class="value">${sanitizeInput(data.name)}</div>
          </div>
          <div class="field">
            <span class="label">📧 Email</span>
            <div class="value"><a href="mailto:${data.email}">${sanitizeInput(data.email)}</a></div>
          </div>
          ${data.phone ? `
          <div class="field">
            <span class="label">📱 Phone</span>
            <div class="value">${sanitizeInput(data.phone)}</div>
          </div>
          ` : ''}
          
          ${isHireTeam ? `
            ${data.selectedDevelopers ? `
            <div class="field">
              <span class="label">👨‍💻 Selected Developers</span>
              <div class="value">${sanitizeInput(data.selectedDevelopers)}</div>
            </div>
            ` : ''}
            ${data.otherDeveloper ? `
            <div class="field">
              <span class="label">🔧 Other Developer Type</span>
              <div class="value">${sanitizeInput(data.otherDeveloper)}</div>
            </div>
            ` : ''}
            ${data.selectionNotes ? `
            <div class="field">
              <span class="label">📝 Selection Notes</span>
              <div class="value">${sanitizeInput(data.selectionNotes)}</div>
            </div>
            ` : ''}
            ${data.requirements ? `
            <div class="field">
              <span class="label">💬 Team Requirements</span>
              <div class="value">${sanitizeInput(data.requirements)}</div>
            </div>
            ` : ''}
          ` : isJobApplication ? `
            <div class="field">
              <span class="label">💼 Position Applied For</span>
              <div class="value">${sanitizeInput(data.position)}</div>
            </div>
            <div class="field">
              <span class="label">📊 Years of Experience</span>
              <div class="value">${sanitizeInput(data.experience)}</div>
            </div>
            <div class="field">
              <span class="label">🛠️ Key Skills</span>
              <div class="value">${sanitizeInput(data.skills)}</div>
            </div>
            ${data.portfolioUrl ? `
            <div class="field">
              <span class="label">🔗 Portfolio/LinkedIn</span>
              <div class="value"><a href="${data.portfolioUrl}">${sanitizeInput(data.portfolioUrl)}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <span class="label">💬 Cover Letter</span>
              <div class="value">${sanitizeInput(data.requirements)}</div>
            </div>
            ${data.resume ? `
            <div class="field">
              <span class="label">📄 Resume</span>
              <div class="value">Attached (${sanitizeInput(data.resume.name)})</div>
            </div>
            ` : ''}
          ` : `
            ${data.requirements ? `
            <div class="field">
              <span class="label">💬 Message/Requirements</span>
              <div class="value">${sanitizeInput(data.requirements)}</div>
            </div>
            ` : ''}
          `}
          
          <div class="field">
            <span class="label">🕒 Submitted At</span>
            <div class="value">${new Date(data.submittedAt).toLocaleString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })}</div>
          </div>
        </div>
        <div class="footer">
          <p>This ${isJobApplication ? 'application' : 'inquiry'} was submitted through the <strong>InheritX Chatbot</strong></p>
          <p><a href="mailto:${data.email}">Reply to ${sanitizeInput(data.name)}</a></p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Save submission to JSON file
async function saveToJSON(data) {
  const submissionsPath = path.join(process.cwd(), 'submissions.json')
  
  // Read existing submissions
  let submissions = []
  try {
    const content = await fs.readFile(submissionsPath, 'utf8')
    submissions = JSON.parse(content)
  } catch {
    submissions = [] // File doesn't exist or invalid
  }
  
  const isHireTeam = data.category === 'hire-team'
  const isJobApplication = data.category === 'apply-job'
  
  // Build submission record
  const record = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    selectedOption: data.selectedService || data.category,
    category: data.category,
    timestamp: data.submittedAt,
    requirements: data.requirements || '',
    resumeName: data.resume?.name || '',
    ...(isHireTeam && {
      selectedDevelopers: data.selectedDevelopers,
      otherDeveloper: data.otherDeveloper,
      selectionNotes: data.selectionNotes
    }),
    ...(isJobApplication && {
      position: data.position,
      experience: data.experience,
      skills: data.skills,
      portfolioUrl: data.portfolioUrl
    })
  }
  
  submissions.unshift(record) // Latest first
  await fs.writeFile(submissionsPath, JSON.stringify(submissions, null, 2), 'utf8')
  return true
}

// Send email
async function sendEmail(transporter, data) {
  if (!transporter) {
    console.warn('⚠️ Email not sent - transporter not configured')
    return { success: false, error: 'Transporter not configured' }
  }

  const mailOptions = {
    from: `"InheritX Chatbot" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO || 'nishit.s@inheritx.com',
    subject: `New Chat Submission — ${data.selectedService || data.category}`,
    html: generateEmailHTML(data),
    replyTo: data.email
  }

  // Add resume attachment if present
  if (data.resume) {
    try {
      const buffer = await data.resume.arrayBuffer()
      mailOptions.attachments = [{
        filename: data.resume.name,
        content: Buffer.from(buffer)
      }]
      console.log(`📎 Resume attached: ${data.resume.name}`)
    } catch (err) {
      console.error('❌ Error processing resume attachment:', err.message)
    }
  }

  try {
    console.log(`📧 Attempting to send email to: ${mailOptions.to}`)
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully!')
    console.log('   Message ID:', info.messageId)
    console.log('   Response:', info.response)
    return { success: true, messageId: info.messageId, response: info.response }
  } catch (error) {
    console.error('❌ Email sending failed!')
    console.error('   Error code:', error.code)
    console.error('   Error message:', error.message)
    if (error.response) {
      console.error('   SMTP Response:', error.response)
    }
    if (error.responseCode) {
      console.error('   Response Code:', error.responseCode)
    }
    // Common Gmail errors
    if (error.code === 'EAUTH') {
      console.error('   ⚠️ Authentication failed - check your Gmail App Password')
    } else if (error.code === 'ECONNECTION') {
      console.error('   ⚠️ Connection failed - check network/firewall settings')
    }
    return { success: false, error: error.message, code: error.code }
  }
}

export async function POST(request) {
  try {
    // Parse and extract FormData
    const formData = await request.formData()
    const get = (key) => formData.get(key)
    
    const leadData = {
      name: sanitizeInput(get('name')),
      email: sanitizeInput(get('email')),
      phone: sanitizeInput(get('phone')),
      selectedService: sanitizeInput(get('selectedService')),
      category: sanitizeInput(get('category')),
      requirements: sanitizeInput(get('requirements')),
      submittedAt: get('submittedAt'),
      // Hire team fields
      selectedDevelopers: sanitizeInput(get('selectedDevelopers')),
      otherDeveloper: sanitizeInput(get('otherDeveloper')),
      selectionNotes: sanitizeInput(get('selectionNotes')),
      // Job application fields
      position: sanitizeInput(get('position')),
      experience: sanitizeInput(get('experience')),
      skills: sanitizeInput(get('skills')),
      portfolioUrl: get('portfolioUrl'),
      resume: get('resume') // File object
    }

    // Validate required fields
    if (!leadData.name || !leadData.email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(leadData.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    console.log('\n' + '='.repeat(60))
    console.log('🎯 NEW CHATBOT LEAD:', leadData.name, `(${leadData.category})`)
    console.log('='.repeat(60) + '\n')

    // Process submission
    const transporter = await getVerifiedTransporter()
    
    let emailResult = { success: false, error: 'Not attempted' }
    if (transporter) {
      try {
        emailResult = await sendEmail(transporter, leadData)
      } catch (err) {
        console.error('❌ Unexpected email error:', err.message)
        emailResult = { success: false, error: err.message }
      }
    } else {
      console.error('❌ Cannot send email - transporter not available')
      emailResult = { success: false, error: 'Email service not configured' }
    }
    
    const emailSent = emailResult.success === true

    let savedToJSON = false
    try {
      await saveToJSON(leadData)
      savedToJSON = true
      console.log('✅ Saved to JSON')
    } catch (err) {
      console.error('JSON save error:', err.message)
    }

    // Log final status
    if (emailSent) {
      console.log('✅ Submission completed successfully - Email sent and saved to JSON')
    } else {
      console.warn('⚠️ Submission saved but email failed:', emailResult.error || 'Unknown error')
      console.warn('   Check production environment variables: MAIL_USER, MAIL_PASS, MAIL_TO')
    }

    return NextResponse.json({
      success: true,
      message: 'Submission received successfully',
      emailSent,
      emailError: emailSent ? null : (emailResult.error || 'Email service not configured'),
      savedToJSON,
      leadId: Date.now(),
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('❌ Submission Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process submission', message: error.message },
      { status: 500 }
    )
  }
}

