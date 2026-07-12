import React from 'react'
import { Eye } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { gedrag } from '../../../shared/content/contentData'

export default function Gedrag() {
  return (
    <PageLayout title="Gedrag en Communicatie" subtitle={gedrag.intro} icon={Eye}>
      <div className="space-y-8">
        <InfoCard title="De 'Eye' — Starende Blik"><p className="mb-3">{gedrag.theEye.beschrijving}</p><p className="text-xs text-bc-text-light italic">Bron: {gedrag.theEye.bron}</p></InfoCard>
        <SectionCard>
          <h3 className="text-xl font-semibold text-bc-forest mb-4">Lichaamstaal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {gedrag.lichaamstaal.map((l, i) => (<div key={i} className="bg-bc-cream-2 rounded-lg p-3 border border-bc-forest/10"><div className="font-medium text-bc-forest text-sm">{l.signaal}</div><div className="text-sm text-bc-text/80 mt-1">{l.betekenis}</div><div className="text-xs text-bc-text-light/60 mt-1">{l.context}</div></div>))}
          </div>
        </SectionCard>
        <InfoCard title="Blaffen"><p>{gedrag.blaffen}</p></InfoCard>
        <InfoCard title="Herdersfluiten"><p>{gedrag.herdersfluiten.beschrijving}</p></InfoCard>
        <InfoCard title="Kalmeringssignalen"><p>{gedrag.kalmeringssignalen}</p></InfoCard>
      </div>
    </PageLayout>
  )
}
