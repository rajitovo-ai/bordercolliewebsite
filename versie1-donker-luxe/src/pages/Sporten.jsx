import React from 'react'
import { Trophy } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { sporten } from '../../../shared/content/contentData'

export default function Sporten() {
  return (
    <PageLayout title="Hondensporten en Werkrollen" subtitle={sporten.intro} icon={Trophy}>
      <div className="space-y-8">
        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Prestaties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sporten.prestaties.map((p, i) => (
              <div key={i} className="bg-bc-dark/50 rounded-lg p-4 border border-bc-gold/10">
                <div className="font-medium text-bc-gold">{p.sport}</div>
                <p className="text-sm text-bc-warm-white/80 mt-1">{p.prestatie}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Werkrollen voorbij Herderswerk</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sporten.werkrollen.map((w, i) => (
              <div key={i} className="bg-bc-dark/50 rounded-lg p-4 border border-bc-gold/10">
                <div className="font-medium text-bc-gold">{w.rol}</div>
                <p className="text-sm text-bc-warm-white/80 mt-1">{w.details}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PageLayout>
  )
}
