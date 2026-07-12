import React, { useState, Suspense } from 'react'
import { Box } from 'lucide-react'
import PageLayout, { SectionCard } from '../components/PageLayout'
import { DualDogViewer } from '../../../shared/components/3d/DogViewer'
import { lijnen } from '../../../shared/content/contentData'

const styles = [
  { id: 'realistic', label: 'Realistische 3D', desc: 'Gedetailleerd model met vacht-textuur en realistische proporties' },
  { id: 'low-poly', label: 'Stylized Low-Poly', desc: 'Stijlvol low-poly met animatie — ademen, oren bewegen, staart kwispelen' },
  { id: 'hotspot', label: '3D met Hotspots', desc: 'Klik op lichaamsdelen voor onderzoek-gebaseerde informatie' },
]

export default function D3Vergelijking() {
  const [activeStyle, setActiveStyle] = useState('realistic')

  return (
    <PageLayout title="3D Vergelijking" subtitle="Vergelijk de werklijn en showlijn Border Collie in 3D. Kies je voorkeur stijl en ontdek de verschillen." icon={Box}>
      <div className="space-y-8">
        {/* Style selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {styles.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStyle(s.id)}
              className={`p-5 rounded-2xl text-left transition-all ${
                activeStyle === s.id
                  ? 'card-luxury border-bc-gold/50 scale-[1.02]'
                  : 'card-luxury opacity-60 hover:opacity-100'
              }`}
            >
              <h3 className={`font-serif text-lg font-semibold mb-2 ${activeStyle === s.id ? 'text-bc-gold' : 'text-bc-warm-white'}`}>
                {s.label}
              </h3>
              <p className="text-sm text-bc-gray">{s.desc}</p>
            </button>
          ))}
        </div>

        {/* 3D Viewer */}
        <SectionCard>
          <div className="h-[400px] md:h-[500px]">
            <Suspense fallback={<div className="h-full flex items-center justify-center"><div className="w-12 h-12 border-4 border-bc-gold/20 border-t-bc-gold rounded-full animate-spin" /></div>}>
              <DualDogViewer style={activeStyle} theme="dark-luxury" />
            </Suspense>
          </div>
        </SectionCard>

        {/* Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard>
            <h3 className="font-serif text-xl font-semibold text-bc-gold mb-3">Werklijn Kenmerken</h3>
            <ul className="space-y-2 text-sm text-bc-gray">
              <li>• Slank, atletisch, gebouwd voor snelheid</li>
              <li>• Kortere, functionele vacht</li>
              <li>• Zeer sterk herdersinstinct</li>
              <li>• EPHB1 werklijn-specifiek haplotype</li>
              <li>• Hogere impulsiviteit</li>
            </ul>
          </SectionCard>
          <SectionCard>
            <h3 className="font-serif text-xl font-semibold text-bc-gold mb-3">Showlijn Kenmerken</h3>
            <ul className="space-y-2 text-sm text-bc-gray">
              <li>• Zwaarder, korter poten, voller vacht</li>
              <li>• Langer, dikker, zachter haar</li>
              <li>• Minder uitgesproken herdersinstinct</li>
              <li>• Compijanter, kalmer</li>
              <li>• Beter geschikt als gezinshond</li>
            </ul>
          </SectionCard>
        </div>

        {/* Hotspot info */}
        {activeStyle === 'hotspot' && (
          <SectionCard>
            <h3 className="font-serif text-xl font-semibold text-bc-gold mb-3">Interactieve Hotspots</h3>
            <p className="text-bc-gray text-sm">
              Klik op de glowende punten op het 3D model om informatie te zien over:
              ogen (the eye), vacht, bouw, oren, spierfysiologie en staart.
              Elke hotspot bevat onderzoek-gebaseerde content met bronvermelding.
            </p>
          </SectionCard>
        )}
      </div>
    </PageLayout>
  )
}
