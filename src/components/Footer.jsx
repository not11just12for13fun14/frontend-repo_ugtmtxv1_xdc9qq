import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Logo variant="dark" size="md" />
          <p className="mt-4 text-sm text-gray-300 max-w-md">
            "I corsi del prof" è la piattaforma per imparare in modo pratico e divertente. Lezioni curate, quiz mirati e un percorso chiaro.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Link utili</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><a className="hover:text-white" href="#corsi">Corsi</a></li>
            <li><a className="hover:text-white" href="#">Chi siamo</a></li>
            <li><a className="hover:text-white" href="#">Contatti</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contatti</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>email: support@icorsidelprof.it</li>
            <li>tel: +39 320 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 text-xs text-gray-300 flex items-center justify-between">
          <span>© {new Date().getFullYear()} I corsi del prof. Tutti i diritti riservati.</span>
          <a href="#" className="hover:text-white">Privacy & Termini</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
