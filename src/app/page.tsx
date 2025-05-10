import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-24 pb-8 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center md:pl-40 sm:items-baseline justify-between mb-6">
          {/* Title */}
          <h1 className="font-abril text-white text-4xl sm:text-6xl md:text-7xl tracking-wider text-center sm:text-left">
            MEPHOCODEX
          </h1>

          {/* Instagram Icon */}
          <Link
            href="https://www.instagram.com/mephodovebat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            target="_blank"
            className="mt-4 sm:mt-0 text-white hover:text-gray-300 transition-colors"
          >
            <Instagram size={20} />
          </Link>
        </div>

        <div className="w-full h-px bg-white"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          <Link
            href="/art-commissions"
            className="bg-white text-black font-[Averia_Serif_Libre] text-center py-2 px-4 hover:bg-gray-100 transition-colors"
          >
            Art & Commissions
          </Link>
          <Link
            href="/how-it-works"
            className="bg-white text-black font-[Averia_Serif_Libre] text-center py-2 px-4 hover:bg-gray-100 transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="/prices-faq"
            className="bg-white text-black font-[Averia_Serif_Libre] text-center py-2 px-4 hover:bg-gray-100 transition-colors"
          >
            Prices & FAQ
          </Link>
        </div>

        <div className="w-full h-px bg-white mb-6"></div>
      </div>
    </section>

      {/* Divider */}
      <div className="w-full h-px bg-white my-8 max-w-6xl mx-auto"></div>

      {/* About Me Section */}
      <section className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-abril mb-6 font-normal">About Me</h2>
            <div className="space-y-4 text-white font-open-sans text-base">
              <p className="text-base font-[Open_Sans] text-white">
              Welcome! My name is Rav, I'm a digital artist focused on creating OCs, character design, and fanart,
              always exploring the more imaginative and aesthetic side of art. I've been working in the field for 2
              years, with 7 years of experience in art overall.
              </p>
              <p className="text-base font-[Open_Sans] text-white">
              I enjoy turning abstract ideas into drawings that tell stories and capture the essence of characters. In
              my personal projects, I explore themes like the cosmos, mythology, celestial, abyssal, vampires, and
              horror.
              </p>
            </div>

            <Link
              href="https://discord.com"
              className="inline-flex items-center gap-2 mt-8 bg-white text-black hover:bg-opacity-90 px-6 py-3 rounded transition-colors font-[Averia_Serif_Libre] text-xl"
            >
              <Image
                src="/Discord.png"
                alt="Discord"
                width={20}
                height={20}
                className="h-5 w-5"
              />
              Place your Order!
            </Link>
          </div>

          {/* Icon Section */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative flex justify-center items-center">
              {/* Decorative Elements - Top Left */}
              <div className="absolute -top-0 -left-1 z-0">
                <div className="flex flex-col gap-1 sm:gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex gap-1 sm:gap-2">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/70"
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements - Bottom Right */}
              <div className="absolute -bottom-0 -right-1 z-0">
                <div className="flex flex-col gap-1 sm:gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex gap-1 sm:gap-2">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/70"
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Icon */}
              <div className="w-75 h-75 rounded-full overflow-hidden border-4 border-white z-10">
                <Image
                  src="/Mephocodex_Dainsleif.jpeg"
                  alt="Mephocodex Icon"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-white my-16 max-w-6xl mx-auto"></div>

      {/* Arts & Commissions Section */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-abril mb-8">Arts & Commissions</h2>
        <div className="mb-6">
          <h3 className="text-xl font-[Averia_Serif_Libre] mb-4">Recent Commissions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* First Image */}
            <div className="bg-gray-900 overflow-hidden">
              <Image
                src="/BenevientoBr.png"
                alt="Commission example 1"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Second Image */}
            <div className="bg-gray-900 overflow-hidden">
              <Image
                src="/couple_forest.png"
                alt="Commission example 2"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Third Image */}
            <div className="bg-gray-900 overflow-hidden">
              <Image
                src="/mysterious_boy.png"
                alt="Commission example 3"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Fourth Image */}
            <div className="bg-gray-900 overflow-hidden">
              <Image
                src="/cute_couple.png"
                alt="Commission example 4"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}