import Link from "next/link"
import { ArrowLeft, Heart, Star } from "lucide-react"

export default function PricesFAQ() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-amber-50 text-black relative overflow-hidden">
      {/* ===== CORAÇÕES DECORATIVOS ANIMADOS - RESPONSIVOS ===== */}
      
      {/* Corações nas laterais - apenas em telas grandes */}
      <div className="hidden lg:block">
        {/* Lado esquerdo */}
        <div className="absolute top-20 left-4 xl:left-8 text-rose-400 opacity-60 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-bounce" style={{ animationDelay: "0s", animationDuration: "5s" }} />
        </div>
        <div className="absolute top-40 left-6 xl:left-10 text-pink-400 opacity-50 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-pulse" style={{ animationDelay: "2s", animationDuration: "6s" }} />
        </div>
        <div className="absolute top-64 left-4 xl:left-8 text-rose-500 opacity-30 z-0">
          <Heart className="h-5 w-5 xl:h-6 xl:w-6 animate-ping" style={{ animationDelay: "4s", animationDuration: "7s" }} />
        </div>
        <div className="absolute top-96 left-6 xl:left-10 text-pink-500 opacity-35 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-bounce" style={{ animationDelay: "6s", animationDuration: "5.5s" }} />
        </div>
        <div className="absolute top-[30rem] left-4 xl:left-8 text-rose-400 opacity-45 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-pulse" style={{ animationDelay: "8s", animationDuration: "6.5s" }} />
        </div>
        <div className="absolute top-[40rem] left-6 xl:left-10 text-pink-400 opacity-30 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-bounce" style={{ animationDelay: "10s", animationDuration: "5s" }} />
        </div>
        <div className="absolute top-[50rem] left-4 xl:left-8 text-rose-500 opacity-30 z-0">
          <Heart className="h-5 w-5 xl:h-6 xl:w-6 animate-ping" style={{ animationDelay: "12s", animationDuration: "8s" }} />
        </div>
        <div className="absolute top-[60rem] left-6 xl:left-10 text-pink-500 opacity-35 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-pulse" style={{ animationDelay: "14s", animationDuration: "6s" }} />
        </div>

        {/* Lado direito */}
        <div className="absolute top-32 right-4 xl:right-8 text-pink-400 opacity-45 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-pulse" style={{ animationDelay: "1s", animationDuration: "5.8s" }} />
        </div>
        <div className="absolute top-56 right-6 xl:right-10 text-rose-500 opacity-50 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-bounce" style={{ animationDelay: "3s", animationDuration: "6.2s" }} />
        </div>
        <div className="absolute top-80 right-4 xl:right-8 text-pink-500 opacity-60 z-0">
          <Heart className="h-5 w-5 xl:h-6 xl:w-6 animate-ping" style={{ animationDelay: "5s", animationDuration: "7.5s" }} />
        </div>
        <div className="absolute top-[26rem] right-6 xl:right-10 text-rose-400 opacity-65 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-pulse" style={{ animationDelay: "7s", animationDuration: "5.2s" }} />
        </div>
        <div className="absolute top-[34rem] right-4 xl:right-8 text-pink-400 opacity-45 z-0">
          <Heart className="h-4 w-4 xl:h-5 xl:w-5 animate-bounce" style={{ animationDelay: "9s", animationDuration: "6.8s" }} />
        </div>
        <div className="absolute top-[44rem] right-6 xl:right-10 text-rose-500 opacity-30 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-pulse" style={{ animationDelay: "11s", animationDuration: "5.5s" }} />
        </div>
        <div className="absolute top-[54rem] right-4 xl:right-8 text-pink-500 opacity-30 z-0">
          <Heart className="h-5 w-5 xl:h-6 xl:w-6 animate-ping" style={{ animationDelay: "13s", animationDuration: "8.2s" }} />
        </div>
        <div className="absolute top-[64rem] right-6 xl:right-10 text-rose-400 opacity-25 z-0">
          <Heart className="h-3 w-3 xl:h-4 xl:w-4 animate-bounce" style={{ animationDelay: "15s", animationDuration: "6.5s" }} />
        </div>
      </div>

      {/* Corações flutuantes no topo - visíveis em todas as telas mas estrategicamente posicionados */}
      <div className="absolute top-4 left-1/4 md:left-1/3 text-rose-300 opacity-15 z-0">
        <Heart className="h-3 w-3 md:h-4 md:w-4 animate-bounce" style={{ animationDelay: "3s", animationDuration: "8s" }} />
      </div>
      <div className="absolute top-8 right-1/4 md:right-1/3 text-pink-300 opacity-10 z-0">
        <Heart className="h-2 w-2 md:h-3 md:w-3 animate-pulse" style={{ animationDelay: "5s", animationDuration: "9s" }} />
      </div>
      <div className="absolute top-12 left-1/2 text-rose-300 opacity-20 z-0">
        <Heart className="h-3 w-3 md:h-4 md:w-4 animate-ping" style={{ animationDelay: "7s", animationDuration: "10s" }} />
      </div>

      {/* Corações flutuantes na parte inferior - apenas em telas médias e grandes */}
      <div className="hidden md:block">
        <div className="absolute bottom-20 left-1/5 text-rose-300 opacity-15 z-0">
          <Heart className="h-3 w-3 lg:h-4 lg:w-4 animate-bounce" style={{ animationDelay: "16s", animationDuration: "6.5s" }} />
        </div>
        <div className="absolute bottom-32 right-1/5 text-pink-300 opacity-20 z-0">
          <Heart className="h-4 w-4 lg:h-5 lg:w-5 animate-pulse" style={{ animationDelay: "18s", animationDuration: "7.8s" }} />
        </div>
        <div className="absolute bottom-16 left-1/3 text-rose-400 opacity-10 z-0">
          <Heart className="h-2 w-2 lg:h-3 lg:w-3 animate-ping" style={{ animationDelay: "20s", animationDuration: "8.5s" }} />
        </div>
        <div className="absolute bottom-28 right-1/3 text-pink-400 opacity-15 z-0">
          <Heart className="h-3 w-3 lg:h-4 lg:w-4 animate-bounce" style={{ animationDelay: "22s", animationDuration: "5.8s" }} />
        </div>
        <div className="absolute bottom-40 left-2/5 text-rose-300 opacity-25 z-0">
          <Heart className="h-4 w-4 lg:h-5 lg:w-5 animate-pulse" style={{ animationDelay: "24s", animationDuration: "7.2s" }} />
        </div>
        <div className="absolute bottom-12 right-2/5 text-pink-500 opacity-20 z-0">
          <Heart className="h-3 w-3 lg:h-4 lg:w-4 animate-ping" style={{ animationDelay: "26s", animationDuration: "9s" }} />
        </div>
      </div>

      {/* Corações nos cantos extremos - apenas em telas extra grandes */}
      <div className="hidden xl:block">
        <div className="absolute top-1/4 left-2 text-rose-200 opacity-10 z-0">
          <Heart className="h-3 w-3 animate-pulse" style={{ animationDelay: "28s", animationDuration: "9.5s" }} />
        </div>
        <div className="absolute top-2/3 right-2 text-pink-200 opacity-15 z-0">
          <Heart className="h-4 w-4 animate-bounce" style={{ animationDelay: "30s", animationDuration: "7s" }} />
        </div>
        <div className="absolute bottom-1/3 left-2 text-rose-300 opacity-8 z-0">
          <Heart className="h-2 w-2 animate-ping" style={{ animationDelay: "32s", animationDuration: "10.5s" }} />
        </div>
        <div className="absolute top-1/3 right-2 text-pink-300 opacity-12 z-0">
          <Heart className="h-3 w-3 animate-pulse" style={{ animationDelay: "34s", animationDuration: "8.8s" }} />
        </div>
        <div className="absolute bottom-1/4 right-2 text-rose-400 opacity-10 z-0">
          <Heart className="h-4 w-4 animate-bounce" style={{ animationDelay: "36s", animationDuration: "6.2s" }} />
        </div>
        <div className="absolute top-1/2 left-2 text-pink-400 opacity-15 z-0">
          <Heart className="h-3 w-3 animate-ping" style={{ animationDelay: "38s", animationDuration: "9.2s" }} />
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
          <span className="font-nunito font-semibold">Back to Home</span>
        </Link>

        {/* ===== CABEÇALHO DA PÁGINA ===== */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-comfortaa font-bold mb-4 md:mb-6 text-rose-800 drop-shadow-lg">Prices</h1>

          {/* Linha decorativa colorida */}
          <div className="w-24 md:w-32 lg:w-40 h-2 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 mx-auto rounded-full mb-4 md:mb-6"></div>

          {/* Ícones decorativos animados */}
          <div className="flex justify-center gap-3 md:gap-4 mt-6">
            <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-400 animate-bounce" style={{ animationDelay: "0s" }} />
            <Star className="h-4 w-4 md:h-5 md:w-5 text-rose-400 animate-bounce" style={{ animationDelay: "0.5s" }} />
            <Heart className="h-5 w-5 md:h-6 md:w-6 text-pink-400 animate-bounce" style={{ animationDelay: "1s" }} />
          </div>
        </div>

        {/* ===== GRID DE SEÇÕES DE PREÇOS ===== */}
        <div className="grid gap-16 md:gap-20">
          {/* ===== SEÇÃO SKETCH ART ===== */}
          <section className="relative">
            {/* Linha decorativa lateral */}
            <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 md:w-2 bg-gradient-to-b from-pink-300 via-rose-300 to-rose-600 rounded-full"></div>

            {/* Título da seção */}
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold mb-8 md:mb-10 pl-6 md:pl-8 text-rose-800 drop-shadow-lg">Sketch Art</h2>

            {/* Grid de cards de preços */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* ===== CARD ICON ===== */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Icon</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$8</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Simple head/face portrait in sketch style</p>
              </div>

              {/* ===== CARD BUST ===== */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Bust</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$10</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">From shoulders up in sketch style</p>
              </div>

              {/* ===== CARD HALF BODY ===== */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Half Body</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$15</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">From waist up in sketch style</p>
              </div>

              {/* ===== CARD FULL BODY ===== */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Full Body</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$20</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Complete character from head to toe in sketch style</p>
              </div>
            </div>

            {/* ===== CARD ADD-ON ===== */}
            <div className="mt-6 md:mt-8 bg-gradient-to-r from-amber-50 to-pink-100 rounded-2xl md:rounded-3xl p-4 md:p-6 border-l-3 md:border-l-4 border-rose-600 shadow-lg">
              <p className="text-rose-800 flex items-center font-nunito font-semibold text-base md:text-lg">
                <span className="text-rose-800 mr-3 font-bold text-lg md:text-xl">+</span>
                <span>
                  Base Color: <span className="font-comfortaa font-bold text-xl md:text-2xl ml-2">$5</span>
                </span>
                <Heart className="h-4 w-4 md:h-5 md:w-5 text-rose-500 ml-2" />
              </p>
            </div>
          </section>

          {/* ===== SEÇÃO LINE ART ===== */}
          <section className="relative">
            <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 md:w-2 bg-gradient-to-b from-pink-300 via-rose-300 to-rose-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold mb-8 md:mb-10 pl-6 md:pl-8 text-rose-800 drop-shadow-lg">Line Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Icon</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$10</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Clean lined head/face portrait</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Bust</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$15</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Clean lined portrait from shoulders up</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Half Body</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$20</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Clean lined illustration from waist up</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Full Body</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$25</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Complete clean lined character from head to toe</p>
              </div>
            </div>
            <div className="mt-6 md:mt-8 bg-gradient-to-r from-amber-50 to-pink-100 rounded-2xl md:rounded-3xl p-4 md:p-6 border-l-3 md:border-l-4 border-rose-600 shadow-lg">
              <p className="text-rose-800 flex items-center font-nunito font-semibold text-base md:text-lg">
                <span className="text-rose-800 mr-3 font-bold text-lg md:text-xl">+</span>
                <span>
                  Base Color: <span className="font-comfortaa font-bold text-xl md:text-2xl ml-2">$5</span>
                </span>
                <Heart className="h-4 w-4 md:h-5 md:w-5 text-rose-500 ml-2" />
              </p>
            </div>
          </section>

          {/* ===== SEÇÃO COMPLETE ART ===== */}
          <section className="relative">
            <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 md:w-2 bg-gradient-to-b from-pink-300 via-rose-300 to-rose-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold mb-8 md:mb-10 pl-6 md:pl-8 text-rose-800 drop-shadow-lg">Complete Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Icon</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$10</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Fully colored and shaded head/face portrait</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Bust</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$15</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Fully colored and shaded portrait from shoulders up</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Half Body</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$25</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Fully colored and shaded illustration from waist up</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-bold text-rose-800">Full Body</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-comfortaa font-bold text-rose-800">$30</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Complete fully colored and shaded character</p>
              </div>
            </div>

            {/* ===== MÚLTIPLOS ADD-ONS ===== */}
            <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
              <div className="bg-gradient-to-r from-amber-50 to-pink-100 rounded-2xl md:rounded-3xl p-4 md:p-6 border-l-3 md:border-l-4 border-rose-600 shadow-lg">
                <p className="text-rose-800 flex items-center font-nunito font-semibold text-base md:text-lg">
                  <span className="text-rose-800 mr-3 font-bold text-lg md:text-xl">+</span>
                  <span>
                    Background: <span className="font-comfortaa font-bold text-xl md:text-2xl ml-2">$5</span>
                  </span>
                  <Heart className="h-4 w-4 md:h-5 md:w-5 text-rose-500 ml-2" />
                </p>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-pink-100 rounded-2xl md:rounded-3xl p-4 md:p-6 border-l-3 md:border-l-4 border-rose-600 shadow-lg">
                <p className="text-rose-800 flex items-center font-nunito font-semibold text-base md:text-lg">
                  <span className="text-rose-800 mr-3 font-bold text-lg md:text-xl">+</span>
                  <span>
                    Add person/animal: <span className="font-comfortaa font-bold text-xl md:text-2xl ml-2">$5</span>
                  </span>
                  <Heart className="h-4 w-4 md:h-5 md:w-5 text-rose-500 ml-2" />
                </p>
              </div>
            </div>
          </section>

          {/* ===== SEÇÃO OTHER SERVICES ===== */}
          <section className="relative">
            <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 md:w-2 bg-gradient-to-b from-pink-300 via-rose-300 to-rose-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold mb-8 md:mb-10 pl-6 md:pl-8 text-rose-800 drop-shadow-lg">Other Services</h2>

            {/* Grid com 3 colunas para serviços especiais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex flex-col gap-2 mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-nunito font-bold text-rose-800">PNGtuber</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-comfortaa font-bold text-rose-800">$20-$35</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Animated PNG for streaming</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex flex-col gap-2 mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-nunito font-bold text-rose-800">Vtuber Model</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-comfortaa font-bold text-rose-800">$150-$250</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Without ring, fully rigged for streaming</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex flex-col gap-2 mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-nunito font-bold text-rose-800">Character Design</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-comfortaa font-bold text-rose-800">$45</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Original character concept and design</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex flex-col gap-2 mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-nunito font-bold text-rose-800">Background</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-comfortaa font-bold text-rose-800">$10</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Custom background illustration</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex flex-col gap-2 mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-nunito font-bold text-rose-800">Chibi</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-comfortaa font-bold text-rose-800">$10</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Cute stylized character illustration</p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border-3 md:border-4 border-pink-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="flex flex-col gap-2 mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-nunito font-bold text-rose-800">Half-Chibi</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-comfortaa font-bold text-rose-800">$8</span>
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-400 group-hover:text-rose-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-pink-300 to-transparent rounded-full mb-4 md:mb-6"></div>
                <p className="text-gray-600 font-nunito text-sm md:text-base">Simplified cute stylized character</p>
              </div>
            </div>
          </section>
        </div>

        {/* ===== SEÇÃO CALL-TO-ACTION FINAL ===== */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-600 mb-8 md:mb-10 font-nunito text-base md:text-lg px-4">
            Prices may vary depending on complexity. Contact me for a precise quote.
          </p>

          {/* Botão principal para fazer pedidos */}
          <Link
            href="https://discord.gg/nMPb5QMnp2"
            target="_blank"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-300 px-8 md:px-10 py-4 md:py-5 rounded-full font-nunito font-bold shadow-lg transform hover:scale-105"
          >
            {/* Ícone do Discord */}
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
            <span className="text-sm md:text-base">Place your Order!</span>
            {/* Coração que muda de cor no hover */}
            <Heart className="h-5 w-5 md:h-6 md:w-6 group-hover:text-pink-200 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </main>
  )
}
