import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Gallery(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const run = async () => {
      try {
        const res = await fetch(`${BACKEND}/api/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section id="gallery" className="relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Curated Gallery</h2>
          <p className="text-slate-300 mt-2">Fresh drops from artisans and AI collaborations.</p>
        </div>
        {loading ? (
          <p className="text-center text-slate-300">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it, idx)=> (
              <motion.div key={it.id || idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/30 to-orange-400/30" />
                <div className="p-4">
                  <h3 className="text-white font-semibold">{it.title}</h3>
                  <p className="text-slate-300 text-sm line-clamp-2">{it.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-fuchsia-300 font-medium">${'{'}it.price{'}'}</span>
                    <button className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-white text-sm">Add to cart</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
