import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, Loader } from '@react-three/drei'
import RealisticDogModel from './RealisticDogModel'
import LowPolyDog from './LowPolyDog'
import HotspotDogModel from './HotspotDogModel'

const styleConfigs = {
  'dark-luxury': {
    background: 'transparent',
    ambient: 0.3,
    directional: [5, 8, 5],
    directionalIntensity: 1.5,
    envPreset: 'night',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
  },
  'light-natural': {
    background: 'transparent',
    ambient: 0.6,
    directional: [5, 8, 5],
    directionalIntensity: 1.2,
    envPreset: 'park',
    shadowColor: '#8b6f47',
    shadowOpacity: 0.3,
  },
  'bold-modern': {
    background: 'transparent',
    ambient: 0.5,
    directional: [5, 8, 5],
    directionalIntensity: 1.8,
    envPreset: 'city',
    shadowColor: '#0066ff',
    shadowOpacity: 0.2,
  },
}

export function DogViewer({ variant = 'working', style = 'realistic', theme = 'dark-luxury' }) {
  const config = styleConfigs[theme] || styleConfigs['dark-luxury']

  const renderDog = () => {
    switch (style) {
      case 'realistic':
        return <RealisticDogModel variant={variant} />
      case 'low-poly':
        return <LowPolyDog variant={variant} />
      case 'hotspot':
        return <HotspotDogModel variant={variant} />
      default:
        return <RealisticDogModel variant={variant} />
    }
  }

  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.5, 4], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={config.ambient} />
        <directionalLight
          position={config.directional}
          intensity={config.directionalIntensity}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Environment preset={config.envPreset} />
        
        {renderDog()}
        
        <ContactShadows
          position={[0, -0.6, 0]}
          opacity={config.shadowOpacity}
          scale={5}
          blur={2}
          far={3}
          color={config.shadowColor}
        />
      </Suspense>
    </Canvas>
  )
}

export function DualDogViewer({ style = 'realistic', theme = 'dark-luxury' }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
      <div className="flex flex-col items-center">
        <div className="text-sm font-semibold mb-2 opacity-70">Werklijn</div>
        <div className="w-full h-[300px] md:h-[400px]">
          <DogViewer variant="working" style={style} theme={theme} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm font-semibold mb-2 opacity-70">Showlijn</div>
        <div className="w-full h-[300px] md:h-[400px]">
          <DogViewer variant="show" style={style} theme={theme} />
        </div>
      </div>
    </div>
  )
}

export default DogViewer
