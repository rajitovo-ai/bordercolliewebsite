import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

// Realistic Border Collie 3D Model
// Built from Three.js primitives refined into a dog shape
// Show line: thicker coat, heavier build, shorter legs
// Working line: slimmer, athletic, shorter coat

function DogBody({ variant = 'working' }) {
  const isShow = variant === 'show'
  
  return (
    <group>
      {/* Torso */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <capsuleGeometry args={[isShow ? 0.55 : 0.45, isShow ? 1.2 : 1.1, 8, 16]} />
        <meshStandardMaterial color="#1a1a1a" roughness={isShow ? 0.6 : 0.4} />
      </mesh>
      
      {/* White chest patch */}
      <mesh position={[0, 0.45, -0.5]} castShadow>
        <capsuleGeometry args={[0.4, 0.4, 4, 8]} />
        <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
      </mesh>

      {/* White neck/front */}
      <mesh position={[0, 0.6, -0.6]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
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

      {/* White blaze on face */}
      <mesh position={[0, 0.8, -1.15]} castShadow>
        <boxGeometry args={[0.08, 0.2, 0.25]} />
        <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.62, -1.5]} castShadow>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.3} />
      </mesh>

      {/* Eyes - almond shaped, intense */}
      <mesh position={[-0.12, 0.82, -1.15]} castShadow>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.1} metalness={0.5} emissive="#0a0a1a" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.12, 0.82, -1.15]} castShadow>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.1} metalness={0.5} emissive="#0a0a1a" emissiveIntensity={0.3} />
      </mesh>

      {/* Eye highlights */}
      <mesh position={[-0.1, 0.84, -1.19]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.14, 0.84, -1.19]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Ears - semi-erect */}
      <mesh position={[-0.28, 1.05, -0.9]} castShadow rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.1, isShow ? 0.3 : 0.25, 8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={isShow ? 0.6 : 0.4} />
      </mesh>
      <mesh position={[0.28, 1.05, -0.9]} castShadow rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.1, isShow ? 0.3 : 0.25, 8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={isShow ? 0.6 : 0.4} />
      </mesh>

      {/* Legs - front */}
      {[-0.3, 0.3].map((x, i) => (
        <mesh key={`front-${i}`} position={[x, isShow ? -0.15 : -0.2, -0.7]} castShadow>
          <capsuleGeometry args={[0.08, isShow ? 0.5 : 0.6, 4, 8]} />
          <meshStandardMaterial color={i === 0 ? "#f5f5f0" : "#1a1a1a"} roughness={0.5} />
        </mesh>
      ))}

      {/* Legs - back */}
      {[-0.3, 0.3].map((x, i) => (
        <mesh key={`back-${i}`} position={[x, isShow ? -0.15 : -0.2, 0.6]} castShadow>
          <capsuleGeometry args={[0.09, isShow ? 0.5 : 0.6, 4, 8]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
        </mesh>
      ))}

      {/* Paws - white */}
      {[-0.3, 0.3].map((x, i) => (
        <mesh key={`paw-front-${i}`} position={[x, isShow ? -0.45 : -0.55, -0.7]} castShadow>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
        </mesh>
      ))}
      {[-0.3, 0.3].map((x, i) => (
        <mesh key={`paw-back-${i}`} position={[x, isShow ? -0.45 : -0.55, 0.6]} castShadow>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
        </mesh>
      ))}

      {/* Tail */}
      <mesh position={[0, 0.55, 1.0]} castShadow rotation={[0.5, 0, 0]}>
        <capsuleGeometry args={[0.06, isShow ? 0.5 : 0.45, 4, 8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
      </mesh>
      {/* White tail tip */}
      <mesh position={[0, 0.75, 1.2]} castShadow rotation={[0.5, 0, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color="#f5f5f0" roughness={0.5} />
      </mesh>

      {/* Show line: extra fluffy coat details */}
      {isShow && (
        <>
          <mesh position={[0, 0.7, -0.2]} castShadow>
            <sphereGeometry args={[0.6, 16, 16]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.8} transparent opacity={0.3} />
          </mesh>
          {/* Feathering on legs */}
          <mesh position={[-0.3, 0.0, -0.7]} castShadow>
            <capsuleGeometry args={[0.12, 0.4, 4, 8]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.8} transparent opacity={0.4} />
          </mesh>
          <mesh position={[0.3, 0.0, -0.7]} castShadow>
            <capsuleGeometry args={[0.12, 0.4, 4, 8]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.8} transparent opacity={0.4} />
          </mesh>
          {/* Mane */}
          <mesh position={[0, 0.85, -0.5]} castShadow>
            <sphereGeometry args={[0.45, 16, 16]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.9} transparent opacity={0.35} />
          </mesh>
        </>
      )}
    </group>
  )
}

export default function RealisticDogModel({ variant = 'working', autoRotate = true }) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      <DogBody variant={variant} />
      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={6}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </group>
  )
}
