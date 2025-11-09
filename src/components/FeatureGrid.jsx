import React from 'react';
import { ShieldCheck, Layers, Gauge, User } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Accesso sicuro',
    desc: 'Autenticazione protetta e gestione ruoli per studenti e docenti.',
  },
  {
    icon: Layers,
    title: 'Gestione corsi',
    desc: 'Crea moduli, lezioni e quiz con facilità e struttura chiara.',
  },
  {
    icon: Gauge,
    title: 'Tracciamento progressi',
    desc: 'Statistiche e avanzamento in tempo reale per ogni corso.',
  },
  {
    icon: User,
    title: 'Dashboard personale',
    desc: 'Tutto ciò che ti serve in un unico spazio intuitivo.',
  },
];

const FeatureGrid = () => {
  return (
    <section className="bg-[#F4F6F7] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50]">Perché scegliere noi</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#E67E22]/10 text-[#E67E22]">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-[#2C3E50]">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
