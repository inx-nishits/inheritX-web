"use client"

import { useState, useRef, useEffect } from 'react'
import { Send, X, MessageCircle, Minimize2, RotateCcw, ArrowLeft } from 'lucide-react'

// Main menu options - shown after "Start Chat"
const mainMenuOptions = [
  {
    id: 1,
    category: 'hire-team',
    text: 'Hire Dedicated Team',
    message: 'I want to hire a dedicated development team',
    icon: '👥'
  },
  {
    id: 2,
    category: 'new-project',
    text: 'Start a New Project',
    message: 'I want to start a new project',
    icon: '🚀'
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

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [chatStage, setChatStage] = useState('greeting') // 'greeting', 'main-menu', 'contact-form', 'success'
  const [selectedOption, setSelectedOption] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    message: '',
    selectedService: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Reset chat to main menu
  const handleReset = () => {
    setChatStage('main-menu')
    setSelectedOption(null)
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      company: '',
      message: '',
      selectedService: ''
    })
    setFormErrors({})
  }

  // Navigate back to main menu
  const handleBack = () => {
    setChatStage('main-menu')
    setSelectedOption(null)
    setFormErrors({})
  }

  // Reset chat to greeting when closing
  const handleClose = () => {
    setIsOpen(false)
    // Reset after animation completes
    setTimeout(() => {
      setChatStage('greeting')
      setSelectedOption(null)
      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        company: '',
        message: '',
        selectedService: ''
      })
      setFormErrors({})
    }, 300)
  }

  // Handle Start Chat button
  const handleStartChat = () => {
    setChatStage('main-menu')
  }

  // Handle main menu option selection
  const handleMainMenuSelect = (option) => {
    setChatStage('contact-form')
    setSelectedOption(option.category)
    setFormData(prev => ({ ...prev, selectedService: option.text }))
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
    }
    
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Validate form
  const validateForm = () => {
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
    
    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = 'Phone number can only contain digits'
    } else if (formData.phone.length < 7 || formData.phone.length > 15) {
      errors.phone = 'Phone number must be 7-15 digits'
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'This field is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide at least 10 characters'
    }

    return errors
  }

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    const submissionData = {
      ...formData,
      phone: `${formData.countryCode}${formData.phone}`,
      submittedAt: new Date().toISOString()
    }

    try {
      const response = await fetch('/api/chatbot/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      })

      if (response.ok) {
        setChatStage('success')
      } else {
        alert('There was an issue submitting your information. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an issue submitting your information. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Chat Widget */}
      <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
        {/* Chat Window */}
        {isOpen && (
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
                {(chatStage === 'main-menu' || chatStage === 'contact-form' || chatStage === 'success') && (
                  <button
                    onClick={handleReset}
                    className='chat-action-btn'
                    aria-label='Reset chat'
                    title='Back to options'
                  >
                    <RotateCcw size={18} />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className='chat-action-btn'
                  aria-label='Minimize chat'
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
                  <h2 className='greeting-title'>👋 Hi there!</h2>
                  <p className='greeting-message'>
                    Welcome to <strong>InheritX Solutions</strong>!
                    <br />
                    We've built <strong>850+ mobile and web apps</strong> with AI expertise.
                  </p>
                  <p className='greeting-tagline'>
                    Experience the Excellence in Digital Innovation
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
              <div className='chat-main-menu'>
                <div className='main-menu-header'>
                  <h3>How can we help you today?</h3>
                  <p>Choose an option to get started</p>
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
            )}

            {/* Contact Form Stage */}
            {chatStage === 'contact-form' && (
              <>
                <button onClick={handleBack} className='back-button' aria-label='Back to menu'>
                  <ArrowLeft size={16} />
                  <span>Back to Options</span>
                </button>
                <div className='chat-contact-form'>
                  <div className='form-header'>
                    <h3>Share Your Details</h3>
                    <p>We'll get back to you within 24 hours</p>
                  </div>
                  
                  <form onSubmit={handleFormSubmit} className='contact-form'>
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

                  {/* Phone with Country Code */}
                  <div className='form-group'>
                    <label htmlFor='phone'>Phone Number *</label>
                    <div className='phone-input-group'>
                      <select
                        name='countryCode'
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className='country-code-select'
                      >
                        <option value='+1'>🇺🇸 +1</option>
                        <option value='+44'>🇬🇧 +44</option>
                        <option value='+91'>🇮🇳 +91</option>
                        <option value='+61'>🇦🇺 +61</option>
                        <option value='+81'>🇯🇵 +81</option>
                        <option value='+49'>🇩🇪 +49</option>
                        <option value='+33'>🇫🇷 +33</option>
                        <option value='+86'>🇨🇳 +86</option>
                        <option value='+971'>🇦🇪 +971</option>
                        <option value='+65'>🇸🇬 +65</option>
                      </select>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder='9876543210'
                        className={`form-input phone-number ${formErrors.phone ? 'error' : ''}`}
                      />
                    </div>
                    {formErrors.phone && <span className='error-text'>{formErrors.phone}</span>}
                  </div>

                  {/* Company (Optional) */}
                  <div className='form-group'>
                    <label htmlFor='company'>Company Name <span className='optional'>(optional)</span></label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder='Your Company'
                      className='form-input'
                    />
                  </div>

                  {/* Message */}
                  <div className='form-group'>
                    <label htmlFor='message'>
                      {selectedOption === 'hire-team' && 'What developers do you need? *'}
                      {selectedOption === 'new-project' && 'Tell us about your project *'}
                      {selectedOption === 'apply-job' && 'Why are you interested? *'}
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder='Describe your requirements...'
                      rows='3'
                      className={`form-input ${formErrors.message ? 'error' : ''}`}
                    />
                    {formErrors.message && <span className='error-text'>{formErrors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    className='form-submit-btn'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className='spinner'></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit
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
                  <div className='success-icon'>✅</div>
                  <h3>Thank You!</h3>
                  <p>We've received your information and will contact you within 24 hours.</p>
                  <div className='contact-info'>
                    <p><strong>📧 Email:</strong> contact@inheritx.com</p>
                    <p><strong>📱 WhatsApp:</strong> +91 84870 06480</p>
                  </div>
                  <button onClick={handleReset} className='back-to-menu-btn'>
                    Back to Options
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Floating Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className='chat-toggle-btn'
            aria-label='Open chat'
          >
            <MessageCircle size={28} />
            <span className='chat-notification-badge'>1</span>
          </button>
        )}
      </div>
    </>
  )
}

