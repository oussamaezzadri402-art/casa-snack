import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/mockData';

interface ShareAndQrModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export const ShareAndQrModal: React.FC<ShareAndQrModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://casasnack.ma';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    currentUrl
  )}&color=f97316&bgcolor=18181b`;

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      onShowToast('تم نسخ رابط الصفحة بنجاح! 📋');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      onShowToast('تعذر نسخ الرابط تلقائياً');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: RESTAURANT_INFO.name,
          text: `${RESTAURANT_INFO.name} - ${RESTAURANT_INFO.tagline}`,
          url: currentUrl,
        });
        onShowToast('شكراً على مشاركة القائمة! 🧡');
      } catch {
        // User cancelled share
      }
    } else {
      handleCopyLink();
    }
  };

  const handleDownloadQr = () => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `Casa_Snack_QR.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('جاري تحميل رمز QR Code... 📲');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm dir-rtl animate-fadeIn">
      <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          aria-label="إغلاق"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-500 text-2xl">
            <i className="fa-solid fa-qrcode"></i>
          </div>
          <h3 className="text-xl font-bold text-white">مشاركة القائمة ورمز QR</h3>
          <p className="text-xs text-zinc-400 mt-1">
            امسح الكود ولا شارك الرابط مع صحابك وفاميلتك لطلب أشهى المأكولات!
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 flex flex-col items-center justify-center mb-6 shadow-inner">
          <img
            src={qrCodeUrl}
            alt="Casa Snack QR Code"
            className="w-48 h-48 rounded-lg border-2 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.2)]"
          />
          <p className="text-xs text-orange-400 mt-3 font-semibold flex items-center gap-1.5">
            <i className="fa-solid fa-mobile-screen"></i>
            {RESTAURANT_INFO.name} - المنيو الإلكتروني
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleDownloadQr}
            className="w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <i className="fa-solid fa-download text-orange-400"></i>
            تحميل رمز QR للصورة
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleNativeShare}
              className="py-3 px-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all active:scale-95"
            >
              <i className="fa-solid fa-share-nodes"></i>
              مشاركة الصفحة
            </button>

            <button
              onClick={handleCopyLink}
              className={`py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 border transition-all active:scale-95 ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700'
              }`}
            >
              <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
              {copied ? 'تم النسخ!' : 'نسخ الرابط'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
