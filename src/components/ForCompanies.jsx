import { BarChart3, Globe2, FileCheck, Zap } from 'lucide-react'

const perks = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'Offset real y auditable',
    desc: 'Cada bono está respaldado por kilómetros reales de movilidad sostenible, registrados en blockchain.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Dashboard de ESG',
    desc: 'Monitorea en tiempo real cuánto CO₂ has compensado para tus reportes ESG y metas de sostenibilidad.',
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Certificados automáticos',
    desc: 'Genera reportes PDF con los datos blockchain listos para auditorías y presentaciones corporativas.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Compra instantánea',
    desc: 'Adquiere créditos de carbono en segundos usando Solana Pay. Sin formularios complejos ni intermediarios.',
  },
]

export default function ForCompanies() {
  return (
    <section id="empresas" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: dashboard mockup */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-purple-500/15 blur-3xl rounded-2xl" />
              <div className="relative bg-[#111] rounded-3xl border border-purple-500/20 p-6 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Panel Corporativo</p>
                    <p className="font-bold text-white">Empresa ACME S.A.</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Building className="w-5 h-5 text-purple-400" />
                  </div>
                </div>

                {/* Big metric */}
                <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/10 rounded-2xl p-4 text-center">
                  <p className="text-gray-400 text-sm">CO₂ compensado este año</p>
                  <p className="text-5xl font-extrabold text-white mt-1">48.2 <span className="text-2xl text-purple-400">ton</span></p>
                  <p className="text-green-400 text-sm mt-1">↑ 22% vs año anterior</p>
                </div>

                {/* Monthly bars */}
                <div>
                  <p className="text-xs text-gray-500 mb-3">Créditos por mes</p>
                  <div className="flex items-end gap-2 h-16">
                    {[40, 55, 35, 70, 60, 85, 75, 90, 65, 80, 95, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-purple-600 to-cyan-400 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>Ene</span><span>Dic</span>
                  </div>
                </div>

                {/* Purchases */}
                <div className="space-y-2">
                  {[
                    { label: 'Compra #0x9a2f', amount: '120 CCR', date: 'hoy', color: 'text-green-400' },
                    { label: 'Compra #0x7b1c', amount: '85 CCR', date: 'ayer', color: 'text-green-400' },
                    { label: 'Compra #0x3d8e', amount: '200 CCR', date: '2 oct', color: 'text-cyan-400' },
                  ].map((t) => (
                    <div key={t.label} className="flex justify-between items-center text-sm">
                      <div>
                        <p className="text-white font-medium">{t.label}</p>
                        <p className="text-xs text-gray-600">{t.date}</p>
                      </div>
                      <span className={`font-bold ${t.color}`}>{t.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">Para empresas</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              Compensa tu huella{' '}
              <span className="gradient-text">con impacto real</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Adquiere créditos de carbono genuinos, generados por personas reales que eligen moverse de forma sostenible. Cada bono es verificable, inmutable y listo para tus reportes ESG.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {perks.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-500/15 rounded-xl flex items-center justify-center text-purple-400 shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{p.title}</h4>
                    <p className="text-gray-500 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Building({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}
