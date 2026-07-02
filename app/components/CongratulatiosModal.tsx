'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface CongratulatiosModalProps {
  isOpen: boolean
  email: string
  onClose: () => void
}

export function CongratulatiosModal({ isOpen, email, onClose }: CongratulatiosModalProps) {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animation: `fall ${2 + Math.random() * 1}s ease-in forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              🎉
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-8 text-center space-y-6 animate-in fade-in scale-95 duration-300">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center animate-pulse">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">Congratulations! 🎉</h2>
          <p className="text-gray-600">You've joined the VALE waitlist</p>
        </div>

        {/* Message */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 border border-blue-100">
          <p className="text-sm text-gray-700 mb-2">
            We've sent a confirmation to:
          </p>
          <p className="text-base font-semibold text-black break-all">{email}</p>
        </div>

        {/* Content */}
        <div className="space-y-3 text-left">
          <div className="flex gap-3">
            <div className="text-2xl">📧</div>
            <div>
              <p className="font-semibold text-black text-sm">Check your email</p>
              <p className="text-gray-600 text-xs">We've sent you a confirmation message</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-2xl">⏳</div>
            <div>
              <p className="font-semibold text-black text-sm">Early access coming soon</p>
              <p className="text-gray-600 text-xs">You'll be among the first to experience VALE</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-2xl">🌍</div>
            <div>
              <p className="font-semibold text-black text-sm">Smarter water access</p>
              <p className="text-gray-600 text-xs">Better way to manage water in Enugu</p>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-2xl transition-colors"
        >
          Close
        </button>

        {/* Social CTA */}
        <p className="text-xs text-gray-500">
          Share your excitement with your network!
        </p>
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
