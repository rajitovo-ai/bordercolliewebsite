import React, { useState, Suspense } from 'react'
import { Box } from 'lucide-react'
import PageLayout, { SectionCard } from '../components/PageLayout'
import { DualDogViewer } from '../../../shared/components/3d/DogViewer'

const styles = [
  { id: 'realistic', label: 'Realistische 3D', desc: 'Gedetailleerd model met vacht-textuur' },
  { id: 'low-poly', label: 'Stylized Low-Poly', desc: 'Met animatie — ademen, kwispelen' },
  { id: 'hotspot', label: '3D met Hotspots', desc: 'Klik op lichaamsdelen voor info' },
]

export default function D3Vergelijking() {
  const [activeStyle, setActiveStyle] = useState('realistic')
  return (
    <PageLayout title="3D Vergelijking" subtitle="Vergelijk werklijn en showlijn in 3D. Kies je stijl." icon={Box}>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {styles.map((s) => (
            <button key={s.id} onClick={() => setActiveStyle(s.id)} className={`p-5 rounded-2xl text-left transition-all border-2 ${activeStyle === s.id ? 'border-bc-blue bg-bc-blue/5 scale-[1.02]' : 'border-bc-gray-light opacity-60 hover:opacity-100'}`}>
              <h3 className={`text-lg font-bold mb-2 ${activeStyle === s.id ? 'text-bc-blue' : 'text-bc-dark'}`}>{s.label}</h3>
              <p className="text-sm text-bc-gray">{s.desc}</p>
            </button>
          ))}
        </div>
        <SectionCard>
          <div className="h-[400px] md:h-[500px]">
            <Suspense fallback={<div className="h-full flex items-center justify-center"><div className="w-12 h-12 border-4 border-bc-blue/20 border-t-bc-blue rounded-full animate-spin" /></div>}>
              <DualDogViewer style={activeStyle} theme="bold-modern" />
            </Suspense>
          </div>
        </SectionCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard><h3 className="text-xl font-bold text-bc-blue mb-3">WERKLIJN</h3><ul className="space-y-2 text-sm text-bc-gray"><li>• Slank, atletisch, snel</li><li>• Kortere, functionele vacht</li><li>• Zeer sterk herdersinstinct</li><li>• EPHB1 werklijn haplotype</li><li>• Hogere impulsiviteit</li></ul></SectionCard>
          <SectionCard><h3 className="text-xl font-bold text-bc-coral mb-3">SHOWLIJN</h3><ul className="space-y-2 text-sm text-bc-gray"><li>• Zwaarder, voller vacht</li><li>• Langer, dikker, zachter haar</li><li>• Minder herdersinstinct</li><li>• Compijanter, kalmer</li><li>• Beter als gezinshond</li></ul></SectionCard>
        </div>
        {activeStyle === 'hotspot' && <SectionCard><h3 className="text-xl font-bold text-bc-blue mb-3">INTERACTIEVE HOTSPOTS</h3><p className="text-bc-gray text-sm">Klik op de glowende punten voor info over: ogen, vacht, bouw, oren, spierfysiologie en staart.</p></SectionCard>}
      </div>
    </PageLayout>
  )
}
