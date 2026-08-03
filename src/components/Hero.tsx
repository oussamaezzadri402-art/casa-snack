import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/mockData';
import { calculateWorkingHoursStatus } from '../utils/workingHours';

interface HeroProps {
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu }) => {
  const [workingStatus, setWorkingStatus] = useState(() =>
    calculateWorkingHoursStatus(
      RESTAURANT_INFO.openingHour,
      RESTAURANT_INFO.openingMinute,
      RESTAURANT_INFO.closingHour,
      RESTAURANT_INFO.closingMinute
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkingStatus(
        calculateWorkingHoursStatus(
          RESTAURANT_INFO.openingHour,
          RESTAURANT_INFO.openingMinute,
          RESTAURANT_INFO.closingHour,
          RESTAURANT_INFO.closingMinute
        )
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 min-h-[90vh] flex items-center overflow-hidden bg-black dir-rtl">
      
      {/* Radial Orange Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Right Column (Arabic RTL) - Text & Call to Actions */}
          <div className="lg:col-span-7 text-right space-y-6 sm:space-y-7">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Badge 1: 15,000+ orders */}
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/40 px-4 py-2 rounded-full text-orange-400 text-xs sm:text-sm font-black shadow-lg shadow-orange-950/40">
                <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 animate-ping"></span>
                <span>{RESTAURANT_INFO.topBadge}</span>
              </div>

              {/* Badge 2: Real-time open status ticker */}
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border ${workingStatus.badgeColor}`}>
                <span className={`w-2 h-2 rounded-full ${workingStatus.isOpen ? 'bg-emerald-400' : 'bg-red-400'}`} />
                <span>{workingStatus.statusText}</span>
                <span className="opacity-40">|</span>
                <span className="text-zinc-300 font-normal">{workingStatus.countdownText}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight">
              أحسن وجبات سريعة فكازا <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 via-orange-500 to-amber-500">
                بمذاق خطير وتوصيل حار!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">
              مرحباً بك فـ <span className="text-orange-400 font-bold">Casa Snack</span>! كنوفروا ليك أحسن تاكوس غراتيني، كازا تشيز برغر، بيتزا رويال وبانيني.. كولشي محضر يومياً بلحوم حلال 100% وبسر الصلصة الفريدة ديالنا.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Button with Pulse Animation */}
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${encodeURIComponent('السلام عليكم Casa Snack، بغيت نطلب وجبة 🍔')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group bg-emerald-600 hover:bg-emerald-500 text-white text-center font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] animate-pulse"
              >
                <i className="fa-brands fa-whatsapp text-2xl group-hover:rotate-12 transition-transform"></i>
                <span>طلب عبر واتساب</span>
              </a>

              <a
                href="#menu"
                onClick={onOpenMenu}
                className="bg-zinc-900 hover:bg-zinc-800 text-white text-center font-bold text-base px-7 py-4 rounded-2xl border border-zinc-700 hover:border-orange-500 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <i className="fa-solid fa-utensils text-orange-400"></i>
                <span>شوف المنيو والأسعار</span>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-3 sm:gap-4 text-right">
              <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/60">
                <div className="text-orange-400 text-base sm:text-lg font-black mb-1 flex items-center gap-1.5">
                  <i className="fa-solid fa-bolt"></i>
                  <span>25-35 د</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium">توصيل سريع فكازا</div>
              </div>

              <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/60">
                <div className="text-orange-400 text-base sm:text-lg font-black mb-1 flex items-center gap-1.5">
                  <i className="fa-solid fa-drumstick-bite"></i>
                  <span>100% حلال</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium">لحوم طازجة يومياً</div>
              </div>

              <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/60">
                <div className="text-orange-400 text-base sm:text-lg font-black mb-1 flex items-center gap-1.5">
                  <i className="fa-solid fa-star"></i>
                  <span>4.9 / 5</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium">+15000 طلب ناجح</div>
              </div>
            </div>

          </div>

          {/* Left Column (Visual) - Hero Showcase with Dark Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 rounded-3xl blur-xl opacity-40 animate-pulse"></div>

              {/* Main Dish Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-orange-500/40 bg-zinc-900 shadow-2xl">
                <img
                  src={RESTAURANT_INFO.heroImage}
                  alt="Casa Snack Tacos and Burger"
                  className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Enhanced Dark Overlay (#3) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 opacity-90"></div>

                {/* Floating Content over Image */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="bg-orange-500 text-black font-black text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <i className="fa-solid fa-fire"></i>
                      الأكثر طلباً فكازا
                    </span>
                  </div>

                  {/* Bottom Floating Card */}
                  <div className="p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-orange-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold">
                        <i className="fa-solid fa-burger text-2xl"></i>
                      </div>
                      <div>
                        <div className="text-white font-extrabold text-sm sm:text-base">تاكوس سوبريم + كازا تشيز</div>
                        <div className="text-xs text-orange-400 font-medium">سناك Casa Snack المعاريف</div>
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] text-zinc-400 block">ابتداءً من</span>
                      <span className="text-xl font-black text-orange-400">28 DH</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Top Left Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-orange-500 text-black font-black px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 transform -rotate-3 text-sm">
                <i className="fa-solid fa-certificate"></i>
                <span>جودة Casa Snack 100%</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
