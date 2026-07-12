import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Stylized Low-Poly Border Collie
// Minimal polygons, matte materials, subtle animations
// Show line: rounder, fluffier; Working line: leaner, sharper edges

function LowPolyDog({ variant = 'working' }) {
  const groupRef = useRef()
  const tailRef = useRef()
  const earLeftRef = useRef()
  const earRightRef = useRef()
  const bodyRef = useRef()
  const isShow = variant === 'show'

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    // Breathing animation
    if (bodyRef.current) {
      bodyRef.current.scale.y = 1 + Math.sin(t * 2) * 0.02
      bodyRef.current.scale.x = 1 + Math.sin(t * 2 + 0.5) * 0.01
    }
    
    // Tail wagging
    if (tailRef.current) {
      tailRef.current.rotation.z = Math.sin(t * 4) * 0.3
    }
    
    // Ear twitching
    if (earLeftRef.current) {
      earLeftRef.current.rotation.z = -0.3 + Math.sin(t * 1.5) * 0.05
    }
    if (earRightRef.current) {
      earRightRef.current.rotation.z = 0.3 + Math.sin(t * 1.5 + 0.3) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh ref={bodyRef} position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[isShow ? 0.9 : 0.75, isShow ? 0.7 : 0.6, 1.6]} />
        <meshStandardMaterial color="#1a1a1a" flatShading roughness={0.7} />
      </mesh>

      {/* White chest */}
      <mesh position={[0, 0.45, -0.7]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.4]} />
        <meshStandardMaterial color="#f0f0e8" flatShading roughness={0.7} />
      </mesh>

      {/* Head - boxy low-poly */}
      <mesh position={[0, 0.8, -1.0]} castShadow>
        <boxGeometry args={[isShow ? 0.55 : 0.45, isShow ? 0.45 : 0.4, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" flatShading roughness={0.7} />
      </mesh>

      {/* Snout */}
      <mesh position={[0, 0.7, -1.35]} castShadow>
        <boxGeometry args={[0.25, 0.2, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" flatShading roughness={0.7} />
      </mesh>

      {/* White blaze */}
      <mesh position={[0, 0.85, -1.26]}>
        <boxGeometry args={[0.1, 0.15, 0.08]} />
        <meshStandardMaterial color="#f0f0e8" flatShading roughness={0.7} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.68, -1.52]}>
        <boxGeometry args={[0.1, 0.08, 0.06]} />
        <meshStandardMaterial color="#0a0a0a" flatShading roughness={0.3} />
      </mesh>

      {/* Eyes - geometric */}
      <mesh position={[-0.15, 0.85, -1.22]}>
        <boxGeometry args={[0.08, 0.06, 0.04]} />
        <meshStandardMaterial color="#1a1a2e" flatShading emissive="#0a0a1a" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0.15, 0.85, -1.22]}>
        <boxGeometry args={[0.08, 0.06, 0.04]} />
        <meshStandardMaterial color="#1a1a2e" flatShading emissive="#0a0a1a" emissiveIntensity={0.4} />
      </mesh>

      {/* Ears - triangular, animated */}
      <mesh ref={earLeftRef} position={[-0.3, 1.1, -0.95]} castShadow>
        <coneGeometry args={[0.12, isShow ? 0.35 : 0.28, 4]} />
        <meshStandardMaterial color="#1a1a1a" flatShading roughness={0.7} />
      </mesh>
      <mesh ref={earRightRef} position={[0.3, 1.1, -0.95]} castShadow>
        <coneGeometry args={[0.12, isShow ? 0.35 : 0.28, 4]} />
        <meshStandardMaterial color="#1a1a1a" flatShading roughness={0.7} />
      </mesh>

      {/* Legs - simple boxes */}
      {[
        [-0.25, -0.7, 'front-left'],
        [0.25, -0.7, 'front-right'],
        [-0.25, 0.6, 'back-left'],
        [0.25, 0.6, 'back-right'],
      ].map(([x, z, key], i) => (
        <mesh key={key} position={[x, isShow ? -0.1 : -0.15, z]} castShadow>
          <boxGeometry args={[0.15, isShow ? 0.7 : 0.8, 0.15]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#f0f0e8" : "#1a1a1a"} flatShading roughness={0.7} />
        </mesh>
      ))}

      {/* Tail - animated */}
      <mesh ref={tailRef} position={[0, 0.6, 0.9]} castShadow>
        <boxGeometry args={[0.1, 0.1, isShow ? 0.55 : 0.5]} />
        <meshStandardMaterial color="#1a1a1a" flatShading roughness={0.7} />
      </mesh>
      {/* White tail tip */}
      <mesh position={[0, 0.6, 1.2]}>
        <boxGeometry args={[0.12, 0.12, 0.12]} />
        <meshStandardMaterial color="#f0f0e8" flatShading roughness={0.7} />
      </mesh>

      {/* Show line: extra volume spheres */}
      {isShow && (
        <>
          <mesh position={[0, 0.6, -0.3]} castShadow>
            <icosahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial color="#1a1a1a" flatShading roughness={0.8} transparent opacity={0.5} />
          </mesh>
          <mesh position={[0, 0.9, -0.6]} castShadow>
            <icosahedronGeometry args={[0.4, 0]} />
            <meshStandardMaterial color="#1a1a1a" flatShading roughness={0.8} transparent opacity={0.4} />
          </mesh>
        </>
      )}

      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={6}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </group>
  )
}

export default LowPolyDog
