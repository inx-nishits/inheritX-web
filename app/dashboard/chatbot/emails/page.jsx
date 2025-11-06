'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Email Drafts Panel
 * 
 * Displays all email drafts in a simple bordered layout
 * Protected by authentication - requires login
 */

export default function EmailDraftsPanel() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    checkAuthAndFetch()
  }, [])

  const checkAuthAndFetch = async () => {
    try {
      // Check authentication
      const authResponse = await fetch('/api/chatbot/login')
      const authData = await authResponse.json()
      
      if (!authData.authenticated) {
        // Not logged in, redirect to login
        router.push('/admin/chatbot')
        return
      }

      // Fetch submissions
      const response = await fetch('/api/chatbot/submissions')
      const data = await response.json()

      if (data.success) {
        setSubmissions(data.submissions || [])
      } else {
        setError(data.error || 'Failed to load submissions')
      }
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to load submissions')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/chatbot/logout', { method: 'POST' })
      router.push('/admin/chatbot')
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  // Get category display name
  const getCategoryName = (category) => {
    switch (category) {
      case 'new-project':
        return 'New Project'
      case 'hire-team':
        return 'Hire Team'
      case 'apply-job':
        return 'Job Application'
      default:
        return category
    }
  }

  // Format date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', { 
      year: 'numeric',
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.minHeader}>
          <div style={styles.minHeaderInner}>
            <div style={styles.minHeaderLeft}>Admin Panel - Email Drafts</div>
            <div style={styles.minHeaderRight}>
              <button onClick={handleLogout} style={styles.minHeaderButton}>Logout</button>
            </div>
          </div>
        </div>
        <div style={styles.loadingWrapper}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading email drafts...</p>
        </div>
        <style jsx global>{`
          .top-bar, .header, .footer, .progress-wrap, .chat-widget { display: none !important; }
        `}</style>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {/* Minimal admin header */}
      <div style={styles.minHeader} className='bg-dark text-white'>
        <div style={styles.minHeaderInner} className='tf-container d-flex align-items-center justify-content-between'>
          <div style={styles.minHeaderLeft}>Admin Panel - Email Drafts</div>
          <div style={styles.minHeaderRight}>
            <a href="/dashboard/chatbot" style={styles.headerLink} className='tf-btn px-3 py-2 me-2'>Back to Dashboard</a>
            <button onClick={handleLogout} style={styles.minHeaderButton} className='tf-btn px-3 py-2'>Logout</button>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div style={styles.errorBox} className='tf-container'>
          {error}
        </div>
      )}

      {/* Email Drafts */}
      <div style={styles.content} className='tf-container'>
        {submissions.length === 0 ? (
          <div style={styles.emptyState}>
            <h3 style={styles.emptyTitle}>No email drafts yet</h3>
            <p style={styles.emptyText}>Email drafts will appear here when users submit forms through the chatbot.</p>
          </div>
        ) : (
          <div style={styles.draftsList}>
            {submissions.map((submission) => (
              <div key={submission.id} style={styles.emailDraft}>
                <div style={styles.emailHeader}>
                  <div style={styles.emailMeta}>
                    <div style={styles.emailSubject}>
                      <span style={styles.subjectLabel}>Subject:</span>
                      <span style={styles.subjectText}>New Chat Submission — {submission.selectedOption || submission.category}</span>
                    </div>
                    <div style={styles.emailFrom}>
                      <span style={styles.fromLabel}>From:</span>
                      <span style={styles.fromText}>InheritX Chatbot</span>
                    </div>
                    <div style={styles.emailTo}>
                      <span style={styles.toLabel}>To:</span>
                      <span style={styles.toText}>{process.env.NEXT_PUBLIC_MAIL_TO || 'nishit.s@inheritx.com'}</span>
                    </div>
                    <div style={styles.emailDate}>
                      <span style={styles.dateLabel}>Date:</span>
                      <span style={styles.dateText}>{formatDate(submission.timestamp)}</span>
                    </div>
                  </div>
                </div>
                
                <div style={styles.emailBody}>
                  <div style={styles.emailContent}>
                    <div style={styles.contentSection}>
                      <div style={styles.contentRow}>
                        <span style={styles.contentLabel}>Name:</span>
                        <span style={styles.contentValue}>{submission.name || '—'}</span>
                      </div>
                    </div>

                    <div style={styles.contentSection}>
                      <div style={styles.contentRow}>
                        <span style={styles.contentLabel}>Email:</span>
                        <span style={styles.contentValue}>
                          <a href={`mailto:${submission.email}`} style={styles.emailLink}>
                            {submission.email}
                          </a>
                        </span>
                      </div>
                    </div>

                    {submission.phone && (
                      <div style={styles.contentSection}>
                        <div style={styles.contentRow}>
                          <span style={styles.contentLabel}>Phone:</span>
                          <span style={styles.contentValue}>{submission.phone}</span>
                        </div>
                      </div>
                    )}

                    {submission.category === 'hire-team' && (
                      <>
                        {submission.selectedDevelopers && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Selected Developers:</span>
                              <span style={styles.contentValue}>{submission.selectedDevelopers}</span>
                            </div>
                          </div>
                        )}
                        {submission.otherDeveloper && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Other Developer Type:</span>
                              <span style={styles.contentValue}>{submission.otherDeveloper}</span>
                            </div>
                          </div>
                        )}
                        {submission.selectionNotes && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Selection Notes:</span>
                              <span style={styles.contentValue}>{submission.selectionNotes}</span>
                            </div>
                          </div>
                        )}
                        {submission.requirements && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Team Requirements:</span>
                              <span style={styles.contentValue}>{submission.requirements}</span>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {submission.category === 'apply-job' && (
                      <>
                        {submission.position && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Position Applied For:</span>
                              <span style={styles.contentValue}>{submission.position}</span>
                            </div>
                          </div>
                        )}
                        {submission.experience && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Years of Experience:</span>
                              <span style={styles.contentValue}>{submission.experience}</span>
                            </div>
                          </div>
                        )}
                        {submission.skills && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Key Skills:</span>
                              <span style={styles.contentValue}>{submission.skills}</span>
                            </div>
                          </div>
                        )}
                        {submission.portfolioUrl && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Portfolio/LinkedIn:</span>
                              <span style={styles.contentValue}>
                                <a href={submission.portfolioUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                  {submission.portfolioUrl}
                                </a>
                              </span>
                            </div>
                          </div>
                        )}
                        {submission.requirements && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Cover Letter:</span>
                              <span style={styles.contentValue}>{submission.requirements}</span>
                            </div>
                          </div>
                        )}
                        {submission.resumeName && (
                          <div style={styles.contentSection}>
                            <div style={styles.contentRow}>
                              <span style={styles.contentLabel}>Resume:</span>
                              <span style={styles.contentValue}>{submission.resumeName}</span>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {submission.category === 'new-project' && submission.requirements && (
                      <div style={styles.contentSection}>
                        <div style={styles.contentRow}>
                          <span style={styles.contentLabel}>Message/Requirements:</span>
                          <span style={styles.contentValue}>{submission.requirements}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div style={styles.emailFooter}>
                  <div style={styles.footerText}>
                    This {submission.category === 'apply-job' ? 'application' : 'inquiry'} was submitted through the InheritX Chatbot
                  </div>
                  <div style={styles.footerReply}>
                    <a href={`mailto:${submission.email}`} style={styles.replyLink}>Reply to {submission.name}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hide global site header/footer when on admin */}
      <style jsx global>{`
        .top-bar, .header, .footer, .progress-wrap, .chat-widget { display: none !important; }
      `}</style>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #f9fafb 0%, #f3f4f6 100%)',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
  },
  minHeader: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '52px',
    background: '#0b0f19',
    color: '#fff',
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
  },
  minHeaderInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px'
  },
  minHeaderLeft: {
    fontWeight: 700
  },
  minHeaderRight: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  },
  minHeaderButton: {
    background: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 14px',
    fontWeight: 600,
    cursor: 'pointer'
  },
  headerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600
  },
  loadingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    marginTop: '72px'
  },
  spinner: {
    width: '48px',
    height: '48px',
    border: '4px solid #e5e7eb',
    borderTop: '4px solid #667eea',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite'
  },
  loadingText: {
    marginTop: '16px',
    color: '#6b7280',
    fontSize: '16px'
  },
  errorBox: {
    marginTop: '72px',
    marginBottom: '24px',
    padding: '16px 20px',
    background: '#fee',
    color: '#c53030',
    borderRadius: '8px',
    border: '2px solid #feb2b2'
  },
  content: {
    marginTop: '72px'
  },
  emptyState: {
    textAlign: 'center',
    padding: '80px 20px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  },
  emptyTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    margin: '0 0 8px 0'
  },
  emptyText: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0
  },
  draftsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  emailDraft: {
    background: 'white',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  emailHeader: {
    background: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
    padding: '16px 20px'
  },
  emailMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  emailSubject: {
    fontSize: '15px',
    marginBottom: '4px'
  },
  subjectLabel: {
    fontWeight: '700',
    color: '#374151',
    marginRight: '8px'
  },
  subjectText: {
    color: '#111827',
    fontWeight: '500'
  },
  emailFrom: {
    fontSize: '13px',
    color: '#6b7280'
  },
  fromLabel: {
    fontWeight: '700',
    color: '#374151',
    marginRight: '8px'
  },
  fromText: {
    color: '#1f2937'
  },
  emailTo: {
    fontSize: '13px',
    color: '#6b7280'
  },
  toLabel: {
    fontWeight: '700',
    color: '#374151',
    marginRight: '8px'
  },
  toText: {
    color: '#1f2937'
  },
  emailDate: {
    fontSize: '13px',
    color: '#6b7280'
  },
  dateLabel: {
    fontWeight: '700',
    color: '#374151',
    marginRight: '8px'
  },
  dateText: {
    color: '#1f2937'
  },
  emailBody: {
    padding: '20px',
    borderBottom: '1px solid #e5e7eb'
  },
  emailContent: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: '#1f2937'
  },
  contentSection: {
    marginBottom: '12px'
  },
  contentRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  },
  contentLabel: {
    fontWeight: '700',
    color: '#374151',
    minWidth: '140px',
    flexShrink: 0
  },
  contentValue: {
    color: '#1f2937',
    flex: '1',
    wordBreak: 'break-word'
  },
  emailLink: {
    color: '#667eea',
    textDecoration: 'none'
  },
  link: {
    color: '#667eea',
    textDecoration: 'none',
    wordBreak: 'break-all'
  },
  emailFooter: {
    background: '#f9fafb',
    padding: '16px 20px',
    fontSize: '13px',
    color: '#6b7280',
    borderTop: '1px solid #e5e7eb'
  },
  footerText: {
    marginBottom: '8px'
  },
  footerReply: {
    marginTop: '8px'
  },
  replyLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500'
  }
}

// Add keyframe animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `
  document.head.appendChild(style)
}

