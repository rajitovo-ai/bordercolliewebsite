import React from 'react'
import { HeartHandshake } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { rescue } from '../../../shared/content/contentData'

export default function Rescue() {
  return (
    <PageLayout title="Rescue en Adoptie" subtitle={rescue.intro} icon={HeartHandshake}>
      <div className="space-y-8">
        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Veelvoorkomende redenen voor afgifte</h3>
          <ul className="space-y-2">
            {rescue.redenen.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-bc-gold mt-1">●</span>
                <span className="text-bc-warm-white/80 text-sm">{r}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Voordelen van adoptie</h3>
          <ul className="space-y-2">
            {rescue.voordelen.map((v, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-bc-warm-white/80 text-sm">{v}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <InfoCard title="Battersea Observaties">
          <p>{rescue.battersea}</p>
        </InfoCard>
      </div>
    </PageLayout>
  )
}
