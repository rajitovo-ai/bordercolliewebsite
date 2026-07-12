import React from 'react'
import { AlertCircle } from 'lucide-react'
import PageLayout, { MythCard } from '../components/PageLayout'
import MythQuiz from '../../../shared/components/interactive/MythQuiz'
import { mythen } from '../../../shared/content/contentData'

export default function Mythen() {
  return (
    <PageLayout title="Mythen" subtitle="10 veelvoorkomende mythen over Border Collies, gefactcheckt." icon={AlertCircle}>
      <div className="space-y-8">
        <div><h3 className="text-2xl font-bold text-bc-dark mb-4">TEST JE KENNIS</h3><MythQuiz theme="bold-modern" /></div>
        <div><h3 className="text-2xl font-bold text-bc-dark mb-4">ALLE MYTHEN</h3>{mythen.map((myth, i) => (<MythCard key={i} myth={myth} index={i} />))}</div>
      </div>
    </PageLayout>
  )
}
