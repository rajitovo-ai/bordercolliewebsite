import React from 'react'
import { ScrollText } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import Timeline from '../../../shared/components/interactive/Timeline'
import { geschiedenis } from '../../../shared/content/contentData'

export default function Geschiedenis() {
  return (
    <PageLayout title="Geschiedenis" subtitle={geschiedenis.intro} icon={ScrollText}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title={geschiedenis.oldHemp.naam}>
            <div className="space-y-2 text-sm">
              <p><span className="text-bc-blue font-bold">Geboren:</span> {geschiedenis.oldHemp.geboren}</p>
              <p><span className="text-bc-blue font-bold">Overleden:</span> {geschiedenis.oldHemp.overleden}</p>
              <p><span className="text-bc-blue font-bold">Fokker:</span> {geschiedenis.oldHemp.fokker}</p>
              <p><span className="text-bc-blue font-bold">Kleur:</span> {geschiedenis.oldHemp.kleur}</p>
              <p className="pt-2">{geschiedenis.oldHemp.betekenis}</p>
            </div>
          </InfoCard>
          <InfoCard title={geschiedenis.wistonCap.naam}>
            <div className="space-y-2 text-sm">
              <p><span className="text-bc-blue font-bold">Geboren:</span> {geschiedenis.wistonCap.geboren}</p>
              <p className="pt-2">{geschiedenis.wistonCap.betekenis}</p>
            </div>
          </InfoCard>
        </div>
        <SectionCard><h3 className="text-2xl font-bold text-bc-dark mb-6">TIJDLIJN</h3><Timeline theme="bold-modern" /></SectionCard>
        <SectionCard>
          <h3 className="text-2xl font-bold text-bc-dark mb-6">REGISTRATIES WERELDWIJD</h3>
          <div className="overflow-x-auto"><table className="w-full">
            <thead><tr className="border-b-2 border-bc-blue"><th className="text-left py-3 px-4 text-bc-blue font-bold">Land</th><th className="text-left py-3 px-4 text-bc-blue font-bold">Register</th><th className="text-left py-3 px-4 text-bc-blue font-bold">Focus</th></tr></thead>
            <tbody>{geschiedenis.registraties.map((reg, i) => (<tr key={i} className="border-b border-bc-gray-light"><td className="py-3 px-4 font-bold">{reg.land}</td><td className="py-3 px-4 text-bc-gray">{reg.register}</td><td className="py-3 px-4 text-bc-gray">{reg.focus}</td></tr>))}</tbody>
          </table></div>
        </SectionCard>
      </div>
    </PageLayout>
  )
}
