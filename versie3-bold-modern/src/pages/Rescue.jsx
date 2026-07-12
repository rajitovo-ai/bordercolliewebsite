import React from 'react'
import { HeartHandshake } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { rescue } from '../../../shared/content/contentData'

export default function Rescue() {
  return (
    <PageLayout title="Rescue" subtitle={rescue.intro} icon={HeartHandshake}>
      <div className="space-y-8">
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">REDENEN VOOR AFGIFTE</h3><ul className="space-y-2">{rescue.redenen.map((r, i) => (<li key={i} className="flex items-start gap-3"><span className="text-bc-blue font-bold mt-0.5">▸</span><span className="text-bc-gray text-sm">{r}</span></li>))}</ul></SectionCard>
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">VOORDELEN VAN ADOPTIE</h3><ul className="space-y-2">{rescue.voordelen.map((v, i) => (<li key={i} className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span><span className="text-bc-gray text-sm">{v}</span></li>))}</ul></SectionCard>
        <InfoCard title="Battersea Observaties"><p>{rescue.battersea}</p></InfoCard>
      </div>
    </PageLayout>
  )
}
