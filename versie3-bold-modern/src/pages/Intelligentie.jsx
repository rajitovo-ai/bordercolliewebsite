import React from 'react'
import { Brain } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { intelligentie } from '../../../shared/content/contentData'

export default function Intelligentie() {
  return (
    <PageLayout title="Intelligentie" subtitle={intelligentie.intro} icon={Brain}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title={`${intelligentie.chaser.naam} — ${intelligentie.chaser.woorden} woorden`}>
            <p className="mb-3 text-sm">Trainingstijd: {intelligentie.chaser.trainingstijd}</p>
            <ul className="space-y-2 text-sm list-none">{intelligentie.chaser.vaardigheden.map((v, i) => (<li key={i} className="flex items-start gap-2"><span className="text-bc-blue font-bold mt-0.5">▸</span> {v}</li>))}</ul>
            <p className="text-xs text-bc-gray italic mt-3">Bron: {intelligentie.chaser.bron}</p>
          </InfoCard>
          <InfoCard title={`${intelligentie.rico.naam} — ${intelligentie.rico.woorden} woorden`}>
            <ul className="space-y-2 text-sm list-none">{intelligentie.rico.vaardigheden.map((v, i) => (<li key={i} className="flex items-start gap-2"><span className="text-bc-blue font-bold mt-0.5">▸</span> {v}</li>))}</ul>
            <p className="text-xs text-bc-gray italic mt-3">Bron: {intelligentie.rico.bron}</p>
          </InfoCard>
        </div>
        <InfoCard title="Algemene Intelligentie (g-factor)">
          <p className="mb-3">{intelligentie.gFactor.beschrijving}</p>
          <p className="text-bc-blue font-bold">{intelligentie.gFactor.betekenis}</p>
          <p className="text-xs text-bc-gray italic mt-3">Bron: {intelligentie.gFactor.bron}</p>
        </InfoCard>
        <InfoCard title="Label-Learner Honden">
          <p className="mb-3">{intelligentie.labelLearners.beschrijving}</p>
          <p className="text-bc-blue font-bold">{intelligentie.labelLearners.belangrijk}</p>
          <p className="text-xs text-bc-gray italic mt-3">Bron: {intelligentie.labelLearners.bron}</p>
        </InfoCard>
        <SectionCard>
          <h3 className="text-xl font-bold text-bc-dark mb-4">COGNITIEVE DOMEINEN</h3>
          <div className="overflow-x-auto"><table className="w-full">
            <thead><tr className="border-b-2 border-bc-blue"><th className="text-left py-3 px-4 text-bc-blue font-bold">Domein</th><th className="text-left py-3 px-4 text-bc-blue font-bold">Prestatie</th><th className="text-left py-3 px-4 text-bc-blue font-bold">Bewijs</th></tr></thead>
            <tbody>{intelligentie.cognitieveDomeinen.map((d, i) => (<tr key={i} className="border-b border-bc-gray-light"><td className="py-3 px-4 font-bold">{d.domein}</td><td className="py-3 px-4 text-bc-gray">{d.prestatie}</td><td className="py-3 px-4 text-bc-gray text-sm">{d.bewijs}</td></tr>))}</tbody>
          </table></div>
        </SectionCard>
      </div>
    </PageLayout>
  )
}
