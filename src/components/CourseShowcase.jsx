import React from 'react'
import CourseCard from './CourseCard'

const sampleCourses = [
  {
    title: 'Informatica di Base',
    description: 'Concetti fondamentali di informatica, logica, algoritmi e rappresentazione dei dati.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    stats: { modules: 6, lessons: 24, quizzes: 6 }
  },
  {
    title: 'TPSIT: Sviluppo Web',
    description: 'HTML, CSS, JavaScript e basi di backend per creare applicazioni web moderne.',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop',
    stats: { modules: 8, lessons: 32, quizzes: 8 }
  },
  {
    title: 'Sistemi e Reti',
    description: 'Reti di calcolatori, protocolli, configurazione dispositivi e sicurezza.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    stats: { modules: 7, lessons: 28, quizzes: 7 }
  }
]

export default function CourseShowcase() {
  return (
    <section id="corsi" className="bg-[#F4F6F7]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50]">
            Corsi in evidenza
          </h2>
          <a href="#" className="text-[#E67E22] font-medium hover:underline">Vedi tutti</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleCourses.map((c, idx) => (
            <CourseCard key={idx} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
