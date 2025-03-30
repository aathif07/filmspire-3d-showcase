
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Group, Euler } from 'three';

// Simplified Clapperboard Model
const ClapperboardModel = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main clapperboard body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2, 1.2, 0.2]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Clapper top */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[2, 0.4, 0.2]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Stripes on the clapper */}
      {[-0.7, -0.3, 0.1, 0.5].map((x, i) => (
        <mesh key={i} position={[x, 0.8, 0.11]} castShadow>
          <boxGeometry args={[0.2, 0.4, 0.05]} />
          <meshStandardMaterial color="#D4AF37" />
        </mesh>
      ))}
    </group>
  );
};

// Film Reel Model
const FilmReelModel: React.FC<{ position?: [number, number, number], rotation?: [number, number, number] }> = ({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}) => {
  const reelRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (reelRef.current) {
      // Rotate the film reel
      reelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={reelRef} position={position} rotation={rotation}>
      {/* Reel center */}
      <mesh castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Reel outer edge */}
      <mesh castShadow>
        <torusGeometry args={[1.2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Reel spokes */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh key={i} rotation={[0, 0, (Math.PI / 3) * i]} castShadow>
          <boxGeometry args={[0.1, 2.2, 0.05]} />
          <meshStandardMaterial color="#222222" />
        </mesh>
      ))}
    </group>
  );
};

// Camera Model
const CameraModel = () => {
  const cameraRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (cameraRef.current) {
      // Gentle movement animation
      cameraRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={cameraRef}>
      {/* Camera body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.5, 1, 1]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Camera lens */}
      <mesh position={[0, 0, 1]} castShadow>
        {/* Fixed rotation by placing it directly on the mesh instead of the geometry */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 0.8, 32]} />
          <meshStandardMaterial color="#222222" metalness={0.7} roughness={0.2} />
        </mesh>
      </mesh>
      
      {/* Lens glass */}
      <mesh position={[0, 0, 1.4]} castShadow>
        {/* Fixed rotation by placing it directly on the mesh instead of the geometry */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
          <meshStandardMaterial color="#444444" metalness={0.9} roughness={0.1} />
        </mesh>
      </mesh>
    </group>
  );
};

// Complete scene with all models
const FilmScene = () => {
  return (
    <Canvas style={{ height: '100%', background: 'transparent' }} shadows>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <spotLight position={[-5, -5, 5]} intensity={0.3} />
      
      <group position={[0, -1, 0]}>
        <ClapperboardModel />
        <FilmReelModel position={[-3, 0, -1]} rotation={[Math.PI / 2, 0, 0]} />
        <FilmReelModel position={[3, 0, -1]} rotation={[Math.PI / 2, 0, 0]} />
        <CameraModel />
      </group>
      
      <Environment preset="studio" />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

const FilmScene3D: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <FilmScene />
    </div>
  );
};

export default FilmScene3D;
