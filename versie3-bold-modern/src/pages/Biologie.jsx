import React from 'react'
import { Activity } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { biologie } from '../../../shared/content/contentData'

export default function Biologie() {
  return (
    <PageLayout title="Biologie" subtitle={biologie.intro} icon={Activity}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard><h3 className="text-xl font-bold text-bc-blue mb-4">REU</h3><div className="space-y-2"><div className="flex justify-between"><span className="text-bc-gray">Schofthoogte:</span><span className="font-bold">{biologie.maten.reu.schofthoogte}</span></div><div className="flex justify-between"><span className="text-bc-gray">Gewicht:</span><span className="font-bold">{biologie.maten.reu.gewicht}</span></div></div></SectionCard>
          <SectionCard><h3 className="text-xl font-bold text-bc-coral mb-4">TEEF</h3><div className="space-y-2"><div className="flex justify-between"><span className="text-bc-gray">Schofthoogte:</span><span className="font-bold">{biologie.maten.teef.schofthoogte}</span></div><div className="flex justify-between"><span className="text-bc-gray">Gewicht:</span><span className="font-bold">{biologie.maten.teef.gewicht}</span></div></div></SectionCard>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-bold rounded-2xl p-6 text-center"><div className="text-5xl font-bold text-bc-blue mb-2">32-48</div><div className="text-sm text-bc-gray font-medium">km/u TOPSNELHEID</div><p className="text-xs text-bc-gray/60 mt-2">{biologie.snelheid}</p></div>
          <div className="card-bold rounded-2xl p-6 text-center"><div className="text-5xl font-bold text-bc-coral mb-2">~300</div><div className="text-sm text-bc-gray font-medium">PSI BIJTKRACHT</div><p className="text-xs text-bc-gray/60 mt-2">{biologie.bijtkracht}</p></div>
        </div>
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">VITALE FUNCTIES</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{biologie.vitaleFuncties.map((v, i) => (<div key={i} className="bg-bc-offwhite rounded-lg p-3 border-2 border-bc-gray-light"><div className="text-xs text-bc-gray uppercase tracking-wider font-bold">{v.parameter}</div><div className="text-lg font-bold text-bc-blue mt-1">{v.waarde}</div></div>))}</div></SectionCard>
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">SPIERVEZELTYPEN</h3><div className="space-y-3">{biologie.spiervezels.map((s, i) => (<div key={i} className="bg-bc-offwhite rounded-lg p-4 border-2 border-bc-gray-light"><div className="font-bold text-bc-blue mb-1">{s.type}</div><div className="text-sm text-bc-gray mb-1">{s.eigenschap}</div><div className="text-sm">{s.functie}</div></div>))}</div></SectionCard>
        <InfoCard title="Zintuigen"><div className="space-y-3">{biologie.zintuigen.map((z, i) => (<div key={i} className="border-l-4 border-bc-blue pl-4"><span className="text-bc-blue font-bold">{z.zintuig}</span><p className="text-sm text-bc-gray mt-1">{z.beschrijving}</p></div>))}</div></InfoCard>
      </div>
    </PageLayout>
  )
}
