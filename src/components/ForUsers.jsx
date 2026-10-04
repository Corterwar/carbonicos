import { Bike, Footprints, TrendingUp, Wallet } from 'lucide-react'
import Reveal from './Reveal'
import { IMG } from '../assets/images'

const benefits = [
  {
    icon: <Footprints className="w-5 h-5" />,
    title: 'Every step counts',
    desc: 'We track your walks and bike rides with precise GPS. Only real mobility generates credits.',
  },
  {
    icon: <Bike className="w-5 h-5" />,
    title: 'Cyclists rewarded',
    desc: 'Cyclists save up to 180g of CO₂ per km compared to a car. Every km is worth real money.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Impact dashboard',
    desc: 'See in real time how much CO₂ you have saved, your accumulated credits, and sales history.',
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: 'Paid in SOL',
    desc: 'When your credits sell, you receive Solana directly. No banks, no waiting, no hidden fees.',
  },
]

export default function ForUsers() {
  return (
    <section id="usuarios" className="relative py-20 lg:py-28 bg-[#080e08] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider-glow opacity-60" />
      <div className="absolute -left-40 top-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-12 xl:gap-20 items-center">
          {/* Left: content */}
          <div>
            <Reveal>
              <p className="eyebrow text-green-400 mb-4">For users</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] mb-5">
                Your mobility <span className="gradient-text">generates value</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-9 max-w-xl">
                Let your sustainable transport habits work for you. You don't need to do anything
                different — just move as usual and let Carbónicos record it.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={100 + i * 100}>
                  <div className="flex gap-4 h-full">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-green-500/25 to-green-500/5 border border-green-500/25 flex items-center justify-center text-green-400 shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white mb-1.5 text-[15px]">
                        {b.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: photo + phone mockup */}
          <Reveal delay={150}>
            <div className="relative w-full space-y-5">
              <div className="relative h-60 sm:h-72 xl:h-80 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.9)]">
                <img
                  src={IMG.runners}
                  alt="Runners at sunrise"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="img-shade opacity-80" />
                <div className="img-tint" />
              </div>

              {/* Phone in front */}
              <div className="relative z-10 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <div className="bg-[#0c120c] rounded-[2.8rem] border-2 border-green-500/30 p-4 shadow-[0_40px_80px_-30px_rgba(0,0,0,1)]">
                  <div className="w-14 h-1.5 bg-gray-700 rounded-full mx-auto mb-4" />

                  <div className="bg-[#060b06] rounded-3xl p-4 space-y-3.5 border border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-bold text-sm font-display">Today</span>
                      <span className="text-xs text-gray-500">Oct 04</span>
                    </div>

                    <div className="text-center py-2.5">
                      <p className="font-display text-5xl font-extrabold text-white leading-none">
                        12.4
                      </p>
                      <p className="text-green-400 text-xs mt-1.5 font-medium">km traveled</p>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                        <span>CO₂ saved</span>
                        <span className="text-green-400 font-semibold">2.2 kg</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(74,222,128,0.7)]" />
                      </div>
                    </div>

                    <div className="card-glass rounded-2xl p-3 flex justify-between items-center">
                      <span className="text-xs text-gray-400">Available credits</span>
                      <span className="text-white font-bold text-sm font-display">3.8 CCR</span>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/25 rounded-2xl p-3 flex justify-between items-center">
                      <span className="text-xs text-gray-400">Earnings</span>
                      <span className="text-purple-300 font-bold text-sm font-display">+0.21 SOL</span>
                    </div>
                  </div>

                  <div className="w-14 h-1.5 bg-gray-700 rounded-full mx-auto mt-4" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
