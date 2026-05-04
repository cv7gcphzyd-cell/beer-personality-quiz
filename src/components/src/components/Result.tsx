import { motion } from 'framer-motion';

const resultData = {
  budweiser: { 
    name: "Budweiser", 
    tag: "The King of Beers – Bold & Social", 
    video: "/assets/budweiser.mp4" 
  },
  corona: { 
    name: "Corona", 
    tag: "Find Your Beach", 
    video: "/assets/corona.mp4" 
  },
  kingfisher: { 
    name: "Kingfisher", 
    tag: "The True Taste of India", 
    video: "/assets/kingfisher.mp4" 
  }
};

export default function Result({ beer, onRestart }: { 
  beer: keyof typeof resultData, 
  onRestart: () => void 
}) {
  const data = resultData[beer];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      >
        <source src={data.video} type="video/mp4" />
      </video>

      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.3 }}
          className="text-8xl md:text-9xl font-black text-beer mb-6 tracking-tighter"
        >
          {data.name}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="text-3xl md:text-4xl max-w-lg mx-auto mb-16 text-white/90"
        >
          {data.tag}
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}
          onClick={onRestart} 
          className="px-16 py-7 bg-beer text-darkbeer font-bold text-2xl rounded-full shadow-2xl hover:shadow-beer/50 transition-all"
        >
          POUR AGAIN 🍺
        </motion.button>
      </div>
    </motion.div>
  );
}
