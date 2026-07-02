import Image from 'next/image'
import { WaitlistForm } from './components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-[#F5F1EE]">
      {/* Responsive Container - Tank, Form, Tap aligned at bottom */}
      <div className="relative w-full flex items-end justify-center gap-2 lg:gap-8">

        {/* Left Side Image - Tank (responsive height = form height) */}
        <div className="absolute left-[-150px] bottom-[-40px] pointer-events-none hidden lg:block h-full">
          <Image
            src={`/tank.png?t=${Date.now()}`}
            alt=""
            width={1000}
            height={1000}
            className="object-contain h-full w-auto"
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
                src={`/vale.png?t=${Date.now()}`}
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
          <div className="space-y-3">
            <WaitlistForm />
          </div>
        </div>
        </div>

        {/* Right Side Image - Tap (responsive height = 1/3 of form) */}
        <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block w-1/6">
          <Image
            src={`/tap.png?t=${Date.now()}`}
            alt=""
            width={250}
            height={250}
            className="object-contain w-full h-auto"
          />
        </div>

      </div>
    </main>
  )
}
