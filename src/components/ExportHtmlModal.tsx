import React, { useState } from 'react';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlTemplate = `<!DOCTYPE html>
<html lang="ar" dir="rtl" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Casa Snack | كازا سناك - المذاق الرفيع والسرعة فالتوصيل</title>
  <!-- Google Fonts & Tailwind CSS CDN -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@700;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <style>
    body { font-family: 'Cairo', sans-serif; background-color: #0d0d0d; color: #f3f4f6; }
    .glow-orange { animation: pulseGlow 2.5s infinite; }
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 15px rgba(249, 115, 22, 0.4); }
      50% { box-shadow: 0 0 30px rgba(249, 115, 22, 0.8); }
    }
  </style>
</head>
<body class="bg-black text-white antialiased">

  <!-- NAVBAR -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-orange-500/20 py-3">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold text-xl">CS</div>
        <span class="text-2xl font-black text-white">Casa <span class="text-orange-500">Snack</span></span>
      </a>
      <a href="https://wa.me/212661123456" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-4 py-2 rounded-xl flex items-center gap-2">
        <i class="fa-brands fa-whatsapp"></i> طلب عبر واتساب
      </a>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="hero" class="pt-32 pb-20 text-center max-w-4xl mx-auto px-4">
    <span class="bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold px-4 py-1.5 rounded-full text-xs">
      المذاق الرفيع والسرعة فالتوصيل 🍔🔥
    </span>
    <h1 class="text-4xl sm:text-6xl font-black mt-6 leading-tight">
      أحسن وجبات سريعة فكازا <br><span class="text-orange-500">بمذاق خطير وتوصيل حار!</span>
    </h1>
    <p class="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
      مرحباً بك فـ Casa Snack! كنوفروا ليك أحسن تاكوس غراتيني، كازا تشيز برغر، بيتزا رويال وبانيني.. كولشي محضر يومياً بلحوم حلال 100% وبسر الصلصة الفريدة ديالنا.
    </p>
    <div class="mt-8 flex justify-center gap-4">
      <a href="https://wa.me/212661123456" target="_blank" class="glow-orange bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-2xl text-lg flex items-center gap-2">
        <i class="fa-brands fa-whatsapp text-2xl"></i> طلب عبر واتساب
      </a>
    </div>
  </section>

</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlTemplate], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'index.html');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-zinc-900 border border-orange-500/30 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl p-6 text-right space-y-4">
        
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <i className="fa-solid fa-code text-orange-500"></i>
            <span>ملف HTML جاهز للنشر المباشر على Netlify</span>
          </h3>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed">
          يمكنك استخدام هذا التطبيق التفاعلي بالكامل، أو تحميل كود HTML المدمج لرفعه فوراً على منصة Netlify أو أي استضافة أخرى!
        </p>

        <div className="relative bg-zinc-950 p-4 rounded-2xl border border-zinc-800 max-h-60 overflow-y-auto text-left font-mono text-xs text-orange-300 dir-ltr">
          <pre>{htmlTemplate}</pre>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={handleCopy}
            className="flex-1 bg-orange-500 hover:bg-orange-400 text-black font-extrabold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-copy"></i>
            <span>{copied ? 'تم النسخ بنجاح! ✓' : 'نسخ كود HTML'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-download"></i>
            <span>تحميل index.html</span>
          </button>
        </div>

      </div>
    </div>
  );
};
