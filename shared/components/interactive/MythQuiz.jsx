import React, { useState } from 'react'
import { mythen } from '../../content/contentData'

export default function MythQuiz({ theme = 'dark-luxury' }) {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const themeStyles = {
    'dark-luxury': {
      bg: 'bg-bc-dark-2',
      card: 'card-luxury',
      accent: 'text-bc-gold',
      btn: 'btn-gold',
      border: 'border-bc-gold/30',
    },
    'light-natural': {
      bg: 'bg-white',
      card: 'bg-green-50 border border-green-200',
      accent: 'text-green-800',
      btn: 'bg-green-700 text-white hover:bg-green-600',
      border: 'border-green-300',
    },
    'bold-modern': {
      bg: 'bg-white',
      card: 'bg-blue-50 border-2 border-blue-500',
      accent: 'text-blue-600',
      btn: 'bg-blue-600 text-white hover:bg-blue-500',
      border: 'border-blue-500',
    },
  }
  const s = themeStyles[theme] || themeStyles['dark-luxury']

  const handleAnswer = (isCorrect) => {
    const newAnswers = { ...answers, [currentQ]: isCorrect }
    setAnswers(newAnswers)
    if (isCorrect) setScore(score + 1)
    
    if (currentQ < mythen.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setShowResult(true)
    }
  }

  const reset = () => {
    setCurrentQ(0)
    setAnswers({})
    setShowResult(false)
    setScore(0)
  }

  if (showResult) {
    return (
      <div className={`${s.bg} rounded-2xl p-8 ${s.card}`}>
        <h3 className={`text-2xl font-bold mb-4 ${s.accent}`}>Quiz Resultaat</h3>
        <p className="text-lg mb-2">
          Je scoorde <span className={`font-bold ${s.accent}`}>{score}</span> van de <span className="font-bold">{mythen.length}</span> correct!
        </p>
        <p className="opacity-70 mb-6">
          {score === mythen.length ? "Perfect! Je kent de Border Collie door en door." :
           score >= 7 ? "Uitstekend! Je hebt goed onderzoek gedaan." :
           score >= 5 ? "Goed begin! Er is nog meer te leren." :
           "Tijd om de rest van de website te ontdekken!"}
        </p>
        <button onClick={reset} className={`${s.btn} px-6 py-3 rounded-lg`}>
          Opnieuw proberen
        </button>
      </div>
    )
  }

  const myth = mythen[currentQ]

  return (
    <div className={`${s.bg} rounded-2xl p-8 ${s.card}`}>
      <div className="flex justify-between items-center mb-6">
        <span className={`text-sm font-medium ${s.accent}`}>
          Vraag {currentQ + 1} van {mythen.length}
        </span>
        <div className="w-32 h-2 bg-black/20 rounded-full overflow-hidden">
          <div
            className={`h-full ${theme === 'dark-luxury' ? 'bg-bc-gold' : theme === 'light-natural' ? 'bg-green-600' : 'bg-blue-600'}`}
            style={{ width: `${((currentQ) / mythen.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <div className={`text-xs uppercase tracking-wider mb-2 ${s.accent}`}>Mythe</div>
        <p className="text-xl font-semibold mb-4">"{myth.mythe}"</p>
        <p className="opacity-60 text-sm mb-4">Is deze uitspraak juist?</p>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => handleAnswer(myth.status === 'ONJUIST')}
          className={`flex-1 py-4 rounded-xl border-2 ${s.border} hover:scale-105 transition-transform font-medium`}
        >
          Onjuist
        </button>
        <button
          onClick={() => handleAnswer(myth.status.includes('DEELS WAAR'))}
          className={`flex-1 py-4 rounded-xl border-2 ${s.border} hover:scale-105 transition-transform font-medium`}
        >
          Deels waar
        </button>
        <button
          onClick={() => handleAnswer(false)}
          className={`flex-1 py-4 rounded-xl border-2 ${s.border} hover:scale-105 transition-transform font-medium`}
        >
          Juist
        </button>
      </div>

      {answers[currentQ] !== undefined && (
        <div className={`mt-4 p-4 rounded-xl ${s.card}`}>
          <div className={`text-sm font-bold mb-2 ${s.accent}`}>{myth.status}</div>
          <p className="mb-2">{myth.realiteit}</p>
          <p className="text-xs opacity-50 italic">Bron: {myth.bewijs}</p>
        </div>
      )}
    </div>
  )
}
