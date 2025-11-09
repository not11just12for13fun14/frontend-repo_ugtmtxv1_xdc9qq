import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: 'JavaScript Moderno',
    description: 'Dalle basi a ES2023, con progetti e best practice.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    lessons: 42,
    modules: 8,
    quizzes: 12,
  },
  {
    title: 'Python per Data Analysis',
    description: 'NumPy, Pandas e visualizzazioni efficaci con esempi reali.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    lessons: 36,
    modules: 7,
    quizzes: 10,
  },
  {
    title: 'UX/UI Design Essentials',
    description: 'Principi di design, wireframe e prototipi interattivi.',
    image: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?q=80&w=1200&auto=format&fit=crop',
    lessons: 28,
    modules: 6,
    quizzes: 8,
  },
];

const CourseShowcase = () => {
  return (
    <section id="corsi" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50]">Corsi in evidenza</h2>
          <a href="#" className="text-[#E67E22] hover:underline">Vedi tutti</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;
