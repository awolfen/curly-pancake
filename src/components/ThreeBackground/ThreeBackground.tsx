"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

// Seeded random number generator for deterministic particle positions
function seededRandom(seed: number): () => number {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Generate deterministic positions for particles using seeded random
  const particleCount = 5000;
  const positions = useMemo(() => {
    const random = seededRandom(42); // Fixed seed for consistent results
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const x = (random() - 0.5) * 10;
      const y = (random() - 0.5) * 10;
      const z = (random() - 0.5) * 10;
      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, []);

  // Track mouse movement for interactive effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate the particle field
  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();

    // Gentle rotation based on time
    ref.current.rotation.x = Math.sin(time * 0.1) * 0.2;
    ref.current.rotation.y = time * 0.05;

    // Subtle movement based on mouse position
    ref.current.rotation.x += mousePosition.current.y * 0.1;
    ref.current.rotation.y += mousePosition.current.x * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GradientPlane() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} rotation={[0, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial color="#0a0a0a" transparent opacity={0.5} />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <GradientPlane />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
