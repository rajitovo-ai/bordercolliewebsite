import React from 'react'
import { Film } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { popCultuur } from '../../../shared/content/contentData'

export default function PopCultuur() {
  return (
    <PageLayout title="Pop Cultuur" subtitle={popCultuur.intro} icon={Film}>
      <div className="space-y-8">
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">BEKENDE BORDER COLLIES</h3><div className="space-y-3">{popCultuur.bekendeBCs.map((b, i) => (<div key={i} className="bg-bc-offwhite rounded-lg p-4 border-2 border-bc-gray-light"><div className="font-bold text-bc-blue">{b.naam}</div><p className="text-sm text-bc-gray mt-1">{b.rol}</p></div>))}</div></SectionCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Bordoodles"><p className="text-sm">{popCultuur.bordoodles}</p></InfoCard>
          <InfoCard title="Puppy Mills"><p className="text-sm">{popCultuur.puppyMills}</p></InfoCard>
          <InfoCard title="Staartcouperen"><p className="text-sm">{popCultuur.staartcouperen}</p></InfoCard>
          <InfoCard title="Raw Feeding"><p className="text-sm">{popCultuur.rawFeeding}</p></InfoCard>
        </div>
      </div>
    </PageLayout>
  )
}
