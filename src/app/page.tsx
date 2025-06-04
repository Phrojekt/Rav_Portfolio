'use client'

import Image from "next/image"
import Link from "next/link"
import { Instagram, Heart } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-amber-50 text-black relative overflow-hidden">
      {/* ===== CORAÇÕES DECORATIVOS ANIMADOS - RESPONSIVOS ===== */}
      {/* Corações nas laterais - apenas em telas maiores */}
      <div className="hidden lg:block">
        {/* Lado esquerdo */}
        <div className="absolute top-20 left-4 xl:left-8 text-red-400 opacity-40 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
        </div>
        <div className="absolute top-40 left-8 xl:left-12 text-red-400 opacity-30 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-pulse" style={{ animationDelay: "1s", animationDuration: "4s" }} />
        </div>
        <div className="absolute top-64 left-4 xl:left-8 text-red-500 opacity-35 z-0">
          <Heart className="h-5 w-5 xl:h-6 xl:w-6 animate-ping" style={{ animationDelay: "2s", animationDuration: "5s" }} />
        </div>
        <div className="absolute top-96 left-6 xl:left-10 text-red-500 opacity-30 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-bounce" style={{ animationDelay: "3s", animationDuration: "3.5s" }} />
        </div>
        <div className="absolute top-[30rem] left-4 xl:left-8 text-red-400 opacity-40 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-pulse" style={{ animationDelay: "4s", animationDuration: "4.5s" }} />
        </div>

        {/* Lado direito */}
        <div className="absolute top-32 right-4 xl:right-8 text-red-400 opacity-35 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "3.8s" }} />
        </div>
        <div className="absolute top-56 right-8 xl:right-12 text-red-500 opacity-30 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "4.2s" }} />
        </div>
        <div className="absolute top-80 right-4 xl:right-8 text-red-500 opacity-40 z-0">
          <Heart className="h-5 w-5 xl:h-6 xl:w-6 animate-ping" style={{ animationDelay: "2.5s", animationDuration: "5.2s" }} />
        </div>
        <div className="absolute top-[26rem] right-6 xl:right-10 text-red-400 opacity-30 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-pulse" style={{ animationDelay: "3.5s", animationDuration: "3.2s" }} />
        </div>
        <div className="absolute top-[34rem] right-4 xl:right-8 text-red-400 opacity-35 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-bounce" style={{ animationDelay: "4.5s", animationDuration: "4.8s" }} />
        </div>
      </div>

      {/* Corações flutuantes no topo - visíveis em todas as telas mas posicionados para não atrapalhar */}
      <div className="absolute top-4 left-1/4 md:left-1/3 text-red-300 opacity-25 z-0">
        <Heart className="h-3 w-3 md:h-4 md:w-4 animate-bounce" style={{ animationDelay: "1s", animationDuration: "6s" }} />
      </div>
      <div className="absolute top-8 right-1/4 md:right-1/3 text-red-300 opacity-20 z-0">
        <Heart className="h-2 w-2 md:h-3 md:w-3 animate-pulse" style={{ animationDelay: "2s", animationDuration: "7s" }} />
      </div>
      <div className="absolute top-12 left-1/2 text-red-300 opacity-30 z-0">
        <Heart className="h-3 w-3 md:h-4 md:w-4 animate-ping" style={{ animationDelay: "3s", animationDuration: "8s" }} />
      </div>

      {/* Corações flutuantes na parte inferior - apenas em telas médias e grandes */}
      <div className="hidden md:block">
        <div className="absolute bottom-20 left-1/5 text-red-300 opacity-25 z-0">
          <Heart className="h-3 w-3 lg:h-4 lg:w-4 animate-bounce" style={{ animationDelay: "5s", animationDuration: "4.5s" }} />
        </div>
        <div className="absolute bottom-32 right-1/5 text-red-300 opacity-30 z-0">
          <Heart className="h-4 w-4 lg:h-5 lg:w-5 animate-pulse" style={{ animationDelay: "6s", animationDuration: "5.5s" }} />
        </div>
        <div className="absolute bottom-16 left-1/3 text-red-400 opacity-20 z-0">
          <Heart className="h-2 w-2 lg:h-3 lg:w-3 animate-ping" style={{ animationDelay: "7s", animationDuration: "6.5s" }} />
        </div>
        <div className="absolute bottom-28 right-1/3 text-red-400 opacity-25 z-0">
          <Heart className="h-3 w-3 lg:h-4 lg:w-4 animate-bounce" style={{ animationDelay: "8s", animationDuration: "3.8s" }} />
        </div>
      </div>

      {/* Corações nos cantos - apenas em telas extra grandes */}
      <div className="hidden xl:block">
        <div className="absolute top-1/3 left-2 text-red-200 opacity-20 z-0">
          <Heart className="h-3 w-3 animate-pulse" style={{ animationDelay: "9s", animationDuration: "7s" }} />
        </div>
        <div className="absolute top-2/3 right-2 text-red-200 opacity-25 z-0">
          <Heart className="h-4 w-4 animate-bounce" style={{ animationDelay: "10s", animationDuration: "5s" }} />
        </div>
        <div className="absolute bottom-1/3 left-2 text-red-300 opacity-15 z-0">
          <Heart className="h-2 w-2 animate-ping" style={{ animationDelay: "11s", animationDuration: "8s" }} />
        </div>
        <div className="absolute top-1/4 right-2 text-red-300 opacity-20 z-0">
          <Heart className="h-3 w-3 animate-pulse" style={{ animationDelay: "12s", animationDuration: "6s" }} />
        </div>
      </div>

      {/* ===== SEÇÃO HEADER/CABEÇALHO ===== */}
      <header className="pt-16 pb-8 flex flex-col items-center max-w-6xl mx-auto px-4 relative z-20">
        <div className="text-center mb-8 relative w-full">
          {/* ===== ÍCONES DE REDES SOCIAIS - POSICIONAMENTO RESPONSIVO ===== */}
          <div className="absolute right-0 top-0 sm:right-4 md:right-8 lg:right-0 flex items-center gap-4 z-30">
            <Link
              href="https://www.instagram.com/mephodovebat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              aria-label="Instagram"
              target="_blank"
              className="text-red-900 hover:text-red-600 transition-all duration-300 transform hover:scale-110 drop-shadow-lg bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border-2 border-red-400/50"
            >
              <Instagram className="h-6 w-6 sm:h-7 sm:w-7" />
            </Link>
          </div>

          {/* ===== LOGO PRINCIPAL ===== */}
          <div className="flex justify-center mb-6 px-12 sm:px-16 md:px-20 lg:px-0">
            <Image
              src="/Ravly_logo.png"
              alt="Ravly Logo"
              width={400}
              height={150}
              className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-500 transform hover:scale-105 max-w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* ===== SEÇÃO DE NAVEGAÇÃO ===== */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Linha decorativa superior */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-800 to-transparent rounded-full mb-8"></div>

          {/* ===== BOTÕES DE NAVEGAÇÃO ===== */}
          <nav className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link
              href="#Arts"
              className="group relative bg-gradient-to-r from-red-800 to-red-900 text-white transition-all duration-300 py-3 px-6 text-center rounded-3xl font-nunito font-bold shadow-lg transform hover:scale-105 hover:bg-gradient-to-r hover:from-red-900 hover:to-[#6D1A1A]"
            >
              <span className="relative z-10">Art & Commissions</span>
            </Link>
            <Link
              href="/how-it-works"
              className="group relative bg-gradient-to-r from-red-800 to-red-900 text-white transition-all duration-300 py-3 px-6 text-center rounded-3xl font-nunito font-bold shadow-lg transform hover:scale-105 hover:bg-gradient-to-r hover:from-red-900 hover:to-[#6D1A1A]"
            >
              <span className="relative z-10">How it Works</span>
            </Link>
            <Link
              href="/prices"
              className="group relative bg-gradient-to-r from-red-800 to-red-900 text-white transition-all duration-300 py-3 px-6 text-center rounded-3xl font-nunito font-bold shadow-lg transform hover:scale-105 hover:bg-gradient-to-r hover:from-red-900 hover:to-[#6D1A1A]"
            >
              <span className="relative z-10">Prices</span>
            </Link>
          </nav>

          {/* Linha decorativa inferior */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-800 to-transparent rounded-full"></div>
        </div>
      </header>

      {/* ===== SEÇÃO ABOUT ME ===== */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto relative z-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* ===== CONTEÚDO TEXTUAL ===== */}
          <div className="md:w-2/3">
            <h2 className="text-5xl font-comfortaa text-red-800 font-bold mb-8 drop-shadow-lg">About Me</h2>

            {/* ===== PARÁGRAFOS INFORMATIVOS ===== */}
            <div className="space-y-6 text-gray-700">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-red-900">
                <p className="font-nunito text-lg leading-relaxed">
                  Welcome! My name is Rav, I&apos;m a digital artist focused on creating OCs, character design, and fanart,
                  always exploring the more imaginative and aesthetic side of art. I&apos;ve been working in the field for 2
                  years, with 7 years of experience in art overall.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-red-900">
                <p className="font-nunito text-lg leading-relaxed">
                  I enjoy turning abstract ideas into drawings that tell stories and capture the essence of characters.
                  In my personal projects, I explore themes like the cosmos, mythology, celestial, abyssal, vampires,
                  and horror.
                </p>
              </div>
            </div>

            {/* ===== BOTÃO CALL-TO-ACTION ===== */}
            <Link
              href="https://discord.gg/nMPb5QMnp2"
              target="_blank"
              className="group inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-red-800 to-red-900 text-white hover:from-red-900 hover:to-[#6D1A1A] hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-nunito font-bold shadow-lg transform hover:scale-105"
            >
              <Image
                src="/Discord.png"
                alt="Discord"
                width={24}
                height={24}
                className="h-6 w-6 group-hover:animate-pulse"
              />
              Place your Order!
              <Heart className="h-5 w-5 group-hover:text-red-200 transition-colors duration-300" />
            </Link>
          </div>

          {/* ===== FOTO DE PERFIL COM DECORATIVE DOTS ===== */}
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
                          className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-900/70"
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
                          className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-800/70"
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Image */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden relative border-4  border-red-900 shadow-xl z-10">
                <Image
                  src="/Mephocodex_Dainsleif.jpeg"
                  alt="Mephocodex Icon"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LINHA DIVISÓRIA SECUNDÁRIA ===== */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-800 to-transparent my-16 max-w-6xl mx-auto"></div>

      {/* ===== SEÇÃO ARTS & COMMISSIONS ===== */}
      <section id="Arts" className="py-12 px-4 md:px-8 max-w-6xl mx-auto relative z-20">
        <h2 className="text-5xl font-comfortaa font-bold mb-8 text-red-800 drop-shadow-lg text-center">
          Arts & Commissions
        </h2>

        <div className="mb-6">
          <h3 className="text-2xl mb-8 font-nunito font-bold text-red-700 text-center">Recent Commissions</h3>

          {/* ===== GRID DE IMAGENS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["BenevientoBr", "couple_forest", "mysterious_boy", "cute_couple"].map((imageName) => (
              <div
                key={imageName}
                className="group bg-white rounded-3xl overflow-hidden border-4 border-red-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer relative z-10"
                onClick={() => setSelectedImage(`/${imageName}.png`)}
              >
                <Image
                  src={`/${imageName}.png`}
                  alt={`Commission example ${imageName}`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
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
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 hover:bg-red-600 transition-colors"
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
