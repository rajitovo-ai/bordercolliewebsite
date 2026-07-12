import React from 'react'
import { Eye } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { gedrag } from '../../../shared/content/contentData'

export default function Gedrag() {
  return (
    <PageLayout title="Gedrag" subtitle={gedrag.intro} icon={Eye}>
      <div className="space-y-8">
        <InfoCard title="De 'Eye' — Starende Blik"><p className="mb-3">{gedrag.theEye.beschrijving}</p><p className="text-xs text-bc-gray italic">Bron: {gedrag.theEye.bron}</p></InfoCard>
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">LICHAAMSTAAL</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-3">{gedrag.lichaamstaal.map((l, i) => (<div key={i} className="bg-bc-offwhite rounded-lg p-3 border-2 border-bc-gray-light"><div className="font-bold text-bc-blue text-sm">{l.signaal}</div><div className="text-sm text-bc-gray mt-1">{l.betekenis}</div><div className="text-xs text-bc-gray/60 mt-1">{l.context}</div></div>))}</div></SectionCard>
        <InfoCard title="Blaffen"><p>{gedrag.blaffen}</p></InfoCard>
        <InfoCard title="Herdersfluiten"><p>{gedrag.herdersfluiten.beschrijving}</p></InfoCard>
        <InfoCard title="Kalmeringssignalen"><p>{gedrag.kalmeringssignalen}</p></InfoCard>
      </div>
    </PageLayout>
  )
}
