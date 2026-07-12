import React from 'react'
import { BookOpen } from 'lucide-react'
import PageLayout, { SectionCard } from '../components/PageLayout'
import { bronnen } from '../../../shared/content/contentData'

export default function Bronnen() {
  return (
    <PageLayout title="Bronnen en Referenties" subtitle={bronnen.intro} icon={BookOpen}>
      <div className="space-y-8">
        <SectionCard><h3 className="text-xl font-semibold text-bc-forest mb-4">Bronnenkwaliteit</h3>
          <div className="overflow-x-auto"><table className="w-full">
            <thead><tr className="border-b border-bc-forest/20"><th className="text-left py-3 px-4 text-bc-forest font-semibold">Type bron</th><th className="text-left py-3 px-4 text-bc-forest font-semibold">Aantal</th><th className="text-left py-3 px-4 text-bc-forest font-semibold">Betrouwbaarheid</th></tr></thead>
            <tbody>{bronnen.categorien.map((c, i) => (<tr key={i} className="border-b border-bc-forest/5"><td className="py-3 px-4 font-medium">{c.type}</td><td className="py-3 px-4 text-bc-forest font-bold">{c.aantal}</td><td className="py-3 px-4 text-bc-text-light">{c.betrouwbaarheid}</td></tr>))}</tbody>
          </table></div>
        </SectionCard>
        <SectionCard><h3 className="text-xl font-semibold text-bc-forest mb-4">Belangrijke Studies</h3>
          <div className="space-y-3">{bronnen.belangrijkeStudies.map((s, i) => (<div key={i} className="bg-bc-cream-2 rounded-lg p-4 border border-bc-forest/10"><div className="font-mono text-bc-forest text-sm font-bold">{s.studie}</div><div className="text-bc-text/80 mt-1">{s.titel}</div><div className="text-xs text-bc-text-light italic mt-1">{s.bron}</div></div>))}</div>
        </SectionCard>
      </div>
    </PageLayout>
  )
}
