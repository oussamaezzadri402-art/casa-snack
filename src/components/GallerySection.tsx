import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { ScrollReveal } from './ScrollReveal';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-black relative border-t border-zinc-900 dir-rtl">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-orange-400 text-xs sm:text-sm font-bold mb-3">
              <i className="fa-solid fa-camera"></i>
              <span>ألبومات الصور</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              معرض صور <span className="text-orange-500">Casa Snack</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg">
              نظرة على الجودة، المكونات، والشهيوات اللي كنحضروا ليكم كل يوم بحب!
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={0.1 * index}>
              <div
                onClick={() => setActiveImage(item.imageUrl)}
                className="group relative h-64 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer shadow-xl hover:border-orange-500/50 transition-all duration-500"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 right-4 left-4 p-3 text-right">
                  <span className="bg-orange-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase inline-block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-black text-base group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-orange-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden border border-orange-500/30">
            <img
              src={activeImage}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] object-contain"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center text-xl hover:bg-orange-500 hover:text-black transition-colors"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
