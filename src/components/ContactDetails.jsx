import React, { useState } from 'react'
import { FiInstagram, FiFacebook, FiPhone, FiMapPin, FiMail, FiTwitter } from 'react-icons/fi'

import '../styles/ContactDetails.css'

const ContactDetails = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    
    const handleFormSubmit = (e) => {
        e.preventDefault()

        if(name === '' || mail === '' || phone === '' || message === '') {
            alert('Please fill all fields')
        }

        setName('')
        setMail('')
        setPhone('')
        setMessage('')
    }


  return (
    <div className='contact'>
        <div className='contact-info'>
            <h1>Get in touch</h1>
            <p>Fill the form and our Team will get back to you within 24-48 hours.</p>
            <ul className='list'>
                <li>
                   <FiPhone />
                   <a href='tel:+2347014090495'>
                       +234 701 409 0495
                   </a>
                </li>
                <li>
                    <FiMail />
                    <a href='mailto:hello@victoriamannyempire.com'>hello@victoriamannyempire.com</a>
                </li>
                <li>
                    <FiMapPin />
                    Yaba, Lagos.
                </li>
            </ul>

            <ul className="pages">
                <li>
                    <a href='https://instagram.com/victoriamanny_empire'>
                        <FiInstagram className='icon' />
                    </a>
                </li>
                <li>
                    <a href='https://facebook.com/'>
                        <FiFacebook className='icon' />
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com/'>
                        <FiTwitter className='icon' />
                    </a>
                </li>
            </ul>
        </div>
        <div className='contact-form'>
            <h1>Got an enquiry?</h1>
            <form onSubmit={handleFormSubmit} >
                <div className="control-group">
                    <input type='text' id='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="control-group">
                    <input type='mail' id='mail' placeholder='E-mail' value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>
                <div className="control-group">
                    <input type='tel' id='phone' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="control-group">
                    <textarea id='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                </div>
                <button type="submit">
                    submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactDetails