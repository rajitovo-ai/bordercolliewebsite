import React from 'react'
import { Trophy } from 'lucide-react'
import PageLayout, { SectionCard } from '../components/PageLayout'
import { sporten } from '../../../shared/content/contentData'

export default function Sporten() {
  return (
    <PageLayout title="Hondensporten" subtitle={sporten.intro} icon={Trophy}>
      <div className="space-y-8">
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">PRESTATIES</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{sporten.prestaties.map((p, i) => (<div key={i} className="bg-bc-offwhite rounded-lg p-4 border-2 border-bc-gray-light"><div className="font-bold text-bc-blue">{p.sport}</div><p className="text-sm text-bc-gray mt-1">{p.prestatie}</p></div>))}</div></SectionCard>
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">WERKROLLEN</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{sporten.werkrollen.map((w, i) => (<div key={i} className="bg-bc-offwhite rounded-lg p-4 border-2 border-bc-gray-light"><div className="font-bold text-bc-coral">{w.rol}</div><p className="text-sm text-bc-gray mt-1">{w.details}</p></div>))}</div></SectionCard>
      </div>
    </PageLayout>
  )
}
