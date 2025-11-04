import { NextResponse } from 'next/server'

/**
 * Chatbot Lead Submission API
 * 
 * This endpoint receives lead information from the chatbot and:
 * 1. Logs it to console (for development)
 * 2. Can send email to sales team
 * 3. Can save to database
 * 4. Can integrate with CRM (Zoho, Salesforce, etc.)
 */

export async function POST(request) {
  try {
    const leadData = await request.json()

    // Validate required fields
    if (!leadData.name || !leadData.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Log the submission (you can see this in terminal)
    console.log('='.repeat(60))
    console.log('🎯 NEW CHATBOT LEAD RECEIVED')
    console.log('='.repeat(60))
    console.log('Service:', leadData.selectedService)
    console.log('Name:', leadData.name)
    console.log('Email:', leadData.email)
    console.log('Phone:', leadData.phone)
    console.log('Company:', leadData.company || 'Not provided')
    console.log('Message:', leadData.message)
    console.log('Submitted At:', new Date(leadData.submittedAt).toLocaleString())
    console.log('='.repeat(60))

    // TODO: Add email sending functionality
    // Example using Nodemailer or SendGrid:
    /*
    await sendEmail({
      to: 'sales@inheritx.com',
      subject: `New ${leadData.selectedService} Inquiry`,
      html: generateEmailHTML(leadData)
    })
    */

    // TODO: Save to database
    // Example:
    /*
    await db.leads.create({
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      company: leadData.company,
      service: leadData.selectedService,
      message: leadData.message,
      submittedAt: leadData.submittedAt
    })
    */

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Lead information received successfully',
      leadId: Date.now(), // You can generate a proper ID
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Lead Submission Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process lead submission',
        message: error.message 
      },
      { status: 500 }
    )
  }
}

// Helper function to generate email HTML (you can customize this)
function generateEmailHTML(leadData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #546EA4 0%, #3d5278 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #546EA4; }
        .value { margin-top: 5px; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🎯 New Lead from InheritX Chatbot</h2>
          <p style="margin: 0; opacity: 0.9;">${leadData.selectedService}</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">${leadData.name}</div>
          </div>
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${leadData.email}</div>
          </div>
          <div class="field">
            <div class="label">📱 Phone:</div>
            <div class="value">${leadData.phone}</div>
          </div>
          ${leadData.company ? `
            <div class="field">
              <div class="label">🏢 Company:</div>
              <div class="value">${leadData.company}</div>
            </div>
          ` : ''}
          <div class="field">
            <div class="label">💬 Message:</div>
            <div class="value">${leadData.message}</div>
          </div>
          <div class="field">
            <div class="label">🕒 Submitted At:</div>
            <div class="value">${new Date(leadData.submittedAt).toLocaleString()}</div>
          </div>
        </div>
        <div class="footer">
          <p>This lead was submitted through the InheritX website chatbot.</p>
          <p><a href="mailto:${leadData.email}">Reply to ${leadData.name}</a></p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Optional: GET endpoint for testing
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Chatbot submission API is running',
    endpoints: {
      POST: '/api/chatbot/submit - Submit lead information'
    }
  })
}

