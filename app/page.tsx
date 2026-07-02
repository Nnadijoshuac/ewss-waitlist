import Image from 'next/image'
import { WaitlistForm } from './components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 bg-[#F5F1EE] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 opacity-30 pointer-events-none">
        <Image
          src={`/tank.png?t=${Date.now()}`}
          alt=""
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-30 pointer-events-none">
        <Image
          src={`/tap.png?t=${Date.now()}`}
          alt=""
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="w-full max-w-2xl relative z-10">
        {/* White Content Box */}
        <div className="bg-white rounded-3xl shadow-lg p-12 md:p-16">
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

          {/* Form Section */}
          <div className="space-y-6">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </main>
  )
}
