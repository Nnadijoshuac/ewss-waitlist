'use client'

import { useEffect, useState } from 'react'

interface ConfettiCelebrationProps {
  isOpen: boolean
  onComplete: () => void
}

export function ConfettiCelebration({ isOpen, onComplete }: ConfettiCelebrationProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    if (isOpen) {
      // Generate confetti pieces
      const pieces = [...Array(100)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
      }))
      setConfetti(pieces)

      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onComplete()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, onComplete])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Full screen confetti background */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-bounce text-3xl"
          style={{
            left: `${piece.left}%`,
            top: `-20px`,
            animation: `fall ${3 + Math.random() * 2}s ease-in forwards`,
            animationDelay: `${piece.delay}s`,
          }}
        >
          {['🎉', '🎊', '✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 6)]}
        </div>
      ))}

      {/* Center message */}
      <div className="fixed inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">
        <div className="text-center space-y-6 animate-in fade-in zoom-in duration-700">
          <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight px-4">
            Congratulations
          </h1>
          <p className="text-3xl lg:text-4xl font-semibold text-black px-4">
            You are now part of the revolution
          </p>
          <div className="text-6xl animate-pulse">🚀</div>
        </div>
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
