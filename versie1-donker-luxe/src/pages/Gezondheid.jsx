import React from 'react'
import { HeartPulse } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { gezondheid } from '../../../shared/content/contentData'

export default function Gezondheid() {
  return (
    <PageLayout title="Gezondheid en Genetica" subtitle={gezondheid.intro} icon={HeartPulse}>
      <div className="space-y-8">
        {/* Levensverwachting */}
        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Levensverwachting</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gezondheid.levensverwachting.map((l, i) => (
              <div key={i} className="bg-bc-dark/50 rounded-xl p-4 border border-bc-gold/10 text-center">
                <div className="text-3xl font-bold text-bc-gold mb-1">{l.leeftijd}</div>
                <div className="text-sm text-bc-gray">{l.studie}</div>
                <div className="text-xs text-bc-gray/60 mt-1">{l.vergelijking}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Doodsoorzaken */}
        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Belangrijkste Doodsoorzaken</h3>
          <div className="space-y-3">
            {gezondheid.doodsoorzaken.map((d, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{d.oorzaak}</span>
                    <span className="text-bc-gold font-bold text-sm">{d.percentage}</span>
                  </div>
                  <div className="h-2 bg-bc-dark rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-bc-gold-dark to-bc-gold" style={{ width: d.percentage }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Genetische ziekten */}
        <SectionCard>
          <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">Genetische Aandoeningen</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-bc-gold/20">
                  <th className="text-left py-3 px-4 text-bc-gold font-semibold">Ziekte</th>
                  <th className="text-left py-3 px-4 text-bc-gold font-semibold">Incidentie</th>
                  <th className="text-left py-3 px-4 text-bc-gold font-semibold">Erfelijkheid</th>
                  <th className="text-left py-3 px-4 text-bc-gold font-semibold">Test</th>
                </tr>
              </thead>
              <tbody>
                {gezondheid.genetischeZiekten.map((z, i) => (
                  <tr key={i} className="border-b border-bc-gold/5">
                    <td className="py-3 px-4 font-medium">{z.ziekte}</td>
                    <td className="py-3 px-4 text-bc-gray">{z.incidentie}</td>
                    <td className="py-3 px-4 text-bc-gray text-sm">{z.erfelijkheid}</td>
                    <td className="py-3 px-4 text-bc-gray text-sm">{z.test}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Kanker */}
        <InfoCard title="Kanker en Immunologie">
          <div className="space-y-3">
            {gezondheid.kanker.map((k, i) => (
              <div key={i} className="bg-bc-dark/50 rounded-lg p-3 border border-bc-gold/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-bc-gold">{k.type}</span>
                  <span className="text-sm font-bold">{k.risico}</span>
                </div>
                <p className="text-sm text-bc-gray">{k.details}</p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
    </PageLayout>
  )
}
