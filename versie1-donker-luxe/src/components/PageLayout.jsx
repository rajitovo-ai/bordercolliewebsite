import React from 'react'
import { motion } from 'framer-motion'

export default function PageLayout({ title, subtitle, children, icon: Icon }) {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {Icon && (
            <div className="w-16 h-16 rounded-2xl bg-bc-gold/10 border border-bc-gold/20 flex items-center justify-center mb-6">
              <Icon className="text-bc-gold" size={32} />
            </div>
          )}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-bc-gray max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="section-divider mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export function SectionCard({ children, className = '' }) {
  return (
    <div className={`card-luxury rounded-2xl p-6 md:p-8 transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}

export function FactGrid({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="card-luxury rounded-xl p-4 text-center"
        >
          <div className="text-2xl md:text-3xl font-bold text-bc-gold mb-1">{item.getal}</div>
          <div className="text-xs text-bc-gray leading-tight">{item.label}</div>
          {item.bron && (
            <div className="text-[10px] text-bc-gray/50 mt-1 italic">{item.bron}</div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export function InfoCard({ title, children, icon: Icon }) {
  return (
    <SectionCard>
      {Icon && (
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-bc-gold" size={24} />
          <h3 className="font-serif text-xl font-semibold text-bc-gold">{title}</h3>
        </div>
      )}
      {!Icon && <h3 className="font-serif text-xl font-semibold text-bc-gold mb-4">{title}</h3>}
      <div className="text-bc-warm-white/80 leading-relaxed">{children}</div>
    </SectionCard>
  )
}

export function MythCard({ myth, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card-luxury rounded-2xl p-6 mb-4"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bc-gold/10 border border-bc-gold/30 flex items-center justify-center">
          <span className="text-bc-gold font-bold">{index + 1}</span>
        </div>
        <div className="flex-1">
          <div className="text-xs uppercase tracking-wider text-bc-gold/60 mb-1">Mythe</div>
          <p className="text-lg font-semibold mb-3">"{myth.mythe}"</p>
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              myth.status === 'ONJUIST' ? 'bg-red-500/20 text-red-400' :
              myth.status === 'MISLEIDEND' ? 'bg-orange-500/20 text-orange-400' :
              myth.status.includes('DEELS WAAR') ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-blue-500/20 text-blue-400'
            }`}>
              {myth.status}
            </span>
          </div>
          <p className="text-bc-warm-white/80 mb-2">{myth.realiteit}</p>
          <p className="text-xs text-bc-gray italic">Bron: {myth.bewijs}</p>
        </div>
      </div>
    </motion.div>
  )
}
