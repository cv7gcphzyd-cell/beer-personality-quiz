import { motion } from 'framer-motion';

const resultData = {
  budweiser: { name: "Budweiser", tag: "The King of Beers – Bold & Social", video: "/assets/budweiser.mp4" },
  corona: { name: "Corona", tag: "Find Your Beach", video: "/assets/corona.mp4" },
  kingfisher: { name: "Kingfisher", tag: "The True Taste of India", video: "/assets/kingfisher.mp4" }
};

export default function Result({ beer, onRestart }: { beer: keyof typeof resultData, onRestart: () => void }) {
  const data = resultData[beer];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-75">
        <source src={data.video} type="video/mp4" />
      </video>
      <div className="relative z-10 text-center px-6">
        <motion.h1 initial={{ y: 50 }} animate={{ y: 0 }} className="text-8xl font-black text-beer mb-4">{data.name}</motion.h1>
        <p className="text-4xl mb-16">{data.tag}</p>
        <motion.button whileHover={{ scale: 1.1 }} onClick={onRestart} className="px-16 py-7 bg-beer text-darkbeer font-bold text-2xl rounded-full">
          POUR AGAIN 🍺
        </motion.button>
      </div>
    </motion.div>
  );
}
