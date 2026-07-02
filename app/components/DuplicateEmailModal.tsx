'use client'

interface DuplicateEmailModalProps {
  isOpen: boolean
  email: string
  onClose: () => void
}

export function DuplicateEmailModal({ isOpen, email, onClose }: DuplicateEmailModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      {/* Modal */}
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-8 text-center space-y-6 animate-in fade-in scale-95 duration-300">
        {/* Icon */}
        <div className="flex justify-center text-6xl animate-bounce">
          ✋
        </div>

        {/* Headline */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">I've got you! 😎</h2>
          <p className="text-gray-600">You're already part of the revolution</p>
        </div>

        {/* Message */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 border border-blue-100">
          <p className="text-sm text-gray-700 mb-2">
            This email is already registered:
          </p>
          <p className="text-base font-semibold text-black break-all">{email}</p>
        </div>

        {/* Content */}
        <div className="space-y-3 text-left">
          <div className="flex gap-3">
            <div className="text-2xl">✅</div>
            <div>
              <p className="font-semibold text-black text-sm">You're all set</p>
              <p className="text-gray-600 text-xs">No need to sign up again</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-2xl">📧</div>
            <div>
              <p className="font-semibold text-black text-sm">Check your inbox</p>
              <p className="text-gray-600 text-xs">You'll get updates about VALE</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-2xl">🚀</div>
            <div>
              <p className="font-semibold text-black text-sm">Early access coming</p>
              <p className="text-gray-600 text-xs">You're already in the queue</p>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-2xl transition-colors"
        >
          Got it! 👍
        </button>
      </div>
    </div>
  )
}
