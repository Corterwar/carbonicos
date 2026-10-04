import { Smartphone, MapPin, Coins, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />,
    number: '01',
    title: 'Descarga la app',
    desc: 'Regístrate gratis, conecta tu wallet de Solana y activa el rastreo de actividad.',
    color: 'text-green-400',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
  },
  {
    icon: <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />,
    number: '02',
    title: 'Rastrea tu movilidad',
    desc: 'GPS verifica que camines o vayas en bici. Cada kilómetro es carbono ahorrado vs. un auto.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
    number: '03',
    title: 'Se acuña tu bono',
    desc: 'El ahorro se registra inmutablemente en la blockchain de Solana como un crédito de carbono verificado.',
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
  },
  {
    icon: <Coins className="w-6 h-6 sm:w-7 sm:h-7" />,
    number: '04',
    title: 'Cobra en cripto',
    desc: 'Empresas compran tus bonos. Tú recibes SOL directamente en tu wallet, sin intermediarios.',
    color: 'text-green-400',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">El proceso</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Cómo funciona{' '}
            <span className="gradient-text">Carbónicos</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base px-2">
            De la actividad física a los créditos de carbono en 4 pasos simples, todo auditado en Solana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div key={s.number} className={`card-glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${s.border}`}>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${s.bg} flex items-center justify-center mb-3 sm:mb-4 ${s.color}`}>
                {s.icon}
              </div>
              <span className={`text-xs font-bold ${s.color} opacity-60`}>{s.number}</span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
