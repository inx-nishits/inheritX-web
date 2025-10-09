"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import LifeAtInheritX from '../LifeAtInheritX'
import toast from 'react-hot-toast'

export default function JoinOurTeam() {
  const resumeInputRef = useRef(null)
  const [resumeFile, setResumeFile] = useState(null)
  const [resumeError, setResumeError] = useState('')
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStatus, setUploadStatus] = useState('idle') // idle | uploading | success

  // Careers state
  const [careers, setCareers] = useState([])
  const [careersLoading, setCareersLoading] = useState(true)
  const [careersError, setCareersError] = useState('')

  // Selected career details (for Apply modal)
  const [selectedJobId, setSelectedJobId] = useState(null)
  const [jobDetails, setJobDetails] = useState(null)
  const [jobLoading, setJobLoading] = useState(false)
  const [jobError, setJobError] = useState('')

  // Captcha + submit state
  const [captchaA, setCaptchaA] = useState(0)
  const [captchaB, setCaptchaB] = useState(0)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState('')
  const [submitStatus, setSubmitStatus] = useState('idle') // idle | submitting | success | error

  // Form fields + validation state
  const [nameValue, setNameValue] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [phoneError, setPhoneError] = useState('')

  useEffect(() => {
    let isMounted = true
    const fetchCareers = async () => {
      try {
        setCareersLoading(true)
        setCareersError('')
        const res = await fetch('https://admin.inheritx.com/wp-json/api/v1/career', { cache: 'no-store' })
        if (!res.ok) throw new Error(`Failed to load careers (${res.status})`)
        const data = await res.json()
        const list = Array.isArray(data?.career) ? data.career : []
        if (isMounted) setCareers(list)
      } catch (err) {
        if (isMounted) setCareersError('Unable to load current openings. Please try again later.')
      } finally {
        if (isMounted) setCareersLoading(false)
      }
    }
    fetchCareers()
    return () => { isMounted = false }
  }, [])

  const formatTechnologies = (technology) => {
    if (!technology) return ''
    // API sometimes returns a single comma-separated string inside the array
    const flat = Array.isArray(technology) ? technology : [String(technology)]
    const parts = flat.flatMap((t) => String(t).split(',')).map((s) => s.trim()).filter(Boolean)
    return parts.join(' • ')
  }

  // Fetch job details when a job is selected
  useEffect(() => {
    const fetchDetails = async () => {
      if (!selectedJobId) return
      try {
        setJobLoading(true)
        setJobError('')
        setJobDetails(null)
        const res = await fetch(`https://admin.inheritx.com/wp-json/api/v1/careerdetails/${selectedJobId}`, { cache: 'no-store' })
        if (!res.ok) throw new Error(`Failed to load job details (${res.status})`)
        const data = await res.json()
        setJobDetails(data?.career || null)
      } catch (err) {
        setJobError('Unable to load details. Please try again later.')
      } finally {
        setJobLoading(false)
      }
    }
    fetchDetails()
  }, [selectedJobId])

  const regenerateCaptcha = () => {
    const a = Math.floor(Math.random() * 8) + 1 // 1..9
    const b = Math.floor(Math.random() * 8) + 1 // 1..9
    setCaptchaA(a)
    setCaptchaB(b)
    setCaptchaInput('')
    setCaptchaError('')
    // reset form values when opening fresh
    setNameValue('')
    setEmailValue('')
    setPhoneValue('')
    setNameError('')
    setEmailError('')
    setPhoneError('')
  }

  const handleOpenApply = (jobId) => (e) => {
    // set selected job and allow the modal to open
    setSelectedJobId(jobId)
    regenerateCaptcha()
  }

  const isAllowedFile = (file) => {
    if (!file) return false
    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.oasis.opendocument.formula'
    ]
    const maxBytes = 5 * 1024 * 1024 // 5MB
    const okType = allowed.includes(file.type) || /\.pdf$|\.docx?$|\.odf$/i.test(file.name)
    const okSize = file.size <= maxBytes
    if (!okType) {
      setResumeError('Unsupported file type. Please upload PDF/DOC/DOCX/ODF.')
      return false
    }
    if (!okSize) {
      setResumeError('File too large. Maximum size is 5MB.')
      return false
    }
    setResumeError('')
    return true
  }

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null
    if (isAllowedFile(file)) {
      setResumeFile(file)
      simulateUpload()
    } else {
      setResumeFile(null)
    }
  }

  const handleTriggerFile = (e) => {
    e.preventDefault()
    if (resumeInputRef.current) resumeInputRef.current.click()
  }

  const handleViewResume = (e) => {
    e.preventDefault()
    if (!resumeFile) return
    const url = URL.createObjectURL(resumeFile)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleSubmit = (e) => {
    // basic validation: require resume and captcha "3"
    const form = e.target
    const captcha = form.captcha?.value?.trim()
    const hasResume = !!resumeFile
    if (!hasResume || captcha !== '3' || resumeError) {
      e.preventDefault()
      // Optionally show a lightweight native validity UI
      if (!hasResume) toast.error('Please upload your resume before submitting.')
      else if (resumeError) alert(resumeError)
      else if (captcha !== '3') alert('Please answer the anti-spam question correctly.')
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }
  const handleDragLeave = () => setIsDragOver(false)
  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (isAllowedFile(file)) { setResumeFile(file); simulateUpload() }
    }
  }
  const handleKeyUpload = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleTriggerFile(e)
    }
  }

  const simulateUpload = () => {
    // Simulated progress for UI feedback; replace with real API later
    setUploadStatus('uploading')
    setUploadProgress(0)
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const pct = Math.min(95, Math.round(elapsed / 12)) // ramp quickly to 95%
      setUploadProgress(pct)
      if (pct < 95) requestAnimationFrame(tick)
      else {
        setTimeout(() => {
          setUploadProgress(100)
          setUploadStatus('success')
        }, 400)
      }
    }
    requestAnimationFrame(tick)
  }

  const handleRemoveResume = (e) => {
    e.preventDefault()
    setResumeFile(null)
    setUploadProgress(0)
    setUploadStatus('idle')
    setResumeError('')
    if (resumeInputRef.current) resumeInputRef.current.value = ''
  }

  const handleCaptchaChange = (e) => {
    const value = e.target.value
    setCaptchaInput(value)
    const expected = captchaA + captchaB
    if (String(value).trim() === '') {
      setCaptchaError('')
      return
    }
    if (Number(value) !== expected) {
      setCaptchaError('Incorrect total. Please try again.')
    } else {
      setCaptchaError('')
    }
  }

  // Validation helpers
  const validateName = (val) => {
    const v = String(val || '').trim()
    if (!v) return 'Name is required.'
    if (v.length < 2) return 'Name must be at least 2 characters.'
    if (!/^[a-zA-Z][a-zA-Z .'’-]*$/.test(v)) return 'Use letters, spaces, apostrophes, or dots only.'
    return ''
  }
  const validateEmail = (val) => {
    const v = String(val || '').trim()
    if (!v) return 'Email is required.'
    // Simple and practical email pattern
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!re.test(v)) return 'Enter a valid email address.'
    return ''
  }
  const validatePhone = (val) => {
    const v = String(val || '').trim()
    if (!v) return 'Phone is required.'
    const digits = v.replace(/[^0-9]/g, '')
    if (digits.length < 7 || digits.length > 15) return 'Enter a valid phone number.'
    return ''
  }

  const handleNameChange = (e) => {
    const v = e.target.value
    setNameValue(v)
    setNameError(validateName(v))
  }
  const handleEmailChange = (e) => {
    const v = e.target.value
    setEmailValue(v)
    setEmailError(validateEmail(v))
  }
  const handlePhoneChange = (e) => {
    const v = e.target.value
    setPhoneValue(v)
    setPhoneError(validatePhone(v))
  }

  const postCareerForm = async (payload) => {
    const endpoint = 'https://admin.inheritx.com/wp-json/api/v1/careerform'
    const res = await fetch(endpoint, { method: 'POST', body: payload })
    return res
  }
  return (
    <>
      {/* Dynamic Apply Modal */}
      <div
        className='modal fade'
        id='applyReactModal'
        tabIndex='-1'
        aria-labelledby='applyReactModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable'>
          <div className='modal-content bg-dark text-white border-0 modal-career'>
            <div className='modal-header border-0 modal-career-header'>
              <div className='modal-career-title'>
                <h3 className='mb-3'>
                  {jobLoading ? <span className='skeleton skeleton-line w-60' /> : (jobDetails?.title || 'Apply')}
                </h3>
                <div className='meta-line mb-0'>
                  <span className='meta-label'>Position:</span>
                  {jobLoading ? (
                    <span className='meta-value me-3 text-white'><span className='skeleton skeleton-badge w-30' /></span>
                  ) : (
                    <span className='meta-value me-3 text-white'>{jobDetails?.openings || '-'}</span>
                  )}
                  <span className='meta-label'>Experience:</span>
                  {jobLoading ? (
                    <span className='meta-value me-3 text-white'><span className='skeleton skeleton-badge w-40' /></span>
                  ) : (
                    <span className='meta-value me-3 text-white'>{jobDetails?.experience || '-'}</span>
                  )}
                  <span className='meta-label'>Location:</span>
                  {jobLoading ? (
                    <span className='meta-value text-white'><span className='skeleton skeleton-badge w-50' /></span>
                  ) : (
                    <span className='meta-value text-white'>{jobDetails?.location || '-'}</span>
                  )}
                </div>
              </div>
              <button
                type='button'
                className='btn-close btn-close-white'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='row g-4 align-items-start'>
                {/* Left: Role Summary */}
                <div className='col-12 col-lg-6'>
                  {!jobLoading && jobError && (
                    <div className='mb-4'>
                      <h5 className='mb-2'>Error</h5>
                      <div className='lh-30'>{jobError}</div>
                    </div>
                  )}
                  {jobLoading && (
                    <>
                      <div className='mb-4'>
                        <h5 className='mb-2'>Roles and Responsibilities</h5>
                        <ul className='ps-3 lh-30'>
                          {Array.from({ length: 6 }).map((_, i) => (
                            <li key={i}><span className='skeleton skeleton-line w-90' /></li>
                          ))}
                        </ul>
                      </div>
                      <div className='mb-4'>
                        <h5 className='mb-2'>Requirements</h5>
                        <ul className='ps-3 lh-30'>
                          {Array.from({ length: 3 }).map((_, i) => (
                            <li key={i}><span className='skeleton skeleton-line w-70' /></li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  {!jobLoading && jobDetails && (
                    <>
                      <div className='mb-4'>
                        <h5 className='mb-2'>Roles and Responsibilities</h5>
                        <ul className='ps-3 lh-30'>
                          {(jobDetails.roles || []).map((r, idx) => (
                            <li key={idx}>{r}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className='mb-2'>Requirements</h5>
                        <ul className='ps-3 lh-30'>
                          {(jobDetails.requirements || []).map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>

                {/* Right: Apply Form */}
                <div className='col-12 col-lg-6'>
                  <form
                    id='jobApplyReact'
                    className='form-contact-us rounded-3 overflow-hidden style-bg-dark-2 p-4 p-md-5'
                    method='post'
                    action=''
                    onSubmit={async (e) => {
                      // Enhanced submit: live validations + API call
                      e.preventDefault()
                      if (submitStatus === 'submitting') return
                      const form = e.target
                      // Run validations before submit
                      const newNameError = validateName(nameValue)
                      const newEmailError = validateEmail(emailValue)
                      const newPhoneError = validatePhone(phoneValue)
                      setNameError(newNameError)
                      setEmailError(newEmailError)
                      setPhoneError(newPhoneError)

                      const expected = captchaA + captchaB
                      const hasResume = !!resumeFile
                      const captchaOk = String(captchaInput).trim() !== '' && Number(captchaInput) === expected
                      if (newNameError || newEmailError || newPhoneError || !hasResume || resumeError || !captchaOk) {
                        if (!hasResume) setResumeError((prev) => prev || 'Please upload your resume before submitting.')
                        if (!captchaOk && !captchaError) setCaptchaError('Incorrect total. Please try again.')
                        return
                      }

                      const fd = new FormData()
                      fd.append('name', nameValue.trim())
                      fd.append('email', emailValue.trim())
                      fd.append('phone', phoneValue.trim())
                      fd.append('resume', resumeFile)

                      try {
                        setSubmitStatus('submitting')
                        const res = await postCareerForm(fd)
                        let data
                        try {
                          data = await res.json()
                        } catch {
                          data = {}
                        }

                        const isSuccess = res.ok && (typeof data.status === 'undefined' || Number(data.status) === 1)
                        if (!isSuccess) {
                          const msg = data?.message || `Request failed (${res.status})`
                          setSubmitStatus('error')
                          toast.error(msg)
                          return
                        }

                        setSubmitStatus('success')
                        toast.success(data?.message || 'Your application has been submitted successfully.')
                        // reset minimal fields (state-managed)
                        setNameValue('')
                        setEmailValue('')
                        setPhoneValue('')
                        setCaptchaInput('')
                        handleRemoveResume(new Event('submit'))
                        regenerateCaptcha()
                      } catch (err) {
                        setSubmitStatus('error')
                        const msg = err?.message || 'Unable to submit at the moment. Please try again later.'
                        toast.error(msg)
                      } finally {
                        setTimeout(() => setSubmitStatus('idle'), 300)
                      }
                    }}
                  >
                    <div className='heading-form text-center mb-5'>
                      <h3 className='title text-white m-0' style={{ textTransform: 'none' }}>
                        {jobLoading ? <span className='skeleton skeleton-line w-40' /> : <>Apply for {jobDetails?.title || 'Role'}</>}
                      </h3>
                    </div>

                    <fieldset className='item mb-20'>
                      <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={nameValue}
                        onChange={handleNameChange}
                        aria-invalid={!!nameError}
                        aria-describedby='nameHelp'
                      />
                      {nameError && (
                        <div id='nameHelp' className='text-danger mt-2' aria-live='polite'>{nameError}</div>
                      )}
                    </fieldset>
                    <fieldset className='item mb-20'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        value={emailValue}
                        onChange={handleEmailChange}
                        aria-invalid={!!emailError}
                        aria-describedby='emailHelp'
                      />
                      {emailError && (
                        <div id='emailHelp' className='text-danger mt-2' aria-live='polite'>{emailError}</div>
                      )}
                    </fieldset>
                    <fieldset className='item mb-20'>
                      <input
                        type='tel'
                        name='phone'
                        placeholder='Contact No'
                        value={phoneValue}
                        onChange={handlePhoneChange}
                        aria-invalid={!!phoneError}
                        aria-describedby='phoneHelp'
                      />
                      {phoneError && (
                        <div id='phoneHelp' className='text-danger mt-2' aria-live='polite'>{phoneError}</div>
                      )}
                    </fieldset>

                    {/* Custom Resume Upload */}
                    <fieldset className='item mb-20'>
                      <input
                        ref={resumeInputRef}
                        type='file'
                        name='resume'
                        accept='.pdf,.doc,.docx,.odf'
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                      <div
                        className={`resume-upload ${isDragOver ? 'is-drag-over' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onKeyDown={handleKeyUpload}
                        role='button'
                        tabIndex={0}
                        aria-label='Upload resume. Press Enter to choose a file or drag and drop.'
                        aria-describedby='resumeHelp'
                      >
                        <div className='resume-file'>
                          <div className='resume-file-name'>
                            {resumeFile ? resumeFile.name : 'Drag & drop your resume here, or click Upload'}
                          </div>
                          <div id='resumeHelp' className='resume-help'>PDF, DOC, DOCX, ODF. Max 5MB.</div>
                          {resumeFile && (
                            <div className={`resume-progress ${uploadStatus}`} aria-live='polite'>
                              <div className='resume-progress-bar' style={{ width: `${uploadProgress}%` }} />
                              {uploadStatus === 'success' && <span className='resume-success'>Uploaded</span>}
                            </div>
                          )}
                          {resumeFile && uploadStatus === 'success' && (
                            <div className='resume-meta'>
                              <span className='resume-size'>{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</span>
                            </div>
                          )}
                        </div>
                        <div className='resume-actions'>
                          <button className='tf-btn style-border small' onClick={handleTriggerFile}>
                            <span>{resumeFile ? 'Change' : 'Upload'}</span>
                          </button>
                          {resumeFile && (
                            <>
                              <button className='tf-btn no-bg small' onClick={handleViewResume}>
                                <span>View</span>
                              </button>
                              <button className='tf-btn no-bg small' onClick={handleRemoveResume} aria-label='Remove file' title='Remove'>
                                <span aria-hidden='true'>
                                  <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                    <polyline points='3 6 5 6 21 6' />
                                    <path d='M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6' />
                                    <path d='M10 11v6' />
                                    <path d='M14 11v6' />
                                    <path d='M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2' />
                                  </svg>
                                </span>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      {resumeError && <div className='text-danger mt-3' aria-live='polite'>{resumeError}</div>}
                    </fieldset>

                    <fieldset className='item mb-20'>
                      <div className='d-flex align-items-center gap-2'>
                        <span>{captchaA}</span>
                        <span>+</span>
                        <span>{captchaB}</span>
                        <span>=</span>
                        <input
                          type='text'
                          name='captcha'
                          // placeholder={`${captchaA + captchaB}`}
                          value={captchaInput}
                          onChange={handleCaptchaChange}
                          aria-invalid={!!captchaError}
                          aria-describedby='captchaHelp'
                        />
                      </div>
                      {captchaError && (
                        <div id='captchaHelp' className='text-danger mt-2' aria-live='polite'>{captchaError}</div>
                      )}
                      {!captchaError && captchaInput && (
                        <div className='text-success mt-2' aria-live='polite'>Correct</div>
                      )}
                    </fieldset>

                    <button type='submit' className='tf-btn w-full justify-content-center' disabled={submitStatus === 'submitting'}>
                      <span>{submitStatus === 'submitting' ? 'Submitting…' : 'Submit'}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>Join Our Team</h1>
            <div className='breadkcum mb-5'>
              <Link
                href='/'
                className='link-breadkcum body-2 fw-7 split-text effect-right'
              >
                Home
              </Link>
              <span className='dot'></span>
              <span className='page-breadkcum body-2 fw-7 split-text effect-right'>
                Join Our Team
              </span>
            </div>

            <p className='pt-4 fs-2'>
              Join Our Thriving Family - Boost Your Career with Leading IT
              Company
            </p>
          </div>
        </div>
      </div>

      {/* <!-- /.page-title --> */}

      {/* <!-- Main-content --> */}

      <div className='main-content'>
        <section className='section-counting tf-spacing-5'>
          <div className='tf-container w-1810'>
            <div className='section-counting-inner flex'>
              <div className='left rounded-3 overflow-hidden'>
                <div className='image tf-animate-1'>
                  <Image
                    src='/image/home/join-our-team.jpeg'
                    alt='Join Our Team'
                    width={800}
                    height={600}
                    className='lazyload'
                    priority
                  />
                </div>
                <div className='box-logo tf-animate-2'>
                  <Image src='/image/logo/logo-icon.svg' alt='InheritX Logo' width={50} height={50} />
                  <h4 className='title'>InheritX</h4>
                </div>
                <div className='box-avatar tf-animate-3'>
                  <div className='text'>
                    <p className='fs-20 fw-6'>
                      850+ Trusted
                      <br />
                      Global Clients
                    </p>
                    <Image
                      src='/image/icon/icon-box-avatar.png'
                      alt='Avatar Icon'
                      width={40}
                      height={40}
                      className='lazyload'
                    />
                  </div>
                  <div className='list-agent'>
                    <div className='agent agent-1'>
                      <Image
                        src='/image/avatar/agent-1.jpg'
                        alt='Agent 1'
                        width={60}
                        height={60}
                        className='lazyload'
                      />
                    </div>
                    <div className='agent agent-2'>
                      <Image
                        src='/image/avatar/agent-2.jpg'
                        alt='Agent 2'
                        width={60}
                        height={60}
                        className='lazyload'
                      />
                    </div>
                    <div className='agent agent-3'>
                      <Image
                        src='/image/avatar/agent-3.jpg'
                        alt='Agent 3'
                        width={60}
                        height={60}
                        className='lazyload'
                      />
                    </div>
                    <div className='agent agent-plus'>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='heading-section mb-60'>
                  <h2 className='fw-7 mb-5 title-animation'>
                    <span className='text-primary'>Career</span> & Culture
                  </h2>
                  <p className='lh-30 fs-2 title-animation mb-5'>
                    We have combined career with the work culture to give you a
                    robust platform to learn new things, use cutting-edge tools,
                    and implement creative insights while making advanced IT
                    solutions. Since inception, InheritX Solutions remains
                    client-centric and employee-oriented company. We make sure
                    that you can advance in a healthy competitive environment
                    without having much stress.
                  </p>

                  <p className='lh-30 fs-2 title-animation mb-5'>
                    At InheritX, we believe in ‘Work Hard, Party Harder’ policy.
                    As a fresher, you will get support from experienced seniors,
                    and as an experienced professional, you will have a
                    collaborative and cooperative work culture. We never say
                    that InheritX is the best company to work with; we have made
                    it!
                  </p>

                  <p className='lh-30 fs-2 title-animation mb-5'>
                    If you have dedication, creativity, and a lot of enthusiasm
                    to learn new things, we’re pleased to welcome you to our
                    growing family…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-services tf-spacing-2'>
          <div className='mask mask-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='800'
              height='800'
              fill='none'
            >
              <circle
                cx='400'
                cy='400'
                r='325'
                stroke='url(#a3)'
                strokeWidth='150'
              />
              <defs>
                <linearGradient id='a3' x1='176' x2='569' y1='70.5' y2='674'>
                  <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                  <stop offset='1' stopColor='#fff' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='section-top'>
            <div className='tf-marquee'>
              <div className='marquee-wrapper'>
                <div className='initial-child-container'>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                  <div className='big-text'>
                    Work <span className='text-stroke'>Culture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <div className='row'>
              <div className='col-12'>
                <div className='heading-section mb-60 text-center'>
                  <h2 className='title fw-6 title-animation mb-5'>
                    We <span className='text-primary'>&nbsp;Inspire You to Come</span>
                    Up with Your Best
                  </h2>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div
                  className='swiper tf-swiper sw-services sw-border'
                  data-swiper='{
                                "slidesPerView": 1,
                                "spaceBetween": 0,
                                "speed": 800,
                                "pagination": { "el": ".sw-pagination-services", "clickable": true },
                                "breakpoints": {
                                    "550": { "slidesPerView": 2, "slidesPerGroup": 1},
                                    "992": { "slidesPerView": 3, "slidesPerGroup": 1},
                                    "1200": { "slidesPerView": 4, "slidesPerGroup": 1}
                                    }
                                }'
                >
                  <div className='swiper-wrapper cursor-grab'>
                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <h1 className='lh-30 fw-7 fs-1 text-primary mb-4'>
                          Flexible working hours
                        </h1>
                        <div className='lh-30 fs-2'>
                          We’re a work-oriented and result-driven IT company.
                          Though work is our priority, we provide flexible
                          working hours to help you reduce stress
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <h1 className='lh-30 fw-7 fs-1 text-primary mb-4'>
                          Company Activities
                        </h1>
                        <div className='lh-30 fs-2'>
                          Cultural and fun activities are an integral part of
                          InheritX Solutions. We work, play, and celebrate
                          together like a happy family
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <h1 className='lh-30 fw-7 fs-1 text-primary mb-4'>
                          Awesome Co-Workers
                        </h1>
                        <div className='lh-30 fs-2'>
                          Seniors are supporting and colleagues are cordial-
                          this is the real identity of InheritX Solutions. We’re
                          different by the department but we’re one as a team
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <h1 className='lh-30 fw-7 fs-1 text-primary mb-4'>
                          Growth Opportunity
                        </h1>
                        <div className='lh-30 fs-2'>
                          Whether it is monetary or personal growth, InheritX
                          Solutions remains the best place to offer equal
                          opportunities to all its employees. We believe in
                          ‘Grow Together’ mantra.
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='services-item hover-image px-md-15 style-1'>
                        <h1 className='lh-30 fw-7 fs-1 text-primary mb-4'>
                          Five-day Working
                        </h1>
                        <div className='lh-30 fs-2'>
                          We have a five-day working policy to maintain healthy
                          work-life balance. We ensure you get new energy on
                          Monday after having a stress-free weekend
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sw-pagination-services sw-pagination mt-15 pt-5 justify-content-center'></div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-services tf-spacing-2'>
          <div className='mask mask-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='800'
              height='800'
              fill='none'
            >
              <circle
                cx='400'
                cy='400'
                r='325'
                stroke='url(#a3)'
                strokeWidth='150'
              />
              <defs>
                <linearGradient id='a3' x1='176' x2='569' y1='70.5' y2='674'>
                  <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                  <stop offset='1' stopColor='#fff' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='section-top'>
            <div className='tf-marquee'>
              <div className='marquee-wrapper'>
                <div className='initial-child-container'>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                  <div className='big-text'>
                    Current <span className='text-stroke'>Openings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='tf-container'>
            <div className='row'>
              <div className='col-12'>
                <div className='heading-section mb-60 text-center'>
                  <h2 className='title fw-6 title-animation mb-5'>
                    Smart people who know
                    <span className='text-primary'>&nbsp;how to grab</span> the&nbsp;opportunities
                  </h2>
                </div>
              </div>
            </div>

            <div className='tf-container'>
              <div className='row rg-30'>
                {careersLoading && (
                  <div className='col-12'>
                    <div className='tf-post-list style-2 h-100 flex-column rounded overflow-hidden'>
                      <div className='post-content'>
                        <div className='top-post'>
                          <h5 className='title fw-6 text-primary mb-3'>Loading current openings…</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!careersLoading && careersError && (
                  <div className='col-12'>
                    <div className='tf-post-list style-2 h-100 flex-column rounded overflow-hidden'>
                      <div className='post-content'>
                        <div className='top-post'>
                          <h5 className='title fw-6 text-primary mb-3'>{careersError}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!careersLoading && !careersError && careers.length === 0 && (
                  <div className='col-12'>
                    <div className='tf-post-list style-2 h-100 flex-column rounded overflow-hidden'>
                      <div className='post-content'>
                        <div className='top-post'>
                          <h5 className='title fw-6 text-primary mb-3'>No current openings</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {careers.map((job) => {
                  const tech = formatTechnologies(job?.technology)
                  const isReactRole = /react/i.test(job?.title || '')
                  return (
                    <div className='col-lg-6' key={job?.id ?? job?.title}>
                      <div className='tf-post-list style-2 h-100 hover-image overflow-hidden flex-column rounded overflow-hidden'>
                        <div className='post-content'>
                          <div className='top-post'>
                            <h5 className='title fw-6 text-primary mb-3'>
                              {job?.title || 'Open Position'}
                            </h5>
                            {job?.experience && (
                              <h6 className='fw-3 fs-4'>Experience: {job.experience}</h6>
                            )}
                          </div>

                          <div className='bottom-post'>
                            {tech && <h6 className='fw-7 fs-4 mb-2'>Key Technologies:</h6>}
                            {tech && (
                              <div className='desc lh-30 fw-3'>
                                {tech}
                              </div>
                            )}

                            <a
                              href='#'
                              className='tf-btn-readmore style-open'
                              data-bs-toggle='modal'
                              data-bs-target='#applyReactModal'
                              onClick={handleOpenApply(job?.id)}
                            >
                              <span className='plus'>+</span>
                              <span className='text'>Apply Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className='section-services tf-spacing-2'>
          <div className='mask mask-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='800'
              height='800'
              fill='none'
            >
              <circle
                cx='400'
                cy='400'
                r='325'
                stroke='url(#a3)'
                strokeWidth='150'
              />
              <defs>
                <linearGradient id='a3' x1='176' x2='569' y1='70.5' y2='674'>
                  <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                  <stop offset='1' stopColor='#fff' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className='tf-container'>
            <div className='row'>
              <div className='col-12'>
                <div className='heading-section mb-60 text-center'>
                  <h2 className='title fw-6 title-animation mb-5'>
                    If you have any questions or want to send your resume, contact
                    our
                    <span className='text-primary'>&nbsp;HR&nbsp;department</span>.
                  </h2>
                </div>
              </div>
            </div>

            <div className='tf-container'>
              <div className='contact-footer item text-center'>
                <div>
                  <ul>
                    <li className='top-bar-item fs-2 justify-content-center  mb-4'>
                      <i className='icon-email'></i>
                      <Link
                        href='mailto:contact@inheritx.com'
                        className='mb-0 fs-1'
                        target='_blank'
                      >
                        contact@inheritx.com
                      </Link>
                    </li>
                  </ul>
                  <ul className='lh-45 fw-6'>
                    <li className='top-bar-item fs-2 justify-content-center'>
                      <i className='icon-phone'></i>
                      <Link href='tel:+13473940007' className='mb-0 fs-1' target='_blank'>
                        +1(347) 394-0007
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-testimonial tf-spacing-2'>
          <div className='mask mask-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='800'
              height='800'
              fill='none'
            >
              <circle
                cx='400'
                cy='400'
                r='325'
                stroke='url(#a4)'
                strokeWidth='150'
              />
              <defs>
                <linearGradient id='a4' x1='176' x2='569' y1='70.5' y2='674'>
                  <stop offset='0' stopColor='#fff' stopOpacity='0.05' />
                  <stop offset='1' stopColor='#fff' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='tf-container'>
            <div className='row justify-content-between rg-50'>
              <div className='col-lg-7'>
                <div className='heading-section mb-60'>
                  <h2 className='title fw-6 title-animation'>
                    Employee <span className='text-primary'>Speaks</span>&nbsp;
                    <span className='fw-3'>About Us</span>
                  </h2>
                </div>
                <div
                  className='swiper tf-swiper sw-testimonial'
                  data-swiper='{
                                "slidesPerView": 1,
                                "spaceBetween": 30,
                                "speed": 1000,
                                "pagination": { "el": ".sw-pagination-testimonial", "clickable": true }
                                }'
                >
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          I am working in InheritX Solutions since 2013. From
                          the very first day, I am amazed to see its healthy
                          work culture, professional management, and
                          client-centric approach. I have learned new things
                          from my colleagues as well as seniors. I must say, if
                          you’re ready to boost your career in a leading IT
                          company, InheritX is a right choice for you!
                        </div>
                        <div className='user-testimonial'>
                          <span
                            className='name-user body-2 '
                          >
                            Krish Hinduja
                          </span>
                          <span
                            className='position text-medium'
                          >
                            - Business Development Manager
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          I have been working at InheritX Solutions for three years.
                          During this time, I've found that the company follows
                          every standard procedure with the utmost
                          transparency and client-centric approach. What I like
                          the most about this company is employee-friendly
                          practices and healthy competition that motivate all of
                          us to give our best.
                        </div>
                        <div className='user-testimonial'>
                          <span
                            className='name-user body-2 '
                          >
                            Dhwanik Gandhi
                          </span>
                          <span
                            className='position text-medium'
                          >
                            - Senior Android Developer
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='swiper-slide'>
                      <div className='testimonial-item'>
                        <div className='icon'>
                          <i className='icon-quote2'></i>
                        </div>
                        <div className='text fs-27 lh-35 fw-5'>
                          I have been associated with InheritX Solutions for four
                          years. From day 1, I was told that apart from
                          hiring the right candidates for various positions, my
                          major role will be to maintain the work-life balance
                          of all employees. I am happy that I am in a company
                          that strives by putting employees first.
                        </div>
                        <div className='user-testimonial'>
                          <span
                            className='name-user body-2 '
                          >
                            Vishal Patel
                          </span>
                          <span
                            className='position text-medium'
                          >
                            - Admin Executive
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sw-pagination-testimonial sw-pagination mt-50'></div>
              </div>
              <div className='col-lg-4'>
                <div className='list-image'>
                  <div className='img-section img-1 img-elip tf-animate-1'>
                    <Image
                      src='/image/home/section-testimonial-1.png'
                      alt='Testimonial Image 1'
                      width={200}
                      height={200}
                      className='lazyload'
                    />
                  </div>
                  <div className='img-section img-2 tf-animate-2'>
                    <Image
                      src='/image/home/section-testimonial-2.png'
                      alt='Testimonial Image 2'
                      width={200}
                      height={200}
                      className='lazyload'
                    />
                  </div>
                  <div className='img-section img-3 tf-animate-3'>
                    <Image
                      src='/image/home/section-testimonial-3.png'
                      alt='Testimonial Image 3'
                      width={200}
                      height={200}
                      className='lazyload'
                    />
                  </div>
                  <div className='img-section img-4 img-elip tf-animate-4'>
                    <Image
                      src='/image/home/section-testimonial-4.png'
                      alt='Testimonial Image 4'
                      width={200}
                      height={200}
                      className='lazyload'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <LifeAtInheritX />
      </div>
    </>
  )
}
