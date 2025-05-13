import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PricesFAQ() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-5xl md:text-6xl font-abril mb-4 text-center">Prices</h1>
        <div className="w-24 h-1 bg-white mx-auto mb-16"></div>

        <div className="grid gap-16">
          {/* Sketch Art */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white/80 to-white/0"></div>
            <h2 className="text-3xl font-abril mb-8 pl-4">Sketch Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Icon</h3>
                  <span className="text-2xl font-abril text-white">$8</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Simple head/face portrait in sketch style</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Bust</h3>
                  <span className="text-2xl font-abril text-white">$10</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">From shoulders up in sketch style</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Half Body</h3>
                  <span className="text-2xl font-abril text-white">$15</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">From waist up in sketch style</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Full Body</h3>
                  <span className="text-2xl font-abril text-white">$20</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Complete character from head to toe in sketch style</p>
              </div>
            </div>
            <div className="mt-6 bg-white/5 rounded-lg p-4 border-l-4 border-white/20">
              <p className="text-gray-200 flex items-center">
                <span className="text-white mr-2">+</span>
                <span>
                  Base Color: <span className="font-abril text-xl ml-2">$5</span>
                </span>
              </p>
            </div>
          </section>

          {/* Line Art */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white/80 to-white/0"></div>
            <h2 className="text-3xl font-abril mb-8 pl-4">Line Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Icon</h3>
                  <span className="text-2xl font-abril text-white">$10</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Clean lined head/face portrait</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Bust</h3>
                  <span className="text-2xl font-abril text-white">$15</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Clean lined portrait from shoulders up</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Half Body</h3>
                  <span className="text-2xl font-abril text-white">$20</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Clean lined illustration from waist up</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Full Body</h3>
                  <span className="text-2xl font-abril text-white">$25</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Complete clean lined character from head to toe</p>
              </div>
            </div>
            <div className="mt-6 bg-white/5 rounded-lg p-4 border-l-4 border-white/20">
              <p className="text-gray-200 flex items-center">
                <span className="text-white mr-2">+</span>
                <span>
                  Base Color: <span className="font-abril text-xl ml-2">$5</span>
                </span>
              </p>
            </div>
          </section>

          {/* Complete Art */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white/80 to-white/0"></div>
            <h2 className="text-3xl font-abril mb-8 pl-4">Complete Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Icon</h3>
                  <span className="text-2xl font-abril text-white">$10</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Fully colored and shaded head/face portrait</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Bust</h3>
                  <span className="text-2xl font-abril text-white">$15</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Fully colored and shaded portrait from shoulders up</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Half Body</h3>
                  <span className="text-2xl font-abril text-white">$25</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Fully colored and shaded illustration from waist up</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Full Body</h3>
                  <span className="text-2xl font-abril text-white">$30</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Complete fully colored and shaded character</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-white/20">
                <p className="text-gray-200 flex items-center">
                  <span className="text-white mr-2">+</span>
                  <span>
                    Background: <span className="font-abril text-xl ml-2">$5</span>
                  </span>
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-white/20">
                <p className="text-gray-200 flex items-center">
                  <span className="text-white mr-2">+</span>
                  <span>
                    Add person/animal: <span className="font-abril text-xl ml-2">$5</span>
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Other Services */}
          <section className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white/80 to-white/0"></div>
            <h2 className="text-3xl font-abril mb-8 pl-4">Other Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">PNGtuber</h3>
                  <span className="text-2xl font-abril text-white">$20-$35</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Animated PNG for streaming</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Vtuber Model</h3>
                  <span className="text-2xl font-abril text-white">$150-$250</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Without ring, fully rigged for streaming</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Character Design</h3>
                  <span className="text-2xl font-abril text-white">$45</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Original character concept and design</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Background</h3>
                  <span className="text-2xl font-abril text-white">$10</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Custom background illustration</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Chibi</h3>
                  <span className="text-2xl font-abril text-white">$10</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Cute stylized character illustration</p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-averia">Half-Chibi</h3>
                  <span className="text-2xl font-abril text-white">$8</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm">Simplified cute stylized character</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8">Prices may vary depending on complexity. Contact me for a precise quote.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-opacity-90 px-6 py-3 rounded transition-colors font-averia"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="9" cy="12" r="1" />
              <circle cx="15" cy="12" r="1" />
              <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
              <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
            </svg>
            Place your Order!
          </Link>
        </div>
      </div>
    </main>
  )
}
