import { useState } from 'react'

export const useForm = (endPointUrl) => {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    
    const sendMail = (data) => {
        setLoading(true)
        setSubmitted(false)
        setError(undefined)

        fetch(endPointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if(res.status === 422) {
                throw new Error('Are you a robot?')
            }

            if(res.status !== 200) {
                throw new Error(`${res.statusText}(${res.status})`)
            }

            return res.json()
        }).then(() => {
            setSubmitted(true)
            setLoading(false)
        }).catch((err) => {
            setError(err.toString())
            setLoading(false)
        })
    }

    return {submitted, loading, error, sendMail}
}