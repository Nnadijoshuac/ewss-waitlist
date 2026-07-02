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
      {/* Neumorphism Modal */}
      <div
        className="w-full max-w-md p-8 text-center space-y-6 animate-in fade-in scale-95 duration-300"
        style={{
          backgroundColor: '#F5F1EE',
          boxShadow: '8px 8px 16px #d4ccc5, -8px -8px 16px #ffffff',
          borderRadius: '12px 40px 12px 40px'
        }}
      >
        {/* Headline */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">I've got you</h2>
          <p className="text-gray-600 text-sm">You're already registered</p>
        </div>

        {/* Email Box */}
        <div
          className="rounded-2xl p-4"
          style={{
            boxShadow: 'inset 4px 4px 8px #d4ccc5, inset -4px -4px 8px #ffffff'
          }}
        >
          <p className="text-xs text-gray-600 mb-2">
            Email on file
          </p>
          <p className="text-sm font-semibold text-black break-all">{email}</p>
        </div>

        {/* Content */}
        <div className="space-y-4 text-left">
          <div className="space-y-1">
            <p className="font-semibold text-black text-sm">All set</p>
            <p className="text-gray-600 text-xs">No need to sign up again</p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-black text-sm">Check your inbox</p>
            <p className="text-gray-600 text-xs">You'll receive updates about VALE</p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-black text-sm">Early access coming</p>
            <p className="text-gray-600 text-xs">You're already in the queue</p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-2.5 px-4 rounded-2xl transition-colors text-sm"
          style={{
            boxShadow: '6px 6px 12px #d4ccc5, -6px -6px 12px #ffffff'
          }}
        >
          Got it
        </button>
      </div>
    </div>
  )
}
