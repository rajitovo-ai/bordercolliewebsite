import React from 'react'
import { Wallet } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { eigenaarschap } from '../../../shared/content/contentData'

export default function Eigenaarschap() {
  return (
    <PageLayout title="Praktisch Eigenaarschap" subtitle={eigenaarschap.intro} icon={Wallet}>
      <div className="space-y-8">
        <SectionCard><h3 className="text-xl font-semibold text-bc-forest mb-4">Kosten</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-bc-cream-2 rounded-xl p-4 border border-bc-forest/10 text-center"><div className="text-3xl font-bold text-bc-forest">{eigenaarschap.kosten.jaarlijks}</div><div className="text-sm text-bc-text-light mt-1">per jaar</div></div>
            <div className="bg-bc-cream-2 rounded-xl p-4 border border-bc-forest/10 text-center"><div className="text-3xl font-bold text-bc-forest">{eigenaarschap.kosten.levenslang}</div><div className="text-sm text-bc-text-light mt-1">levenslang (13 jaar)</div></div>
          </div>
          <div className="space-y-2">{eigenaarschap.kosten.posten.map((p, i) => (<div key={i} className="flex justify-between text-sm border-b border-bc-forest/5 pb-2"><span className="text-bc-text-light">{p.categorie}</span><span className="font-medium">{p.bedrag}</span></div>))}</div>
        </SectionCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Beweging"><p className="text-sm">{eigenaarschap.beweging}</p></InfoCard>
          <InfoCard title="Recall Training"><p className="text-sm">{eigenaarschap.recall}</p></InfoCard>
          <InfoCard title="Appartement"><p className="text-sm">{eigenaarschap.appartement}</p></InfoCard>
          <InfoCard title="Multi-Pet Compatibiliteit"><p className="text-sm">{eigenaarschap.multiPet}</p></InfoCard>
        </div>
        <InfoCard title="Verharing & Vachtverzorging"><p>{eigenaarschap.verharing}</p></InfoCard>
      </div>
    </PageLayout>
  )
}
