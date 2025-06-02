import Link from "next/link"
import { ArrowLeft, Heart, MessageCircle, CreditCard, Palette, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-amber-50 text-black relative overflow-hidden">
      {/* ===== CORAÇÕES DECORATIVOS ANIMADOS - RESPONSIVOS ===== */}
      
      {/* Corações nas laterais - apenas em telas grandes */}
      <div className="hidden lg:block">
        {/* Lado esquerdo */}
        <div className="absolute top-20 left-4 xl:left-8 text-rose-400 opacity-30 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-bounce" style={{ animationDelay: "0s", animationDuration: "4s" }} />
        </div>
        <div className="absolute top-40 left-6 xl:left-10 text-pink-400 opacity-25 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-pulse" style={{ animationDelay: "1.5s", animationDuration: "5s" }} />
        </div>
        <div className="absolute top-64 left-4 xl:left-8 text-rose-500 opacity-35 z-0">
          <Heart className="h-5 w-5 xl:h-6 xl:w-6 animate-ping" style={{ animationDelay: "3s", animationDuration: "6s" }} />
        </div>
        <div className="absolute top-96 left-6 xl:left-10 text-pink-500 opacity-20 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-bounce" style={{ animationDelay: "4.5s", animationDuration: "4.5s" }} />
        </div>
        <div className="absolute top-[30rem] left-4 xl:left-8 text-rose-400 opacity-30 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-pulse" style={{ animationDelay: "6s", animationDuration: "5.5s" }} />
        </div>
        <div className="absolute top-[40rem] left-6 xl:left-10 text-pink-400 opacity-25 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-bounce" style={{ animationDelay: "7.5s", animationDuration: "4s" }} />
        </div>

        {/* Lado direito */}
        <div className="absolute top-32 right-4 xl:right-8 text-pink-400 opacity-30 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-pulse" style={{ animationDelay: "1s", animationDuration: "4.8s" }} />
        </div>
        <div className="absolute top-56 right-6 xl:right-10 text-rose-500 opacity-25 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-bounce" style={{ animationDelay: "2.5s", animationDuration: "5.2s" }} />
        </div>
        <div className="absolute top-80 right-4 xl:right-8 text-pink-500 opacity-35 z-0">
          <Heart className="h-5 w-5 xl:h-6 xl:w-6 animate-ping" style={{ animationDelay: "4s", animationDuration: "6.5s" }} />
        </div>
        <div className="absolute top-[26rem] right-6 xl:right-10 text-rose-400 opacity-20 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-pulse" style={{ animationDelay: "5.5s", animationDuration: "4.2s" }} />
        </div>
        <div className="absolute top-[34rem] right-4 xl:right-8 text-pink-400 opacity-30 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-bounce" style={{ animationDelay: "7s", animationDuration: "5.8s" }} />
        </div>
        <div className="absolute top-[44rem] right-6 xl:right-10 text-rose-500 opacity-25 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-pulse" style={{ animationDelay: "8.5s", animationDuration: "4.5s" }} />
        </div>
      </div>

      {/* Corações flutuantes no topo - visíveis em todas as telas mas estrategicamente posicionados */}
      <div className="absolute top-4 left-1/4 md:left-1/3 text-rose-300 opacity-20 z-0">
        <Heart className="h-3 w-3 md:h-4 md:w-4 animate-bounce" style={{ animationDelay: "2s", animationDuration: "7s" }} />
      </div>
      <div className="absolute top-8 right-1/4 md:right-1/3 text-pink-300 opacity-15 z-0">
        <Heart className="h-2 w-2 md:h-3 md:w-3 animate-pulse" style={{ animationDelay: "3.5s", animationDuration: "8s" }} />
      </div>
      <div className="absolute top-12 left-1/2 text-rose-300 opacity-25 z-0">
        <Heart className="h-3 w-3 md:h-4 md:w-4 animate-ping" style={{ animationDelay: "5s", animationDuration: "9s" }} />
      </div>

      {/* Corações flutuantes na parte inferior - apenas em telas médias e grandes */}
      <div className="hidden md:block">
        <div className="absolute bottom-20 left-1/5 text-rose-300 opacity-20 z-0">
          <Heart className="h-3 w-3 lg:h-4 lg:w-4 animate-bounce" style={{ animationDelay: "9s", animationDuration: "5.5s" }} />
        </div>
        <div className="absolute bottom-32 right-1/5 text-pink-300 opacity-25 z-0">
          <Heart className="h-4 w-4 lg:h-5 lg:w-5 animate-pulse" style={{ animationDelay: "10.5s", animationDuration: "6.8s" }} />
        </div>
        <div className="absolute bottom-16 left-1/3 text-rose-400 opacity-15 z-0">
          <Heart className="h-2 w-2 lg:h-3 lg:w-3 animate-ping" style={{ animationDelay: "12s", animationDuration: "7.2s" }} />
        </div>
        <div className="absolute bottom-28 right-1/3 text-pink-400 opacity-20 z-0">
          <Heart className="h-3 w-3 lg:h-4 lg:w-4 animate-bounce" style={{ animationDelay: "13.5s", animationDuration: "4.8s" }} />
        </div>
      </div>

      {/* Corações nos cantos extremos - apenas em telas extra grandes */}
      <div className="hidden xl:block">
        <div className="absolute top-1/4 left-2 text-rose-200 opacity-15 z-0">
          <Heart className="h-3 w-3 animate-pulse" style={{ animationDelay: "15s", animationDuration: "8.5s" }} />
        </div>
        <div className="absolute top-2/3 right-2 text-pink-200 opacity-20 z-0">
          <Heart className="h-4 w-4 animate-bounce" style={{ animationDelay: "16.5s", animationDuration: "6s" }} />
        </div>
        <div className="absolute bottom-1/4 left-2 text-rose-300 opacity-10 z-0">
          <Heart className="h-2 w-2 animate-ping" style={{ animationDelay: "18s", animationDuration: "9.5s" }} />
        </div>
        <div className="absolute top-1/3 right-2 text-pink-300 opacity-15 z-0">
          <Heart className="h-3 w-3 animate-pulse" style={{ animationDelay: "19.5s", animationDuration: "7.8s" }} />
        </div>
      </div>

      {/* ===== CONTAINER PRINCIPAL ===== */}
      <div className="max-w-5xl mx-auto px-4 py-12 relative z-20">
        {/* ===== BOTÃO VOLTAR ===== */}
        <Link
          href="/"
          className="inline-flex items-center text-rose-600 hover:text-pink-600 mb-8 transition-all duration-300 transform hover:scale-105 drop-shadow-lg"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>

        {/* ===== CABEÇALHO DA PÁGINA ===== */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-comfortaa font-bold mb-6 text-rose-800 drop-shadow-lg">
            How It Works
          </h1>

          {/* Linha decorativa colorida */}
          <div className="w-32 md:w-40 h-2 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 mx-auto rounded-full mb-6"></div>

          {/* Subtítulo explicativo */}
          <p className="text-lg md:text-xl font-nunito text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            From initial contact to final delivery, here&apos;s how we bring your artistic vision to life! ✨
          </p>

          {/* Ícones decorativos animados */}
          <div className="flex justify-center gap-4 mt-8">
            <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-400 animate-bounce" style={{ animationDelay: "0s" }} />
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-rose-400 animate-bounce" style={{ animationDelay: "0.3s" }} />
            <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-400 animate-bounce" style={{ animationDelay: "0.6s" }} />
          </div>
        </div>

        {/* ===== SEÇÃO DE ETAPAS DO PROCESSO ===== */}
        <div className="space-y-16 md:space-y-20">
          {/* ===== ETAPA 1: CONTACT & DISCUSS ===== */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <div className="lg:w-1/4 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-pink-200 to-rose-200 shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                  <MessageCircle className="h-12 w-12 md:h-16 md:w-16 text-rose-800" />
                </div>

                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center justify-center font-comfortaa font-bold text-sm md:text-lg shadow-lg">
                  1
                </div>

                <div className="absolute -bottom-2 -left-2">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-rose-500 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-4 border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl md:text-3xl font-comfortaa font-bold mb-4 md:mb-6 text-rose-800">1. Contact & Discuss</h2>
                <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-700 font-nunito text-base md:text-lg leading-relaxed">
                  You can reach me on Discord or Instagram. When contacting me, please include visual references such as characters, poses, outfits, aesthetics, expressions, and any other important details.
                  If you&apos;re requesting a character design, make sure to provide all the necessary visual references to help me fully understand your idea.
                </p>
              </div>
            </div>
          </div>

          {/* ===== ETAPA 2: PAYMENT & QUEUE ===== */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="lg:w-1/4 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-rose-200 to-pink-300 shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                  <CreditCard className="h-12 w-12 md:h-16 md:w-16 text-rose-800" />
                </div>

                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center justify-center font-comfortaa font-bold text-sm md:text-lg shadow-lg">
                  2
                </div>

                <div className="absolute -bottom-2 -left-2">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-500 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-4 border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl md:text-3xl font-comfortaa font-bold mb-4 md:mb-6 text-rose-800">2. Payment & Queue</h2>
                <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-700 font-nunito text-base md:text-lg leading-relaxed">
                  Payment must be made 100% upfront — the artwork will not begin until I receive both the payment and the proof of payment.
                  I accept payments via Pix, PayPal. Other methods can be discussed if needed.
                  Commissions are opened in batches of 5 slots. Once payment is confirmed, you&apos;ll receive a link to track your position in the queue.
                </p>
              </div>
            </div>
          </div>

          {/* ===== ETAPA 3: SKETCHES & REVISIONS ===== */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <div className="lg:w-1/4 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                  <Palette className="h-12 w-12 md:h-16 md:w-16 text-rose-800" />
                </div>

                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center justify-center font-comfortaa font-bold text-sm md:text-lg shadow-lg">
                  3
                </div>

                <div className="absolute -bottom-2 -left-2">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-rose-500 animate-bounce" />
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-4 border-pink-300 shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl md:text-3xl font-comfortaa font-bold mb-4 md:mb-6 text-rose-800">3. Sketches & Revisions</h2>
                <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-700 font-nunito text-base md:text-lg leading-relaxed">
                  I will send you screenshots of each stage of the sketch until it&apos;s completed. Before approval, you can request any kind of changes to ensure it matches your vision.
                  Once the sketch is approved, I will begin the painting and final rendering process.
                </p>
              </div>
            </div>
          </div>

          {/* ===== ETAPA 4: COMPLETION & DELIVERY ===== */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="lg:w-1/4 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-rose-600 to-pink-600 shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-white" />
                </div>

                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center justify-center font-comfortaa font-bold text-sm md:text-lg shadow-lg">
                  4
                </div>

                <div className="absolute -bottom-2 -left-2">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-400 animate-bounce" />
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-4 border-rose-300 shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl md:text-3xl font-comfortaa font-bold mb-4 md:mb-6 text-rose-800">4. Completion & Delivery</h2>
                <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-700 font-nunito text-base md:text-lg leading-relaxed">
                  Once the artwork is finished, I will send it in high quality and in your preferred format.
                  Any changes requested after completion will require a small additional fee.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO CALL-TO-ACTION FINAL ===== */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-pink-200 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-comfortaa font-bold mb-4 md:mb-6 text-rose-800">Ready to Start?</h3>
            <p className="text-lg md:text-xl font-nunito text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Let&apos;s bring your artistic vision to life! Contact me on Discord to begin your commission journey. ✨
            </p>

            <Link
              href="https://discord.gg/nMPb5QMnp2"
              target="_blank"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-300 px-8 md:px-10 py-4 md:py-5 rounded-full font-nunito font-bold shadow-lg transform hover:scale-105"
            >
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
                className="h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse"
              >
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
                <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
                <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
              </svg>
              <span className="text-sm md:text-base">Start Your Commission!</span>
              <Heart className="h-5 w-5 md:h-6 md:w-6 group-hover:text-pink-200 transition-colors duration-300" />
            </Link>

            <div className="flex justify-center gap-4 md:gap-6 mt-6 md:mt-8">
              <Heart className="h-6 w-6 md:h-8 md:w-8 text-pink-400 animate-bounce" style={{ animationDelay: "0s" }} />
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-rose-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <Palette className="h-6 w-6 md:h-7 md:w-7 text-pink-500 animate-ping" style={{ animationDelay: "1s" }} />
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-rose-600 animate-bounce" style={{ animationDelay: "1.5s" }} />
              <Heart className="h-6 w-6 md:h-8 md:w-8 text-pink-400 animate-pulse" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}