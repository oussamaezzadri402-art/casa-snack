import React from 'react';
import { RESTAURANT_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 pt-16 pb-12 relative overflow-hidden">
      
      {/* Glow accent */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-96 h-32 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900 text-right">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <img
                src={RESTAURANT_INFO.logo}
                alt="Casa Snack Logo"
                className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-black text-white font-['Tajawal']">
                Casa <span className="text-orange-500">Snack</span>
              </span>
            </a>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              أحسن وجبات سريعة فالمغرب! تاكوس، برغر، بيتزا وبانيني بلحوم طازجة حلال 100% ولاصوص فرومادج الفريدة. التوصيل السريع فجميع أحياء الدار البيضاء.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="واتساب"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-colors"
                aria-label="انستغرام"
              >
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="فيسبوك"
              >
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-pink-400 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="تيك توك"
              >
                <i className="fa-brands fa-tiktok text-lg"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Fast Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold text-base">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-orange-400 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">شكون حنا</a></li>
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">قائمة المنيو</a></li>
              <li><a href="#why-us" className="hover:text-orange-400 transition-colors">علاش تختارنا</a></li>
              <li><a href="#gallery" className="hover:text-orange-400 transition-colors">معرض الصور</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">تواصل معانا</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Order Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-extrabold text-base">الطلب السريع</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              طلبك كيوصلك سخون فـ 25 - 35 دقيقة فكازا! اتصل بنا مباشرة أو صيفط طلبك فالواتساب.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center gap-2 text-orange-400 font-extrabold text-base hover:underline"
              >
                <i className="fa-solid fa-headset"></i>
                <span>مصلحة الطلبات: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 Casa Snack - جميع الحقوق محفوظة.
          </div>

          <button
            onClick={scrollToTop}
            className="bg-zinc-900 hover:bg-orange-500 hover:text-black text-zinc-300 px-4 py-2 rounded-xl border border-zinc-800 transition-all flex items-center gap-2 cursor-pointer font-bold"
          >
            <span>إلى الأعلى</span>
            <i className="fa-solid fa-arrow-up text-xs"></i>
          </button>
        </div>

      </div>
    </footer>
  );
};
