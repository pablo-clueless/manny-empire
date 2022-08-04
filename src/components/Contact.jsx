import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

import { Alert, Button } from './'
import { Spinner } from '../assets'

const initial = {y: 50,opacity: 0}
const animate = {y: 0, opacity: 1, transition: {duration: 2,ease: 'easeInOut' }}

const initialState = {
  name: '',
  email: '',
  message: '',
  to: 'victoriasambo123@gmail.com',
}

const Contact = () => {
  const [sendTo, setSendTo] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const formRef = useRef(null)

  const handleChange = (e) => {
    setSendTo({...sendTo, [e.target.name]: e.target.value})
  }

  const handleForm = async(e) => {
    e.preventDefault()
    const { name, email, message } = sendTo
    if(!name || !email || !message) {
      return setError('Please fill out all fields')
    }
    setLoading(true)
    try {
      const res = await emailjs.sendForm('service_o2bgy9p', 'template_g25wgmi', sendTo, 'ckzBhGDDzoGsts6zj')
      console.log(res)
      setSuccess(res)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
    handleReset()
  }

  const handleReset = () => {
    setSendTo(initialState)
    formRef.current.reset()
  }
  
  return (
    <>
    {success && <Alert type='success' message={success.text} onClose={() => setSuccess(null)} />}
    {error && <Alert type='error' message={error} onClose={() => setError(null)} />}
    <div id='contact' className='w-full my-8'>
      <div className='grid place-items-center text-black dark:text-white text-center'>
        <motion.p initial={initial} whileInView={animate} className='text-3xl uppercase my-2 outline-text'>
          get in touch
        </motion.p>
        <div className='w-full grid place-items-center px-4 text-center my-4'>
          <p className='text-xl'>
            If you have any queries, or want to speak with us. <br />
            Please contact us for more details by below given information.
          </p>

          <div className='w-full sm:w-80 md:w-400 p-4 my-4'>
            <form ref={formRef} onSubmit={handleForm} className='w-full flex flex-col items-center gap-4'>
              <input type='name' name='name' placeholder='Name' onChange={handleChange} className='w-full h-11 bg-transparent text-black dark:text-white p-2 outline-none border-1 border-gray-500 placeholder:italic'/>
              <input type='email' name='email' placeholder='Email' onChange={handleChange} className='w-full h-11 bg-transparent text-black dark:text-white p-2 outline-none border-1 border-gray-500 placeholder:italic'/>
              <textarea name='message' placeholder='Your Message' onChange={handleChange} className='w-full h-200 bg-transparent text-black dark:text-white p-2 outline-none border-1 border-gray-500 resize-none placeholder:italic leading-5' />
              <Button type='submit' label={loading ? <Spinner /> : 'Send'} />
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact