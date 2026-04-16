'use client'

import { useEffect } from 'react'

export default function PrintStyles() {
  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'print-styles'
    style.innerHTML = `
      @media print {
        @page { margin: 0.5in; size: A4; }
        body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        .no-print { display: none !important; }
        section { page-break-inside: avoid; }
        .hero, .thesis, .next { min-height: auto; }
        .nav { position: static; }
        .marquee { animation: none; }
      }
    `
    document.head.appendChild(style)
    return () => { document.getElementById('print-styles')?.remove() }
  }, [])
  return null
}

export function handlePrintPDF() {
  window.print()
}