import React from 'react'
import { Home, Check, X } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { gezinshond } from '../../../shared/content/contentData'

export default function Gezinshond() {
  return (
    <PageLayout title="Gezinshond" subtitle={gezinshond.intro} icon={Home}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard><h3 className="text-xl font-bold text-green-600 mb-4">GESCHIKT</h3><ul className="space-y-3">{gezinshond.geschikt.map((g, i) => (<li key={i} className="flex items-start gap-3"><Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} /><span className="text-bc-gray text-sm">{g}</span></li>))}</ul></SectionCard>
          <SectionCard><h3 className="text-xl font-bold text-red-500 mb-4">NIET GESCHIKT</h3><ul className="space-y-3">{gezinshond.nietGeschikt.map((g, i) => (<li key={i} className="flex items-start gap-3"><X className="text-red-500 flex-shrink-0 mt-0.5" size={20} /><span className="text-bc-gray text-sm">{g}</span></li>))}</ul></SectionCard>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Showlijn als Gezinshond"><p className="text-sm">{gezinshond.showlijnVsWerklijn.showlijn}</p></InfoCard>
          <InfoCard title="Werklijn als Gezinshond"><p className="text-sm">{gezinshond.showlijnVsWerklijn.werklijn}</p></InfoCard>
        </div>
      </div>
    </PageLayout>
  )
}
