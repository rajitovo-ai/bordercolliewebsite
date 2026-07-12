import React from 'react'
import { Wallet } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { eigenaarschap } from '../../../shared/content/contentData'

export default function Eigenaarschap() {
  return (
    <PageLayout title="Eigenaarschap" subtitle={eigenaarschap.intro} icon={Wallet}>
      <div className="space-y-8">
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">KOSTEN</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-bc-offwhite rounded-xl p-4 border-2 border-bc-gray-light text-center"><div className="text-4xl font-bold text-bc-blue">{eigenaarschap.kosten.jaarlijks}</div><div className="text-sm text-bc-gray mt-1 font-medium">PER JAAR</div></div>
            <div className="bg-bc-offwhite rounded-xl p-4 border-2 border-bc-gray-light text-center"><div className="text-4xl font-bold text-bc-coral">{eigenaarschap.kosten.levenslang}</div><div className="text-sm text-bc-gray mt-1 font-medium">LEVENSLANG</div></div>
          </div>
          <div className="space-y-2">{eigenaarschap.kosten.posten.map((p, i) => (<div key={i} className="flex justify-between text-sm border-b border-bc-gray-light pb-2"><span className="text-bc-gray">{p.categorie}</span><span className="font-bold">{p.bedrag}</span></div>))}</div>
        </SectionCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Beweging"><p className="text-sm">{eigenaarschap.beweging}</p></InfoCard>
          <InfoCard title="Recall Training"><p className="text-sm">{eigenaarschap.recall}</p></InfoCard>
          <InfoCard title="Appartement"><p className="text-sm">{eigenaarschap.appartement}</p></InfoCard>
          <InfoCard title="Multi-Pet"><p className="text-sm">{eigenaarschap.multiPet}</p></InfoCard>
        </div>
        <InfoCard title="Verharing"><p>{eigenaarschap.verharing}</p></InfoCard>
      </div>
    </PageLayout>
  )
}
