import React from 'react'

export default function Contact() {
  return (
    <div className='contactForm mb-3 col'>
      <p>Name</p>
      <input type='text'/>
      <p>Email</p>
      <input type='text'/>
      <p>Message</p>
      <input type='text' className='form-control form-control-lg col-4'/> 

      <button>Submit</button>

    </div>
  )
}
