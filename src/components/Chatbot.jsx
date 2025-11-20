import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Image as ImageIcon, Loader2 } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Chatbot(){
  const [prompt, setPrompt] = useState('A dreamy watercolor koi fish swimming in a nebula pond')
  const [style, setStyle] = useState('dreamy')
  const [aspect, setAspect] = useState('1:1')
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

  const styles = useMemo(()=>['dreamy','watercolor','neon','ink','clay','fantasy','minimal'],[])
  const aspects = useMemo(()=>['1:1','3:4','16:9'],[])

  const generate = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${BACKEND}/api/generate-art`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, style, aspect })
      })
      const data = await res.json()
      setImage(data.image)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chat" className="relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold text-lg">Dream Craft Chatbot</h3>
            <p className="text-slate-300 text-sm mt-1">Describe your piece. We’ll conjure an art preview.</p>
            <div className="mt-4 space-y-3">
              <input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Describe your idea" className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />
              <div className="flex gap-3">
                <select value={style} onChange={e=>setStyle(e.target.value)} className="flex-1 bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white">
                  {styles.map(s=> <option key={s} value={s} className="bg-slate-900">{s}</option>)}
                </select>
                <select value={aspect} onChange={e=>setAspect(e.target.value)} className="w-32 bg-transparent border border-white/15 rounded-xl px-4 py-3 text-white">
                  {aspects.map(a=> <option key={a} value={a} className="bg-slate-900">{a}</option>)}
                </select>
                <button onClick={generate} disabled={loading} className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-400 text-white font-medium inline-flex items-center gap-2 disabled:opacity-60">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Generate
                </button>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur min-h-[360px] flex items-center justify-center">
            {image ? (
              <img src={image} alt="AI Art" className="rounded-xl border border-white/10 shadow-2xl max-h-[520px]" />
            ) : (
              <div className="text-center text-slate-300">
                <ImageIcon className="w-10 h-10 mx-auto mb-2 text-fuchsia-300" />
                <p>Your generated art will appear here.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
