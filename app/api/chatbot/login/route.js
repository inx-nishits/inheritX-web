import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

/**
 * Admin Login API
 * 
 * Simple authentication using credentials from .env
 * Creates a secure session cookie on successful login
 */

export async function POST(request) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Check credentials from environment variables
    const adminUser = process.env.ADMIN_USER || 'admin'
    const adminPass = process.env.ADMIN_PASS || '1234'

    if (username !== adminUser || password !== adminPass) {
      console.log('❌ Failed login attempt:', username)
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create session token (simple implementation)
    const sessionToken = Buffer.from(`${username}:${Date.now()}:${process.env.SESSION_SECRET || 'secret'}`).toString('base64')
    
    // Set cookie
    const cookieStore = await cookies()
    cookieStore.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/'
    })

    console.log('✅ Admin logged in successfully')

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: { username }
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'Login failed', message: error.message },
      { status: 500 }
    )
  }
}

// Check if user is logged in (for dashboard)
export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('admin_session')

    if (!sessionToken) {
      return NextResponse.json({ authenticated: false })
    }

    // Verify token (basic check)
    try {
      const decoded = Buffer.from(sessionToken.value, 'base64').toString()
      const [username, timestamp] = decoded.split(':')
      
      // Check if session is still valid (24 hours)
      const sessionAge = Date.now() - parseInt(timestamp)
      if (sessionAge > 60 * 60 * 24 * 1000) {
        // Session expired
        return NextResponse.json({ authenticated: false })
      }

      return NextResponse.json({ 
        authenticated: true,
        user: { username }
      })
    } catch (err) {
      return NextResponse.json({ authenticated: false })
    }
  } catch (error) {
    return NextResponse.json({ authenticated: false })
  }
}

