"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PresentationControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

// Palette matching the reference image — warm white, pink, gold, dark visor
const C = {
  pearl:     "#f8f4f0",   // main body (warm white)
  pink:      "#f0a0b8",   // pink armor panels
  pinkLight: "#fdd8e5",   // lighter pink for gift
  gold:      "#c8a84c",   // gold trim
  visor:     "#181210",   // dark face visor
  eyeGlow:   "#ff8c42",   // amber glowing eyes
  dark:      "#252018",   // joints / dark gaps
};

function mat(color: string, opts: Partial<THREE.MeshPhysicalMaterialParameters> = {}) {
  return new THREE.MeshPhysicalMaterial({
    color, metalness: 0.12, roughness: 0.28, clearcoat: 1.0, clearcoatRoughness: 0.1,
    ...opts,
  });
}

// Floating heart shape made of 3 meshes
function Heart({ pos }: { pos: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = pos[1] + Math.sin(clock.elapsedTime * 1.4 + pos[0]) * 0.1;
    ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.9) * 0.12;
  });
  return (
    <group ref={ref} position={pos}>
      <mesh position={[-0.075, 0.02, 0]}>
        <sphereGeometry args={[0.09, 10, 10]} />
        <meshBasicMaterial color={C.pink} />
      </mesh>
      <mesh position={[0.075, 0.02, 0]}>
        <sphereGeometry args={[0.09, 10, 10]} />
        <meshBasicMaterial color={C.pink} />
      </mesh>
      <mesh position={[0, -0.075, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.13, 0.13, 0.05]} />
        <meshBasicMaterial color={C.pink} />
      </mesh>
    </group>
  );
}

