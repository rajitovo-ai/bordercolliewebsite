import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

// 3D Border Collie with interactive hotspots
// Click body parts to see research-based information

const hotspotData = {
  eyes: {
    title: "De 'Eye' — Starende Blik",
    info: "De intense, fixerende blik is de fixatie-fase van het predatoire motorpatroon. Aangeboren, niet aangeleerd (Coppinger et al., 1985). Training verfijnt de houding maar creëert hem niet.",
    bron: "Coppinger et al. (1985)",
  },
  coat: {
    title: "Vacht — Dubbele Vacht",
    info: variant => variant === 'show' 
      ? "Showlijn: langer, dikker, zachter. Vereist dagelijkse borsteling en regelmatige grooming."
      : "Werklijn: korter, functioneel. Dubbele vacht met onderlaag die isoleert tegen kou en hitte. NIET scheren — verstoort thermoregulatie.",
    bron: "AKC Standard, CollieCare",
  },
  build: {
    title: "Bouw — Atletische Proporties",
    info: variant => variant === 'show'
      ? "Showlijn: zwaarder in lichaamsmassa, kortere poten. Geoptimaliseerd voor esthetiek en rasstandaard."
      : "Werklijn: slank, atletisch, gebouwd voor snelheid en uithoudingsvermogen. Topsnelheid 32-48 km/u.",
    bron: "AKC Standard, Dogster",
  },
  ears: {
    title: "Oren — Semi-rechtop",
    info: "Border Collies hebben variabele oren: volledig rechtop, volledig hangend, of semi-rechtop. Semi-rechtop is meest typisch. Oren communiceren: naar voren = focus, naar achteren = onzekerheid.",
    bron: "Wikipedia, LifeAtHerPaw",
  },
  legs: {
    title: "Poten — Spierfysiologie",
    info: "Werkende honden hebben grotere spiervezels en een hoger aandeel slow-twitch (type I) vezels voor uithoudingsvermogen. Border Collies hebben een gebalanceerde mix voor zowel sprint als langdurig werk.",
    bron: "PMC11672843 — Muscle Fibers Study",
  },
  tail: {
    title: "Staart — Communicatie",
    info: "Staart laag = ontspannen, staart omhoog = opwinding/werkmodus, staart tussen benen = angst. Staartcouperen is NIET standaard voor Border Collies.",
    bron: "AKC Standard, Rugaas kalmeringssignalen",
  },
}

