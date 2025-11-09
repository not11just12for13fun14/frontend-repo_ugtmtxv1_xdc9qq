import React from 'react'
import { BookOpen, Play, FileText, Layers, ListChecks } from 'lucide-react'

export default function CourseCard({ title, description, image, stats = {} }) {
  const { modules = 0, lessons = 0, quizzes = 0 } = stats
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow hover:shadow-md transition-shadow">
      {image ? (
        <img src={image} alt="" className="h-40 w-full object-cover" />
      ) : (
        <div className="h-40 w-full bg-[#2C3E50]/5 flex items-center justify-center">
          <BookOpen className="text-[#2C3E50]" />
        </div>
      )}
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-lg font-semibold text-[#2C3E50]">{title}</h3>
        <p className="text-sm text-[#2C3E50]/70 line-clamp-3">{description}</p>
        <div className="mt-2 flex items-center gap-4 text-xs text-[#2C3E50]/70">
          <span className="inline-flex items-center gap-1"><Play size={14}/> {lessons} lezioni</span>
          <span className="inline-flex items-center gap-1"><Layers size={14}/> {modules} moduli</span>
          <span className="inline-flex items-center gap-1"><ListChecks size={14}/> {quizzes} quiz</span>
        </div>
        <div className="mt-3">
          <button className="w-full rounded-md bg-[#E67E22] px-3 py-2 text-white font-medium hover:brightness-110">
            Vedi dettagli
          </button>
        </div>
      </div>
    </div>
  )
}
