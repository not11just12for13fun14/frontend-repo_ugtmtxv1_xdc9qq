import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <Logo variant="dark" size={36} />
          <p className="mt-3 text-sm text-white/80 max-w-sm">
            Una piattaforma educativa moderna per studenti e docenti. Corsi,
            quiz, materiali e dashboard personale.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Link utili</div>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#corsi" className="hover:underline">Corsi</a></li>
            <li><a href="#login" className="hover:underline">Accedi</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contatti</div>
          <div className="text-white/80 text-sm">info@icorsidelprof.it</div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} I corsi del prof. Tutti i diritti riservati.
      </div>
    </footer>
  )
}
