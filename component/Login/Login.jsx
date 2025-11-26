'use client'
import { useState } from 'react'

import { useRouter } from 'next/navigation'
import { useAuth } from '../Context/AuthProvider'

export default function Login() {
  const { login, register, loginWithGoogle } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(isRegister) await register(email, password)
      else await login(email, password)
      router.push('/') // redirect after login
    } catch (err) {
      alert(err.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      router.push('/')
    } catch(err) {
      alert(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isRegister ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200" required/>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200" required/>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">{isRegister ? 'Register' : 'Login'}</button>
        </form>

        <div className="my-4 text-center">
          <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition">
            Continue with Google
          </button>
        </div>

        <p className="text-center text-gray-500">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <button className="text-blue-600 ml-2" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  )
}
