import { Bike, Footprints, TrendingUp, Wallet } from 'lucide-react'

const benefits = [
  {
    icon: <Footprints className="w-6 h-6" />,
    title: 'Cada paso cuenta',
    desc: 'Registramos tus caminatas y viajes en bici con GPS preciso. Solo movilidad real genera créditos.',
  },
  {
    icon: <Bike className="w-6 h-6" />,
    title: 'Ciclistas recompensados',
    desc: 'Los ciclistas ahorran hasta 180g de CO₂ por km comparado con un auto. Cada km vale dinero real.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Dashboard de impacto',
    desc: 'Ve en tiempo real cuánto CO₂ has ahorrado, tus bonos acumulados y el historial de ventas.',
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Pago en SOL',
    desc: 'Cuando tus bonos se venden, recibes Solana directamente. Sin bancos, sin esperas, sin fees ocultos.',
  },
]

export default function ForUsers() {
  return (
    <section id="usuarios" className="py-24 bg-[#0d130d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">Para usuarios</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              Tu movilidad{' '}
              <span className="gradient-text">genera valor</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Deja que tus hábitos de transporte sostenible trabajen para ti. No necesitas hacer nada diferente, solo moverte como siempre y dejar que Carbónicos lo registre.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500/15 rounded-xl flex items-center justify-center text-green-400 shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{b.title}</h4>
                    <p className="text-gray-500 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full scale-90" />

              {/* Phone frame */}
              <div className="relative w-72 bg-[#111] rounded-[3rem] border-2 border-green-500/30 p-6 animate-float">
                <div className="w-20 h-2 bg-gray-700 rounded-full mx-auto mb-6" />

                {/* App screen */}
                <div className="bg-[#0a0f0a] rounded-2xl p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold text-sm">Hoy</span>
                    <span className="text-xs text-gray-500">04 oct</span>
                  </div>

                  {/* Metric */}
                  <div className="text-center py-4">
                    <p className="text-5xl font-extrabold text-white">12.4</p>
                    <p className="text-green-400 text-sm mt-1">km recorridos</p>
                  </div>

                  {/* CO2 bar */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>CO₂ ahorrado</span>
                      <span className="text-green-400">2.2 kg</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-cyan-400 rounded-full" />
                    </div>
                  </div>

                  {/* Tokens */}
                  <div className="card-glass rounded-xl p-3 flex justify-between items-center">
                    <span className="text-xs text-gray-400">Bonos disponibles</span>
                    <span className="text-white font-bold">3.8 CCR</span>
                  </div>

                  {/* SOL earned */}
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 flex justify-between items-center">
                    <span className="text-xs text-gray-400">Ganancias</span>
                    <span className="text-purple-300 font-bold">+0.21 SOL</span>
                  </div>
                </div>

                <div className="w-16 h-1 bg-gray-700 rounded-full mx-auto mt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
