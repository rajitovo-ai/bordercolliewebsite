import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Heart, Dna, Eye, Activity, BookOpen, ArrowRight, Leaf } from 'lucide-react'
import { siteConfig, kernfeiten, mythen } from '../../../shared/content/contentData'
import { DogViewer } from '../../../shared/components/3d/DogViewer'
import { FactGrid } from '../components/PageLayout'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bc-cream via-bc-cream-2 to-bc-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,80,22,0.06),transparent_50%)]" />
        
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-90">
          <Suspense fallback={null}>
            <DogViewer variant="working" style="realistic" theme="light-natural" />
          </Suspense>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-bc-forest" size={20} />
              <span className="text-bc-forest text-sm uppercase tracking-widest font-medium">De Complete Gids</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient-forest">Border Collie</span>
              <br />
              <span className="text-bc-text text-3xl md:text-4xl font-normal">{siteConfig.tagline}</span>
            </h1>
            <p className="text-lg text-bc-text-light mb-8 max-w-xl leading-relaxed">{siteConfig.subtitle}. Ontdek het verschil tussen werklijn en showlijn, leer over hun buitengewone intelligentie, en ontrafel de mythen.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/3d-vergelijking" className="btn-forest px-8 py-4 rounded-xl font-semibold flex items-center gap-2">Bekijk 3D Modellen <ArrowRight size={20} /></Link>
              <Link to="/mythen" className="px-8 py-4 rounded-xl border border-bc-forest/30 text-bc-text hover:border-bc-forest hover:bg-bc-forest/5 transition-all font-medium">Mythen Ontkracht</Link>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-bc-forest/30 rounded-full flex justify-center">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-3 bg-bc-forest rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-forest mb-4">Kernfeiten</h2>
            <p className="text-bc-text-light">De cijfers die het ras definiëren</p>
          </motion.div>
          <FactGrid items={kernfeiten} />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-forest mb-4">Ontdek het Ras</h2>
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={item.path} className="block group">
                  <div className="card-natural rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-xl bg-bc-forest/10 border border-bc-forest/20 flex items-center justify-center mb-4">
                      <item.icon className="text-bc-forest" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-bc-forest mb-2">{item.title}</h3>
                    <p className="text-bc-text-light text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="text-bc-forest text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Lees meer <ArrowRight size={16} /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-forest mb-4">Mythen vs Realiteit</h2>
            <p className="text-bc-text-light">10 veelvoorkomende misvattingen over Border Collies</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mythen.slice(0, 4).map((myth, i) => (
              <div key={i} className="card-natural rounded-xl p-5">
                <div className="text-xs uppercase tracking-wider text-bc-forest/60 mb-2">Mythe</div>
                <p className="font-semibold mb-2">"{myth.mythe}"</p>
                <div className={`text-xs font-bold mb-2 ${myth.status === 'ONJUIST' ? 'text-red-600' : myth.status === 'MISLEIDEND' ? 'text-orange-600' : 'text-yellow-700'}`}>{myth.status}</div>
                <p className="text-sm text-bc-text-light">{myth.realiteit}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/mythen" className="btn-forest px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2">Alle mythen bekijken <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
