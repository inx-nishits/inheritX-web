"use client"

import { useState, useRef, useEffect } from 'react'
import { Send, X, MessageCircle, Minimize2, RotateCcw, ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'

// Main menu options - shown after "Start Chat"
const mainMenuOptions = [
  {
    id: 1,
    category: 'new-project',
    text: 'Start a New Project',
    message: 'I want to start a new project',
    icon: '🚀'
  },
  {
    id: 2,
    category: 'hire-team',
    text: 'Hire Dedicated Team',
    message: 'I want to hire a dedicated development team',
    icon: '👥'
  },
  {
    id: 3,
    category: 'apply-job',
    text: 'Apply for Job',
    message: 'I want to apply for a job at InheritX',
    icon: '💼'
  }
]

// Quick replies after main menu selection
const quickReplies = [
  {
    id: 1,
    category: 'services',
    text: '📱 Mobile App Development',
    message: 'Tell me about your mobile app development services'
  },
  {
    id: 2,
    category: 'services',
    text: '🤖 AI & ML Solutions',
    message: 'What AI and Machine Learning solutions do you offer?'
  },
  {
    id: 3,
    category: 'services',
    text: '🌐 Web Development',
    message: 'I need a web application'
  },
  {
    id: 4,
    category: 'portfolio',
    text: '💼 View Portfolio',
    message: 'Show me your recent projects'
  },
  {
    id: 5,
    category: 'consultation',
    text: '💬 Free Consultation',
    message: 'I want to schedule a free consultation'
  },
  {
    id: 6,
    category: 'pricing',
    text: '💰 Pricing & Timeline',
    message: 'How much does it cost and how long does it take?'
  }
]

// Follow-up questions for deeper engagement
const followUpQuestions = {
  mobile: [
    { text: '📱 iOS Development', message: 'Tell me about iOS app development' },
    { text: '🤖 Android Development', message: 'Tell me about Android app development' },
    { text: '⚡ Flutter/React Native', message: 'Tell me about cross-platform development' }
  ],
  ai: [
    { text: '🧠 Custom AI Models', message: 'Can you build custom AI models?' },
    { text: '💬 Chatbots & NLP', message: 'Tell me about chatbot development' },
    { text: '👁️ Computer Vision', message: 'What computer vision solutions do you offer?' }
  ],
  web: [
    { text: '⚛️ Next.js/React', message: 'Tell me about Next.js development' },
    { text: '🐍 Python/Django', message: 'Tell me about Python web development' },
    { text: '🛒 E-commerce', message: 'Can you build an e-commerce platform?' }
  ],
  general: [
    { text: '📞 Contact Us', message: 'How can I contact your team?' },
    { text: '🌍 Office Locations', message: 'Where are your offices located?' },
    { text: '👥 Hire Developers', message: 'Can I hire dedicated developers?' }
  ]
}

// Developer types for hire-team selection
const developerTypes = {
  'Mobile App Development': [
    { id: 'iphone', name: 'Hire iPhone Developer' },
    { id: 'android', name: 'Hire Android Developer' },
    { id: 'react-native', name: 'Hire React Native Developer' },
    { id: 'flutter', name: 'Hire Flutter Developer' },
    { id: 'phonegap', name: 'Hire Phonegap Developer' }
  ],
  'Web Development': [
    { id: 'angularjs', name: 'Hire AngularJS Developer' },
    { id: 'reactjs', name: 'Hire ReactJS Developer' },
    { id: 'nodejs', name: 'Hire Node.js Developer' },
    { id: 'php', name: 'Hire PHP Developer' },
    { id: 'laravel', name: 'Hire Laravel Developer' }
  ],
  'Other Technologies': [
    { id: 'python', name: 'Hire Python Developer' },
    { id: 'wordpress', name: 'Hire WordPress Developer' },
    { id: 'asp', name: 'Hire ASP Developer' }
  ]
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [chatStage, setChatStage] = useState('greeting') // 'greeting', 'basic-info', 'main-menu', 'hire-team-selection', 'details-form', 'success'
  const [selectedOption, setSelectedOption] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedService: '',
    phone: '',
    requirements: '',
    // Hire team specific fields
    selectedDevelopers: [],
    selectionNotes: '',
    // Job application specific fields
    position: '',
    experience: '',
    coverLetter: '',
    resume: null,
    resumeName: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const fileInputRef = useRef(null)

  // Reset chat to main menu
  const handleReset = () => {
    setChatStage('basic-info')
    setSelectedOption(null)
      setFormData({
        name: '',
        email: '',
        selectedService: '',
        phone: '',
        requirements: '',
        selectedDevelopers: [],
        selectionNotes: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null,
        resumeName: ''
      })
    setFormErrors({})
  }

  // Navigate back to previous stage
  const handleBack = () => {
    if (chatStage === 'main-menu') {
      setChatStage('basic-info')
    } else if (chatStage === 'hire-team-selection') {
      setChatStage('main-menu')
    } else if (chatStage === 'details-form') {
      // If hire-team, go back to selection, otherwise to main menu
      if (selectedOption === 'hire-team') {
        setChatStage('hire-team-selection')
      } else {
        setChatStage('main-menu')
      }
    }
    setFormErrors({})
  }

  // Minimize chat - keep state intact
  const handleMinimize = () => {
    setIsMinimized(true)
  }

  // Maximize chat - restore to current state
  const handleMaximize = () => {
    setIsMinimized(false)
  }

  // Reset chat to greeting when closing
  const handleClose = () => {
    setIsOpen(false)
    setIsMinimized(false)
    // Reset after animation completes
    setTimeout(() => {
      setChatStage('greeting')
      setSelectedOption(null)
      setFormData({
        name: '',
        email: '',
        selectedService: '',
        phone: '',
        requirements: '',
        selectedDevelopers: [],
        selectionNotes: '',
        resume: null,
        resumeName: ''
      })
      setFormErrors({})
    }, 300)
  }

  // Handle Start Chat button
  const handleStartChat = () => {
    setChatStage('basic-info')
  }

  // Handle main menu option selection
  const handleMainMenuSelect = (option) => {
    setSelectedOption(option.category)
    setFormData(prev => ({ ...prev, selectedService: option.text }))
    
    // If hiring team, go to developer selection first
    if (option.category === 'hire-team') {
      setChatStage('hire-team-selection')
    } else {
      setChatStage('details-form')
    }
  }

  // Handle developer selection toggle
  const handleDeveloperToggle = (developerId, developerName) => {
    setFormData(prev => {
      const isSelected = prev.selectedDevelopers.some(dev => dev.id === developerId)
      if (isSelected) {
        return {
          ...prev,
          selectedDevelopers: prev.selectedDevelopers.filter(dev => dev.id !== developerId)
        }
      } else {
        return {
          ...prev,
          selectedDevelopers: [...prev.selectedDevelopers, { id: developerId, name: developerName }]
        }
      }
    })
    // Clear error when user selects
    if (formErrors.selectedDevelopers) {
      setFormErrors(prev => ({ ...prev, selectedDevelopers: '' }))
    }
  }

  // Handle hire team selection submission - submit directly
  const handleHireTeamSelectionSubmit = async () => {
    // Validate at least one selection
    if (formData.selectedDevelopers.length === 0) {
      setFormErrors({ selectedDevelopers: 'Please select at least one developer type' })
      return
    }

    setIsSubmitting(true)

    try {
      // Hire Dedicated Team - Call Contact Form API
      const hireTeamFormData = new FormData()
      hireTeamFormData.append('name', formData.name)
      hireTeamFormData.append('email', formData.email)
      hireTeamFormData.append('country', 'Not specified - Message from Chatbot')
      hireTeamFormData.append('phone', 'Not specified - Message from Chatbot')
      hireTeamFormData.append('project_budget', 'Hire Dedicated Team - Message from Chatbot')
      hireTeamFormData.append('project_type', formData.selectedService || 'Hire Dedicated Team')
      
      // Build detailed project details with all hire-team information
      let projectDetails = `HIRE DEDICATED TEAM REQUEST\n\n`
      projectDetails += `Service Category: ${formData.selectedService || 'Not specified'}\n\n`
      
      if (formData.selectedDevelopers && formData.selectedDevelopers.length > 0) {
        const selectedDevelopersNames = formData.selectedDevelopers.map(dev => dev.name).join(', ')
        projectDetails += `Selected Developers: ${selectedDevelopersNames}\n\n`
      }
      
      if (formData.selectionNotes) {
        projectDetails += `Hire Team Additional Notes: ${formData.selectionNotes}\n\n`
      }
      
      if (formData.requirements) {
        projectDetails += `Project Requirements:\n${formData.requirements}`
      }
      
      hireTeamFormData.append('project_details', projectDetails)
      hireTeamFormData.append('project_nda', '0')

      const response = await postContactForm(hireTeamFormData)
      let data
      try {
        data = await response.json()
      } catch {
        data = {}
      }

      // Check for success status
      const isSuccess = response.ok && (typeof data.status === 'undefined' || Number(data.status) === 1)
      
      if (!isSuccess) {
        toast.error('Failed to submit your request. Please try again.')
        return
      }

      toast.success('Your request has been submitted successfully!')
      setChatStage('success')
    } catch (error) {
      console.error('Submission error:', error)
      toast.error('Failed to submit your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    // Apply input restrictions
    let sanitizedValue = value
    
    if (name === 'name') {
      // Only allow letters and spaces for name
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '')
    } else if (name === 'phone') {
      // Only allow digits for phone
      sanitizedValue = value.replace(/\D/g, '').slice(0, 15)
    } else if (name === 'experience') {
      // Only allow numbers for experience
      sanitizedValue = value.replace(/\D/g, '').slice(0, 2)
    }
    
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setFormErrors(prev => ({ ...prev, resume: 'Please upload a PDF or Word document' }))
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }))
        return
      }
      
      setFormData(prev => ({ 
        ...prev, 
        resume: file,
        resumeName: file.name
      }))
      setFormErrors(prev => ({ ...prev, resume: '' }))
    }
  }

  // Remove uploaded file
  const handleRemoveFile = () => {
    setFormData(prev => ({ 
      ...prev, 
      resume: null,
      resumeName: ''
    }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Validate basic info form (name and email only)
  const validateBasicInfo = () => {
    const errors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      errors.name = 'Name can only contain letters and spaces'
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    return errors
  }

  // Handle basic info form submission
  const handleBasicInfoSubmit = async (e) => {
    e.preventDefault()
    
    const errors = validateBasicInfo()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // Move to main menu after basic info is collected
    setChatStage('main-menu')
  }

  // Validate details form
  const validateDetailsForm = () => {
    const errors = {}
    
    if (selectedOption === 'apply-job') {
      // Job application validation
      // Position validation
      if (!formData.position.trim()) {
        errors.position = 'Position/Role is required'
      } else if (formData.position.trim().length < 2) {
        errors.position = 'Position must be at least 2 characters'
      }
      
      // Phone validation
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required'
      } else {
        const digits = formData.phone.replace(/\D/g, '')
        if (digits.length < 7 || digits.length > 15) {
          errors.phone = 'Enter a valid phone number'
        }
      }
      
      // Experience validation
      if (!formData.experience.trim()) {
        errors.experience = 'Years of experience is required'
      } else if (parseInt(formData.experience) > 50) {
        errors.experience = 'Please enter valid years of experience'
      }
      
      // Cover Letter validation
      if (!formData.coverLetter.trim()) {
        errors.coverLetter = 'Cover letter is required'
      } else if (formData.coverLetter.trim().length < 20) {
        errors.coverLetter = 'Cover letter must be at least 20 characters'
      }
      
      // Resume validation
      if (!formData.resume) {
        errors.resume = 'Resume/CV is required'
      }
    } else if (selectedOption === 'new-project') {
      // New project validation - only Brief Your Details
      if (!formData.requirements.trim()) {
        errors.requirements = 'Please brief your project details'
      } else if (formData.requirements.trim().length < 10) {
        errors.requirements = 'Please provide at least 10 characters'
      }
    } else {
      // Requirements validation for other options (hire-team)
      if (!formData.requirements.trim()) {
        errors.requirements = 'Please provide your requirements'
      } else if (formData.requirements.trim().length < 10) {
        errors.requirements = 'Please provide at least 10 characters'
      }
    }

    return errors
  }

  // WordPress Career API - same as Join Our Team
  const postCareerForm = async (payload) => {
    const endpoint = 'https://admin.inheritx.com/wp-json/api/v1/careerform'
    const res = await fetch(endpoint, { method: 'POST', body: payload })
    return res
  }

  // Contact Form API - for new project submissions
  const postContactForm = async (payload) => {
    const endpoint = 'https://admin.inheritx.com/wp-json/api/contactform'
    const res = await fetch(endpoint, { method: 'POST', body: payload })
    return res
  }

  // Handle details form submission
  const handleDetailsFormSubmit = async (e) => {
    e.preventDefault()
    
    const errors = validateDetailsForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    try {
      if (selectedOption === 'apply-job') {
        // Job Application - Call WordPress API directly (same as Join Our Team)
        const jobFormData = new FormData()
        jobFormData.append('name', formData.name)
        jobFormData.append('email', formData.email)
        jobFormData.append('phone', formData.phone)
        jobFormData.append('position', formData.position)
        jobFormData.append('experience', formData.experience)
        jobFormData.append('coverLetter', formData.coverLetter)
        jobFormData.append('resume', formData.resume)

        const response = await postCareerForm(jobFormData)
        let data
        try {
          data = await response.json()
        } catch {
          data = {}
        }

        const isSuccess = response.ok && (typeof data.status === 'undefined' || Number(data.status) === 1)
        if (!isSuccess) {
          toast.error('Failed to submit your application. Please try again.')
          return
        }

        toast.success('Your application has been submitted successfully!')
        setChatStage('success')
      } else if (selectedOption === 'new-project') {
        // New Project - Call Contact Form API directly
        const projectFormData = new FormData()
        projectFormData.append('name', formData.name)
        projectFormData.append('email', formData.email)
        projectFormData.append('country', 'Not specified - Message from Chatbot') // Optional field
        projectFormData.append('phone', 'Not specified - Message from Chatbot') // Optional field
        projectFormData.append('project_budget', '0 - Message from Chatbot') // Optional
        projectFormData.append('project_type', 'Chatbot Inquiry') // Default value
        projectFormData.append('project_details', formData.requirements)
        projectFormData.append('project_nda', '0 - Message from Chatbot') // Default no NDA

        const response = await postContactForm(projectFormData)
        let data
        try {
          data = await response.json()
        } catch {
          data = {}
        }

        // Check for success status
        const isSuccess = response.ok && (typeof data.status === 'undefined' || Number(data.status) === 1)
        
        if (!isSuccess) {
          toast.error('Failed to submit your project details. Please try again.')
          return
        }

        toast.success('Your project details have been submitted successfully!')
        setChatStage('success')
      } else {
        // Note: hire-team is handled by handleHireTeamSelectionSubmit, not here
        // Other categories - Use Next.js API (fallback for future categories)
        const submissionData = new FormData()
        submissionData.append('name', formData.name)
        submissionData.append('email', formData.email)
        submissionData.append('selectedService', formData.selectedService)
        submissionData.append('category', selectedOption)
        submissionData.append('requirements', formData.requirements)
        submissionData.append('submittedAt', new Date().toISOString())

        const response = await fetch('/api/chatbot/submit', {
          method: 'POST',
          body: submissionData
        })

        let data
        try {
          data = await response.json()
        } catch {
          data = {}
        }

        // Check for success status
        const isSuccess = response.ok && (typeof data.status === 'undefined' || Number(data.status) === 1)
        
        if (isSuccess) {
          toast.success('Your information has been submitted successfully!')
          setChatStage('success')
        } else {
          toast.error('Failed to submit your information. Please try again.')
        }
      }
    } catch (error) {
      console.error('Submission error:', error)
      toast.error('Failed to submit your information. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Hide/show progress-wrap (back to top button) on mobile when chatbot opens/closes
  useEffect(() => {
    const progressWrap = document.querySelector('.progress-wrap')
    const isMobile = window.innerWidth <= 480
    
    if (progressWrap && isMobile) {
      if (isOpen) {
        progressWrap.style.display = 'none'
      } else {
        progressWrap.style.display = ''
      }
    }
  }, [isOpen])

  // Get stage title for minimized bar
  const getStageTitle = () => {
    if (chatStage === 'greeting') return 'Welcome!'
    if (chatStage === 'basic-info') return 'Getting Started'
    if (chatStage === 'main-menu') return `Hi ${formData.name}!`
    if (chatStage === 'hire-team-selection') return 'Select Developers'
    if (chatStage === 'details-form') return 'Tell us more'
    if (chatStage === 'success') return 'Thank You!'
    return 'InheritX Chat'
  }

  return (
    <>
      {/* Chat Widget */}
      <div className={`chat-widget  ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
        {/* Minimized Bar */}
        {isOpen && isMinimized && (
          <div className='chat-minimized-bar' onClick={handleMaximize}>
            <div className='minimized-bar-content'>
              <div className='minimized-bar-icon'>
                <MessageCircle size={20} />
              </div>
              <div className='minimized-bar-text'>
                <h4>{getStageTitle()}</h4>
                <span>Click to expand</span>
              </div>
            </div>
            <div className='minimized-bar-actions'>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleClose()
                }}
                className='minimized-close-btn'
                aria-label='Close chat'
                title='Close'
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Chat Window */}
        {isOpen && !isMinimized && (
          <div className='chat-window'>
            {/* Header */}
            <div className='chat-header'>
              <div className='chat-header-content'>
                <div className='chat-bot-avatar'>
                  <MessageCircle size={24} />
                </div>
                <div className='chat-header-text'>
                  <h3>InheritX AI Assistant</h3>
                  <span className='chat-status'>
                    <span className='status-dot'></span>
                    Online
                  </span>
                </div>
              </div>
              <div className='chat-header-actions'>
                {(chatStage === 'main-menu' || chatStage === 'hire-team-selection' || chatStage === 'details-form' || chatStage === 'success') && (
                  <button
                    onClick={handleReset}
                    className='chat-action-btn'
                    aria-label='Reset chat'
                    title='Start over'
                  >
                    <RotateCcw size={18} />
                  </button>
                )}
                <button
                  onClick={handleMinimize}
                  className='chat-action-btn'
                  aria-label='Minimize chat'
                  title='Minimize'
                >
                  <Minimize2 size={18} />
                </button>
                <button
                  onClick={handleClose}
                  className='chat-action-btn'
                  aria-label='Close chat'
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Greeting Stage */}
            {chatStage === 'greeting' && (
              <div className='chat-greeting'>
                <div className='greeting-content'>
                  <div className='greeting-icon'>
                    <img 
                      src='/image/logo/inx-icon.png' 
                      alt='InheritX Logo' 
                      className='logo-image'
                    />
                  </div>
                  <h2 className='greeting-title'>Welcome to InheritX!</h2>
                  <p className='greeting-message'>
                    Your trusted partner in <strong>Web, Mobile & AI Solutions</strong>
                  </p>
                  <p className='greeting-tagline'>
                    Let's bring your ideas to life
                  </p>
                  <button onClick={handleStartChat} className='start-chat-btn'>
                    <MessageCircle size={20} />
                    <span>Start Chat</span>
                  </button>
                </div>
              </div>
            )}

            {/* Main Menu Stage */}
            {chatStage === 'main-menu' && (
              <>
                <button onClick={handleBack} className='back-button' aria-label='Back to details'>
                  <ArrowLeft size={16} />
                  <span>Edit Details</span>
                </button>
                <div className='chat-main-menu'>
                  <div className='main-menu-header'>
                    <h3>Hi {formData.name}! 👋</h3>
                    <p>How can we help you today?</p>
                  </div>
                  <div className='main-menu-options'>
                    {mainMenuOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleMainMenuSelect(option)}
                        className='main-menu-btn'
                      >
                        <span className='menu-icon'>{option.icon}</span>
                        <span className='menu-text'>{option.text}</span>
                        <span className='menu-arrow'>→</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Hire Team Selection Stage */}
            {chatStage === 'hire-team-selection' && (
              <>
                <button onClick={handleBack} className='back-button' aria-label='Back to menu'>
                  <ArrowLeft size={16} />
                  <span>Back to Options</span>
                </button>
                <div className='chat-hire-team-selection'>
                  <div className='hire-team-header'>
                    <h3>Select Developer Types 👨‍💻</h3>
                    <p>Choose one or more developer types you want to hire</p>
                  </div>
                  
                  <div className='developer-categories'>
                    {Object.entries(developerTypes).map(([category, developers]) => (
                      <div key={category} className='developer-category'>
                        <h4 className='category-title'>{category}</h4>
                        <div className='developer-options'>
                          {developers.map((developer) => {
                            const isSelected = formData.selectedDevelopers.some(dev => dev.id === developer.id)
                            return (
                              <button
                                key={developer.id}
                                onClick={() => handleDeveloperToggle(developer.id, developer.name)}
                                className={`developer-option-btn ${isSelected ? 'selected' : ''}`}
                              >
                                <span className='checkbox'>
                                  {isSelected && (
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
                                      <polyline points='20 6 9 17 4 12'></polyline>
                                    </svg>
                                  )}
                                </span>
                                <span className='developer-name'>{developer.name}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    ))}

                    {/* Additional Notes/Description */}
                    <div className='developer-category notes-input'>
                      <h4 className='category-title'>Additional Notes (Optional)</h4>
                      <div className='developer-options'>
                        <textarea
                          name='selectionNotes'
                          value={formData.selectionNotes || ''}
                          onChange={handleInputChange}
                          placeholder='e.g., 5+ years experience, full-time for 6 months...'
                          rows='6'
                          className='form-input'
                        />
                      </div>
                    </div>
                  </div>

                  {formErrors.selectedDevelopers && (
                    <div className='error-text-centered'>{formErrors.selectedDevelopers}</div>
                  )}

                  <button
                    onClick={handleHireTeamSelectionSubmit}
                    className='form-submit-btn'
                    style={{ marginTop: '8px', padding: '10px 20px', fontSize: '13px' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className='spinner'></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Submit
                      </>
                    )}
                  </button>
                </div>
              </>
            )}

            {/* Basic Info Form Stage */}
            {chatStage === 'basic-info' && (
              <div className='chat-contact-form'>
                <div className='form-header'>
                  <h3>Let's Get Started! 👋</h3>
                  <p>Please share your basic details</p>
                </div>
                
                <form onSubmit={handleBasicInfoSubmit} className='contact-form'>
                  {/* Name */}
                  <div className='form-group'>
                    <label htmlFor='name'>Your Name *</label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder='John Doe'
                      className={`form-input ${formErrors.name ? 'error' : ''}`}
                      autoFocus
                    />
                    {formErrors.name && <span className='error-text'>{formErrors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className='form-group'>
                    <label htmlFor='email'>Email Address *</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='john@company.com'
                      className={`form-input ${formErrors.email ? 'error' : ''}`}
                    />
                    {formErrors.email && <span className='error-text'>{formErrors.email}</span>}
                  </div>

                  {/* Continue Button */}
                  <button
                    type='submit'
                    className='form-submit-btn'
                  >
                    <Send size={18} />
                    Continue
                  </button>
                </form>
              </div>
            )}

            {/* Details Form Stage */}
            {chatStage === 'details-form' && (
              <>
                <button onClick={handleBack} className='back-button' aria-label='Back to menu'>
                  <ArrowLeft size={16} />
                  <span>Back to Options</span>
                </button>
                <div className='chat-contact-form'>
                  <form onSubmit={handleDetailsFormSubmit} className='contact-form'>
                    {/* Job Application Specific Fields */}
                    {selectedOption === 'apply-job' && (
                      <>
                        {/* Position/Role */}
                        <div className='form-group'>
                          <label htmlFor='position'>Position/Role *</label>
                          <input
                            type='text'
                            id='position'
                            name='position'
                            value={formData.position}
                            onChange={handleInputChange}
                            placeholder='e.g., React Native Developer'
                            className={`form-input ${formErrors.position ? 'error' : ''}`}
                          />
                          {formErrors.position && <span className='error-text'>{formErrors.position}</span>}
                        </div>

                        {/* Phone Number */}
                        <div className='form-group'>
                          <label htmlFor='phone'>Contact Number *</label>
                          <input
                            type='tel'
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder='e.g., +1234567890'
                            className={`form-input ${formErrors.phone ? 'error' : ''}`}
                          />
                          {formErrors.phone && <span className='error-text'>{formErrors.phone}</span>}
                        </div>

                        {/* Years of Experience */}
                        <div className='form-group'>
                          <label htmlFor='experience'>Years of Experience *</label>
                          <input
                            type='text'
                            id='experience'
                            name='experience'
                            value={formData.experience}
                            onChange={handleInputChange}
                            placeholder='e.g., 3'
                            className={`form-input ${formErrors.experience ? 'error' : ''}`}
                          />
                          {formErrors.experience && <span className='error-text'>{formErrors.experience}</span>}
                        </div>

                        {/* Resume Upload */}
                        <div className='form-group'>
                          <label htmlFor='resume'>
                            Upload Resume/CV *
                            <span className='label-hint'>PDF, DOC, DOCX up to 5MB</span>
                          </label>
                          <div className='file-upload-wrapper'>
                            {!formData.resume ? (
                              <label htmlFor='resume' className='file-upload-area'>
                                <input
                                  type='file'
                                  id='resume'
                                  name='resume'
                                  ref={fileInputRef}
                                  onChange={handleFileUpload}
                                  accept='.pdf,.doc,.docx'
                                  className='file-input-hidden'
                                />
                                <div className='file-upload-content'>
                                  <p className='upload-text'>
                                    <strong>Click to upload</strong> or drag and drop
                                  </p>
                                  <p className='upload-hint'>PDF, DOC or DOCX (max. 5MB)</p>
                                </div>
                              </label>
                            ) : (
                              <div className='file-uploaded-card'>
                                <div className='file-success-icon'>
                                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                    <polyline points='20 6 9 17 4 12'></polyline>
                                  </svg>
                                </div>
                                <div className='file-details'>
                                  <div className='file-header'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                      <path d='M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'></path>
                                      <polyline points='13 2 13 9 20 9'></polyline>
                                    </svg>
                                    <span className='file-name'>{formData.resumeName}</span>
                                  </div>
                                  <p className='file-status'>✓ Resume uploaded successfully</p>
                                  <div className='file-actions'>
                                    <button
                                      type='button'
                                      onClick={() => fileInputRef.current?.click()}
                                      className='file-change-btn'
                                    >
                                      <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                        <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                                        <polyline points='17 8 12 3 7 8'></polyline>
                                        <line x1='12' y1='3' x2='12' y2='15'></line>
                                      </svg>
                                      Upload New
                                    </button>
                                    <button
                                      type='button'
                                      onClick={handleRemoveFile}
                                      className='file-delete-btn'
                                    >
                                      <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                        <polyline points='3 6 5 6 21 6'></polyline>
                                        <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                                      </svg>
                                      Remove
                                    </button>
                                  </div>
                                  <input
                                    type='file'
                                    ref={fileInputRef}
                                    onChange={handleFileUpload}
                                    accept='.pdf,.doc,.docx'
                                    className='file-input-hidden'
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          {formErrors.resume && <span className='error-text'>{formErrors.resume}</span>}
                        </div>

                         {/* Cover Letter */}
                         <div className='form-group'>
                          <label htmlFor='coverLetter'>Cover Letter / Why You? *</label>
                          <textarea
                            id='coverLetter'
                            name='coverLetter'
                            value={formData.coverLetter}
                            onChange={handleInputChange}
                            placeholder='Tell us why you would be a great fit for this role...'
                            rows='4'
                            className={`form-input ${formErrors.coverLetter ? 'error' : ''}`}
                          />
                          {formErrors.coverLetter && <span className='error-text'>{formErrors.coverLetter}</span>}
                        </div>
                      </>
                    )}

                    {/* Requirements - Only for non-job categories */}
                    {selectedOption !== 'apply-job' && (
                      <div className='form-group'>
                        <label htmlFor='requirements'>
                          {selectedOption === 'hire-team' && 'Team Requirements *'}
                          {selectedOption === 'new-project' && 'Brief Your Details *'}
                        </label>
                        <textarea
                          id='requirements'
                          name='requirements'
                          value={formData.requirements}
                          onChange={handleInputChange}
                          placeholder={
                            selectedOption === 'hire-team' 
                              ? 'e.g., Need 2 Flutter developers for 6 months, experience with Firebase and REST APIs...'
                              : 'Tell us about your project requirements...'
                          }
                          rows='6'
                          className={`form-input ${formErrors.requirements ? 'error' : ''}`}
                        />
                        {formErrors.requirements && <span className='error-text'>{formErrors.requirements}</span>}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type='submit'
                      className='form-submit-btn'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className='spinner'></div>
                          {selectedOption === 'apply-job' ? 'Applying...' : 'Submitting...'}
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          {selectedOption === 'apply-job' ? 'Apply Now' : 'Submit'}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </>
            )}

            {/* Success Stage */}
            {chatStage === 'success' && (
              <div className='chat-success'>
                <div className='success-content'>
                  <div className='success-icon'>🎉</div>
                  <h3>Thank You, {formData.name}!</h3>
                  <p>
                    {selectedOption === 'apply-job' 
                      ? "We've received your application."
                      : `We've received your request for ${formData.selectedService}.`
                    }
                  </p>
                  <p>
                    {selectedOption === 'apply-job' 
                      ? 'Our HR department will contact you soon.'
                      : selectedOption === 'hire-team'
                      ? 'Our recruitment team will contact you soon.'
                      : 'Our team will contact you soon.'
                    }
                  </p>
                  <button onClick={handleReset} className='back-to-menu-btn'>
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Floating Button - Converts to Close Button when Open */}
        <button
          onClick={() => {
            if (isOpen) {
              handleClose()
            } else {
              setIsOpen(true)
              setIsMinimized(false)
            }
          }}
          className={`chat-toggle-btn ${isOpen ? 'chat-open' : ''}`}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
          title={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
          {!isOpen && <span className='chat-notification-badge'>1</span>}
        </button>
      </div>
    </>
  )
}

