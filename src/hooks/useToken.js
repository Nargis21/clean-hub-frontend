'use client'
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const currentUser = { email: email, role: 'User' }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accesstoken = data.token
                    setToken(accesstoken)
                    localStorage.setItem('accessToken', accesstoken)
                })
        }
    }, [user])
    return [token]
}

export default useToken
