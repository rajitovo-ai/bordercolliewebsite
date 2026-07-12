import React from 'react'
import { HeartPulse } from 'lucide-react'
import PageLayout, { SectionCard, InfoCard } from '../components/PageLayout'
import { gezondheid } from '../../../shared/content/contentData'

export default function Gezondheid() {
  return (
    <PageLayout title="Gezondheid" subtitle={gezondheid.intro} icon={HeartPulse}>
      <div className="space-y-8">
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">LEVENSVERWACHTING</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{gezondheid.levensverwachting.map((l, i) => (<div key={i} className="bg-bc-offwhite rounded-xl p-4 border-2 border-bc-gray-light text-center"><div className="text-3xl font-bold text-bc-blue mb-1">{l.leeftijd}</div><div className="text-sm text-bc-gray">{l.studie}</div><div className="text-xs text-bc-gray/60 mt-1">{l.vergelijking}</div></div>))}</div>
        </SectionCard>
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">DOODSOORZAKEN</h3>
          <div className="space-y-3">{gezondheid.doodsoorzaken.map((d, i) => (<div key={i} className="flex items-center gap-4"><div className="flex-1"><div className="flex justify-between mb-1"><span className="text-sm font-medium">{d.oorzaak}</span><span className="text-bc-blue font-bold text-sm">{d.percentage}</span></div><div className="h-3 bg-bc-gray-light rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-bc-blue to-bc-coral" style={{ width: d.percentage }} /></div></div></div>))}</div>
        </SectionCard>
        <SectionCard><h3 className="text-xl font-bold text-bc-dark mb-4">GENETISCHE AANDOENINGEN</h3>
          <div className="overflow-x-auto"><table className="w-full"><thead><tr className="border-b-2 border-bc-blue"><th className="text-left py-3 px-4 text-bc-blue font-bold">Ziekte</th><th className="text-left py-3 px-4 text-bc-blue font-bold">Incidentie</th><th className="text-left py-3 px-4 text-bc-blue font-bold">Erfelijkheid</th><th className="text-left py-3 px-4 text-bc-blue font-bold">Test</th></tr></thead>
            <tbody>{gezondheid.genetischeZiekten.map((z, i) => (<tr key={i} className="border-b border-bc-gray-light"><td className="py-3 px-4 font-bold">{z.ziekte}</td><td className="py-3 px-4 text-bc-gray">{z.incidentie}</td><td className="py-3 px-4 text-bc-gray text-sm">{z.erfelijkheid}</td><td className="py-3 px-4 text-bc-gray text-sm">{z.test}</td></tr>))}</tbody>
          </table></div>
        </SectionCard>
        <InfoCard title="Kanker en Immunologie">
          <div className="space-y-3">{gezondheid.kanker.map((k, i) => (<div key={i} className="bg-bc-offwhite rounded-lg p-3 border-2 border-bc-gray-light"><div className="flex justify-between items-center mb-1"><span className="font-bold text-bc-blue">{k.type}</span><span className="text-sm font-bold">{k.risico}</span></div><p className="text-sm text-bc-gray">{k.details}</p></div>))}</div>
        </InfoCard>
      </div>
    </PageLayout>
  )
}
