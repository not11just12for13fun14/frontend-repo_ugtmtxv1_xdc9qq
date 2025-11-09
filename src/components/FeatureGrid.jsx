import React from 'react'
import { ShieldCheck, User, Gauge, FolderOpen } from 'lucide-react'

const features = [
  {
    icon: <ShieldCheck className="text-[#2C3E50]" size={20} />,
    title: 'Accesso sicuro',
    desc: 'Autenticazione moderna e aree protette per studenti e docenti.'
  },
  {
    icon: <FolderOpen className="text-[#2C3E50]" size={20} />,
    title: 'Gestione corsi',
    desc: 'Crea, modifica e organizza corsi con moduli, lezioni e materiali.'
  },
  {
    icon: <Gauge className="text-[#2C3E50]" size={20} />,
    title: 'Progressi',
    desc: 'Monitora avanzamento, lezioni completate e risultati dei quiz.'
  },
  {
    icon: <User className="text-[#2C3E50]" size={20} />,
    title: 'Dashboard personale',
    desc: 'Ogni utente vede solo i corsi acquistati o assegnati.'
  }
]

export default function FeatureGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-8">Pensata per la scuola e oltre</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-[#2C3E50]/10 bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#2C3E50]/5">
                {f.icon}
              </div>
              <div className="font-semibold text-[#2C3E50]">{f.title}</div>
              <div className="text-sm text-[#2C3E50]/70">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
