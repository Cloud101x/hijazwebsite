import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCore() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      pointer.y * 0.25 + Math.sin(t * 0.3) * 0.08,
      0.05,
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      pointer.x * 0.4 + t * 0.18,
      0.05,
    );
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.55}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#FF6A00"
          emissive="#CC5500"
          emissiveIntensity={0.85}
          roughness={0.18}
          metalness={0.65}
          distort={0.32}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

function OrbitRings() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.z = t * 0.05;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
  });

  const rings = useMemo(
    () => [
      { radius: 2.4, tube: 0.005, rotation: [Math.PI / 2.3, 0, 0] as [number, number, number], opacity: 0.55 },
      { radius: 2.85, tube: 0.004, rotation: [Math.PI / 1.9, Math.PI / 6, 0] as [number, number, number], opacity: 0.32 },
      { radius: 3.25, tube: 0.003, rotation: [Math.PI / 2.6, -Math.PI / 5, 0] as [number, number, number], opacity: 0.22 },
    ],
    [],
  );

  return (
    <group ref={groupRef}>
      {rings.map((r, i) => (
        <mesh key={i} rotation={r.rotation}>
          <torusGeometry args={[r.radius, r.tube, 16, 200]} />
          <meshBasicMaterial color="#FF8C42" transparent opacity={r.opacity} />
        </mesh>
      ))}
    </group>
  );
}

function AmbientParticles() {
  return (
    <>
      <Sparkles
        count={42}
        scale={[8, 8, 8]}
        size={3.2}
        speed={0.35}
        opacity={0.9}
        color="#FF8C42"
      />
      <Sparkles
        count={26}
        scale={[6, 6, 6]}
        size={2}
        speed={0.18}
        opacity={0.65}
        color="#FFFFFF"
      />
    </>
  );
}

interface HeroSceneProps {
  className?: string;
}

export function HeroScene({ className }: HeroSceneProps) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 6], fov: 42 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.35} />
          <pointLight position={[4, 4, 4]} intensity={2.2} color="#FF8C42" />
          <pointLight position={[-4, -2, -2]} intensity={1.4} color="#CC5500" />
          <pointLight position={[0, 3, 6]} intensity={1.1} color="#FFFFFF" />
          <FloatingCore />
          <OrbitRings />
          <AmbientParticles />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
