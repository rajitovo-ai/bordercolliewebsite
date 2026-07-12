import React, { useState } from 'react'
import { Palette } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { vachtkleuren } from '../../../shared/content/contentData'

const colorMap = {
  'Zwart-wit': { bg: '#1a1a1a', accent: '#f5f5f0' },
  'Zwart tricolour': { bg: '#1a1a1a', accent: '#a0703a' },
  'Rood en wit': { bg: '#6b3a2a', accent: '#f5f5f0' },
  'Rood tricolour': { bg: '#6b3a2a', accent: '#a0703a' },
  'Blue merle': { bg: '#5a6a7a', accent: '#2a2a3a' },
  'Red merle': { bg: '#a07060', accent: '#6b3a2a' },
  'Blue': { bg: '#4a5a6a', accent: '#c0c8d0' },
  'Lilac': { bg: '#9a8a8a', accent: '#d0c0c0' },
  'Brindle': { bg: '#3a2a1a', accent: '#6b5a3a' },
  'Australian red': { bg: '#c09060', accent: '#e0c0a0' },
  'Sable': { bg: '#5a4a3a', accent: '#c0a070' },
  'Enkele kleur': { bg: '#1a1a1a', accent: '#2a2a2a' },
}

export default function Vachtkleuren() {
  const [selected, setSelected] = useState(0)
  const color = vachtkleuren.kleuren[selected]
  const colors = colorMap[color.naam] || { bg: '#333', accent: '#999' }

  return (
    <PageLayout title="Vachtkleuren en Genetica" subtitle={vachtkleuren.intro} icon={Palette}>
      <div className="space-y-8">
        {/* Color picker */}
        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Interactieve Kleurenkiezer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
            {vachtkleuren.kleuren.map((k, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`p-3 rounded-xl border transition-all text-left ${
                  selected === i ? 'border-bc-gold scale-105' : 'border-bc-gold/10 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="w-full h-12 rounded-lg mb-2" style={{
                  background: `linear-gradient(135deg, ${(colorMap[k.naam] || {}).bg || '#333'} 60%, ${(colorMap[k.naam] || {}).accent || '#999'} 60%)`
                }} />
                <div className="text-xs font-medium">{k.naam}</div>
              </button>
            ))}
          </div>

          <div className="bg-bc-dark/50 rounded-xl p-6 border border-bc-gold/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full" style={{
                background: `linear-gradient(135deg, ${colors.bg} 60%, ${colors.accent} 60%)`
              }} />
              <div>
                <h4 className="font-serif text-xl font-semibold text-bc-gold">{color.naam}</h4>
                <p className="text-sm text-bc-gold/60">{color.frequentie}</p>
              </div>
            </div>
            <p className="text-bc-warm-white/80">{color.beschrijving}</p>
          </div>
        </SectionCard>

        <InfoCard title="Merle Genetica">
          <p>{vachtkleuren.merle.beschrijving}</p>
        </InfoCard>

        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Vachttypen</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vachtkleuren.vachttypen.map((v, i) => (
              <div key={i} className="bg-bc-dark/50 rounded-lg p-4 border border-bc-gold/10">
                <div className="font-medium text-bc-gold mb-1">{v.type}</div>
                <p className="text-sm text-bc-gray">{v.beschrijving}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <InfoCard title="Oogkleur">
          <p>{vachtkleuren.oogkleur}</p>
        </InfoCard>
      </div>
    </PageLayout>
  )
}
