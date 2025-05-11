import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#2a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif mb-12">How It Works</h1>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-serif mb-4">1. Contact & Discuss</h2>
              <p className="text-gray-300 font-[Open_Sans]">
                You can reach me on Discord or Instagram. When contacting me, please include visual references such as characters, poses, outfits, aesthetics, expressions, and any other important details.
                If you&apos;re requesting a character design, make sure to provide all the necessary visual references to help me fully understand your idea.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-serif mb-4">2. Payment & Queue</h2>
              <p className="text-gray-300 font-[Open_Sans]">
                Payment must be made 100% upfront — the artwork will not begin until I receive both the payment and the proof of payment.
                I accept payments via Pix, PayPal. Other methods can be discussed if needed.
                Commissions are opened in batches of 5 slots. Once payment is confirmed, you&apos;ll receive a link to track your position in the queue.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <circle cx="13.5" cy="6.5" r="2.5" />
                  <path d="M17 4c0 1.657-1.343 3-3 3" />
                  <path d="M14 10v3l-4 4" />
                  <path d="M6 12a4 4 0 0 1 4-4c2 0 3 1 4 2" />
                  <path d="M16 18a4 4 0 0 0-4-4c-2 0-3 1-4 2" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-serif mb-4">3. Sketches & Revisions</h2>
              <p className="text-gray-300 font-[Open_Sans]">
                I will send you screenshots of each stage of the sketch until it’s completed. Before approval, you can request any kind of changes to ensure it matches your vision.
                Once the sketch is approved, I will begin the painting and final rendering process.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-serif mb-4">4. Completion & Delivery</h2>
              <p className="text-gray-300 font-[Open_Sans]">
                Once the artwork is finished, I will send it in high quality and in your preferred format.
                Any changes requested after completion will require a small additional fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}