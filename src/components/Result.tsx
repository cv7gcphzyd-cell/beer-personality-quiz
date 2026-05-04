import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 bg-[#1a0f08] z-50 flex items-center justify-center">
      <motion.div animate={{ scale: [1, 1.25, 1], rotate: [0, 12, -12, 0] }} transition={{ duration: 2.4 }} className="text-center">
        <div className="text-9xl mb-6">🍺</div>
        <h1 className="text-7xl font-black text-beer tracking-widest">POUR</h1>
        <p className="text-white/70 text-2xl mt-4">Finding your perfect beer...</p>
      </motion.div>
    </motion.div>
  );
}
