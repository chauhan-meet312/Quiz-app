import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const AnimatedNumber = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span style={{ fontFamily: "Inter" }}>{displayValue}</span>;
};

const QuizCompletionScreen = ({ score, totalQuestions, onRestart }: { 
  score: number; 
  totalQuestions: number;
  onRestart: () => void;
}) => {
    const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-[#F4FDFF] flex items-center justify-center p-4">
      <div className="bg-transparent rounded-3xl p-12 max-w-2xl w-full text-center">
        {/* Encouragement Text */}
        <p className="text-gray-600 text-lg mb-8 font-medium" style={{ fontFamily: "Inter" }}>
          Keep Learning!
        </p>

        {/* Main Score Display */}
        <h1 className="text-4xl font-serif text-gray-700 mb-4 italic">
          Your Final score is
        </h1>

        {/* Animated Score */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="text-8xl font-bold text-teal-700">
            <AnimatedNumber value={percentage} duration={2000} />
          </span>
          <span className="text-5xl font-bold text-teal-700 mt-4">%</span>
        </div>

        {/* Restart Button */}
              <Button
                  style={{ fontFamily: "Inter" }}
          onClick={onRestart}
          className="bg-blue-200 hover:bg-blue-300 text-gray-800 font-semibold px-12 py-6 rounded-xl text-lg transition-colors"
        >
          Start Again
        </Button>
      </div>
    </div>
  );
};


const QuizCompletion = ({ score, totalQuestions, onRestart }: { 
    score: number; 
    totalQuestions: number;
    onRestart: () => void;
}) => {
  return <QuizCompletionScreen score={score} totalQuestions={totalQuestions} onRestart={onRestart} />;
}

export default QuizCompletion;