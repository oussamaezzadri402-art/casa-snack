import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/mockData';
import { calculateWorkingHoursStatus } from '../utils/workingHours';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenShareQr: () => void;
  onOpenExportHtml?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenShareQr,
  onOpenExportHtml,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workingStatus, setWorkingStatus] = useState(() =>
    calculateWorkingHoursStatus(
      RESTAURANT_INFO.openingHour,
      RESTAURANT_INFO.openingMinute,
      RESTAURANT_INFO.closingHour,
      RESTAURANT_INFO.closingMinute
    )
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Update working status every minute
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'شكون حنا', href: '#about' },
    { name: 'المنيو', href: '#menu' },
    { name: 'علاش Casa Snack؟', href: '#why-us' },
    { name: 'معرض الصور', href: '#gallery' },
    { name: 'آراء الزبناء', href: '#reviews' },
    { name: 'التواصل والموقع', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-orange-500/20 py-2.5 shadow-2xl'
          : 'bg-gradient-to-b from-black/95 via-black/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <img
                src={RESTAURANT_INFO.logo}
                alt="Casa Snack"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-orange-500 object-cover shadow-lg group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    workingStatus.isOpen ? 'bg-emerald-400' : 'bg-red-400'
                  }`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${
                    workingStatus.isOpen ? 'bg-emerald-500' : 'bg-red-500'
                  }`}
                ></span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1 font-['Tajawal']">
                Casa <span className="text-orange-500">Snack</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${workingStatus.badgeColor}`}
                >
                  {workingStatus.statusText}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-orange-400 text-sm font-bold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Share / QR Modal Button */}
            <button
              onClick={onOpenShareQr}
              className="bg-zinc-800 hover:bg-zinc-700 text-orange-400 p-2 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 border border-zinc-700 transition-all active:scale-95 cursor-pointer"
              title="مشاركة / QR Code"
            >
              <i className="fa-solid fa-qrcode text-base"></i>
              <span className="hidden md:inline">QR Code</span>
            </button>

            {/* Direct WhatsApp Quick Order */}
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${encodeURIComponent(
                'السلام عليكم Casa Snack، بغيت نطلب وجبة 🍔'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl transition-all shadow-md shadow-emerald-950/40 hover:scale-105 active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>طلب سريع</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative bg-orange-600 hover:bg-orange-500 text-white p-2.5 sm:px-4 sm:py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-orange-950/50 hover:scale-105 active:scale-95 cursor-pointer"
              title="سلة الطلبات"
            >
              <i className="fa-solid fa-cart-shopping text-base"></i>
              <span className="hidden sm:inline">سلة الطلب</span>
              {cartCount > 0 && (
                <span className="bg-white text-orange-600 font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Code / Single File HTML Export Modal button */}
            {onOpenExportHtml && (
              <button
                onClick={onOpenExportHtml}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 p-2.5 rounded-xl text-xs sm:text-sm transition-all border border-zinc-700"
                title="تصدير كود HTML الصافي"
              >
                <i className="fa-solid fa-code text-orange-400"></i>
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-zinc-300 hover:text-white p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 transition-all"
              aria-label="القائمة"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-orange-500/20 px-4 pt-4 pb-6 mt-2 shadow-2xl transition-all dir-rtl">
          <div className="flex flex-col gap-2.5">
            {/* Status Info Ticker in Mobile Menu */}
            <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${workingStatus.isOpen ? 'bg-emerald-500' : 'bg-red-500'}`} />
                <span className="text-xs font-bold text-white">{workingStatus.statusText}</span>
              </div>
              <span className="text-[11px] text-orange-400 font-medium">{workingStatus.countdownText}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-zinc-200 hover:text-orange-400 font-bold text-base py-2.5 px-3 rounded-lg hover:bg-zinc-900/80 transition-all flex items-center justify-between border-r-2 border-transparent hover:border-orange-500"
              >
                <span>{link.name}</span>
                <i className="fa-solid fa-angle-left text-xs text-zinc-500"></i>
              </a>
            ))}

            <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShareQr();
                }}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-orange-400 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm border border-zinc-700"
              >
                <i className="fa-solid fa-qrcode"></i>
                <span>عرض QR Code ومشاركة القائمة</span>
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${encodeURIComponent('السلام عليكم Casa Snack، بغيت نطلب وجبة 🍔')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>طلب مباشر عبر واتساب</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm border border-zinc-700"
              >
                <i className="fa-solid fa-phone text-orange-400"></i>
                <span>إتصل بنا: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
