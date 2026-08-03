import React, { useState } from 'react';
import { Category, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/mockData';
import { ScrollReveal } from './ScrollReveal';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onQuickOrderWhatsapp: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onQuickOrderWhatsapp }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: Category; label: string; icon: string }[] = [
    { id: 'all', label: 'الكل', icon: 'fa-border-all' },
    { id: 'tacos', label: 'تاكوس', icon: 'fa-border-top-left' },
    { id: 'burger', label: 'برغر', icon: 'fa-burger' },
    { id: 'pizza', label: 'بيتزا', icon: 'fa-pizza-slice' },
    { id: 'panini', label: 'بانيني', icon: 'fa-bread-slice' },
    { id: 'drinks', label: 'مشروبات', icon: 'fa-bottle-water' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.nameFr && item.nameFr.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-black relative dir-rtl">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-orange-400 text-xs sm:text-sm font-bold mb-3">
              <i className="fa-solid fa-utensils"></i>
              <span>قائمة الوجبات والأسعار</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              منيو <span className="text-orange-500">Casa Snack</span> المفضلة
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg">
              اختار وجبتك الشهية، حدد الصلصات اللي كتعجبك، وصيفط طلبك فثواني عبر واتساب!
            </p>
          </div>
        </ScrollReveal>

        {/* Search Bar & Category Filter Tabs */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="space-y-6 mb-12">
            
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن وجبتك (تاكوس، برغر، بيتزا...)..."
                className="w-full bg-zinc-900/90 text-white placeholder-zinc-500 text-sm rounded-2xl pr-12 pl-4 py-3.5 border border-zinc-800 focus:border-orange-500 focus:outline-none transition-all shadow-inner"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 text-base"></i>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-sm"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 scrollbar-none px-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                  }`}
                >
                  <i className={`fa-solid ${cat.icon}`}></i>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

          </div>
        </ScrollReveal>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/50 rounded-3xl border border-zinc-800 max-w-md mx-auto">
            <i className="fa-solid fa-burger text-5xl text-zinc-600 mb-4 block"></i>
            <h3 className="text-white font-bold text-lg">ما لقينا حتا وجبة بهذا الاسم</h3>
            <p className="text-zinc-500 text-sm mt-1">جرب تبحث بسمية ثانية أو اختار قسم آخر.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 bg-orange-500 text-black font-bold text-xs px-4 py-2 rounded-xl"
            >
              إعادة الضبط
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} direction="up" delay={(index % 3) * 0.1}>
                <div
                  className="bg-zinc-900/90 rounded-3xl overflow-hidden border border-zinc-800/80 hover:border-orange-500/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-950/20 h-full"
                >
                  <div>
                    
                    {/* Image & Badges */}
                    <div className="relative h-52 sm:h-56 overflow-hidden bg-zinc-950">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>

                      {/* Badges Stack */}
                      <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
                        {item.bestSeller && (
                          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 border border-amber-300">
                            <i className="fa-solid fa-star text-xs text-black"></i>
                            <span>الأكثر مبيعاً ⭐</span>
                          </span>
                        )}
                        {item.popular && !item.bestSeller && (
                          <span className="bg-orange-500 text-black text-[11px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <i className="fa-solid fa-fire text-xs"></i>
                            <span>الأكثر طلباً 🔥</span>
                          </span>
                        )}
                        {item.isNew && (
                          <span className="bg-emerald-400 text-black text-[11px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <i className="fa-solid fa-sparkles text-xs"></i>
                            <span>جديد 🌟</span>
                          </span>
                        )}
                      </div>

                      {/* Price Tag Overlay */}
                      <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md text-orange-400 font-black text-lg sm:text-xl px-3.5 py-1.5 rounded-xl border border-orange-500/40">
                        {item.price} <span className="text-xs text-white">DH</span>
                      </div>

                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3 text-right">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-orange-400 transition-colors">
                            {item.name}
                          </h3>
                          {item.nameFr && (
                            <span className="text-xs text-zinc-500 font-semibold block uppercase">
                              {item.nameFr}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {/* Ingredients list chips */}
                      {item.ingredients && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.ingredients.map((ing, i) => (
                            <span
                              key={i}
                              className="bg-zinc-800/80 text-zinc-400 text-[10px] font-medium px-2 py-0.5 rounded-md border border-zinc-700/50"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Card Actions */}
                  <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-2">
                    <button
                      onClick={() => onAddToCart(item)}
                      className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shadow-orange-950/40"
                    >
                      <i className="fa-solid fa-plus text-xs"></i>
                      <span>أضف للطلب</span>
                    </button>

                    <button
                      onClick={() => onQuickOrderWhatsapp(item)}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shadow-emerald-950/40"
                      title="طلب فوري عبر واتساب"
                    >
                      <i className="fa-brands fa-whatsapp text-sm"></i>
                      <span>طلب مباشر</span>
                    </button>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
