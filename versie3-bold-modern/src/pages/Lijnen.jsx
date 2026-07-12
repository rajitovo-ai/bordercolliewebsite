import React, { Suspense } from 'react'
import { Dna } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import ComparisonTable from '../../../shared/components/interactive/ComparisonTable'
import { DogViewer } from '../../../shared/components/3d/DogViewer'
import { lijnen } from '../../../shared/content/contentData'

export default function Lijnen() {
  return (
    <PageLayout title="Werk- vs Showlijn" subtitle={lijnen.intro} icon={Dna}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard><h3 className="text-xl font-bold text-bc-blue mb-4 text-center">WERKLIJN</h3><div className="h-[300px]"><Suspense fallback={<div className="h-full flex items-center justify-center"><div className="w-8 h-8 border-2 border-bc-blue/20 border-t-bc-blue rounded-full animate-spin" /></div>}><DogViewer variant="working" style="realistic" theme="bold-modern" /></Suspense></div></SectionCard>
          <SectionCard><h3 className="text-xl font-bold text-bc-coral mb-4 text-center">SHOWLIJN</h3><div className="h-[300px]"><Suspense fallback={<div className="h-full flex items-center justify-center"><div className="w-8 h-8 border-2 border-bc-coral/20 border-t-bc-coral rounded-full animate-spin" /></div>}><DogViewer variant="show" style="realistic" theme="bold-modern" /></Suspense></div></SectionCard>
        </div>
        <ComparisonTable theme="bold-modern" />
        <InfoCard title="EPHB1-gen — Wetenschappelijk Bewijs">
          <p className="mb-4">{lijnen.epb1.beschrijving}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{lijnen.epb1.genen.map((g, i) => (<div key={i} className="bg-bc-offwhite rounded-lg p-3 border-2 border-bc-gray-light"><span className="text-bc-blue font-mono font-bold text-sm">{g.gen}</span><p className="text-sm text-bc-gray mt-1">{g.functie}</p></div>))}</div>
          <p className="text-xs text-bc-gray italic mt-4">Bron: {lijnen.epb1.bron}</p>
        </InfoCard>
        <InfoCard title="De 'Barbie Collie' Mythe"><p className="text-bc-blue font-bold mb-2">Mythe: {lijnen.barbieCollie.mythe}</p><p>{lijnen.barbieCollie.realiteit}</p></InfoCard>
      </div>
    </PageLayout>
  )
}
