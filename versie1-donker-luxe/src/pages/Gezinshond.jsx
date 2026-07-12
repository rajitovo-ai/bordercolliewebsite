import React from 'react'
import { Home } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { gezinshond } from '../../../shared/content/contentData'
import { Check, X } from 'lucide-react'

export default function Gezinshond() {
  return (
    <PageLayout title="Geschiktheid als Gezinshond" subtitle={gezinshond.intro} icon={Home}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard>
            <h3 className="font-serif text-xl font-semibold text-green-400 mb-4">Geschikt voor</h3>
            <ul className="space-y-3">
              {gezinshond.geschikt.map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-bc-warm-white/80 text-sm">{g}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
          <SectionCard>
            <h3 className="font-serif text-xl font-semibold text-red-400 mb-4">NIET geschikt voor</h3>
            <ul className="space-y-3">
              {gezinshond.nietGeschikt.map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-bc-warm-white/80 text-sm">{g}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Showlijn als Gezinshond">
            <p className="text-sm">{gezinshond.showlijnVsWerklijn.showlijn}</p>
          </InfoCard>
          <InfoCard title="Werklijn als Gezinshond">
            <p className="text-sm">{gezinshond.showlijnVsWerklijn.werklijn}</p>
          </InfoCard>
        </div>
      </div>
    </PageLayout>
  )
}
