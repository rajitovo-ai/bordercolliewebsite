import React from 'react'
import { lijnen } from '../../content/contentData'

export default function ComparisonTable({ theme = 'dark-luxury' }) {
  const themeStyles = {
    'dark-luxury': {
      header: 'text-bc-gold',
      headerBg: 'bg-bc-dark-3',
      rowAlt: 'bg-bc-dark-2/50',
      border: 'border-bc-gold/10',
      card: 'card-luxury',
    },
    'light-natural': {
      header: 'text-green-800',
      headerBg: 'bg-green-100',
      rowAlt: 'bg-green-50',
      border: 'border-green-200',
      card: 'bg-white border border-green-200 shadow-sm',
    },
    'bold-modern': {
      header: 'text-blue-600',
      headerBg: 'bg-blue-100',
      rowAlt: 'bg-blue-50',
      border: 'border-blue-200',
      card: 'bg-white border-2 border-blue-500 shadow-lg',
    },
  }
  const s = themeStyles[theme] || themeStyles['dark-luxury']

  return (
    <div className={`overflow-hidden rounded-2xl ${s.card}`}>
      <table className="w-full">
        <thead>
          <tr className={s.headerBg}>
            <th className={`px-6 py-4 text-left font-semibold ${s.header}`}>Kenmerk</th>
            <th className={`px-6 py-4 text-left font-semibold ${s.header}`}>Werklijn</th>
            <th className={`px-6 py-4 text-left font-semibold ${s.header}`}>Showlijn</th>
          </tr>
        </thead>
        <tbody>
          {lijnen.vergelijking.map((row, i) => (
            <tr key={i} className={`${i % 2 === 0 ? '' : s.rowAlt} border-b ${s.border}`}>
              <td className="px-6 py-3 font-medium">{row.kenmerk}</td>
              <td className="px-6 py-3">{row.werklijn}</td>
              <td className="px-6 py-3">{row.showlijn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
