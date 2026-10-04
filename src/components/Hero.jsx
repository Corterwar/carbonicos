import { ArrowRight, Footprints, Bike, Building2, CheckCircle2, Sparkles } from 'lucide-react'
import { IMG } from '../assets/images'

const cards = [
  {
    icon: <Footprints className="w-5 h-5 text-green-400" />,
    label: 'Walking',
    value: '~200g CO₂',
    sub: 'saved per km',
    accent: 'text-green-400',
  },
  {
    icon: <Bike className="w-5 h-5 text-cyan-400" />,
    label: 'Bicycle',
    value: '~180g CO₂',
    sub: 'saved per km',
    accent: 'text-cyan-400',
  },
  {
    icon: <Building2 className="w-5 h-5 text-purple-400" />,
    label: 'Companies',
    value: 'Offset',
    sub: 'their carbon footprint',
    accent: 'text-purple-400',
  },
]

export default function Hero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] bg-green-500/12 rounded-full blur-[130px] animate-pulse-glow pointer-events-none" />
      <div
        className="absolute bottom-0 -right-32 w-[26rem] h-[26rem] bg-purple-600/12 rounded-full blur-[130px] animate-pulse-glow pointer-events-none"
        style={{ animationDelay: '1.6s' }}
      />

      <div className="relative w-full max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-16 items-center">
          {/* Left — copy */}
          <div className="text-center xl:text-left max-w-2xl mx-auto xl:mx-0">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs sm:text-sm font-semibold mb-7 animate-slide-up"
              style={{ animationDelay: '0.05s' }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
              Powered by Solana Blockchain
            </div>

            <h1
              className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem] xl:text-7xl font-extrabold tracking-tight mb-6 animate-slide-up"
              style={{ animationDelay: '0.15s' }}
            >
              Move.{' '}
              <span className="gradient-text">Offset.</span>
              <br />
              Save the planet.
            </h1>

            <p
              className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto xl:mx-0 mb-8 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              Turn every step and every pedal stroke into{' '}
              <strong className="text-green-400 font-semibold">carbon credits</strong> verified on
              blockchain. Companies buy your credits — you get paid in crypto.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 sm:gap-4 mb-8 animate-slide-up"
              style={{ animationDelay: '0.45s' }}
            >
              <a
                href="#cta"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base sm:text-lg"
              >
                Start for free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#empresas"
                className="btn-ghost w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg"
              >
                I'm a company
              </a>
            </div>

            <ul
              className="flex flex-wrap items-center justify-center xl:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500 animate-slide-up"
              style={{ animationDelay: '0.55s' }}
            >
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> Free forever
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> No credit card
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-400" /> Welcome bonus credits
              </li>
            </ul>
          </div>

          {/* Right — image + metrics */}
          <div className="animate-slide-up w-full" style={{ animationDelay: '0.35s' }}>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)]">
              <img
                src={IMG.heroBike}
                alt="Bicycle ready for a sustainable ride"
                className="w-full aspect-[4/3] lg:aspect-[1.1/1] object-cover"
              />
              <div className="img-shade" />
              <div className="img-tint" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <div className="card-glass rounded-2xl px-4 py-3 sm:px-5 sm:py-4">
                <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-0.5">
                  Earnings
                </p>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-white">
                  +0.21 SOL
                </p>
                <p className="text-xs text-green-400 font-medium">from 3.8 CCR sold</p>
              </div>

              <div className="card-glass rounded-2xl px-4 py-3 sm:px-5 sm:py-4">
                <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-0.5">
                  CO₂ saved today
                </p>
                <p className="font-display text-xl sm:text-2xl font-extrabold gradient-text">
                  2.2 kg
                </p>
                <p className="text-xs text-gray-500">12.4 km traveled</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-12 lg:mt-16">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className="card-glass rounded-2xl p-5 flex items-center gap-4 animate-slide-up"
              style={{ animationDelay: `${0.65 + i * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {c.icon}
              </div>
              <div className="min-w-0">
                <p className={`text-xs font-bold uppercase tracking-widest ${c.accent} mb-1`}>
                  {c.label}
                </p>
                <p className="font-display text-xl font-bold text-white leading-tight">{c.value}</p>
                <p className="text-xs text-gray-500 truncate">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}