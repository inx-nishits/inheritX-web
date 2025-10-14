'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm({
  id = 'contactform',
  className = 'form-contact-us px-md-15',
  method = 'post',
  action = '',
  title = 'Reliable Solutions for Your Project Needs',
  description = "We’re Here to Support Your Next Big Project — Let’s Team Up!",
  showBudget = true,
  budgetLabel = 'Select Your Budget',
  budgetOptions = ['Choose Budget', 'Below $5000', '$5000 - $25,000', 'Augmented Reality'],
  submitText = 'Schedule a free Consultation',
  onSubmit
}) {
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captcha, setCaptcha] = useState({ x: 0, y: 0 })
  const [ndaChecked, setNdaChecked] = useState(false)
  const [userResult, setUserResult] = useState('')
  const [projectBudget, setProjectBudget] = useState('')
  const budgetListRef = useRef(null)

  // generate random math values on mount and when successfully sent
  const regenerateCaptcha = () => {
    const x = Math.floor(Math.random() * 10) + 1
    const y = Math.floor(Math.random() * 10) + 1
    setCaptcha({ x, y })
  }

  useEffect(() => {
    regenerateCaptcha()
  }, [])

  // Wire the existing budget list UI to update selected value without changing markup
  useEffect(() => {
    if (!budgetListRef.current) return
    const listEl = budgetListRef.current
    const onClick = (e) => {
      const li = e.target.closest('li')
      if (!li || !listEl.contains(li)) return
      // update selected classes to mimic existing UI behavior
      Array.from(listEl.querySelectorAll('li')).forEach((n) => n.classList.remove('selected', 'focus'))
      li.classList.add('selected', 'focus')
      const selected = li.textContent.trim()
      setProjectBudget(selected)
      // update visible caption text
      const caption = listEl.parentElement?.querySelector('span.current')
      if (caption) caption.textContent = selected
      setErrors((prev) => {
        const next = { ...prev }
        if (selected && selected !== 'Choose Budget') delete next.projectBudget
        else next.projectBudget = 'Project budget is required'
        return next
      })
    }
    listEl.addEventListener('click', onClick)
    return () => listEl.removeEventListener('click', onClick)
  }, [])

  // Use CSS class .error-important for the red color with !important
  const errorStyle = useMemo(() => ({ fontSize: '16px', marginTop: '5px', display: 'block' }), [])

  // Phone validation helper: allow optional + and formatting chars, require 7-15 digits total
  const isValidPhone = (raw) => {
    const value = (raw || '').trim()
    if (!value) return false
    const basicPattern = /^\+?[\d\s\-()]{7,20}$/
    if (!basicPattern.test(value)) return false
    const digitsOnly = value.replace(/\D/g, '')
    return digitsOnly.length >= 7 && digitsOnly.length <= 15
  }

  // Allow only alphabetic characters and spaces
  const isAlphaSpace = (raw) => {
    const value = (raw || '').trim()
    if (!value) return false
    return /^[A-Za-z\s]+$/.test(value)
  }

  // Field-level validation for real-time feedback on blur/change
  const validateField = (fieldId, rawValue) => {
    const value = (rawValue ?? '').trim()
    setErrors((prev) => {
      const next = { ...prev }
      const set = (key, message) => { if (message) next[key] = message; else delete next[key] }
      switch (fieldId) {
        case 'name':
          if (!value) set('name', 'Name is required')
          else if (!isAlphaSpace(value)) set('name', 'Only letters and spaces allowed')
          else set('name', '')
          break
        case 'mail':
          if (!value) set('mail', 'Email is required')
          else if (!/\S+@\S+\.\S+/.test(value)) set('mail', 'Email is invalid')
          else set('mail', '')
          break
        case 'country':
          if (!value) set('country', 'Country is required')
          else if (!isAlphaSpace(value)) set('country', 'Only letters and spaces allowed')
          else set('country', '')
          break
        case 'phone':
          if (!value) set('phone', 'Phone is required')
          else if (!isValidPhone(value)) set('phone', 'Phone must be 7-15 digits')
          else set('phone', '')
          break
        case 'projectType':
          set('projectType', value ? '' : 'Project type is required')
          break
        case 'message':
          set('message', value ? '' : 'Project details are required')
          break
        default:
          break
      }
      return next
    })
  }

  const handleBlur = (e) => {
    const { id, value } = e.target
    if (!id) return
    validateField(id, value)
  }

  const handleChange = (e) => {
    const { id } = e.target
    // sanitize in-place for alpha-only fields
    if (id === 'name' || id === 'country') {
      e.target.value = (e.target.value || '').replace(/[^A-Za-z\s]/g, '')
    }
    const value = e.target.value
    if (!id) return
    validateField(id, value)
  }

  const validate = (form) => {
    const newErrors = {}
    const name = form.querySelector('#name')?.value?.trim() || ''
    const email = form.querySelector('#mail')?.value?.trim() || ''
    const country = form.querySelector('#country')?.value?.trim() || ''
    const phone = form.querySelector('#phone')?.value?.trim() || ''
    const projectType = form.querySelector('#projectType')?.value?.trim() || ''
    const details = form.querySelector('#message')?.value?.trim() || ''

    if (!name) newErrors.name = 'Name is required'
    else if (!isAlphaSpace(name)) newErrors.name = 'Only letters and spaces allowed'
    if (!email) newErrors.mail = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.mail = 'Email is invalid'
    if (!country) newErrors.country = 'Country is required'
    else if (!isAlphaSpace(country)) newErrors.country = 'Only letters and spaces allowed'
    if (!phone) newErrors.phone = 'Phone is required'
    else if (!isValidPhone(phone)) newErrors.phone = 'Phone must be 7-15 digits'
    if (!projectType) newErrors.projectType = 'Project type is required'
    if (!details) newErrors.message = 'Project details are required'
    if (showBudget && (!projectBudget || projectBudget === 'Choose Budget')) {
      newErrors.projectBudget = 'Project budget is required'
    }

    if (!userResult.trim()) newErrors.userResult = 'Please solve the math problem'
    else if (!/^\d+$/.test(userResult.trim())) newErrors.userResult = 'Please enter a number'
    else if (parseInt(userResult, 10) !== captcha.x + captcha.y) newErrors.userResult = 'Incorrect answer'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // live-validate math captcha as the user types
  const handleUserResultChange = (e) => {
    const value = e.target.value
    setUserResult(value)
    setErrors((prev) => {
      const next = { ...prev }
      const trimmed = value.trim()
      if (!trimmed) next.userResult = 'Please solve the math problem'
      else if (!/^\d+$/.test(trimmed)) next.userResult = 'Please enter a number'
      else if (parseInt(trimmed, 10) !== captcha.x + captcha.y) next.userResult = 'Incorrect answer'
      else delete next.userResult
      return next
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    const form = e.currentTarget
    if (!validate(form)) return

    setIsSubmitting(true)
    try {
      const fd = new FormData()
      fd.append('name', form.querySelector('#name')?.value || '')
      fd.append('email', form.querySelector('#mail')?.value || '')
      fd.append('country', form.querySelector('#country')?.value || '')
      fd.append('phone', form.querySelector('#phone')?.value || '')
      fd.append('project_budget', projectBudget || '')
      fd.append('project_type', form.querySelector('#projectType')?.value || '')
      fd.append('project_details', form.querySelector('#message')?.value || '')
      fd.append('project_nda', ndaChecked ? '1' : '0')

      const res = await fetch('https://admin.inheritx.com/wp-json/api/contactform', {
        method: 'POST',
        body: fd
      })

      let data
      try {
        data = await res.json()
      } catch (e) {
        data = null
      }

      const apiMessage = data?.message || (res.ok ? 'Thanks! Your message has been sent.' : 'Something went wrong')

      if (res.ok) {
        // Reset lightweight client-side state
        form.reset()
        setNdaChecked(false)

        setUserResult('')
        setProjectBudget('')
        // Reset budget UI selection classes to default
        if (budgetListRef.current) {
          const listEl = budgetListRef.current
          const items = listEl.querySelectorAll('li')
          items.forEach((n) => n.classList.remove('selected', 'focus'))
          if (items[0]) items[0].classList.add('selected', 'focus')
          // also reset visible caption text
          const caption = listEl.parentElement?.querySelector('span.current')
          if (caption) caption.textContent = budgetLabel
        }
        regenerateCaptcha()
        setErrors({})
        toast.success(apiMessage)
      } else {
        setErrors((prev) => ({ ...prev, submit: apiMessage }))
        toast.error(apiMessage)
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id={id} className={className} noValidate onSubmit={(e) => handleSubmit(e)}>
      <div className='heading-form text-center'>
        <h3 className='title'>{title}</h3>
        <div className='desc lh-30'>
          {description}
        </div>
      </div>

      <div className='cols mb-20 g-20'>
        <fieldset className='item'>
          <input type='text' name='name' id='name' placeholder='Name*' onBlur={handleBlur} onChange={handleChange} />
          <i className='icon-user'></i>
          {errors.name ? <div className='error-important' style={errorStyle}>{errors.name}</div> : null}
        </fieldset>

        <fieldset className='item'>
          <input type='email' name='mail' id='mail' placeholder='Email*' onBlur={handleBlur} onChange={handleChange} />
          <i className='icon-email'></i>
          {errors.mail ? <div className='error-important' style={errorStyle}>{errors.mail}</div> : null}
        </fieldset>
      </div>

      <div className='cols mb-20 g-20'>
        <fieldset className='item'>
          <input type='text' name='country' id='country' placeholder='Country*' onBlur={handleBlur} onChange={handleChange} />
          <i className='icon'>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <circle cx='12' cy='12' r='10' />
              <line x1='2' y1='12' x2='22' y2='12' />
              <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
            </svg>
          </i>
          {errors.country ? <div className='error-important' style={errorStyle}>{errors.country}</div> : null}
        </fieldset>

        <fieldset className='item'>
          <input type='text' name='phone' id='phone' placeholder='Phone*' inputMode='tel' maxLength={20} onBlur={handleBlur} onChange={handleChange} />
          <i className='icon-phone'></i>
          {errors.phone ? <div className='error-important' style={errorStyle}>{errors.phone}</div> : null}
        </fieldset>
      </div>

      <div className='cols mb-20 g-20'>
        <fieldset className='item'>
          <input type='text' name='projectType' id='projectType' placeholder='Project Type*' onBlur={handleBlur} onChange={handleChange} />
          {errors.projectType ? <div className='error-important' style={errorStyle}>{errors.projectType}</div> : null}
        </fieldset>
      </div>

      {showBudget && (
        <>

          <div className={`cols  g-20 ${errors.projectBudget ? '' : 'mb-20'}`}>
            <div className='nice-select mb-0'>
              <span className='current caption-1'>{budgetLabel}*</span>
              <ul className='list' ref={budgetListRef}>
                {budgetOptions.map((label, idx) => (
                  <li key={idx} className={`option${idx === 0 ? ' option-all selected focus' : ''}`}>{label}</li>
                ))}
              </ul>
            </div>
          </div>
          {errors.projectBudget ? <div className='error-important mb-20' style={errorStyle}>{errors.projectBudget}</div> : null}
        </>
      )}

      <fieldset className='mb-20'>
        <textarea name='message' id='message' className='resize-none' placeholder='Brief Your Details*' onBlur={handleBlur} onChange={handleChange} />
        {errors.message ? <div className='error-important' style={errorStyle}>{errors.message}</div> : null}
      </fieldset>

      {/* Math Captcha Row */}
      <div className='d-flex flex-wrap calculation-fields' data-aos='zoom-in'>
        <div className='col-xl-1 col-lg-2 col-md-2 col-sm-3 col-3'><input type='text' value={captcha.x} className='text-center p-1 h-full' disabled /></div>
        <label className='check_label px-3'>+</label>
        <div className='col-xl-1 col-lg-2 col-md-2 col-sm-3 col-3'><input type='text' value={captcha.y} className='text-center p-1 h-full' disabled /></div>
        <label className='check_label px-3'>=</label>
        <div className='col-xl-2 col-lg-4 col-md-4 col-sm-5 col-5'><input type='number' className='text-center p-1 h-full' value={userResult} onChange={handleUserResultChange} /></div>
      </div>
      {errors.userResult ? <div className='error-important' style={{ marginTop: '10px', fontSize: '17px' }}>{errors.userResult}</div> : null}

      {/* NDA Checkbox */}
      <div className='mb-20 mt-5'>
        <label className='check_label d-flex align-items-center'>
          <input type='checkbox' checked={ndaChecked} onChange={(e) => setNdaChecked(e.target.checked)} className='me-2' />
          <span className='text-black'>Request Non-Disclosure Agreement for a Confidential Consultation.</span>
        </label>
      </div>

      <button type='submit' className='tf-btn mx-auto w-100 w-md-100' disabled={isSubmitting}>
        <span>{isSubmitting ? 'Sending...' : submitText}</span>
        <i className='icon-arrow-right'></i>
      </button>
    </form>
  )
}


