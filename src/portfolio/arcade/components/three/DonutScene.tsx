import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function Donut() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * 0.4 + Math.sin(t * 0.3) * 0.1, 0.06);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.5 + t * 0.25, 0.06);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.4}>
      <mesh ref={ref}>
        <torusGeometry args={[1.1, 0.42, 64, 200]} />
        <MeshDistortMaterial
          color="#FF2E88"
          emissive="#B91562"
          emissiveIntensity={0.7}
          roughness={0.22}
          metalness={0.55}
          distort={0.15}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

function Sprinkles({ count = 80 }: { count?: number }) {
  const group = useRef<THREE.Group>(null!);
  const palette = useMemo(
    () => [new THREE.Color('#FF2E88'), new THREE.Color('#8B5CF6'), new THREE.Color('#FF8A1F'), new THREE.Color('#6EE7B7')],
    [],
  );

  const sprinkles = useMemo(
    () =>
      Array.from({ length: count }, () => {
        const phi = Math.random() * Math.PI * 2;
        const r = 1.05 + Math.random() * 0.08;
        const y = (Math.random() - 0.5) * 0.5;
        const x = Math.cos(phi) * r;
        const z = Math.sin(phi) * r;
        return {
          pos: [x, y, z] as [number, number, number],
          rot: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
          color: palette[Math.floor(Math.random() * palette.length)],
        };
      }),
    [count, palette],
  );

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.x = pointer.y * 0.4 + Math.sin(t * 0.3) * 0.1;
    group.current.rotation.y = pointer.x * 0.5 + t * 0.25;
  });

  return (
    <group ref={group}>
      {sprinkles.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={s.rot}>
          <cylinderGeometry args={[0.014, 0.014, 0.1, 6]} />
          <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function Orbits() {
  const group = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = clock.getElapsedTime() * 0.04;
  });
  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.1, 0.004, 16, 200]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 1.9, Math.PI / 6, 0]}>
        <torusGeometry args={[2.5, 0.003, 16, 200]} />
        <meshBasicMaterial color="#FF2E88" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

export function DonutScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 4.4], fov: 42 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[3, 3, 3]} intensity={2.2} color="#FF2E88" />
          <pointLight position={[-3, -2, 3]} intensity={1.6} color="#8B5CF6" />
          <pointLight position={[0, 3, 5]} intensity={1.2} color="#FF8A1F" />
          <Donut />
          <Sprinkles />
          <Orbits />
          <Sparkles count={32} scale={[5, 5, 5]} size={2.6} speed={0.4} opacity={0.85} color="#FFC2D1" />
        </Suspense>
      </Canvas>
    </div>
  );
}
