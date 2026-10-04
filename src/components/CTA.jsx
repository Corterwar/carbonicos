import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'
import Reveal from './Reveal'
import { IMG } from '../assets/images'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [type, setType] = useState('user')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cta" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Forest background */}
      <div className="absolute inset-0">
        <img
          src={IMG.forest}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#060b06]/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080e08] via-transparent to-[#060b06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/15 via-transparent to-purple-600/15" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow text-green-400 justify-center mb-4">Join now</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-5">
            Be part of the <span className="gradient-text">green movement</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            The waitlist is open. Be one of the first to use Carbónicos and get extra welcome
            credits.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="card-glass rounded-3xl p-6 sm:p-8 space-y-5 text-left shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]"
            >
              {/* Type selector */}
              <div className="flex rounded-2xl overflow-hidden border border-white/10 bg-black/25 p-1">
                {[
                  { value: 'user', label: '🚴 I am a user' },
                  { value: 'company', label: '🏢 I am a company' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                      type === opt.value
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-[#04140a] shadow-[0_8px_24px_-10px_rgba(74,222,128,0.9)]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setType(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-400 mb-2 block uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder={type === 'user' ? 'Your name' : 'Company name'}
                  className="w-full bg-white/5 border border-white/10 focus:border-green-500 focus:bg-white/[0.07] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-400 mb-2 block uppercase tracking-wider">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-green-500 focus:bg-white/[0.07] rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-base sm:text-lg"
              >
                Join the waitlist
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-xs text-gray-500">
                No spam. No credit card. Just important updates.
              </p>
            </form>
          ) : (
            <div className="card-glass rounded-3xl p-10 sm:p-14 text-center">
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-green-400/30 to-green-400/5 border border-green-500/40 flex items-center justify-center text-4xl animate-float">
                🌿
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                You're in!
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                We'll notify you when Carbónicos is available. Meanwhile, keep pedaling 🚴
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
