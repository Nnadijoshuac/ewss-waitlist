import Image from 'next/image'
import { WaitlistForm } from './components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-widest text-black mb-8">
            VALE
          </h1>

          {/* Main Headline */}
          <h2 className="text-5xl font-bold text-black mb-6 leading-tight">
            Smarter water access.
            <br />
            Stronger communities.
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Join the waitlist and be among the first to experience a better way
            to access, manage, and improve water in Enugu.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-xs aspect-square bg-gradient-to-b from-gray-100 to-gray-50 rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center gap-4 p-8">
              {/* Tank Image */}
              <div className="relative w-1/2 h-full flex items-center justify-center">
                <Image
                  src="/tank.png"
                  alt="Water Tank"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Tap Image */}
              <div className="relative w-1/2 h-full flex items-center justify-center">
                <Image
                  src="/tap.png"
                  alt="Water Tap"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <WaitlistForm />
        </div>
      </div>
    </main>
  )
}