// Pink gift box held by the robot
function GiftBox() {
  const mBox = useMemo(() => mat(C.pink,  { metalness: 0.05, roughness: 0.45 }), []);
  return (
    <group position={[0.62, -0.18, 0.38]} rotation={[0.1, -0.35, 0.05]}>
      {/* Box body */}
      <mesh material={mBox}>
        <boxGeometry args={[0.36, 0.30, 0.30]} />
      </mesh>
      {/* Ribbon X */}
      <mesh position={[0, 0, 0.153]}>
        <boxGeometry args={[0.36, 0.045, 0.004]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0, 0.153]}>
        <boxGeometry args={[0.045, 0.30, 0.004]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* Bow puffs */}
      <mesh position={[-0.055, 0.1, 0.157]} rotation={[0, 0, 0.45]}>
        <sphereGeometry args={[0.058, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.055, 0.1, 0.157]} rotation={[0, 0, -0.45]}>
        <sphereGeometry args={[0.058, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

function Robot() {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle idle sway
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.65) * 0.1;
    }
  });

  const mPearl = useMemo(() => mat(C.pearl), []);
  const mPink  = useMemo(() => mat(C.pink,  { metalness: 0.1, roughness: 0.35 }), []);
  const mGold  = useMemo(() => mat(C.gold,  { metalness: 0.65, roughness: 0.18 }), []);
  const mVisor = useMemo(() => mat(C.visor, { metalness: 0.55, roughness: 0.08, clearcoat: 2.0 }), []);
  const mDark  = useMemo(() => mat(C.dark,  { metalness: 0.3,  roughness: 0.55, clearcoat: 0.3 }), []);
  const mEye   = useMemo(() => new THREE.MeshStandardMaterial({
    color: C.eyeGlow, emissive: C.eyeGlow, emissiveIntensity: 2.2,
  }), []);

  return (
    <Float speed={1.6} rotationIntensity={0.08} floatIntensity={0.8}>
      <group ref={groupRef} position={[0, -0.25, 0]}>

        {/* ═══════════ HEAD ═══════════ */}
        {/* Large round helmet */}
        <mesh position={[0, 1.42, 0]} scale={[1, 1.08, 1]} material={mPearl}>
          <sphereGeometry args={[0.65, 28, 28]} />
        </mesh>

        {/* Gold stripe on top of head */}
        <mesh position={[0, 1.95, -0.1]} rotation={[0.8, 0, 0]}>
          <torusGeometry args={[0.22, 0.024, 8, 24]} />
          <primitive object={mGold} attach="material" />
        </mesh>

        {/* Left ear disc */}
        <mesh position={[-0.67, 1.42, -0.04]} rotation={[0, Math.PI / 2, 0]} material={mPearl}>
          <cylinderGeometry args={[0.2, 0.2, 0.08, 18]} />
        </mesh>
        <mesh position={[-0.72, 1.42, -0.04]} rotation={[0, Math.PI / 2, 0]} material={mGold}>
          <torusGeometry args={[0.155, 0.022, 8, 18]} />
        </mesh>
        {/* Ear center dot */}
        <mesh position={[-0.72, 1.42, -0.04]} rotation={[0, Math.PI / 2, 0]} material={mGold}>
          <cylinderGeometry args={[0.04, 0.04, 0.015, 8]} />
        </mesh>

        {/* Right ear disc */}
        <mesh position={[0.67, 1.42, -0.04]} rotation={[0, Math.PI / 2, 0]} material={mPearl}>
          <cylinderGeometry args={[0.2, 0.2, 0.08, 18]} />
        </mesh>
        <mesh position={[0.72, 1.42, -0.04]} rotation={[0, Math.PI / 2, 0]} material={mGold}>
          <torusGeometry args={[0.155, 0.022, 8, 18]} />
        </mesh>
        <mesh position={[0.72, 1.42, -0.04]} rotation={[0, Math.PI / 2, 0]} material={mGold}>
          <cylinderGeometry args={[0.04, 0.04, 0.015, 8]} />
        </mesh>

        {/* Dark face visor (large oval inset) */}
        <mesh position={[0, 1.38, 0.52]} scale={[0.92, 0.66, 0.15]} material={mVisor}>
          <sphereGeometry args={[0.72, 22, 22]} />
        </mesh>
        {/* Gold visor bezel ring */}
        <mesh position={[0, 1.38, 0.46]} scale={[0.97, 0.71, 0.06]}>
          <sphereGeometry args={[0.72, 22, 22]} />
          <primitive object={mGold} attach="material" />
        </mesh>

        {/* Glowing amber eyes */}
        <mesh position={[-0.2, 1.42, 0.58]} material={mEye}>
          <sphereGeometry args={[0.105, 18, 18]} />
        </mesh>
        <mesh position={[-0.2, 1.42, 0.57]}>
          <sphereGeometry args={[0.155, 18, 18]} />
          <meshBasicMaterial color={C.eyeGlow} transparent opacity={0.18} />
        </mesh>

        <mesh position={[0.2, 1.42, 0.58]} material={mEye}>
          <sphereGeometry args={[0.105, 18, 18]} />
        </mesh>
        <mesh position={[0.2, 1.42, 0.57]}>
          <sphereGeometry args={[0.155, 18, 18]} />
          <meshBasicMaterial color={C.eyeGlow} transparent opacity={0.18} />
        </mesh>

        {/* Small top antenna nub */}
        <mesh position={[0, 2.1, 0]} material={mGold}>
          <sphereGeometry args={[0.048, 10, 10]} />
        </mesh>

        {/* ═══════════ NECK ═══════════ */}
        <mesh position={[0, 0.79, 0]} material={mDark}>
          <cylinderGeometry args={[0.17, 0.21, 0.22, 12]} />
        </mesh>

        {/* ═══════════ BODY ═══════════ */}
        {/* Main torso — rounded */}
        <mesh position={[0, 0.24, 0]} scale={[1, 1.0, 0.84]} material={mPearl}>
          <sphereGeometry args={[0.62, 22, 22]} />
        </mesh>

        {/* Pink chest plate */}
        <mesh position={[0, 0.32, 0.46]} scale={[0.7, 0.52, 0.18]} material={mPink}>
          <sphereGeometry args={[0.62, 18, 18]} />
        </mesh>

        {/* Gold chest accent */}
        <mesh position={[0, 0.18, 0.52]} material={mGold}>
          <cylinderGeometry args={[0.055, 0.055, 0.04, 10]} />
        </mesh>

        {/* Shoulder joints */}
        <mesh position={[-0.69, 0.58, 0]} material={mDark}>
          <sphereGeometry args={[0.145, 14, 14]} />
        </mesh>
        <mesh position={[0.69, 0.58, 0]} material={mDark}>
          <sphereGeometry args={[0.145, 14, 14]} />
        </mesh>

        {/* Pink body side panels */}
        <mesh position={[-0.54, 0.14, 0.2]} scale={[0.28, 0.5, 0.22]} material={mPink}>
          <sphereGeometry args={[0.6, 12, 12]} />
        </mesh>
        <mesh position={[0.54, 0.14, 0.2]} scale={[0.28, 0.5, 0.22]} material={mPink}>
          <sphereGeometry args={[0.6, 12, 12]} />
        </mesh>

        {/* ═══════════ LEFT ARM (raised toward gift) ═══════════ */}
        <mesh position={[-0.85, 0.3, 0.06]} rotation={[0.2, 0, 0.5]} material={mPearl}>
          <capsuleGeometry args={[0.16, 0.3, 6, 12]} />
        </mesh>
        <mesh position={[-0.95, 0.04, 0.14]} material={mDark}>
          <sphereGeometry args={[0.125, 12, 12]} />
        </mesh>
        <mesh position={[-0.9, -0.12, 0.28]} rotation={[0.35, 0, 0.55]} material={mPearl}>
          <capsuleGeometry args={[0.135, 0.2, 6, 10]} />
        </mesh>

        {/* ═══════════ RIGHT ARM ═══════════ */}
        <mesh position={[0.85, 0.28, 0]} rotation={[0, 0, -0.48]} material={mPearl}>
          <capsuleGeometry args={[0.16, 0.3, 6, 12]} />
        </mesh>
        <mesh position={[0.95, 0.04, 0.06]} material={mDark}>
          <sphereGeometry args={[0.125, 12, 12]} />
        </mesh>
        <mesh position={[0.96, -0.12, 0.12]} rotation={[0.2, 0, -0.5]} material={mPearl}>
          <capsuleGeometry args={[0.135, 0.2, 6, 10]} />
        </mesh>

        {/* ═══════════ LOWER BODY / HIPS ═══════════ */}
        <mesh position={[0, -0.3, 0]} scale={[1, 0.52, 0.84]} material={mPearl}>
          <sphereGeometry args={[0.52, 18, 18]} />
        </mesh>

        {/* ═══════════ LEGS ═══════════ */}
        {/* Left thigh */}
        <mesh position={[-0.29, -0.6, 0]} material={mPearl}>
          <capsuleGeometry args={[0.21, 0.22, 6, 14]} />
        </mesh>
        {/* Left knee joint */}
        <mesh position={[-0.29, -0.82, 0]} material={mDark}>
          <sphereGeometry args={[0.14, 12, 12]} />
        </mesh>
        {/* Left shin */}
        <mesh position={[-0.29, -1.04, 0.02]} material={mPearl}>
          <capsuleGeometry args={[0.19, 0.2, 6, 12]} />
        </mesh>
        {/* Left pink knee cap */}
        <mesh position={[-0.29, -0.82, 0.14]} material={mPink}>
          <sphereGeometry args={[0.095, 10, 10]} />
        </mesh>
        {/* Left boot */}
        <mesh position={[-0.29, -1.3, 0.07]} scale={[1, 0.6, 1.2]} material={mPearl}>
          <sphereGeometry args={[0.28, 14, 14]} />
        </mesh>
        {/* Left boot gold base plate */}
        <mesh position={[-0.29, -1.48, 0.05]} material={mGold}>
          <cylinderGeometry args={[0.28, 0.32, 0.06, 14]} />
        </mesh>

        {/* Right thigh */}
        <mesh position={[0.29, -0.6, 0]} material={mPearl}>
          <capsuleGeometry args={[0.21, 0.22, 6, 14]} />
        </mesh>
        {/* Right knee joint */}
        <mesh position={[0.29, -0.82, 0]} material={mDark}>
          <sphereGeometry args={[0.14, 12, 12]} />
        </mesh>
        {/* Right shin */}
        <mesh position={[0.29, -1.04, 0.02]} material={mPearl}>
          <capsuleGeometry args={[0.19, 0.2, 6, 12]} />
        </mesh>
        {/* Right pink knee cap */}
        <mesh position={[0.29, -0.82, 0.14]} material={mPink}>
          <sphereGeometry args={[0.095, 10, 10]} />
        </mesh>
        {/* Right boot */}
        <mesh position={[0.29, -1.3, 0.07]} scale={[1, 0.6, 1.2]} material={mPearl}>
          <sphereGeometry args={[0.28, 14, 14]} />
        </mesh>
        {/* Right boot gold base plate */}
        <mesh position={[0.29, -1.48, 0.05]} material={mGold}>
          <cylinderGeometry args={[0.28, 0.32, 0.06, 14]} />
        </mesh>

        {/* ═══════════ GIFT BOX ═══════════ */}
        <GiftBox />

        {/* ═══════════ FLOATING HEARTS ═══════════ */}
        <Heart pos={[1.05, 0.85, 0.25]} />
        <Heart pos={[0.82, 1.2,  0.1]}  />

      </group>
    </Float>
  );
}

