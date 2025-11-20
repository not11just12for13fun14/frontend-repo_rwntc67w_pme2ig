import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Chatbot from './components/Chatbot'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* background auras */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[600px] h-[600px] bg-fuchsia-500/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      <main className="relative pt-24">
        <Hero />
        <Features />
        <Chatbot />
        <Gallery />
        <footer className="py-12 text-center text-slate-400">Made with love at DreamCraft ✨</footer>
      </main>
    </div>
  )
}

export default App
