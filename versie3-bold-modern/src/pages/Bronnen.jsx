import React from 'react'
import { BookOpen } from 'lucide-react'
import PageLayout, { SectionCard } from '../components/PageLayout'
import { bronnen } from '../../../shared/content/contentData'

export default function Bronnen() {
  return (
    <PageLayout title="Bronnen" subtitle={bronnen.intro} icon={BookOpen}>
      <div className="space-y-8">
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">BRONNENKWALITEIT</h3><div className="overflow-x-auto"><table className="w-full"><thead><tr className="border-b-2 border-bc-blue"><th className="text-left py-3 px-4 text-bc-blue font-bold">Type</th><th className="text-left py-3 px-4 text-bc-blue font-bold">Aantal</th><th className="text-left py-3 px-4 text-bc-blue font-bold">Betrouwbaarheid</th></tr></thead>
          <tbody>{bronnen.categorien.map((c, i) => (<tr key={i} className="border-b border-bc-gray-light"><td className="py-3 px-4 font-bold">{c.type}</td><td className="py-3 px-4 text-bc-blue font-bold">{c.aantal}</td><td className="py-3 px-4 text-bc-gray">{c.betrouwbaarheid}</td></tr>))}</tbody></table></div>
        </SectionCard>
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">BELANGRIJKE STUDIES</h3><div className="space-y-3">{bronnen.belangrijkeStudies.map((s, i) => (<div key={i} className="bg-bc-offwhite rounded-lg p-4 border-2 border-bc-gray-light"><div className="font-mono text-bc-blue text-sm font-bold">{s.studie}</div><div className="text-bc-gray mt-1">{s.titel}</div><div className="text-xs text-bc-gray italic mt-1">{s.bron}</div></div>))}</div></SectionCard>
      </div>
    </PageLayout>
  )
}
