import React from 'react';
import { BookOpen, ListChecks } from 'lucide-react';

const CourseCard = ({ image, title, description, lessons = 0, modules = 0, quizzes = 0 }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            <BookOpen className="h-8 w-8" />
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#2C3E50] group-hover:text-[#E67E22] transition-colors">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1"><BookOpen size={14} /> {lessons} lezioni</span>
          <span className="inline-flex items-center gap-1"><ListChecks size={14} /> {modules} moduli</span>
          <span className="inline-flex items-center gap-1">🧠 {quizzes} quiz</span>
        </div>
        <div className="mt-5">
          <button className="w-full rounded-lg bg-[#2C3E50] px-4 py-2 text-white hover:bg-[#243444] transition">Esplora corso</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
