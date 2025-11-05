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
    // Parse FormData (to handle file uploads)
    const formData = await request.formData()
    
    // Extract data from FormData
    const leadData = {
      name: formData.get('name'),
      email: formData.get('email'),
      selectedService: formData.get('selectedService'),
      category: formData.get('category'),
      requirements: formData.get('requirements'),
      submittedAt: formData.get('submittedAt'),
      // Job application specific fields
      position: formData.get('position'),
      experience: formData.get('experience'),
      skills: formData.get('skills'),
      portfolioUrl: formData.get('portfolioUrl'),
      resume: formData.get('resume') // This is the File object
    }

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
    console.log('Category:', leadData.category)
    console.log('Name:', leadData.name)
    console.log('Email:', leadData.email)
    
    // Log job application specific fields
    if (leadData.category === 'apply-job') {
      console.log('\n📝 JOB APPLICATION DETAILS:')
      console.log('Position:', leadData.position)
      console.log('Experience:', leadData.experience, 'years')
      console.log('Skills:', leadData.skills)
      console.log('Portfolio URL:', leadData.portfolioUrl || 'Not provided')
      if (leadData.resume) {
        console.log('Resume:', leadData.resume.name, `(${(leadData.resume.size / 1024).toFixed(2)} KB)`)
      }
      console.log('Cover Letter:', leadData.requirements)
    } else {
      console.log('Requirements:', leadData.requirements)
    }
    
    console.log('\n⏰ Submitted At:', new Date(leadData.submittedAt).toLocaleString())
    console.log('='.repeat(60))

    // TODO: Save resume file to storage (S3, Google Cloud Storage, etc.)
    // Example:
    /*
    if (leadData.resume) {
      const buffer = await leadData.resume.arrayBuffer()
      const fileName = `resumes/${Date.now()}_${leadData.resume.name}`
      await uploadToStorage(fileName, buffer)
    }
    */

    // TODO: Add email sending functionality
    // Example using Nodemailer or SendGrid:
    /*
    await sendEmail({
      to: 'hr@Inheritx.com', // or 'sales@Inheritx.com' for other inquiries
      subject: `New ${leadData.category === 'apply-job' ? 'Job Application' : leadData.selectedService + ' Inquiry'}`,
      html: generateEmailHTML(leadData),
      attachments: leadData.resume ? [{
        filename: leadData.resume.name,
        content: await leadData.resume.arrayBuffer()
      }] : []
    })
    */

    // TODO: Save to database
    // Example:
    /*
    await db.leads.create({
      name: leadData.name,
      email: leadData.email,
      service: leadData.selectedService,
      category: leadData.category,
      requirements: leadData.requirements,
      // Job application fields
      position: leadData.position,
      experience: leadData.experience,
      skills: leadData.skills,
      portfolioUrl: leadData.portfolioUrl,
      resumeUrl: resumeUrl, // after uploading
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
  const isJobApplication = leadData.category === 'apply-job'
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #00C5DE 0%, #00A3B8 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #00C5DE; }
        .value { margin-top: 5px; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${isJobApplication ? '💼 New Job Application' : '🎯 New Lead from InheritX Chatbot'}</h2>
          <p style="margin: 0; opacity: 0.9;">${isJobApplication ? leadData.position : leadData.selectedService}</p>
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
          ${isJobApplication ? `
            <div class="field">
              <div class="label">💼 Position Applied For:</div>
              <div class="value">${leadData.position}</div>
            </div>
            <div class="field">
              <div class="label">📊 Years of Experience:</div>
              <div class="value">${leadData.experience}</div>
            </div>
            <div class="field">
              <div class="label">🛠️ Key Skills:</div>
              <div class="value">${leadData.skills}</div>
            </div>
            ${leadData.portfolioUrl ? `
              <div class="field">
                <div class="label">🔗 Portfolio/LinkedIn:</div>
                <div class="value"><a href="${leadData.portfolioUrl}">${leadData.portfolioUrl}</a></div>
              </div>
            ` : ''}
            <div class="field">
              <div class="label">💬 Cover Letter:</div>
              <div class="value">${leadData.requirements}</div>
            </div>
            ${leadData.resume ? `
              <div class="field">
                <div class="label">📄 Resume:</div>
                <div class="value">Attached (${leadData.resume.name})</div>
              </div>
            ` : ''}
          ` : `
            <div class="field">
              <div class="label">💬 Requirements:</div>
              <div class="value">${leadData.requirements}</div>
            </div>
          `}
          <div class="field">
            <div class="label">🕒 Submitted At:</div>
            <div class="value">${new Date(leadData.submittedAt).toLocaleString()}</div>
          </div>
        </div>
        <div class="footer">
          <p>This ${isJobApplication ? 'application' : 'lead'} was submitted through the InheritX website chatbot.</p>
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

