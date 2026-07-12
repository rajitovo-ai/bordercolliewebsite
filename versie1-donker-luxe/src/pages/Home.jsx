import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Heart, Dna, Eye, Activity, BookOpen, ArrowRight, Sparkles } from 'lucide-react'
import { siteConfig, kernfeiten, mythen } from '../../../shared/content/contentData'
import { DogViewer } from '../../../shared/components/3d/DogViewer'
import { FactGrid } from '../components/PageLayout'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-bc-dark via-bc-dark-3 to-bc-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_50%)]" />
        
        {/* 3D Hero */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-90">
          <Suspense fallback={null}>
            <DogViewer variant="working" style="realistic" theme="dark-luxury" />
          </Suspense>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-bc-gold" size={20} />
              <span className="text-bc-gold text-sm uppercase tracking-widest font-medium">
                De Complete Gids
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient-gold">Border Collie</span>
              <br />
              <span className="text-bc-warm-white text-3xl md:text-4xl font-normal">
                {siteConfig.tagline}
              </span>
            </h1>
            
            <p className="text-lg text-bc-gray mb-8 max-w-xl leading-relaxed">
              {siteConfig.subtitle}. Ontdek het verschil tussen werklijn en showlijn, 
              leer over hun buitengewone intelligentie, en ontrafel de mythen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/3d-vergelijking"
                className="btn-gold px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all"
              >
                Bekijk 3D Modellen <ArrowRight size={20} />
              </Link>
              <Link
                to="/mythen"
                className="px-8 py-4 rounded-xl border border-bc-gold/30 text-bc-warm-white hover:border-bc-gold hover:bg-bc-gold/5 transition-all font-medium"
              >
                Mythen Ontkracht
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-bc-gold/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-bc-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Kernfeiten */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Kernfeiten
            </h2>
            <p className="text-bc-gray">De cijfers die het ras definiëren</p>
          </motion.div>
          <FactGrid items={kernfeiten} />
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Ontdek het Ras
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Intelligentie", desc: "Chaser leerde 1.022 woorden. Ontdek de cognitieve capaciteiten.", path: "/intelligentie" },
              { icon: Dna, title: "Werk- vs Showlijn", desc: "Genetisch divergent. Twee verschillende honden met dezelfde naam.", path: "/lijnen" },
              { icon: Eye, title: "Gedrag & Communicatie", desc: "De 'eye' is aangeboren. Begrijp de lichaamstaal.", path: "/gedrag" },
              { icon: Heart, title: "Gezinshond", desc: "In het juiste gezin een fantastische metgezel.", path: "/gezinshond" },
              { icon: Activity, title: "Gezondheid", desc: "12-13 jaar levensverwachting. Wat moet je weten?", path: "/gezondheid" },
              { icon: BookOpen, title: "Geschiedenis", desc: "Van Old Hemp (1893) tot AKC erkenning (1995).", path: "/geschiedenis" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={item.path} className="block group">
                  <div className="card-luxury rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-xl bg-bc-gold/10 border border-bc-gold/20 flex items-center justify-center mb-4">
                      <item.icon className="text-bc-gold" size={24} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-bc-gold mb-2">{item.title}</h3>
                    <p className="text-bc-gray text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="text-bc-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lees meer <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mythen Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
              Mythen vs Realiteit
            </h2>
            <p className="text-bc-gray">10 veelvoorkomende misvattingen over Border Collies</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mythen.slice(0, 4).map((myth, i) => (
              <div key={i} className="card-luxury rounded-xl p-5">
                <div className="text-xs uppercase tracking-wider text-bc-gold/60 mb-2">Mythe</div>
                <p className="font-semibold mb-2">"{myth.mythe}"</p>
                <div className={`text-xs font-bold mb-2 ${
                  myth.status === 'ONJUIST' ? 'text-red-400' :
                  myth.status === 'MISLEIDEND' ? 'text-orange-400' :
                  'text-yellow-400'
                }`}>{myth.status}</div>
                <p className="text-sm text-bc-gray">{myth.realiteit}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/mythen" className="btn-gold px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
              Alle mythen bekijken <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
