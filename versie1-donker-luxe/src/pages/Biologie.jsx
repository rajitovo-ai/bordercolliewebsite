import React from 'react'
import { Activity } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { biologie } from '../../../shared/content/contentData'

export default function Biologie() {
  return (
    <PageLayout title="Biologie en Anatomie" subtitle={biologie.intro} icon={Activity}>
      <div className="space-y-8">
        {/* Maten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard>
            <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Reu</h3>
            <div className="space-y-2">
              <div className="flex justify-between"><span className="text-bc-gray">Schofthoogte:</span><span className="font-medium">{biologie.maten.reu.schofthoogte}</span></div>
              <div className="flex justify-between"><span className="text-bc-gray">Gewicht:</span><span className="font-medium">{biologie.maten.reu.gewicht}</span></div>
            </div>
          </SectionCard>
          <SectionCard>
            <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Teef</h3>
            <div className="space-y-2">
              <div className="flex justify-between"><span className="text-bc-gray">Schofthoogte:</span><span className="font-medium">{biologie.maten.teef.schofthoogte}</span></div>
              <div className="flex justify-between"><span className="text-bc-gray">Gewicht:</span><span className="font-medium">{biologie.maten.teef.gewicht}</span></div>
            </div>
          </SectionCard>
        </div>

        {/* Snelheid & bijtkracht */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-luxury rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-bc-gold mb-2">32-48</div>
            <div className="text-sm text-bc-gray">km/u topsnelheid</div>
            <p className="text-xs text-bc-gray/60 mt-2">{biologie.snelheid}</p>
          </div>
          <div className="card-luxury rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-bc-gold mb-2">~200-300</div>
            <div className="text-sm text-bc-gray">PSI bijtkracht</div>
            <p className="text-xs text-bc-gray/60 mt-2">{biologie.bijtkracht}</p>
          </div>
        </div>

        {/* Vitale functies */}
        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Vitale Functies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {biologie.vitaleFuncties.map((v, i) => (
              <div key={i} className="bg-bc-dark/50 rounded-lg p-3 border border-bc-gold/10">
                <div className="text-xs text-bc-gray uppercase tracking-wider">{v.parameter}</div>
                <div className="text-lg font-semibold text-bc-gold mt-1">{v.waarde}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Spiervezels */}
        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Spiervezeltypen</h3>
          <div className="space-y-3">
            {biologie.spiervezels.map((s, i) => (
              <div key={i} className="bg-bc-dark/50 rounded-lg p-4 border border-bc-gold/10">
                <div className="font-medium text-bc-gold mb-1">{s.type}</div>
                <div className="text-sm text-bc-gray mb-1">{s.eigenschap}</div>
                <div className="text-sm">{s.functie}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Zintuigen */}
        <InfoCard title="Zintuigen">
          <div className="space-y-3">
            {biologie.zintuigen.map((z, i) => (
              <div key={i} className="border-l-2 border-bc-gold/30 pl-4">
                <span className="text-bc-gold font-medium">{z.zintuig}</span>
                <p className="text-sm text-bc-gray mt-1">{z.beschrijving}</p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
    </PageLayout>
  )
}
