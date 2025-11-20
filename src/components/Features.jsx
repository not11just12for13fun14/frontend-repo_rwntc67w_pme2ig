import React from 'react'
import { motion } from 'framer-motion'
import { Brush, Sparkle, ShoppingBag, Image as ImageIcon } from 'lucide-react'

const items = [
  { icon: Brush, title: 'AI Co-Creation', desc: 'Describe your vision. Our Dream Craft chatbot turns it into generative art and products.' },
  { icon: ImageIcon, title: 'Dynamic Previews', desc: 'See iterations in real-time with vivid animated previews and aspect controls.' },
  { icon: ShoppingBag, title: 'Seamless Store', desc: 'Curated handmade pieces and AI-made prints shipped globally.' },
  { icon: Sparkle, title: 'Modern Aesthetics', desc: 'A lively, minimal UI with smooth motion and gradient auras.' },
]

export default function Features(){
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(236,72,153,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why you’ll love DreamCraft</h2>
          <p className="text-slate-300 mt-2">Built for artists, crafters, and dreamers.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i)=>{
            const Icon = it.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition">
                <Icon className="w-6 h-6 text-fuchsia-300" />
                <h3 className="mt-3 text-white font-semibold">{it.title}</h3>
                <p className="mt-1 text-slate-300 text-sm">{it.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
