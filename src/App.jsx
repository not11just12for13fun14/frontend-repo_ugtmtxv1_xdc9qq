import React from 'react'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import CourseShowcase from './components/CourseShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#2C3E50]">
      {/* Hero with Spline scene and CTA */}
      <Hero />

      {/* Feature highlights */}
      <FeatureGrid />

      {/* Courses grid */}
      <CourseShowcase />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
