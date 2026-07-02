'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { createClient } from '@supabase/supabase-js'
import { ConfettiCelebration } from './ConfettiCelebration'

const schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  email: z.string().email('Invalid email address'),
})

type FormData = z.infer<typeof schema>

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [showCongrats, setShowCongrats] = useState(false)
  const [successEmail, setSuccessEmail] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      console.log('Supabase URL:', supabaseUrl ? '✓ Set' : '✗ Missing')
      console.log('Supabase Key:', supabaseKey ? '✓ Set' : '✗ Missing')

      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase credentials not configured. Check .env.local')
      }

      const supabase = createClient(supabaseUrl, supabaseKey)

      console.log('Submitting data:', data)

      const { data: insertedData, error } = await supabase.from('waitlist').insert([
        {
          full_name: data.fullName,
          phone_number: data.phoneNumber,
          email: data.email,
        },
      ])

      console.log('Insert response:', { insertedData, error })

      if (error) {
        console.error('Supabase error:', error)
        throw new Error(error.message)
      }

      console.log('Success!')
      setSubmitStatus('success')
      setSubmitMessage('Successfully joined the waitlist!')
      setSuccessEmail(data.email)
      setShowCongrats(true)
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage(
        error instanceof Error ? error.message : 'Failed to join waitlist. Check console for details.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      {/* Full Name Input */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <input
          {...register('fullName')}
          type="text"
          placeholder="Full name"
          className="w-full pl-10 pr-3 py-2.5 h-10 rounded-2xl border-0 transition-all focus:outline-none bg-[#F5F1EE] text-sm"
          style={{
            boxShadow: errors.fullName
              ? 'inset 4px 4px 8px #d4ccc5, inset -4px -4px 8px #ffffff, 0 0 0 2px #ff6b6b'
              : 'inset 4px 4px 8px #d4ccc5, inset -4px -4px 8px #ffffff'
          }}
        />
      </div>
      {errors.fullName && (
        <p className="text-red-500 text-sm px-4">{errors.fullName.message}</p>
      )}

      {/* Phone Number Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <input
          {...register('phoneNumber')}
          type="tel"
          placeholder="Phone number"
          className="w-full pl-10 pr-3 py-2.5 h-10 rounded-2xl border-0 transition-all focus:outline-none bg-[#F5F1EE] text-sm"
          style={{
            boxShadow: errors.phoneNumber
              ? 'inset 4px 4px 8px #d4ccc5, inset -4px -4px 8px #ffffff, 0 0 0 2px #ff6b6b'
              : 'inset 4px 4px 8px #d4ccc5, inset -4px -4px 8px #ffffff'
          }}
        />
      </div>
      {errors.phoneNumber && (
        <p className="text-red-500 text-sm px-4">{errors.phoneNumber.message}</p>
      )}

      {/* Email Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email address"
          className="w-full pl-10 pr-3 py-2.5 h-10 rounded-2xl border-0 transition-all focus:outline-none bg-[#F5F1EE] text-sm"
          style={{
            boxShadow: errors.email
              ? 'inset 4px 4px 8px #d4ccc5, inset -4px -4px 8px #ffffff, 0 0 0 2px #ff6b6b'
              : 'inset 4px 4px 8px #d4ccc5, inset -4px -4px 8px #ffffff'
          }}
        />
      </div>
      {errors.email && (
        <p className="text-red-500 text-sm px-4">{errors.email.message}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black hover:bg-gray-900 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all text-sm"
        style={{
          boxShadow: '6px 6px 12px #d4ccc5, -6px -6px 12px #ffffff'
        }}
      >
        Join Waitlist
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-3 py-2 rounded-lg text-xs">
          {submitMessage}
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-3 py-2 rounded-lg text-xs">
          {submitMessage}
        </div>
      )}

      {/* Privacy Notice */}
      <p className="text-center text-gray-600 text-xs flex items-center justify-center gap-1">
        <svg
          className="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
        We respect your privacy. No spam, ever.
      </p>

      {/* Confetti Celebration */}
      <ConfettiCelebration
        isOpen={showCongrats}
        onComplete={() => setShowCongrats(false)}
      />
    </form>
  )
}
