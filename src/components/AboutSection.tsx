import React from 'react';
import { RESTAURANT_INFO } from '../data/mockData';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-orange-400 text-xs sm:text-sm font-bold mb-3">
              <i className="fa-solid fa-store"></i>
              <span>قصة النجاح والمذاق</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              شكون حنا فـ <span className="text-orange-500">Casa Snack</span>؟
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg">
              سناك مغربي أصيل فقلب الدار البيضاء، تخصصنا هو نقدمو ليك وجبة سريعة بمذاق الفنادق الفخمة!
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <img
                  src={RESTAURANT_INFO.kitchenImage}
                  alt="Casa Snack Kitchen Preparation"
                  className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Overlay Text */}
                <div className="absolute bottom-6 right-6 left-6 bg-black/80 backdrop-blur-md p-5 rounded-2xl border border-zinc-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-black font-extrabold text-2xl shrink-0">
                      <i className="fa-solid fa-utensils"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg">مطبخ حديث ومكشوف</h4>
                      <p className="text-zinc-400 text-xs sm:text-sm">تحضير فوري أمام عينيك بعناية ونظافة تامة.</p>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Text & Points Side */}
          <div className="lg:col-span-6 space-y-6 text-right">
            
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg">
                <p>
                  بدات القصة د <strong className="text-white">Casa Snack</strong> من الشغف ديالنا لتقديم أفضل الوجبات السريعة للبيضاويين. كنامنو بأن السر فالوجبة البنينة كيبدا من المكونات الطرية والسرية.
                </p>
                <p>
                  كل يوم فـ Casa Snack، كنختارو أجود اللحوم الحلال 100% من الجزارين الموثوقين، وكنعجنوا الخبز والبيتزا طازجة، مع تحضير صلصة الجبن المذابة (La Sauce Fromagère) الخاصة بفرنسا والمغرب اللي خلات الزبناء ديالنا يعشقوا التاكوس والبرغر ديالنا.
                </p>
              </div>
            </ScrollReveal>

            {/* Core Values / Features Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <ScrollReveal direction="up" delay={0.3}>
                <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800/80 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <i className="fa-solid fa-check text-base"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">لحوم بلدية طازجة</h4>
                    <p className="text-zinc-400 text-xs mt-1">كفتة، دجاج وكوردون بلو طري 100%.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.35}>
                <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800/80 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <i className="fa-solid fa-pepper-hot text-base"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">صلصات أصلية متوعة</h4>
                    <p className="text-zinc-400 text-xs mt-1">جزائرية، أندالوز، ساموراي ولاصوص فرومادج.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800/80 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <i className="fa-solid fa-motorcycle text-base"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">توصيل حار وسريع</h4>
                    <p className="text-zinc-400 text-xs mt-1">أجهزة حرارية كتحافظ على الوجبة سخونة.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.45}>
                <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800/80 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <i className="fa-solid fa-coins text-base"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">أسعار مناسبة للجميع</h4>
                    <p className="text-zinc-400 text-xs mt-1">شبعة حقيقية بأجود الأسعار بالدرهم.</p>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
