'use client'

import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { useState } from "react"
import StarryRain from "@/components/starryrain"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarryRain />
      </div>
      {/* Conteúdo da página */}
      <section className="relative z-10 pt-24 pb-8 flex flex-col items-center justify-center px-4">
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

          {/* Botões de navegação */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <Link
              href="/art-commissions"
              className="bg-white text-black font-[Averia_Serif_Libre] text-center py-2 px-4 hover:bg-gray-200 hover:text-black transition-colors"
            >
              Art & Commissions
            </Link>
            <Link
              href="/how-it-works"
              className="bg-white text-black font-[Averia_Serif_Libre] text-center py-2 px-4 hover:bg-gray-200 hover:text-black transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="/prices"
              className="bg-white text-black font-[Averia_Serif_Libre] text-center py-2 px-4 hover:bg-gray-200 hover:text-black transition-colors"
            >
              Prices
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
              Welcome! My name is Rav, I&apos;m a digital artist focused on creating OCs, character design, and fanart,
              always exploring the more imaginative and aesthetic side of art. I&apos;ve been working in the field for 2
              years, with 7 years of experience in art overall.
              </p>
              <p className="text-base font-[Open_Sans] text-white">
              I enjoy turning abstract ideas into drawings that tell stories and capture the essence of characters. In
              my personal projects, I explore themes like the cosmos, mythology, celestial, abyssal, vampires, and
              horror.
              </p>
            </div>

            {/* Botão "Place your Order" */}
            <Link
              href="https://discord.gg/nMPb5QMnp2"
              className="inline-flex items-center gap-2 mt-8 bg-white text-black hover:bg-gray-200 hover:text-black px-6 py-3 rounded transition-colors font-[Averia_Serif_Libre] text-xl" target="_blank"
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
      <section id="Arts" className="py-12 px-4 md:px-8 max-w-6xl mx-auto z-10">
        <h2 className="text-3xl font-abril mb-8">Arts & Commissions</h2>
        <div className="mb-6">
          <h3 className="text-xl font-[Averia_Serif_Libre] mb-4">Recent Commissions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Images */}
            {["BenevientoBr", "couple_forest", "mysterious_boy", "cute_couple"].map((imageName) => (
              <div
                key={imageName}
                className="bg-gray-900 z-10 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(`/${imageName}.png`)}
              >
                <Image
                  src={`/${imageName}.png`}
                  alt={`Commission example ${imageName}`}
                  width={500}
                  height={500}
                  className="w-full h-auto z-10 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Commission"
              width={800}
              height={800}
              className="max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  )
}