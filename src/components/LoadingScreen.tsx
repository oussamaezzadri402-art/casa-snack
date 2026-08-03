import React, { useEffect, useState } from 'react';
import { RESTAURANT_INFO } from '../data/mockData';

interface LoadingScreenProps {
  onFinished?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onFinished) onFinished();
            }, 500);
          }, 300);
          return 100;
        }
        return prev + 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinished]);

  if (fadeOut) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 opacity-0 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white dir-rtl px-4 select-none">
      {/* Glow Effect Background */}
      <div className="absolute w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Restaurant Logo */}
      <div className="relative mb-6">
        <img
          src={RESTAURANT_INFO.logo}
          alt={RESTAURANT_INFO.name}
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-orange-500/80 shadow-[0_0_30px_rgba(249,115,22,0.5)] animate-bounce"
        />
        <div className="absolute -bottom-2 -right-2 bg-orange-500 text-black p-2 rounded-full shadow-lg text-lg">
          🔥
        </div>
      </div>

      {/* Brand Name */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2 text-center">
        {RESTAURANT_INFO.name}
      </h1>
      <p className="text-orange-400 font-medium text-sm md:text-base mb-8 text-center">
        {RESTAURANT_INFO.tagline}
      </p>

      {/* Loading Bar Container */}
      <div className="w-64 md:w-80 bg-zinc-900 border border-zinc-800 rounded-full h-3 overflow-hidden p-0.5 shadow-inner mb-4">
        <div
          className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 h-full rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(249,115,22,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-xs text-zinc-400 font-sans tracking-wide">
        جاري تحضير أشهى المأكولات... {progress}%
      </p>
    </div>
  );
};
