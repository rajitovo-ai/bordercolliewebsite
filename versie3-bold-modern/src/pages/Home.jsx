import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Heart, Dna, Eye, Activity, BookOpen, ArrowRight, Zap } from 'lucide-react'
import { siteConfig, kernfeiten, mythen } from '../../../shared/content/contentData'
import { DogViewer } from '../../../shared/components/3d/DogViewer'
import { FactGrid } from '../components/PageLayout'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-90">
          <Suspense fallback={null}><DogViewer variant="working" style="realistic" theme="bold-modern" /></Suspense>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6"><Zap className="text-bc-blue" size={24} /><span className="text-bc-blue text-sm uppercase tracking-widest font-bold">De Complete Gids</span></div>
            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6">
              <span className="text-bc-dark">BORDER</span><br />
              <span className="text-gradient-blue">COLLIE</span>
            </h1>
            <p className="text-xl text-bc-gray mb-8 max-w-xl leading-relaxed font-medium">{siteConfig.subtitle}. Ontdek het verschil tussen werklijn en showlijn, leer over hun buitengewone intelligentie, en ontrafel de mythen.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/3d-vergelijking" className="btn-blue px-8 py-4 rounded-xl font-bold flex items-center gap-2">Bekijk 3D Modellen <ArrowRight size={20} /></Link>
              <Link to="/mythen" className="btn-coral px-8 py-4 rounded-xl font-bold">Mythen Ontkracht</Link>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-bc-blue rounded-full flex justify-center"><motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-3 bg-bc-blue rounded-full mt-2" /></div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-bc-dark mb-2">KERNFEITEN</h2>
            <p className="text-bc-gray text-lg">De cijfers die het ras definiëren</p>
          </motion.div>
          <FactGrid items={kernfeiten} />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-bc-dark mb-2">ONTDEK HET RAS</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Intelligentie", desc: "Chaser leerde 1.022 woorden. Ontdek de cognitieve capaciteiten.", path: "/intelligentie" },
              { icon: Dna, title: "Werk- vs Showlijn", desc: "Genetisch divergent. Twee verschillende honden met dezelfde naam.", path: "/lijnen" },
              { icon: Eye, title: "Gedrag", desc: "De 'eye' is aangeboren. Begrijp de lichaamstaal.", path: "/gedrag" },
              { icon: Heart, title: "Gezinshond", desc: "In het juiste gezin een fantastische metgezel.", path: "/gezinshond" },
              { icon: Activity, title: "Gezondheid", desc: "12-13 jaar levensverwachting. Wat moet je weten?", path: "/gezondheid" },
              { icon: BookOpen, title: "Geschiedenis", desc: "Van Old Hemp (1893) tot AKC erkenning (1995).", path: "/geschiedenis" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={item.path} className="block group">
                  <div className="card-bold rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-xl bg-bc-blue flex items-center justify-center mb-4"><item.icon className="text-white" size={24} /></div>
                    <h3 className="text-xl font-bold text-bc-dark mb-2">{item.title}</h3>
                    <p className="text-bc-gray text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="text-bc-blue text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Lees meer <ArrowRight size={16} /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bc-offwhite">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-bc-dark mb-2">MYTHEN VS REALITEIT</h2>
            <p className="text-bc-gray text-lg">10 veelvoorkomende misvattingen over Border Collies</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mythen.slice(0, 4).map((myth, i) => (
              <div key={i} className="card-bold rounded-xl p-5">
                <div className="text-xs uppercase tracking-wider text-bc-blue/60 mb-2 font-bold">Mythe</div>
                <p className="font-bold mb-2">"{myth.mythe}"</p>
                <div className={`text-xs font-bold mb-2 ${myth.status === 'ONJUIST' ? 'text-red-500' : myth.status === 'MISLEIDEND' ? 'text-orange-500' : 'text-yellow-600'}`}>{myth.status}</div>
                <p className="text-sm text-bc-gray">{myth.realiteit}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8"><Link to="/mythen" className="btn-blue px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2">Alle mythen bekijken <ArrowRight size={18} /></Link></div>
        </div>
      </section>
    </div>
  )
}
