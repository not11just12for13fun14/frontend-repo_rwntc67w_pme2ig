import React from 'react'
import { Menu, ShoppingBag, Palette } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/15 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 py-3 px-4">
          <div className="flex items-center gap-3">
            <Palette className="w-6 h-6 text-fuchsia-300" />
            <span className="text-white font-semibold">DreamCraft</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#gallery">Gallery</a>
            <a className="hover:text-white" href="#chat">Chatbot</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="relative text-white">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-fuchsia-500 text-white rounded-full px-1.5">2</span>
            </button>
            <button className="md:hidden text-white"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </div>
    </header>
  )
}
