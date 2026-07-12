import React from 'react'
import { GraduationCap } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { training } from '../../../shared/content/contentData'

export default function Training() {
  return (
    <PageLayout title="Training en Socialisatie" subtitle={training.intro} icon={GraduationCap}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {training.principes.map((p, i) => (<InfoCard key={i} title={p.titel}><p className="text-sm">{p.beschrijving}</p></InfoCard>))}
        </div>
        <SectionCard>
          <h3 className="text-xl font-semibold text-bc-forest mb-4">Kritieke Socialisatieperiode</h3>
          <div className="flex items-center gap-4 mb-4"><div className="text-4xl font-bold text-bc-forest">{training.kritiekePeriode.periode}</div><div className="flex-1"><p className="text-bc-text-light">{training.kritiekePeriode.beschrijving}</p></div></div>
        </SectionCard>
        <SectionCard>
          <h3 className="text-xl font-semibold text-bc-forest mb-4">Praktische Tips</h3>
          <ul className="space-y-3">{training.tips.map((tip, i) => (<li key={i} className="flex items-start gap-3"><span className="text-bc-forest font-bold mt-0.5">{i + 1}.</span><span className="text-bc-text/80">{tip}</span></li>))}</ul>
        </SectionCard>
      </div>
    </PageLayout>
  )
}
