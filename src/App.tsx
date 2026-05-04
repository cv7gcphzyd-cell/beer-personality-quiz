import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Background from './components/Background';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [step, setStep] = useState<'hero' | 'quiz' | 'result'>('hero');
  const [result, setResult] = useState<'budweiser' | 'corona' | 'kingfisher' | null>(null);

  const startApp = () => setShowSplash(false);
  const startQuiz = () => setStep('quiz');
  const finishQuiz = (beer: 'budweiser' | 'corona' | 'kingfisher') => {
    setResult(beer);
    setStep('result');
  };
  const restart = () => {
    setResult(null);
    setStep('hero');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-darkbeer text-white">
      <Background />
      
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onFinish={startApp} />}
        
        {!showSplash && (
          <>
            {step === 'hero' && <Hero onStart={startQuiz} />}
            {step === 'quiz' && <Quiz onComplete={finishQuiz} />}
            {step === 'result' && result && <Result beer={result} onRestart={restart} />}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
