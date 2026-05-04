import { motion } from 'framer-motion';

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center z-20 px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 60 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.4 }} 
        className="text-center max-w-5xl"
      >
        <h1 className="text-[4.8rem] md:text-[7rem] font-black leading-none tracking-[-4px] mb-6">
          WHAT’S YOUR<br />
          <span className="text-beer">POUR</span> PERSONALITY?
        </h1>
        <p className="text-2xl md:text-3xl text-white/70 mb-12">Answer 5 fun questions • Discover your soul brew</p>
        
        <motion.button 
          onClick={onStart} 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}
          className="px-20 py-8 bg-beer text-darkbeer font-bold text-3xl rounded-3xl shadow-2xl hover:shadow-beer/50"
        >
          START THE QUIZ 🍺
        </motion.button>
      </motion.div>

      {/* Animated Spilled Beer Bottle */}
      <motion.img 
        src="/assets/beer-spilled.png" 
        alt="Spilled Beer" 
        initial={{ y: -500, rotate: -35, opacity: 0 }} 
        animate={{ y: 80, rotate: 15, opacity: 1 }} 
        transition={{ duration: 2.2, ease: "backOut" }} 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-80 md:w-[520px] drop-shadow-2xl pointer-events-none" 
      />
    </div>
  );
}
