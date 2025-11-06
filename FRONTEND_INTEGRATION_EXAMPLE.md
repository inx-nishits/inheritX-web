# 🎨 Frontend Integration Examples

## Example 1: Using fetch() API

```javascript
// Submit chatbot form
async function submitChatbotForm(formData) {
  try {
    const response = await fetch('/api/chatbot/submit', {
      method: 'POST',
      body: formData // FormData object
    })

    const data = await response.json()

    if (data.success) {
      console.log('✅ Submission successful!')
      console.log('Email sent:', data.emailSent)
      console.log('Saved to JSON:', data.savedToJSON)
      return true
    } else {
      console.error('❌ Submission failed:', data.error)
      return false
    }
  } catch (error) {
    console.error('❌ Network error:', error)
    return false
  }
}

// Usage
const formData = new FormData()
formData.append('name', 'John Doe')
formData.append('email', 'john@example.com')
formData.append('phone', '1234567890')
formData.append('selectedService', 'Mobile App Development')
formData.append('category', 'new-project')
formData.append('requirements', 'I need a mobile app for iOS and Android')
formData.append('submittedAt', new Date().toISOString())

await submitChatbotForm(formData)
```

## Example 2: Using jQuery (if you prefer)

```javascript
// Submit form using jQuery
function submitForm() {
  const formData = new FormData()
  formData.append('name', $('#name').val())
  formData.append('email', $('#email').val())
  formData.append('phone', $('#phone').val())
  formData.append('selectedService', $('#service').val())
  formData.append('category', 'new-project')
  formData.append('requirements', $('#requirements').val())
  formData.append('submittedAt', new Date().toISOString())

  $.ajax({
    url: '/api/chatbot/submit',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
      if (response.success) {
        alert('✅ Form submitted successfully!')
      } else {
        alert('❌ Error: ' + response.error)
      }
    },
    error: function(xhr, status, error) {
      alert('❌ Network error: ' + error)
    }
  })
}
```

## Example 3: React Component

```jsx
import { useState } from 'react'

function ChatForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('selectedService', 'Mobile App Development')
    data.append('category', 'new-project')
    data.append('requirements', formData.requirements)
    data.append('submittedAt', new Date().toISOString())

    try {
      const response = await fetch('/api/chatbot/submit', {
        method: 'POST',
        body: data
      })

      const result = await response.json()

      if (result.success) {
        alert('✅ Submitted successfully!')
        // Reset form
        setFormData({ name: '', email: '', phone: '', requirements: '' })
      } else {
        alert('❌ Error: ' + result.error)
      }
    } catch (error) {
      alert('❌ Network error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <textarea
        placeholder="Requirements"
        value={formData.requirements}
        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
        required
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default ChatForm
```

## Example 4: Admin Login

```javascript
// Login function
async function adminLogin(username, password) {
  try {
    const response = await fetch('/api/chatbot/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    const data = await response.json()

    if (data.success) {
      console.log('✅ Login successful!')
      // Redirect to dashboard
      window.location.href = '/dashboard/chatbot'
      return true
    } else {
      console.error('❌ Login failed:', data.error)
      return false
    }
  } catch (error) {
    console.error('❌ Login error:', error)
    return false
  }
}

// Usage
await adminLogin('admin', '1234')
```

## Example 5: Fetch Submissions (Admin)

```javascript
// Fetch all submissions (requires login)
async function fetchSubmissions() {
  try {
    const response = await fetch('/api/chatbot/submissions')
    const data = await response.json()

    if (data.success) {
      console.log('✅ Total submissions:', data.total)
      console.log('Submissions:', data.submissions)
      return data.submissions
    } else {
      console.error('❌ Error:', data.error)
      // Probably not authenticated
      window.location.href = '/admin/chatbot'
      return []
    }
  } catch (error) {
    console.error('❌ Fetch error:', error)
    return []
  }
}

// Usage
const submissions = await fetchSubmissions()
submissions.forEach(sub => {
  console.log(`${sub.name} - ${sub.email} - ${sub.category}`)
})
```

## Example 6: Admin Logout

```javascript
// Logout function
async function adminLogout() {
  try {
    const response = await fetch('/api/chatbot/logout', {
      method: 'POST'
    })

    const data = await response.json()

    if (data.success) {
      console.log('✅ Logged out successfully')
      // Redirect to login
      window.location.href = '/admin/chatbot'
      return true
    }
  } catch (error) {
    console.error('❌ Logout error:', error)
    return false
  }
}

// Usage
await adminLogout()
```

## Example 7: File Upload (Job Application)

```javascript
// Submit job application with resume
async function submitJobApplication(formData, resumeFile) {
  const data = new FormData()
  
  data.append('name', formData.name)
  data.append('email', formData.email)
  data.append('phone', formData.phone)
  data.append('selectedService', 'Job Application')
  data.append('category', 'apply-job')
  data.append('position', formData.position)
  data.append('experience', formData.experience)
  data.append('skills', formData.skills)
  data.append('portfolioUrl', formData.portfolioUrl)
  data.append('requirements', formData.coverLetter)
  data.append('resume', resumeFile) // File object
  data.append('submittedAt', new Date().toISOString())

  try {
    const response = await fetch('/api/chatbot/submit', {
      method: 'POST',
      body: data
    })

    const result = await response.json()

    if (result.success) {
      alert('✅ Application submitted!')
      return true
    } else {
      alert('❌ Error: ' + result.error)
      return false
    }
  } catch (error) {
    alert('❌ Network error')
    return false
  }
}

// Usage
const fileInput = document.getElementById('resume')
const resumeFile = fileInput.files[0]

await submitJobApplication({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '1234567890',
  position: 'React Developer',
  experience: '3',
  skills: 'React, Node.js, MongoDB',
  portfolioUrl: 'https://johndoe.com',
  coverLetter: 'I am a passionate developer...'
}, resumeFile)
```

## Example 8: Error Handling

```javascript
// Robust error handling
async function submitWithErrorHandling(formData) {
  try {
    const response = await fetch('/api/chatbot/submit', {
      method: 'POST',
      body: formData
    })

    // Check HTTP status
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.success) {
      // Success
      return {
        success: true,
        message: 'Form submitted successfully',
        emailSent: data.emailSent,
        savedToJSON: data.savedToJSON
      }
    } else {
      // API returned error
      return {
        success: false,
        error: data.error || 'Unknown error occurred'
      }
    }
  } catch (error) {
    // Network or parsing error
    console.error('Submission error:', error)
    return {
      success: false,
      error: 'Network error. Please check your connection.'
    }
  }
}

// Usage
const result = await submitWithErrorHandling(formData)

if (result.success) {
  console.log('✅', result.message)
  if (result.emailSent) console.log('📧 Email sent')
  if (result.savedToJSON) console.log('💾 Saved to database')
} else {
  console.error('❌', result.error)
}
```

## Response Format Reference

### Successful Submission
```json
{
  "success": true,
  "message": "Submission received successfully",
  "emailSent": true,
  "savedToJSON": true,
  "leadId": 1699999999999,
  "timestamp": "2024-11-05T12:00:00.000Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Name and email are required"
}
```

### Authentication Response
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "username": "admin"
  }
}
```

### Submissions Response
```json
{
  "success": true,
  "submissions": [...],
  "total": 42
}
```

---

## 📝 Notes

1. **Always use FormData** for file uploads
2. **Include submittedAt** timestamp for tracking
3. **Handle errors gracefully** with try-catch
4. **Show loading states** during submission
5. **Validate data** on frontend before submitting
6. **Clear form** after successful submission
7. **Display success/error messages** to users

---

**Happy coding! 🚀**

