import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

function Bottle() {
  return (
    <mesh>
      <cylinderGeometry args={[0.35, 0.45, 2.2, 32]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.1} />
    </mesh>
  );
}

export default function FloatingBottle({ step }: { step: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: step === 'hero' ? 0.9 : 0.4 }} 
      className="fixed top-12 right-8 w-64 h-96 z-10 hidden lg:block pointer-events-auto"
    >
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} />
        <Bottle />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </motion.div>
  );
}
