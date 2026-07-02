import Image from 'next/image'
import { WaitlistForm } from './components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 bg-[#F5F1EE]">
      {/* Left Side Image - Tank (Desktop: large, Mobile: small) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none flex lg:hidden items-center justify-center w-16 h-16">
        <Image
          src={`/tank.png?t=${Date.now()}`}
          alt=""
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <div className="absolute left-0 top-[50%] -translate-y-1/2 -translate-x-1/2 pointer-events-none hidden lg:flex items-center justify-center">
        <Image
          src={`/tank.png?t=${Date.now()}`}
          alt=""
          width={1333}
          height={1333}
          className="object-contain"
        />
      </div>

      {/* Right Side Image - Tap (Desktop: small, Mobile: tiny) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 pointer-events-none flex lg:hidden items-center justify-center w-20 h-20">
        <Image
          src={`/tap.png?t=${Date.now()}`}
          alt=""
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <div className="absolute right-[5%] top-[70%] -translate-y-1/2 pointer-events-none hidden lg:flex items-center justify-center">
        <Image
          src={`/tap.png?t=${Date.now()}`}
          alt=""
          width={333}
          height={333}
          className="object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="w-full max-w-[280px] lg:max-w-md relative z-10">
        {/* Neumorphism Form Box */}
        <div className="rounded-2xl lg:rounded-3xl p-5 lg:p-8" style={{
          backgroundColor: '#F5F1EE',
          boxShadow: '8px 8px 16px #d4ccc5, -8px -8px 16px #ffffff'
        }}>
          {/* Header */}
          <div className="text-center mb-5 lg:mb-8">
            <div className="mb-3 lg:mb-5 flex justify-center">
              <Image
                src={`/logo.png?t=${Date.now()}`}
                alt="VALE Logo"
                width={80}
                height={40}
                className="object-contain lg:w-[100px]"
              />
            </div>

            {/* Main Headline */}
            <h2 className="text-xl lg:text-3xl font-bold text-black mb-2 lg:mb-3 leading-tight">
              Smarter water access.
              <br />
              Stronger communities.
            </h2>

            {/* Description */}
            <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
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
