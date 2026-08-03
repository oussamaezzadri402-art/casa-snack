import React from 'react';
import { FEATURES_LIST } from '../data/mockData';
import { ScrollReveal } from './ScrollReveal';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-orange-400 text-xs sm:text-sm font-bold mb-3">
              <i className="fa-solid fa-award"></i>
              <span>الامتياز والتفوق</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              علاش تختار <span className="text-orange-500">Casa Snack</span>؟
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg">
              من الجودة د المكونات حتال سرعة التوصيل.. كنضمنوا ليك تجربة أكل سريعة ما تنساش!
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES_LIST.map((feat, index) => (
            <ScrollReveal key={feat.id} direction="up" delay={0.1 * index}>
              <div
                className="bg-zinc-900/80 p-8 rounded-3xl border border-zinc-800/80 hover:border-orange-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl text-right flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-2xl mb-6 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                    <i className={`fa-solid ${feat.iconName}`}></i>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-orange-400 font-bold">
                  <span>جودة مضمونة</span>
                  <i className="fa-solid fa-arrow-left text-[10px]"></i>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Counter Bar */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-16 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 p-8 sm:p-10 rounded-3xl text-black shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black mb-1">+15,000</div>
              <div className="text-xs sm:text-sm font-bold text-black/80">وجبة مباعة فكازا</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black mb-1">25 دقيقة</div>
              <div className="text-xs sm:text-sm font-bold text-black/80">متوسط وقت التوصيل</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black mb-1">100%</div>
              <div className="text-xs sm:text-sm font-bold text-black/80">لحوم حلال وطازجة</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black mb-1">4.9 / 5</div>
              <div className="text-xs sm:text-sm font-bold text-black/80">رضا الزبناء على واتساب</div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
