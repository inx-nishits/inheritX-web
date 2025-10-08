'use client'

export default function ContactForm ({
  id = 'contactform',
  className = 'form-contact-us px-md-15',
  method = 'post',
  action = '',
  title = 'Need Help For Project!',
  description = "We are ready to help your next projects, let’s work together",
  showBudget = true,
  budgetLabel = 'Select Your Budget',
  budgetOptions = ['Choose Budget', 'Below $5000', '$5000 - $25,000', 'Augmented Reality'],
  submitText = 'Schedule a free Consultation',
  onSubmit
}) {
  return (
    <form id={id} className={className} method={method} action={action} onSubmit={onSubmit}>
      <div className='heading-form text-center'>
        <h3 className='title'>{title}</h3>
        <div className='desc lh-30'>
          {description}
        </div>
      </div>

      <div className='cols mb-20 g-20'>
        <fieldset className='item'>
          <input type='text' name='name' id='name' placeholder='Name' required />
          <i className='icon-user'></i>
        </fieldset>

        <fieldset className='item'>
          <input type='email' name='mail' id='mail' placeholder='Email' required />
          <i className='icon-email'></i>
        </fieldset>
      </div>

      <div className='cols mb-20 g-20'>
        <fieldset className='item'>
          <input type='text' name='country' id='country' placeholder='Country' required />
          <i className='icon'>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <circle cx='12' cy='12' r='10' />
              <line x1='2' y1='12' x2='22' y2='12' />
              <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
            </svg>
          </i>
        </fieldset>

        <fieldset className='item'>
          <input type='text' name='phone' id='phone' placeholder='Phone' required />
          <i className='icon-phone'></i>
        </fieldset>
      </div>

      <div className='cols mb-20 g-20'>
        <fieldset className='item'>
          <input type='text' name='projectType' id='projectType' placeholder='Project Type' required />
        </fieldset>
      </div>

      {showBudget && (
        <div className='cols mb-20 g-20'>
          <div className='nice-select mb-0'>
            <span className='current caption-1'>{budgetLabel}</span>
            <ul className='list'>
              {budgetOptions.map((label, idx) => (
                <li key={idx} className={`option${idx === 0 ? ' option-all selected focus' : ''}`}>{label}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <fieldset className='mb-20'>
        <textarea name='message' id='message' placeholder='Brief Your Details*' required />
      </fieldset>

      <button type='submit' className='tf-btn mx-auto'>
        <span>{submitText}</span>
        <i className='icon-arrow-right'></i>
      </button>
    </form>
  )
}


