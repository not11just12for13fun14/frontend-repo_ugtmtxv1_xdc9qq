import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      {/* Spline Canvas */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-start">
        <Logo size="lg" />
        <h1 className="mt-8 max-w-2xl text-4xl md:text-5xl font-extrabold text-[#2C3E50] tracking-tight">
          I corsi del prof: impara davvero, con semplicità
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-700">
          Piattaforma e-learning pensata per studenti e professionisti. Lezioni pratiche, progressi chiari, e supporto costante.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#corsi"
            className="inline-flex items-center gap-2 rounded-lg bg-[#E67E22] px-5 py-3 text-white font-medium shadow hover:brightness-95 transition"
          >
            Inizia ora
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-[#2C3E50] px-5 py-3 text-[#2C3E50] font-medium bg-white/70 backdrop-blur hover:bg-white transition"
          >
            <Play size={18} /> Guarda una lezione
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
