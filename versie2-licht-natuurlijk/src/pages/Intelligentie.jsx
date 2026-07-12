import React from 'react'
import { Brain } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { intelligentie } from '../../../shared/content/contentData'

export default function Intelligentie() {
  return (
    <PageLayout title="Intelligentie en Cognitie" subtitle={intelligentie.intro} icon={Brain}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title={`${intelligentie.chaser.naam} — ${intelligentie.chaser.woorden} woorden`}>
            <p className="mb-3 text-sm">Trainingstijd: {intelligentie.chaser.trainingstijd}</p>
            <ul className="space-y-2 text-sm list-none">
              {intelligentie.chaser.vaardigheden.map((v, i) => (<li key={i} className="flex items-start gap-2"><span className="text-bc-forest mt-1">◆</span> {v}</li>))}
            </ul>
            <p className="text-xs text-bc-text-light italic mt-3">Bron: {intelligentie.chaser.bron}</p>
          </InfoCard>
          <InfoCard title={`${intelligentie.rico.naam} — ${intelligentie.rico.woorden} woorden`}>
            <ul className="space-y-2 text-sm list-none">
              {intelligentie.rico.vaardigheden.map((v, i) => (<li key={i} className="flex items-start gap-2"><span className="text-bc-forest mt-1">◆</span> {v}</li>))}
            </ul>
            <p className="text-xs text-bc-text-light italic mt-3">Bron: {intelligentie.rico.bron}</p>
          </InfoCard>
        </div>
        <InfoCard title="Algemene Intelligentie (g-factor)">
          <p className="mb-3">{intelligentie.gFactor.beschrijving}</p>
          <p className="text-bc-forest font-medium">{intelligentie.gFactor.betekenis}</p>
          <p className="text-xs text-bc-text-light italic mt-3">Bron: {intelligentie.gFactor.bron}</p>
        </InfoCard>
        <InfoCard title="Label-Learner Honden">
          <p className="mb-3">{intelligentie.labelLearners.beschrijving}</p>
          <p className="text-bc-forest font-medium">{intelligentie.labelLearners.belangrijk}</p>
          <p className="text-xs text-bc-text-light italic mt-3">Bron: {intelligentie.labelLearners.bron}</p>
        </InfoCard>
        <SectionCard>
          <h3 className="text-xl font-semibold text-bc-forest mb-4">Cognitieve Domeinen</h3>
          <div className="overflow-x-auto"><table className="w-full">
            <thead><tr className="border-b border-bc-forest/20">
              <th className="text-left py-3 px-4 text-bc-forest font-semibold">Domein</th>
              <th className="text-left py-3 px-4 text-bc-forest font-semibold">Prestatie</th>
              <th className="text-left py-3 px-4 text-bc-forest font-semibold">Bewijskracht</th>
            </tr></thead>
            <tbody>
              {intelligentie.cognitieveDomeinen.map((d, i) => (
                <tr key={i} className="border-b border-bc-forest/5">
                  <td className="py-3 px-4 font-medium">{d.domein}</td>
                  <td className="py-3 px-4 text-bc-text-light">{d.prestatie}</td>
                  <td className="py-3 px-4 text-bc-text-light text-sm">{d.bewijs}</td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </SectionCard>
      </div>
    </PageLayout>
  )
}
