import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/mockData';
import { calculateWorkingHoursStatus } from '../utils/workingHours';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  onOpenShareQr?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenShareQr }) => {
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
    <section id="contact" className="py-20 sm:py-28 bg-black relative border-t border-zinc-900 dir-rtl">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-orange-400 text-xs sm:text-sm font-bold mb-3">
              <i className="fa-solid fa-phone"></i>
              <span>معلومات الاتصال والموقع</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              تواصل معانا فـ <span className="text-orange-500">Casa Snack</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg">
              نحن هنا لخدمتك! تواصل معانا عبر الهاتف، الواتساب أو زورنا فالمحل فكازابلانكا.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Cards Column */}
          <div className="lg:col-span-5 space-y-4 text-right">
            
            {/* Real-time Working Hours Card */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center text-2xl shrink-0">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-extrabold text-lg">أوقات العمل اليومية</h3>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${workingStatus.badgeColor}`}>
                        {workingStatus.statusText}
                      </span>
                    </div>
                    <p className="text-zinc-300 font-medium text-sm">
                      {RESTAURANT_INFO.workingHours}
                    </p>
                    <div className="mt-2 text-xs text-orange-400 font-bold bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-xl inline-block">
                      <i className="fa-solid fa-hourglass-half ml-1.5"></i>
                      {workingStatus.countdownText}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* WhatsApp Direct Card */}
            <ScrollReveal direction="right" delay={0.2}>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${encodeURIComponent('السلام عليكم Casa Snack، بغيت نطلب 🍔')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-500 p-6 rounded-3xl block transition-all hover:scale-[1.01] shadow-xl group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-3xl shrink-0 shadow-lg shadow-emerald-900/50 group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-lg sm:text-xl">تواصل مباشر عبر الواتساب</h3>
                    <p className="text-emerald-400 font-bold text-sm mt-0.5">انقر هنا للدردشة المباشرة والطلب</p>
                    <span className="text-xs text-zinc-400 block mt-1">متواجدون للرد السريع طيلة ساعات العمل</span>
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Phone Number Card */}
            <ScrollReveal direction="right" delay={0.25}>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="bg-zinc-900/90 border border-zinc-800 hover:border-orange-500/50 p-6 rounded-3xl block transition-all hover:scale-[1.01] shadow-xl group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center text-2xl shrink-0 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-lg">رقم الهاتف للطلب المباشر</h3>
                    <span className="text-orange-400 font-black text-xl dir-ltr block mt-0.5">
                      {RESTAURANT_INFO.phone}
                    </span>
                    <span className="text-xs text-zinc-400 block mt-1">انقر للاتصال مباشرة من هاتفك</span>
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* Address & Google Maps Button Card */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-3xl shadow-xl space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center text-2xl shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-lg">عنوان المحل</h3>
                    <p className="text-zinc-300 font-medium text-sm mt-0.5">
                      {RESTAURANT_INFO.address}
                    </p>
                    <span className="text-xs text-zinc-500 font-bold block mt-0.5">
                      {RESTAURANT_INFO.city}
                    </span>
                  </div>
                </div>

                {/* Direct Google Maps Action Button (#13) */}
                <a
                  href={RESTAURANT_INFO.googleMapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-500 hover:bg-orange-400 text-black font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-orange-500/20 transition-all active:scale-95"
                >
                  <i className="fa-solid fa-map-location-dot text-base"></i>
                  <span>فتح في Google Maps</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Share / QR Button Banner */}
            {onOpenShareQr && (
              <ScrollReveal direction="right" delay={0.35}>
                <button
                  onClick={onOpenShareQr}
                  className="w-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500/50 p-4 rounded-2xl text-orange-400 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <i className="fa-solid fa-qrcode text-lg"></i>
                  <span>عرض رمز QR Code ومشاركة الصفحة</span>
                </button>
              </ScrollReveal>
            )}

          </div>

          {/* Interactive Map Embed Column */}
          <div className="lg:col-span-7 h-full min-h-[460px] rounded-3xl overflow-hidden border border-zinc-800 relative bg-zinc-900 shadow-2xl flex flex-col justify-between">
            <ScrollReveal direction="left" delay={0.2} className="h-full w-full">
              <iframe
                title="Casa Snack Location Map Casablanca"
                src={RESTAURANT_INFO.googleMapsEmbedUrl}
                className="w-full h-[460px] filter contrast-125 saturate-150 grayscale-20 invert opacity-90"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Top Badge */}
              <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-orange-500/40 text-white font-bold text-xs flex items-center gap-2 shadow-xl">
                <i className="fa-solid fa-map-pin text-orange-500 text-base"></i>
                <span>موقع Casa Snack فالمعاريف، كازا</span>
              </div>

              {/* Floating Bottom Direct Link */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3 rounded-2xl border border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-300 font-medium">
                  {RESTAURANT_INFO.address}
                </span>
                <a
                  href={RESTAURANT_INFO.googleMapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-400 text-black text-xs font-bold px-3 py-1.5 rounded-xl transition-all"
                >
                  الاتجاهات 🧭
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
