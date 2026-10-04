import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [type, setType] = useState('user')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="cta" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[600px] sm:h-[600px] bg-green-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-xl mx-auto text-center">
        <p className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">Únete ahora</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">
          Sé parte del{' '}
          <span className="gradient-text">movimiento verde</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 px-2">
          La lista de espera está abierta. Sé de los primeros en usar Carbónicos y recibe bonos extra de bienvenida.
        </p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="card-glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-5 text-left">
            {/* Type selector */}
            <div className="flex rounded-xl overflow-hidden border border-gray-700">
              {[
                { value: 'user', label: '🚴 Soy usuario' },
                { value: 'company', label: '🏢 Soy empresa' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`flex-1 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all ${
                    type === opt.value
                      ? 'bg-green-500 text-black'
                      : 'bg-transparent text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setType(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div>
              <label className="text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 block">Nombre</label>
              <input
                type="text"
                required
                placeholder={type === 'user' ? 'Tu nombre' : 'Nombre de la empresa'}
                className="w-full bg-white/5 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-2.5 sm:py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-white/5 border border-gray-700 focus:border-green-500 rounded-xl pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] glow-green text-base sm:text-lg"
            >
              Unirme a la lista de espera
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <p className="text-center text-xs text-gray-600">
              Sin spam. Sin tarjeta de crédito. Solo novedades importantes.
            </p>
          </form>
        ) : (
          <div className="card-glass rounded-2xl sm:rounded-3xl p-10 sm:p-12 text-center">
            <div className="text-5xl sm:text-6xl mb-4">🌿</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">¡Estás dentro!</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Te notificaremos cuando Carbónicos esté disponible. Mientras tanto, sigue pedaleando 🚴
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