function Hotspot({ position, label, data, variant }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 3) * 0.15
      ref.current.scale.set(scale, scale, scale)
    }
  })

  const infoText = typeof data.info === 'function' ? data.info(variant) : data.info

  return (
    <group position={position}>
      {/* Hotspot sphere */}
      <mesh
        ref={ref}
        onClick={(e) => { e.stopPropagation(); setClicked(!clicked) }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color={hovered ? "#d4af37" : "#ffffff"}
          emissive={hovered ? "#d4af37" : "#ffffff"}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Ring around hotspot */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.12, 0.14, 32]} />
        <meshBasicMaterial color={hovered ? "#d4af37" : "#ffffff"} transparent opacity={0.5} side={2} />
      </mesh>

      {clicked && (
        <Html
          position={[0, 0.3, 0]}
          center
          distanceFactor={8}
          style={{
            pointerEvents: 'none',
            transform: 'translateZ(0)',
          }}
        >
          <div style={{
            background: 'rgba(10, 10, 10, 0.95)',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            borderRadius: '8px',
            padding: '12px 16px',
            maxWidth: '280px',
            color: '#f5f0e8',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)',
          }}>
            <div style={{ color: '#d4af37', fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>
              {data.title}
            </div>
            <div style={{ lineHeight: 1.5, marginBottom: '6px' }}>
              {infoText}
            </div>
            <div style={{ color: '#8a8a8a', fontSize: '11px', fontStyle: 'italic' }}>
              Bron: {data.bron}
            </div>
          </div>
        </Html>
      )}

      {/* Label when hovered */}
      {hovered && !clicked && (
        <Html position={[0, 0.2, 0]} center distanceFactor={10}>
          <div style={{
            background: 'rgba(212, 175, 55, 0.9)',
            borderRadius: '4px',
            padding: '4px 10px',
            color: '#0a0a0a',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>
            {label}
          </div>
        </Html>
      )}
    </group>
  )
}

function HotspotDogBody({ variant = 'working' }) {
  const isShow = variant === 'show'
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* Torso */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <capsuleGeometry args={[isShow ? 0.55 : 0.45, isShow ? 1.2 : 1.1, 8, 16]} />
        <meshStandardMaterial color="#1a1a1a" roughness={isShow ? 0.6 : 0.4} />
      </mesh>
      
      {/* White chest */}
      <mesh position={[0, 0.45, -0.5]} castShadow>
        <capsuleGeometry args={[0.4, 0.4, 4, 8]} />
        <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.75, -0.95]} castShadow rotation={[0.1, 0, 0]}>
        <sphereGeometry args={[isShow ? 0.35 : 0.3, 16, 16]} />
        <meshStandardMaterial color="#1a1a1a" roughness={isShow ? 0.6 : 0.4} />
      </mesh>

      {/* Snout */}
      <mesh position={[0, 0.65, -1.3]} castShadow rotation={[0.2, 0, 0]}>
        <capsuleGeometry args={[0.15, 0.3, 4, 8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
      </mesh>

      {/* White blaze */}
      <mesh position={[0, 0.8, -1.15]}>
        <boxGeometry args={[0.08, 0.2, 0.25]} />
        <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.62, -1.5]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.3} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.12, 0.82, -1.15]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.1} metalness={0.5} emissive="#0a0a1a" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.12, 0.82, -1.15]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.1} metalness={0.5} emissive="#0a0a1a" emissiveIntensity={0.3} />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.28, 1.05, -0.9]} castShadow rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.1, isShow ? 0.3 : 0.25, 8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={isShow ? 0.6 : 0.4} />
      </mesh>
      <mesh position={[0.28, 1.05, -0.9]} castShadow rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.1, isShow ? 0.3 : 0.25, 8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={isShow ? 0.6 : 0.4} />
      </mesh>

      {/* Legs */}
      {[-0.3, 0.3].map((x, i) => (
        <mesh key={`fl-${i}`} position={[x, isShow ? -0.15 : -0.2, -0.7]} castShadow>
          <capsuleGeometry args={[0.08, isShow ? 0.5 : 0.6, 4, 8]} />
          <meshStandardMaterial color={i === 0 ? "#f5f5f0" : "#1a1a1a"} roughness={0.5} />
        </mesh>
      ))}
      {[-0.3, 0.3].map((x, i) => (
        <mesh key={`bl-${i}`} position={[x, isShow ? -0.15 : -0.2, 0.6]} castShadow>
          <capsuleGeometry args={[0.09, isShow ? 0.5 : 0.6, 4, 8]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
        </mesh>
      ))}

      {/* Paws */}
      {[-0.3, 0.3].map((x, i) => (
        <mesh key={`pf-${i}`} position={[x, isShow ? -0.45 : -0.55, -0.7]}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
        </mesh>
      ))}
      {[-0.3, 0.3].map((x, i) => (
        <mesh key={`pb-${i}`} position={[x, isShow ? -0.45 : -0.55, 0.6]}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
        </mesh>
      ))}

      {/* Tail */}
      <mesh position={[0, 0.55, 1.0]} castShadow rotation={[0.5, 0, 0]}>
        <capsuleGeometry args={[0.06, isShow ? 0.5 : 0.45, 4, 8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.75, 1.2]} rotation={[0.5, 0, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
      </mesh>

      {/* Show line extras */}
      {isShow && (
        <>
          <mesh position={[0, 0.7, -0.2]} castShadow>
            <sphereGeometry args={[0.6, 16, 16]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.8} transparent opacity={0.3} />
          </mesh>
          <mesh position={[0, 0.85, -0.5]} castShadow>
            <sphereGeometry args={[0.45, 16, 16]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.9} transparent opacity={0.35} />
          </mesh>
        </>
      )}

      {/* Hotspots */}
      <Hotspot position={[0, 0.82, -1.05]} label="Ogen — The Eye" data={hotspotData.eyes} variant={variant} />
      <Hotspot position={[0, 0.5, 0.3]} label="Vacht" data={hotspotData.coat} variant={variant} />
      <Hotspot position={[0.3, 0.3, 0.6]} label="Bouw & Poten" data={hotspotData.build} variant={variant} />
      <Hotspot position={[-0.28, 1.15, -0.9]} label="Oren" data={hotspotData.ears} variant={variant} />
      <Hotspot position={[0.3, -0.3, 0.6]} label="Spierfysiologie" data={hotspotData.legs} variant={variant} />
      <Hotspot position={[0, 0.7, 1.15]} label="Staart" data={hotspotData.tail} variant={variant} />
    </group>
  )
}

export default function HotspotDogModel({ variant = 'working' }) {
  return (
    <>
      <HotspotDogBody variant={variant} />
      <OrbitControls
        enablePan={false}
        minDistance={2.5}
        maxDistance={7}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  )
}
