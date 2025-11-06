import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

/**
 * Admin Logout API
 * 
 * Destroys the admin session by clearing the session cookie
 */

export async function POST() {
  try {
    const cookieStore = await cookies()
    
    // Delete the session cookie
    cookieStore.delete('admin_session')

    console.log('✅ Admin logged out successfully')

    return NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { success: false, error: 'Logout failed' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return POST()
}

