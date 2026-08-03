import React, { useState } from 'react';
import { REVIEWS_LIST } from '../data/mockData';
import { Review } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_LIST);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) return;

    const review: Review = {
      id: Date.now().toString(),
      name: newName,
      location: newLocation || 'الدار البيضاء',
      rating: newRating,
      comment: newComment,
      date: 'الآن',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    };

    setReviews([review, ...reviews]);
    setNewName('');
    setNewLocation('');
    setNewComment('');
    setShowAddForm(false);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-zinc-950 relative border-t border-zinc-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-orange-400 text-xs sm:text-sm font-bold mb-3">
              <i className="fa-solid fa-comments"></i>
              <span>شهادات ثقة الزبناء</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              شنو كيقواوا زبنائنا على <span className="text-orange-500">Casa Snack</span>؟
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg">
              آراء وتجارب حقيقية لزبنائنا الأوفياء فمختلف أحياء الدار البيضاء.
            </p>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, index) => (
            <ScrollReveal key={rev.id} direction="up" delay={0.15 * index}>
              <div
                className="bg-zinc-900/80 p-6 sm:p-8 rounded-3xl border border-zinc-800/80 text-right space-y-4 shadow-xl flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <i
                        key={idx}
                        className={`fa-solid fa-star text-sm ${
                          idx < rev.rating ? 'text-amber-400' : 'text-zinc-700'
                        }`}
                      ></i>
                    ))}
                  </div>

                  {/* Comment Text */}
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-medium">
                    "{rev.comment}"
                  </p>

                </div>

                {/* User Profile */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover border border-orange-500/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-white font-extrabold text-sm sm:text-base">{rev.name}</h4>
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500 text-[10px]"></i>
                      {rev.location}
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Add Review Action */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-12 text-center">
            {!showAddForm ? (
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-zinc-900 hover:bg-zinc-800 text-orange-400 font-bold text-sm px-6 py-3 rounded-2xl border border-orange-500/30 hover:border-orange-500 transition-all cursor-pointer"
              >
                <i className="fa-solid fa-pen-to-square ml-2"></i>
                شاركتي معانا رأيك فـ Casa Snack
              </button>
            ) : (
              <form onSubmit={handleAddReview} className="max-w-lg mx-auto bg-zinc-900 p-6 rounded-3xl border border-orange-500/30 text-right space-y-4">
                <h3 className="text-white font-bold text-lg">أضف رأيك التجريبي</h3>
                <div>
                  <label className="text-xs text-zinc-400 block mb-1 font-bold">الاسم الكامل</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-zinc-950 text-white text-sm rounded-xl px-3 py-2 border border-zinc-800"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1 font-bold">الحي / المنطقة فكازا</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="مثال: المعاريف"
                    className="w-full bg-zinc-950 text-white text-sm rounded-xl px-3 py-2 border border-zinc-800"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1 font-bold">التقييم بالنجوم</label>
                  <select
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="w-full bg-zinc-950 text-white text-sm rounded-xl px-3 py-2 border border-zinc-800"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
                    <option value={4}>⭐⭐⭐⭐ (4/5)</option>
                    <option value={3}>⭐⭐⭐ (3/5)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1 font-bold">تعليقك ورأيك فالماكلة والتوصيل</label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-zinc-950 text-white text-sm rounded-xl px-3 py-2 border border-zinc-800"
                  ></textarea>
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-500 text-black font-extrabold text-sm py-2.5 rounded-xl cursor-pointer"
                  >
                    نشر التعليق
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 bg-zinc-800 text-zinc-400 font-bold text-sm rounded-xl cursor-pointer"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