export function About3DScene() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-full h-full bg-card/60 animate-pulse" />;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="w-full h-full inset-0 absolute rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing transition-colors duration-400"
      style={{
        background: isDark
          ? "linear-gradient(160deg, #0a0b14 0%, #121424 100%)"
          : "linear-gradient(160deg, #fdf6ef 0%, #fae8dc 100%)"
      }}
    >
      <Canvas camera={{ position: [0, 0, 5.6], fov: 44 }}>
        {/* Dynamic lighting based on theme */}
        <ambientLight intensity={isDark ? 1.5 : 3.2} color={isDark ? "#ccd6ff" : "#fff6ee"} />
        <directionalLight position={[5, 10, 6]} intensity={isDark ? 3.5 : 2.8} color={isDark ? "#88b0ff" : "#fff8f0"} />
        <directionalLight position={[-4, 3, 4]} intensity={isDark ? 1.8 : 1.4} color={isDark ? "#b088ff" : "#fde8d0"} />
        <pointLight position={[0, 5, 4]} intensity={isDark ? 3.0 : 2.2} color={isDark ? "#00ffff" : "#ffffff"} />
        <pointLight position={[2, -1, 3]} intensity={isDark ? 1.5 : 0.9} color={isDark ? "#ff00ff" : "#f8d0c8"} />

        <PresentationControls
          global
          rotation={[0.05, 0.2, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Robot />
        </PresentationControls>
      </Canvas>
    </div>
  );
}
