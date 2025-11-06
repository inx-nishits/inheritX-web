import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import fs from 'fs/promises'
import path from 'path'

/**
 * Admin Submissions API
 * 
 * Protected endpoint that returns all chat submissions
 * Requires valid admin session cookie
 */

// Check if user is authenticated
async function isAuthenticated() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('admin_session')

    if (!sessionToken) {
      return false
    }

    // Verify token (basic check)
    try {
      const decoded = Buffer.from(sessionToken.value, 'base64').toString()
      const [username, timestamp] = decoded.split(':')
      
      // Check if session is still valid (24 hours)
      const sessionAge = Date.now() - parseInt(timestamp)
      if (sessionAge > 60 * 60 * 24 * 1000) {
        return false
      }

      return true
    } catch (err) {
      return false
    }
  } catch (error) {
    return false
  }
}

export async function GET() {
  try {
    // Check authentication
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized - Please login' },
        { status: 401 }
      )
    }

    // Read submissions from JSON file
    const submissionsPath = path.join(process.cwd(), 'submissions.json')
    
    let submissions = []
    try {
      const fileContent = await fs.readFile(submissionsPath, 'utf8')
      submissions = JSON.parse(fileContent)
    } catch (err) {
      // If file doesn't exist or is invalid, return empty array
      console.warn('Submissions file not found or invalid:', err.message)
      submissions = []
    }

    return NextResponse.json({
      success: true,
      submissions,
      total: submissions.length
    })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}

