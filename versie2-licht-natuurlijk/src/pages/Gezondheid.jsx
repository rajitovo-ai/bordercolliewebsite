import React from 'react'
import { HeartPulse } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { gezondheid } from '../../../shared/content/contentData'

export default function Gezondheid() {
  return (
    <PageLayout title="Gezondheid en Genetica" subtitle={gezondheid.intro} icon={HeartPulse}>
      <div className="space-y-8">
        <SectionCard>
          <h3 className="text-xl font-semibold text-bc-forest mb-4">Levensverwachting</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gezondheid.levensverwachting.map((l, i) => (
              <div key={i} className="bg-bc-cream-2 rounded-xl p-4 border border-bc-forest/10 text-center">
                <div className="text-3xl font-bold text-bc-forest mb-1">{l.leeftijd}</div>
                <div className="text-sm text-bc-text-light">{l.studie}</div>
                <div className="text-xs text-bc-text-light/60 mt-1">{l.vergelijking}</div>
              </div>
            ))}
          </div>
        </SectionCard>
        <SectionCard>
          <h3 className="text-xl font-semibold text-bc-forest mb-4">Belangrijkste Doodsoorzaken</h3>
          <div className="space-y-3">
            {gezondheid.doodsoorzaken.map((d, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-1"><span className="text-sm">{d.oorzaak}</span><span className="text-bc-forest font-bold text-sm">{d.percentage}</span></div>
                  <div className="h-2 bg-bc-cream-2 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-bc-forest-light to-bc-forest" style={{ width: d.percentage }} /></div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
        <SectionCard>
          <h3 className="text-xl font-semibold text-bc-forest mb-4">Genetische Aandoeningen</h3>
          <div className="overflow-x-auto"><table className="w-full">
            <thead><tr className="border-b border-bc-forest/20">
              <th className="text-left py-3 px-4 text-bc-forest font-semibold">Ziekte</th>
              <th className="text-left py-3 px-4 text-bc-forest font-semibold">Incidentie</th>
              <th className="text-left py-3 px-4 text-bc-forest font-semibold">Erfelijkheid</th>
              <th className="text-left py-3 px-4 text-bc-forest font-semibold">Test</th>
            </tr></thead>
            <tbody>
              {gezondheid.genetischeZiekten.map((z, i) => (
                <tr key={i} className="border-b border-bc-forest/5">
                  <td className="py-3 px-4 font-medium">{z.ziekte}</td>
                  <td className="py-3 px-4 text-bc-text-light">{z.incidentie}</td>
                  <td className="py-3 px-4 text-bc-text-light text-sm">{z.erfelijkheid}</td>
                  <td className="py-3 px-4 text-bc-text-light text-sm">{z.test}</td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </SectionCard>
        <InfoCard title="Kanker en Immunologie">
          <div className="space-y-3">
            {gezondheid.kanker.map((k, i) => (
              <div key={i} className="bg-bc-cream-2 rounded-lg p-3 border border-bc-forest/10">
                <div className="flex justify-between items-center mb-1"><span className="font-medium text-bc-forest">{k.type}</span><span className="text-sm font-bold">{k.risico}</span></div>
                <p className="text-sm text-bc-text-light">{k.details}</p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
    </PageLayout>
  )
}
