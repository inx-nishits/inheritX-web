'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Admin Dashboard for Chatbot Submissions
 * 
 * Displays all form submissions in a clean table format
 * Protected by authentication - requires login
 */

export default function ChatbotDashboard() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'new-project', 'hire-team', 'apply-job'
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSubmission, setSelectedSubmission] = useState(null)

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

  const handleRefresh = () => {
    setLoading(true)
    checkAuthAndFetch()
  }

  // Modal handlers
  const openDetails = (submission) => {
    setSelectedSubmission(submission)
    setIsModalOpen(true)
  }

  const closeDetails = () => {
    setIsModalOpen(false)
    setSelectedSubmission(null)
  }

  // Filter and search submissions
  const filteredSubmissions = submissions.filter(sub => {
    const matchesFilter = filter === 'all' || sub.category === filter
    const matchesSearch = searchTerm === '' || 
      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sub.phone && sub.phone.includes(searchTerm))
    return matchesFilter && matchesSearch
  })

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

  // Get category badge color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'new-project':
        return '#3b82f6'
      case 'hire-team':
        return '#8b5cf6'
      case 'apply-job':
        return '#10b981'
      default:
        return '#6b7280'
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

  if (loading) {
    return (
      <div style={styles.container}>
        {/* Minimal admin header with only Logout option */}
        <div style={styles.minHeader}>
          <div style={styles.minHeaderInner}>
            <div style={styles.minHeaderLeft}>Admin Panel</div>
            <div style={styles.minHeaderRight}>
              <button onClick={handleLogout} style={styles.minHeaderButton}>Logout</button>
            </div>
          </div>
        </div>
        <div style={styles.loadingWrapper}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading submissions...</p>
        </div>
        {/* Hide global site header/footer when on admin */}
        <style jsx global>{`
          .top-bar, .header, .footer, .progress-wrap { display: none !important; }
        `}</style>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {/* Minimal admin header with only Logout option */}
      <div style={styles.minHeader} className='bg-dark text-white'>
        <div style={styles.minHeaderInner} className='tf-container d-flex align-items-center justify-content-between'>
          <div style={styles.minHeaderLeft}>Admin Panel</div>
          <div style={styles.minHeaderRight}>
            <button onClick={handleLogout} style={styles.minHeaderButton} className='tf-btn px-3 py-2'>Logout</button>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div style={{ ...styles.toolbar, marginTop: '88px' }} className='tf-container'>
        <div style={styles.toolbarSection}>
          <div style={styles.filters}>
            <button
              onClick={() => { setFilter('all'); setSearchTerm(''); }}
              style={filter === 'all' ? { ...styles.filterBtn, ...styles.filterBtnActive } : styles.filterBtn}
              className="filter-btn"
            >
              <span>All</span>
              <span style={styles.filterCount}>{submissions.length}</span>
            </button>
            <button
              onClick={() => { setFilter('new-project'); setSearchTerm(''); }}
              style={filter === 'new-project' ? { ...styles.filterBtn, ...styles.filterBtnActive } : styles.filterBtn}
              className="filter-btn"
            >
              <span>New Projects</span>
              <span style={styles.filterCount}>{submissions.filter(s => s.category === 'new-project').length}</span>
            </button>
            <button
              onClick={() => { setFilter('hire-team'); setSearchTerm(''); }}
              style={filter === 'hire-team' ? { ...styles.filterBtn, ...styles.filterBtnActive } : styles.filterBtn}
              className="filter-btn"
            >
              <span>Hire Team</span>
              <span style={styles.filterCount}>{submissions.filter(s => s.category === 'hire-team').length}</span>
            </button>
            <button
              onClick={() => { setFilter('apply-job'); setSearchTerm(''); }}
              style={filter === 'apply-job' ? { ...styles.filterBtn, ...styles.filterBtnActive } : styles.filterBtn}
              className="filter-btn"
            >
              <span>Job Apps</span>
              <span style={styles.filterCount}>{submissions.filter(s => s.category === 'apply-job').length}</span>
            </button>
          </div>
          <div style={styles.searchBox}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280', zIndex: 1 }}>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={styles.clearSearchBtn}
                title="Clear search"
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
        {(filter !== 'all' || searchTerm) && (
          <div style={styles.activeFilters}>
            <span style={styles.activeFiltersLabel}>Active filters:</span>
            {filter !== 'all' && (
              <span style={styles.activeFilterTag}>
                {getCategoryName(filter)}
                <button onClick={() => setFilter('all')} style={styles.removeFilterBtn} aria-label="Remove filter">×</button>
              </span>
            )}
            {searchTerm && (
              <span style={styles.activeFilterTag}>
                Search: "{searchTerm}"
                <button onClick={() => setSearchTerm('')} style={styles.removeFilterBtn} aria-label="Clear search">×</button>
              </span>
            )}
            <button onClick={() => { setFilter('all'); setSearchTerm(''); }} style={styles.clearAllBtn}>
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div style={styles.errorBox}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {error}
        </div>
      )}

      {/* Submissions Table */}
      {filteredSubmissions.length === 0 ? (
        <div style={styles.emptyState} className='tf-container'>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#d1d5db', marginBottom: '16px' }}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3 style={styles.emptyTitle}>No submissions yet</h3>
          <p style={styles.emptyText}>Submissions will appear here when users interact with the chatbot.</p>
        </div>
      ) : (
        <div style={styles.tableWrapper} className='tf-container card shadow-sm border-0'>
          <div className='table-responsive'>
            <table style={styles.table} className='table admin-table align-middle mb-0'>
              <thead>
                <tr>
                  <th style={{ ...styles.th, ...styles.firstColumn }}>#</th>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Category</th>
                  <th style={styles.th}>Option</th>
                  <th style={styles.th}>Timestamp</th>
                  <th style={{ ...styles.th, ...styles.firstColumn }}>Details</th>
                </tr>
              </thead>
              <tbody>
              {filteredSubmissions.map((submission, index) => (
                <tr key={submission.id} style={styles.tr} className="table-row">
                  <td style={{ ...styles.td, ...styles.firstColumn }}>{index + 1}</td>
                  <td style={styles.td}>
                    <div style={{ fontWeight: '600', fontSize: '13px' }}>{submission.name}</div>
                  </td>
                  <td style={styles.td}>
                    <a href={`mailto:${submission.email}`} style={{ ...styles.emailLink, color: '#111827' }} className='text-decoration-none'>
                      {submission.email}
                    </a>
                  </td>
                  <td style={styles.td}>
                    <span style={{ ...styles.badge, background: getCategoryColor(submission.category) }} className='badge'>
                      {getCategoryName(submission.category)}
                    </span>
                  </td>
                  <td style={styles.td}>{submission.selectedOption}</td>
                  <td style={styles.td}>{formatDate(submission.timestamp)}</td>
                  <td style={{ ...styles.td, ...styles.firstColumn }}>
                    <button 
                      onClick={() => openDetails(submission)}
                      style={styles.viewBtn}
                      className='btn btn-light btn-sm viewBtn'
                      title="View full details"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Details Modal */}
      {isModalOpen && selectedSubmission && (
        <div style={styles.modalOverlay} role='dialog' aria-modal='true' aria-labelledby='detailsTitle' onClick={closeDetails}>
          <div style={styles.modalCard} className='card shadow border-0' onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader} className='card-header bg-white d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-2'>
                <h2 id='detailsTitle' className='h5 mb-0'>Submission Details</h2>
                <span className='badge' style={{ ...styles.badge, background: getCategoryColor(selectedSubmission.category) }}>{getCategoryName(selectedSubmission.category)}</span>
              </div>
              <button onClick={closeDetails} className='btn btn-sm btn-light' aria-label='Close'>✕</button>
            </div>
            <div className='card-body' style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              <div className='row g-3'>
                {/* Contact Card */}
                <div className='col-12 col-lg-6'>
                  <div className='p-3 border rounded-3 h-100' style={{ borderColor: '#eef2f7' }}>
                    <div className='text-muted small mb-1'>Name</div>
                    <div className='fw-semibold mb-2' style={{ fontSize: '16px' }}>{selectedSubmission.name || '—'}</div>
                    <div className='text-muted small mb-1'>Email</div>
                    <div className='fw-semibold mb-2'><a href={`mailto:${selectedSubmission.email}`} className='text-decoration-none' style={{ color: '#111827' }}>{selectedSubmission.email}</a></div>
                  </div>
                </div>
                {/* Meta Card */}
                <div className='col-12 col-lg-6'>
                  <div className='p-3 border rounded-3 h-100' style={{ borderColor: '#eef2f7' }}>
                    <div className='text-muted small mb-1'>Selected Option</div>
                    <div className='fw-semibold mb-2' style={{ fontSize: '16px' }}>{selectedSubmission.selectedOption || '—'}</div>
                    <div className='text-muted small mb-1'>Timestamp</div>
                    <div className='fw-semibold' style={{ fontSize: '16px' }}>{formatDate(selectedSubmission.timestamp)}</div>
                  </div>
                </div>
                {/* Message Card */}
                {selectedSubmission.requirements && (
                  <div className='col-12'>
                    <div className='p-3 border rounded-3' style={{ borderColor: '#eef2f7' }}>
                      <div className='text-muted small mb-2'>Message / Requirements</div>
                      <div style={styles.requirementsBox}>{selectedSubmission.requirements}</div>
                    </div>
                  </div>
                )}
                {/* Optional Hire Team Fields */}
                {(selectedSubmission.selectedDevelopers || selectedSubmission.otherDeveloper || selectedSubmission.selectionNotes) && (
                  <div className='col-12'>
                    <div className='p-3 border rounded-3' style={{ borderColor: '#eef2f7' }}>
                      <div className='text-muted small mb-2'>Hire Team Details</div>
                      {selectedSubmission.selectedDevelopers && (
                        <div className='mb-2'><span className='text-muted small me-2'>Selected Developers:</span><span className='fw-semibold'>{selectedSubmission.selectedDevelopers}</span></div>
                      )}
                      {selectedSubmission.otherDeveloper && (
                        <div className='mb-2'><span className='text-muted small me-2'>Other Developer:</span><span className='fw-semibold'>{selectedSubmission.otherDeveloper}</span></div>
                      )}
                      {selectedSubmission.selectionNotes && (
                        <div><span className='text-muted small me-2'>Notes:</span><span className='fw-normal'>{selectedSubmission.selectionNotes}</span></div>
                      )}
                    </div>
                  </div>
                )}
                {/* Optional Job Application Fields */}
                {(selectedSubmission.position || selectedSubmission.experience || selectedSubmission.skills || selectedSubmission.portfolioUrl || selectedSubmission.resumeName) && (
                  <div className='col-12'>
                    <div className='p-3 border rounded-3' style={{ borderColor: '#eef2f7' }}>
                      <div className='text-muted small mb-2'>Job Application Details</div>
                      <div className='row g-2'>
                        {selectedSubmission.position && (
                          <div className='col-12 col-md-6'><span className='text-muted small me-2'>Position:</span><span className='fw-semibold'>{selectedSubmission.position}</span></div>
                        )}
                        {selectedSubmission.experience && (
                          <div className='col-12 col-md-6'><span className='text-muted small me-2'>Experience:</span><span className='fw-semibold'>{selectedSubmission.experience} years</span></div>
                        )}
                        {selectedSubmission.skills && (
                          <div className='col-12'><span className='text-muted small me-2'>Skills:</span><span className='fw-normal'>{selectedSubmission.skills}</span></div>
                        )}
                        {selectedSubmission.portfolioUrl && (
                          <div className='col-12'><span className='text-muted small me-2'>Portfolio:</span><a href={selectedSubmission.portfolioUrl} target='_blank' rel='noopener noreferrer' className='fw-semibold text-decoration-none'>{selectedSubmission.portfolioUrl}</a></div>
                        )}
                        {selectedSubmission.resumeName && (
                          <div className='col-12'><span className='text-muted small me-2'>Resume:</span><span className='fw-semibold'>{selectedSubmission.resumeName}</span></div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='card-footer bg-white d-flex justify-content-between flex-wrap gap-2'>
              <div className='text-muted small'>
                Submitted on: <span className='fw-semibold'>{formatDate(selectedSubmission.timestamp)}</span>
              </div>
              <div className='d-flex gap-2'>
                <button onClick={closeDetails} className='btn btn-secondary'>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Hide global site header/footer when on admin */}
      <style jsx global>{`
        .top-bar, .header, .footer, .progress-wrap, .chat-widget { display: none !important; }
        /* Admin table theme: remove dark borders */
        .admin-table {
          --bs-border-color: #eef2f7;
          --bs-table-border-color: #eef2f7;
        }
        .admin-table th,
        .admin-table td {
          border-color: #eef2f7 !important;
        }
        .admin-table thead th {
          border-bottom-color: #e5e7eb !important;
        }
        /* Search input placeholder and text color */
        input[type="text"]::placeholder {
          color: #000000 !important;
          opacity: 0.6;
        }
        input[type="text"]::-webkit-input-placeholder {
          color: #000000 !important;
          opacity: 0.6;
        }
        input[type="text"]::-moz-placeholder {
          color: #000000 !important;
          opacity: 0.6;
        }
        input[type="text"]:-ms-input-placeholder {
          color: #000000 !important;
          opacity: 0.6;
        }
        /* Filter button hover effects */
        .filter-btn:hover {
          border-color: #667eea !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(102, 126, 234, 0.15) !important;
        }
        /* Clear search button hover */
        button:hover svg {
          color: #374151 !important;
        }
        /* Active filters tag hover */
        .removeFilterBtn:hover {
          color: #ef4444 !important;
        }
        /* Clear all button hover */
        .clearAllBtn:hover {
          background: #fee !important;
          border-color: #ef4444 !important;
        }
        /* Search input focus */
        input[type="text"]:focus {
          border-color: #667eea !important;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
        }
        /* Table row hover effects */
        .admin-table tbody tr:hover {
          background: #f9fafb !important;
          transform: scale(1.001);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        /* Compact table styling */
        .admin-table tbody tr {
          height: auto;
          line-height: 1.4;
        }
        .admin-table td {
          line-height: 1.4;
        }
        .admin-table th {
          line-height: 1.4;
        }
        /* View button hover - no background change */
        .viewBtn:hover {
          transform: translateY(-1px);
          opacity: 0.8;
        }
        /* Modal enhancements */
        .modalCard {
          animation: modalSlideIn 0.3s ease-out;
        }
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        /* Badge hover */
        .badge:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
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
  minHeaderRight: {},
  minHeaderButton: {
    background: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 14px',
    fontWeight: 600,
    cursor: 'pointer'
  },
  loadingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh'
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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '16px'
  },
  headerLeft: {
    flex: 1
  },
  headerRight: {
    display: 'flex',
    gap: '12px'
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 8px 0',
    display: 'flex',
    alignItems: 'center'
  },
  subtitle: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0
  },
  refreshBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#667eea',
    background: 'white',
    border: '2px solid #667eea',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    background: '#ef4444',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '20px'
  },
  toolbarSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px'
  },
  filters: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  filterBtn: {
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    background: 'white',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
  },
  filterBtnActive: {
    color: 'white',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderColor: '#667eea',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
    transform: 'translateY(-1px)'
  },
  filterCount: {
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '700',
    background: 'rgba(0, 0, 0, 0.05)',
    color: 'inherit'
  },
  searchBox: {
    position: 'relative',
    minWidth: '320px',
    flex: '1',
    maxWidth: '500px'
  },
  searchInput: {
    width: '100%',
    padding: '12px 44px 12px 48px',
    fontSize: '15px',
    color: '#000000',
    border: '2px solid #e5e7eb',
    borderRadius: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    background: 'white',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
  },
  clearSearchBtn: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    zIndex: 1
  },
  activeFilters: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    padding: '12px 16px',
    background: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  },
  activeFiltersLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  activeFilterTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '500',
    color: '#374151'
  },
  removeFilterBtn: {
    background: 'transparent',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    padding: '0',
    fontSize: '18px',
    lineHeight: '1',
    transition: 'color 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clearAllBtn: {
    marginLeft: 'auto',
    padding: '6px 12px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#ef4444',
    background: 'transparent',
    border: '1px solid #fecaca',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  errorBox: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #fee 0%, #fff5f5 100%)',
    color: '#c53030',
    padding: '16px 20px',
    borderRadius: '12px',
    marginBottom: '24px',
    border: '2px solid #feb2b2',
    boxShadow: '0 2px 4px rgba(197, 48, 48, 0.1)'
  },
  emptyState: {
    textAlign: 'center',
    padding: '80px 20px',
    background: 'white',
    borderRadius: '16px',
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
  tableWrapper: {
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: 0
  },
  th: {
    padding: '10px 12px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#374151',
    textAlign: 'left',
    background: 'linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%)',
    borderBottom: '2px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    whiteSpace: 'nowrap'
  },
  tr: {
    transition: 'all 0.15s ease',
    borderBottom: '1px solid #f3f4f6'
  },
  td: {
    padding: '10px 12px',
    fontSize: '13px',
    color: '#1f2937',
    borderBottom: '1px solid #f3f4f7',
    verticalAlign: 'middle'
  },
  emailLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500'
  },
  badge: {
    display: 'inline-block',
    padding: '3px 10px',
    fontSize: '11px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '10px',
    whiteSpace: 'nowrap'
  },
  viewBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 10px',
    background: 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: '#667eea',
    fontWeight: '500',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    fontSize: '12px'
  },
  firstColumn: {
    width: '100px',
    maxWidth: '100px',
    textAlign: 'center'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    zIndex: 2000
  },
  modalCard: {
    width: '100%',
    maxWidth: '860px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  modalHeader: {
    borderBottom: '1px solid #eef2f7'
  },
  requirementsBox: {
    whiteSpace: 'pre-wrap',
    background: '#fafbff',
    border: '1px solid #eef2f7',
    borderRadius: '8px',
    padding: '12px'
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

