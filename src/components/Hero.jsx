import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white text-sm mb-4">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>Craft, dream and design with AI</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            DreamCraft Studio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200/90 max-w-2xl">
            An artsy, seamless craft store where you can design unique pieces with our AI muse and shop curated creations from independent artists.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#chat" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-400 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:brightness-110 transition">Start Dreaming</a>
            <a href="#gallery" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">Browse Gallery</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
