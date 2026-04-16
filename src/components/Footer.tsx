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
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__logo">
            <span className="footer__logo__be">BE</span>
            <span className="footer__logo__sub">INTELIGÊNCIA</span>
          </div>
          <div>
            <span className="footer__label">Contact</span>
            <div className="footer__item">Daniel Hoffmann</div>
            <div className="footer__item">daniel@hoffmanntci.com</div>
            <div className="footer__item">+1 649 344 2441</div>
          </div>
          <div>
            <span className="footer__label">Hoffmann Ltd</span>
            <div className="footer__item">Providenciales</div>
            <div className="footer__item">Turks &amp; Caicos Islands</div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Hoffmann Ltd · A proposal for Beach Enclave · Confidential</span>
          <span id="updated">{updated}</span>
        </div>
      </div>
    </footer>
  )
}
