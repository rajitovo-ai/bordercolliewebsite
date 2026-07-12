import React from 'react'
import { ScrollText } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import Timeline from '../../../shared/components/interactive/Timeline'
import { geschiedenis } from '../../../shared/content/contentData'

export default function Geschiedenis() {
  return (
    <PageLayout title="Geschiedenis en Oorsprong" subtitle={geschiedenis.intro} icon={ScrollText}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title={geschiedenis.oldHemp.naam}>
            <div className="space-y-2 text-sm">
              <p><span className="text-bc-forest font-medium">Geboren:</span> {geschiedenis.oldHemp.geboren}</p>
              <p><span className="text-bc-forest font-medium">Overleden:</span> {geschiedenis.oldHemp.overleden}</p>
              <p><span className="text-bc-forest font-medium">Fokker:</span> {geschiedenis.oldHemp.fokker}</p>
              <p><span className="text-bc-forest font-medium">Kleur:</span> {geschiedenis.oldHemp.kleur}</p>
              <p className="pt-2">{geschiedenis.oldHemp.betekenis}</p>
            </div>
          </InfoCard>
          <InfoCard title={geschiedenis.wistonCap.naam}>
            <div className="space-y-2 text-sm">
              <p><span className="text-bc-forest font-medium">Geboren:</span> {geschiedenis.wistonCap.geboren}</p>
              <p className="pt-2">{geschiedenis.wistonCap.betekenis}</p>
            </div>
          </InfoCard>
        </div>
        <SectionCard>
          <h3 className="text-2xl font-bold text-bc-forest mb-6">Tijdlijn</h3>
          <Timeline theme="light-natural" />
        </SectionCard>
        <SectionCard>
          <h3 className="text-2xl font-bold text-bc-forest mb-6">Registraties Wereldwijd</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr className="border-b border-bc-forest/20">
                <th className="text-left py-3 px-4 text-bc-forest font-semibold">Land</th>
                <th className="text-left py-3 px-4 text-bc-forest font-semibold">Register</th>
                <th className="text-left py-3 px-4 text-bc-forest font-semibold">Focus</th>
              </tr></thead>
              <tbody>
                {geschiedenis.registraties.map((reg, i) => (
                  <tr key={i} className="border-b border-bc-forest/5">
                    <td className="py-3 px-4 font-medium">{reg.land}</td>
                    <td className="py-3 px-4 text-bc-text-light">{reg.register}</td>
                    <td className="py-3 px-4 text-bc-text-light">{reg.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>
    </PageLayout>
  )
}
