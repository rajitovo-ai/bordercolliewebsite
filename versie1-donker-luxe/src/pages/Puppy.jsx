import React from 'react'
import { Baby } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { puppy } from '../../../shared/content/contentData'

export default function Puppy() {
  return (
    <PageLayout title="Puppy Ontwikkeling" subtitle={puppy.intro} icon={Baby}>
      <div className="space-y-8">
        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Ontwikkelingsfasen</h3>
          <div className="space-y-4">
            {puppy.fases.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-bc-gold font-bold text-sm">{f.periode}</div>
                </div>
                <div className="flex-1 border-l-2 border-bc-gold/20 pl-4 pb-4">
                  <div className="font-medium text-bc-gold mb-1">{f.fase}</div>
                  <p className="text-sm text-bc-warm-white/80">{f.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <InfoCard title="Early Neurological Stimulation (ENS)">
          <p>{puppy.ens.beschrijving}</p>
        </InfoCard>
      </div>
    </PageLayout>
  )
}
