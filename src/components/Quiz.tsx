import { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  { q: "What's your ideal weekend?", options: ["Party with friends", "Beach day", "Cricket match", "Chill at home"] },
  { q: "You prefer your beer?", options: ["Cold & Bold", "Light & Fresh", "Strong & Royal", "Anytime fun"] },
  { q: "Favourite hangout spot?", options: ["Pub with music", "Beach bar", "Stadium", "Home balcony"] },
];

export default function Quiz({ onComplete }: { onComplete: (beer: 'budweiser' | 'corona' | 'kingfisher') => void }) {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({ budweiser: 0, corona: 0, kingfisher: 0 });

  const handleAnswer = (index: number) => {
    const newScores = { ...scores };
    if (index === 0) newScores.budweiser += 2;
    if (index === 1) newScores.corona += 2;
    if (index === 2) newScores.kingfisher += 2;
    setScores(newScores);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const winner = Object.keys(newScores).reduce((a, b) => 
        (newScores as any)[a] > (newScores as any)[b] ? a : b
      ) as 'budweiser' | 'corona' | 'kingfisher';
      onComplete(winner);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 z-20 relative">
      <motion.div 
        key={current}
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        className="max-w-2xl w-full text-center"
      >
        <h2 className="text-5xl font-bold mb-16 text-white">{questions[current].q}</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {questions[current].options.map((opt, i) => (
            <motion.button 
              key={i} 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #D4AF37" }} 
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(i)} 
              className="bg-white/10 backdrop-blur-xl border border-white/30 hover:border-beer p-8 rounded-3xl text-2xl transition-all"
            >
              {opt}
            </motion.button>
          ))}
        </div>

        <p className="mt-12 text-white/60">Question {current + 1} of {questions.length}</p>
      </motion.div>
    </div>
  );
}
