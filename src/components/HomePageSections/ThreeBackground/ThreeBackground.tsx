"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

import {
  CAMERA_FOV,
  CAMERA_POSITION,
  MOUSE_INFLUENCE,
  PARTICLE_COLOR,
  PARTICLE_COUNT,
  PARTICLE_SIZE,
  PARTICLE_SPREAD,
  ROTATION_AMPLITUDE,
  ROTATION_SPEED,
} from "./consts";

function generateParticlePositions(): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = (Math.random() - 0.5) * PARTICLE_SPREAD;
    const y = (Math.random() - 0.5) * PARTICLE_SPREAD;
    const z = (Math.random() - 0.5) * PARTICLE_SPREAD;
    positions.set([x, y, z], i * 3);
  }
  return positions;
}

const PARTICLE_POSITIONS = generateParticlePositions();

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();

    ref.current.rotation.x =
      Math.sin(time * MOUSE_INFLUENCE) * ROTATION_AMPLITUDE;
    ref.current.rotation.y = time * ROTATION_SPEED;

    ref.current.rotation.x += mousePosition.current.y * MOUSE_INFLUENCE;
    ref.current.rotation.y += mousePosition.current.x * MOUSE_INFLUENCE;
  });

  return (
    <Points
      ref={ref}
      positions={PARTICLE_POSITIONS}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color={PARTICLE_COLOR}
        size={PARTICLE_SIZE}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
