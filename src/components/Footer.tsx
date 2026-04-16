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
    <footer className="footer bg-[var(--teal-dark)] text-white/80 py-16 pb-8">
      <div className="container">
        <div className="footer__grid grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-12 pb-12 border-b border-white/15">
          <div className="footer__logo border border-white text-white p-4 px-6 text-center leading-none">
            <span className="footer__logo__be text-[18px] font-light tracking-[0.15em] block">BE</span>
            <span className="footer__logo__sub text-[9px] font-light tracking-[0.25em] block mt-1">INTELIGÊNCIA</span>
          </div>
          <div>
            <span className="footer__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal-bright)] mb-3 block">Contact</span>
            <div className="footer__item text-[13px] leading-[1.9]">Daniel Hoffmann</div>
            <div className="footer__item text-[13px] leading-[1.9]">daniel@hoffmanntci.com</div>
            <div className="footer__item text-[13px] leading-[1.9]">+1 649 344 2441</div>
          </div>
          <div>
            <span className="footer__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal-bright)] mb-3 block">Hoffmann Ltd</span>
            <div className="footer__item text-[13px] leading-[1.9]">Providenciales</div>
            <div className="footer__item text-[13px] leading-[1.9]">Turks &amp; Caicos Islands</div>
          </div>
        </div>
        <div className="footer__bottom flex flex-wrap justify-between items-center pt-8 text-[11px] text-white/55 gap-4">
          <span>© 2026 Hoffmann Ltd · A proposal for Beach Enclave · Confidential</span>
          <span>{updated}</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) { .footer__grid { grid-template-columns: 1fr; gap: 2rem; } }
      `}</style>
    </footer>
  )
}