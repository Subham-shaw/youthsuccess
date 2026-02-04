'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import GoogleIcon from '@mui/icons-material/Google'

const DEFAULT_EMAIL = 'admin@demo.com'
const DEFAULT_PASSWORD = 'admin123'

export default function SignInPage() {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      router.push('/dashboard')
      return
    }
    alert('Invalid credentials')
  }

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/auth-bg.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 backdrop-blur-sm" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white/90 border border-gray-200 p-8 shadow-2xl backdrop-blur-md">

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
            <p className="text-sm text-gray-500 mt-2">Sign in to continue</p>
          </div>

          {/* FORM (Enter works here) */}
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
              handleSignIn()
            }}
          >
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5
                focus:outline-none focus:ring-2 focus:ring-[#50C878] focus:border-[#50C878]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-12
                  focus:outline-none focus:ring-2 focus:ring-[#50C878] focus:border-[#50C878]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-[#50C878]" />
                Remember me
              </label>
              <Link href="#" className="text-[#50C878] hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Sign in */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#50C878] py-2.5 text-white font-medium
              hover:bg-[#46b56a] transition"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Google */}
          <button
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300
            py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
          >
            <GoogleIcon fontSize="small" />
            Continue with Google
          </button>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Want to go back to homepage?{' '}
            <Link href="/" className="text-[#50C878] hover:underline">
              Click here
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}
