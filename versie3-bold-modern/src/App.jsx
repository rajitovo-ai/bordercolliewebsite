import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Geschiedenis = lazy(() => import('./pages/Geschiedenis'))
const Intelligentie = lazy(() => import('./pages/Intelligentie'))
const Lijnen = lazy(() => import('./pages/Lijnen'))
const D3Vergelijking = lazy(() => import('./pages/D3Vergelijking'))
const Mythen = lazy(() => import('./pages/Mythen'))
const Gezondheid = lazy(() => import('./pages/Gezondheid'))
const Biologie = lazy(() => import('./pages/Biologie'))
const Training = lazy(() => import('./pages/Training'))
const Gedrag = lazy(() => import('./pages/Gedrag'))
const Vachtkleuren = lazy(() => import('./pages/Vachtkleuren'))
const Gezinshond = lazy(() => import('./pages/Gezinshond'))
const Sporten = lazy(() => import('./pages/Sporten'))
const Puppy = lazy(() => import('./pages/Puppy'))
const Eigenaarschap = lazy(() => import('./pages/Eigenaarschap'))
const Rescue = lazy(() => import('./pages/Rescue'))
const PopCultuur = lazy(() => import('./pages/PopCultuur'))
const Bronnen = lazy(() => import('./pages/Bronnen'))

function PageLoader() {
  return <div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-bc-blue/20 border-t-bc-blue rounded-full animate-spin" /></div>
}

export default function App() {
  return (
    <div className="min-h-screen bg-bc-white text-bc-dark">
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/geschiedenis" element={<Geschiedenis />} />
            <Route path="/intelligentie" element={<Intelligentie />} />
            <Route path="/lijnen" element={<Lijnen />} />
            <Route path="/3d-vergelijking" element={<D3Vergelijking />} />
            <Route path="/mythen" element={<Mythen />} />
            <Route path="/gezondheid" element={<Gezondheid />} />
            <Route path="/biologie" element={<Biologie />} />
            <Route path="/training" element={<Training />} />
            <Route path="/gedrag" element={<Gedrag />} />
            <Route path="/vachtkleuren" element={<Vachtkleuren />} />
            <Route path="/gezinshond" element={<Gezinshond />} />
            <Route path="/sporten" element={<Sporten />} />
            <Route path="/puppy" element={<Puppy />} />
            <Route path="/eigenaarschap" element={<Eigenaarschap />} />
            <Route path="/rescue" element={<Rescue />} />
            <Route path="/pop-cultuur" element={<PopCultuur />} />
            <Route path="/bronnen" element={<Bronnen />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
