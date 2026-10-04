import { Smartphone, MapPin, Coins, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    number: '01',
    title: 'Download the app',
    desc: 'Sign up for free, connect your Solana wallet, and enable activity tracking.',
    color: 'text-green-400',
    glow: 'shadow-[0_10px_30px_-10px_rgba(74,222,128,0.8)]',
    ring: 'from-green-400/30 to-green-400/5',
    step: 'text-green-400',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    number: '02',
    title: 'Track your mobility',
    desc: 'GPS verifies that you walk or bike. Every kilometer is carbon saved vs. a car.',
    color: 'text-cyan-400',
    glow: 'shadow-[0_10px_30px_-10px_rgba(34,211,238,0.8)]',
    ring: 'from-cyan-400/30 to-cyan-400/5',
    step: 'text-cyan-400',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    number: '03',
    title: 'Your credit is minted',
    desc: 'Savings are immutably recorded on the Solana blockchain as a verified carbon credit.',
    color: 'text-purple-400',
    glow: 'shadow-[0_10px_30px_-10px_rgba(167,139,250,0.8)]',
    ring: 'from-purple-400/30 to-purple-400/5',
    step: 'text-purple-400',
  },
  {
    icon: <Coins className="w-6 h-6" />,
    number: '04',
    title: 'Get paid in crypto',
    desc: 'Companies buy your credits. You receive SOL directly to your wallet, no intermediaries.',
    color: 'text-green-400',
    glow: 'shadow-[0_10px_30px_-10px_rgba(74,222,128,0.8)]',
    ring: 'from-green-400/30 to-green-400/5',
    step: 'text-green-400',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-[88rem] mx-auto px-4 sm:px-8 lg:px-12">
        <Reveal className="text-center mb-12 lg:mb-16">
          <p className="eyebrow text-green-400 justify-center mb-4">The process</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
            How <span className="gradient-text">Carbónicos</span> works
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            From physical activity to carbon credits in 4 simple steps, all audited on Solana.
          </p>
        </Reveal>

        {/* Connector */}
        <div className="hidden lg:block absolute left-0 right-0 mx-auto max-w-6xl top-[54%] h-px divider-glow opacity-50 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 120} className="h-full">
              <div className="card-glass rounded-3xl p-6 h-full transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.ring} border border-white/10 flex items-center justify-center ${s.color} ${s.glow}`}
                  >
                    {s.icon}
                  </div>
                  <span
                    className={`font-display text-3xl font-extrabold ${s.step} opacity-25 leading-none`}
                  >
                    {s.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
