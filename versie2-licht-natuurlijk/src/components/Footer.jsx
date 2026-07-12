import React from 'react'
import { Link } from 'react-router-dom'
import { navigation, siteConfig } from '../../../shared/content/contentData'

export default function Footer() {
  return (
    <footer className="bg-bc-cream-2 border-t border-bc-earth/15 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bc-forest to-bc-forest-light flex items-center justify-center">
                <span className="text-bc-cream font-bold text-lg">BC</span>
              </div>
              <span className="font-bold text-xl text-gradient-forest">Border Collie</span>
            </div>
            <p className="text-sm text-bc-text-light leading-relaxed">{siteConfig.subtitle}</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-bc-forest font-semibold mb-4 text-sm uppercase tracking-wider">Navigatie</h4>
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-bc-text-light hover:text-bc-forest transition-colors">{item.label}</Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-bc-forest font-semibold mb-4 text-sm uppercase tracking-wider">Over</h4>
            <p className="text-sm text-bc-text-light leading-relaxed mb-2">Gebaseerd op 32 research bestanden met 242 bronnen.</p>
            <p className="text-sm text-bc-text-light leading-relaxed">Alle content is wetenschappelijk onderbouwd en gefactcheckt.</p>
          </div>
        </div>
        <div className="section-divider my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-bc-text-light">© 2026 Border Collie Website. Alle content wetenschappelijk onderbouwd.</p>
          <p className="text-xs text-bc-text-light">Versie 2 — Licht & Natuurlijk</p>
        </div>
      </div>
    </footer>
  )
}
