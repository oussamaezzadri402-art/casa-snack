import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { ShareAndQrModal } from './components/ShareAndQrModal';
import { LoadingScreen } from './components/LoadingScreen';
import { CartItem, MenuItem } from './types';
import { RESTAURANT_INFO } from './data/mockData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShareQrOpen, setIsShareQrOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
    showToast(`تمت إضافة ${item.name} إلى السلة! 🛒`);
  };

  const handleQuickOrderWhatsapp = (item: MenuItem) => {
    const text = `السلام عليكم Casa Snack 🍔، بغيت نطلب وجبة: *${item.name}* (${item.price} DH).\nشنو هما أوقات التوصيل المتاحة حاليا؟`;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((ci) => ci.menuItem.id !== itemId));
    } else {
      setCartItems((prev) =>
        prev.map((ci) => (ci.menuItem.id === itemId ? { ...ci, quantity: newQty } : ci))
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-zinc-100 font-['Cairo',sans-serif] selection:bg-orange-500 selection:text-black relative">
      
      {/* 10. Initial Animated Loading Screen */}
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}

      {/* Toast Notification (Top Center / Non-blocking) */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-orange-500 text-black font-black text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-bounce dir-rtl border-2 border-white/40">
          <i className="fa-solid fa-circle-check text-lg"></i>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. Floating Bottom-Right WhatsApp Button (Resized & Non-overlapping) */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${encodeURIComponent(
            'السلام عليكم Casa Snack، بغيت نطلب 🍔'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group bg-emerald-600 hover:bg-emerald-500 text-white w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400/40 transition-all hover:scale-110 active:scale-95"
          aria-label="تواصل واتساب مع Casa Snack"
          title="تواصل مباشر عبر الواتساب"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      {/* Top Navbar */}
      <Navbar
        cartCount={totalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenShareQr={() => setIsShareQrOpen(true)}
        onOpenExportHtml={() => setIsExportModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenMenu={() => {}} />

      {/* About Section "شكون حنا" */}
      <AboutSection />

      {/* Menu Section "المنيو" */}
      <MenuSection
        onAddToCart={handleAddToCart}
        onQuickOrderWhatsapp={handleQuickOrderWhatsapp}
      />

      {/* Why Choose Us "علاش تختار Casa Snack؟" */}
      <WhyChooseUs />

      {/* Photo Gallery "معرض الصور" */}
      <GallerySection />

      {/* Customer Reviews "آراء الزبناء" */}
      <ReviewsSection />

      {/* Contact & Map "قسم التواصل" */}
      <ContactSection onOpenShareQr={() => setIsShareQrOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Cart Drawer / WhatsApp Order Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Share and QR Code Modal */}
      <ShareAndQrModal
        isOpen={isShareQrOpen}
        onClose={() => setIsShareQrOpen(false)}
        onShowToast={showToast}
      />

      {/* Single File HTML Code Export Modal */}
      <ExportHtmlModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

    </div>
  );
}
