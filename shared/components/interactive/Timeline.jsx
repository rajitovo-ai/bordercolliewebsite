import React, { useState } from 'react'
import { geschiedenis } from '../../content/contentData'

export default function Timeline({ theme = 'dark-luxury' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const themeStyles = {
    'dark-luxury': {
      line: 'bg-bc-gold/30',
      dot: 'bg-bc-gold',
      dotActive: 'bg-bc-gold shadow-[0_0_15px_rgba(212,175,55,0.6)]',
      card: 'card-luxury',
      year: 'text-bc-gold',
      text: 'text-bc-warm-white',
    },
    'light-natural': {
      line: 'bg-green-300',
      dot: 'bg-green-600',
      dotActive: 'bg-green-700 shadow-[0_0_15px_rgba(45,80,22,0.4)]',
      card: 'bg-white border border-green-200 shadow-md',
      year: 'text-green-800',
      text: 'text-gray-800',
    },
    'bold-modern': {
      line: 'bg-blue-300',
      dot: 'bg-blue-500',
      dotActive: 'bg-blue-600 shadow-[0_0_15px_rgba(0,102,255,0.5)]',
      card: 'bg-white border-2 border-blue-500 shadow-lg',
      year: 'text-blue-600',
      text: 'text-gray-900',
    },
  }
  const s = themeStyles[theme] || themeStyles['dark-luxury']

  return (
    <div className="w-full py-8">
      {/* Timeline line */}
      <div className="relative">
        <div className={`absolute left-0 right-0 top-1/2 h-0.5 ${s.line}`} />
        
        {/* Timeline dots */}
        <div className="relative flex justify-between items-center overflow-x-auto pb-4">
          {geschiedenis.timeline.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
              style={{ minWidth: '80px' }}
            >
              <div className={`text-xs font-bold mb-2 ${activeIndex === i ? s.year : 'opacity-40'}`}>
                {item.jaar}
              </div>
              <div className={`w-4 h-4 rounded-full transition-all ${
                activeIndex === i ? s.dotActive : s.dot + ' opacity-40'
              } group-hover:opacity-80`} />
            </button>
          ))}
        </div>
      </div>

      {/* Active content */}
      <div className={`mt-8 p-6 rounded-2xl ${s.card} animate-fade-in`}>
        <div className={`text-2xl font-bold mb-2 ${s.year}`}>
          {geschiedenis.timeline[activeIndex].jaar}
        </div>
        <p className={`text-lg ${s.text}`}>
          {geschiedenis.timeline[activeIndex].gebeurtenis}
        </p>
      </div>
    </div>
  )
}
