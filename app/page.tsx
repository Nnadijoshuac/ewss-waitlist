import Image from 'next/image'
import { WaitlistForm } from './components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 bg-[#F5F1EE]">
      {/* Left Side Image - Tank (left-aligned) */}
      <div className="absolute left-0 top-[50%] -translate-y-1/2 -translate-x-1/3 pointer-events-none hidden lg:flex items-center justify-center">
        <Image
          src={`/tank.png?t=${Date.now()}`}
          alt=""
          width={1333}
          height={1333}
          className="object-contain"
        />
      </div>

      {/* Right Side Image - Tap (3x smaller than tank) */}
      <div className="absolute right-[30%] top-[70%] -translate-y-1/2 pointer-events-none hidden lg:flex items-center justify-center">
        <Image
          src={`/tap.png?t=${Date.now()}`}
          alt=""
          width={333}
          height={333}
          className="object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="w-full max-w-md relative z-10">
        {/* Neumorphism Form Box */}
        <div className="rounded-3xl p-8 md:p-10" style={{
          backgroundColor: '#F5F1EE',
          boxShadow: '8px 8px 16px #d4ccc5, -8px -8px 16px #ffffff'
        }}>
          {/* Header */}
          <div className="text-center mb-10">
            <div className="mb-6 flex justify-center">
              <Image
                src={`/logo.png?t=${Date.now()}`}
                alt="VALE Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl font-bold text-black mb-4 leading-tight">
              Smarter water access.
              <br />
              Stronger communities.
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              Join the waitlist and be among the first to experience a better way
              to access, manage, and improve water in Enugu.
            </p>
          </div>

          {/* Form Section */}
          <div className="space-y-4">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </main>
  )
}
