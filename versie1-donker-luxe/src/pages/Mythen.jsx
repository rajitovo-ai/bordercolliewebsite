import React from 'react'
import { AlertCircle } from 'lucide-react'
import PageLayout, { MythCard } from '../components/PageLayout'
import MythQuiz from '../../../shared/components/interactive/MythQuiz'
import { mythen } from '../../../shared/content/contentData'

export default function Mythen() {
  return (
    <PageLayout title="Mythen en Misvattingen" subtitle="10 veelvoorkomende mythen over Border Collies, gefactcheckt tegen wetenschappelijk bewijs." icon={AlertCircle}>
      <div className="space-y-8">
        {/* Quiz */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-bc-gold mb-4">Test je kennis</h3>
          <MythQuiz theme="dark-luxury" />
        </div>

        {/* All myths */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-bc-gold mb-4">Alle Mythen</h3>
          {mythen.map((myth, i) => (
            <MythCard key={i} myth={myth} index={i} />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
