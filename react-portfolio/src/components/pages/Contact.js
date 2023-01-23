import React from 'react'

export default function Contact() {
  return (
    <div className='container'>
      <h3>Contact Me</h3>
      <p>Name</p>
      <input type='text'/>
      <p>Email</p>
      <input type='text'/>
      <p>Message</p>
      <input type='text' className='form-control'/> 

      <button>Submit</button>

    </div>
  )
}
