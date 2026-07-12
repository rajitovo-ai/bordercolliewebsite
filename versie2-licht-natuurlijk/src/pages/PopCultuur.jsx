import React from 'react'
import { Film } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { popCultuur } from '../../../shared/content/contentData'

export default function PopCultuur() {
  return (
    <PageLayout title="Pop Cultuur en Ethiek" subtitle={popCultuur.intro} icon={Film}>
      <div className="space-y-8">
        <SectionCard><h3 className="text-xl font-semibold text-bc-forest mb-4">Bekende Border Collies</h3>
          <div className="space-y-3">{popCultuur.bekendeBCs.map((b, i) => (<div key={i} className="bg-bc-cream-2 rounded-lg p-4 border border-bc-forest/10"><div className="font-medium text-bc-forest">{b.naam}</div><p className="text-sm text-bc-text/80 mt-1">{b.rol}</p></div>))}</div>
        </SectionCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Bordoodles"><p className="text-sm">{popCultuur.bordoodles}</p></InfoCard>
          <InfoCard title="Puppy Mills"><p className="text-sm">{popCultuur.puppyMills}</p></InfoCard>
          <InfoCard title="Staartcouperen"><p className="text-sm">{popCultuur.staartcouperen}</p></InfoCard>
          <InfoCard title="Raw Feeding Debat"><p className="text-sm">{popCultuur.rawFeeding}</p></InfoCard>
        </div>
      </div>
    </PageLayout>
  )
}
