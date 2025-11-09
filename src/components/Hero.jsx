import React from 'react'
import Spline from '@splinetool/react-spline'
import Logo from './Logo'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[#F4F6F7]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F4F6F7] via-transparent to-white/60" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:py-24">
        <Logo size={48} withText />
        <h1 className="text-4xl md:text-6xl font-bold text-[#2C3E50] max-w-3xl">
          La piattaforma per i tuoi corsi di informatica
        </h1>
        <p className="text-lg md:text-xl text-[#2C3E50]/80 max-w-2xl">
          Studia TPSIT e Sistemi e Reti con lezioni chiare, quiz, materiali e
          una dashboard personale per seguire i tuoi progressi.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#corsi"
            className="inline-flex items-center justify-center rounded-md bg-[#E67E22] px-5 py-3 text-white font-semibold shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#E67E22]/30"
          >
            Esplora i corsi
          </a>
          <a
            href="#login"
            className="inline-flex items-center justify-center rounded-md border border-[#2C3E50] px-5 py-3 text-[#2C3E50] font-semibold hover:bg-[#2C3E50] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2C3E50]/30"
          >
            Accedi / Registrati
          </a>
        </div>
      </div>
    </section>
  )
}
