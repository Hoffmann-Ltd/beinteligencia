'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [updated, setUpdated] = useState('')
  useEffect(() => {
    const d = new Date()
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    setUpdated(`Updated ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`)
  }, [])

  return (
    <footer className="bg-[var(--teal-dark)] text-white/80 py-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-12 pb-12 border-b border-white/15">
          <div className="border border-white text-white p-4 px-6 text-center leading-none">
            <span className="text-[18px] font-light tracking-[0.15em] block">BE</span>
            <span className="text-[9px] font-light tracking-[0.25em] block mt-1">INTELIGÊNCIA</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal-bright)] mb-3 block">Contact</span>
            <div className="text-[13px] leading-[1.9]">Daniel Hoffmann</div>
            <div className="text-[13px] leading-[1.9]">daniel@hoffmanntci.com</div>
            <div className="text-[13px] leading-[1.9]">+1 649 344 2441</div>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal-bright)] mb-3 block">Hoffmann Ltd</span>
            <div className="text-[13px] leading-[1.9]">Providenciales</div>
            <div className="text-[13px] leading-[1.9]">Turks &amp; Caicos Islands</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center pt-8 text-[11px] text-white/55 gap-4">
          <span>© 2026 Hoffmann Ltd · A proposal for Beach Enclave · Confidential</span>
          <span>{updated}</span>
        </div>
      </div>
    </footer>
  )
}