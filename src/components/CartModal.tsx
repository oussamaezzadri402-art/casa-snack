import React, { useState } from 'react';
import { CartItem } from '../types';
import { RESTAURANT_INFO, SAUCES_LIST } from '../data/mockData';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [selectedSauces, setSelectedSauces] = useState<string[]>(['fromagere', 'algerienne']);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );

  const toggleSauce = (sauceId: string) => {
    if (selectedSauces.includes(sauceId)) {
      setSelectedSauces(selectedSauces.filter((id) => id !== sauceId));
    } else {
      setSelectedSauces([...selectedSauces, sauceId]);
    }
  };

  const handleSendWhatsappOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    const chosenSaucesNames = SAUCES_LIST.filter((s) => selectedSauces.includes(s.id))
      .map((s) => s.name)
      .join('، ');

    let orderText = `*طلب جديد عبر موقع Casa Snack 🍔🔥*\n\n`;
    orderText += `*الوجبات المطلوبة:*\n`;

    cartItems.forEach((item, index) => {
      const itemTotal = item.menuItem.price * item.quantity;
      orderText += `${index + 1}. ${item.menuItem.name} (${item.quantity}x) = ${itemTotal} DH\n`;
    });

    orderText += `\n*الصلصات المختارة:* ${chosenSaucesNames || 'بدون صلصة'}\n`;
    if (notes) {
      orderText += `*ملاحظات:* ${notes}\n`;
    }

    orderText += `\n------------------------\n`;
    orderText += `*المجموع الإجمالي:* ${totalPrice} DH 💵\n`;
    orderText += `------------------------\n\n`;

    orderText += `*معلومات التوصيل:*\n`;
    orderText += `👤 *الاسم:* ${customerName || 'غير محدد'}\n`;
    orderText += `📞 *رقم الهاتف:* ${customerPhone || 'غير محدد'}\n`;
    orderText += `📍 *العنوان/الحي:* ${customerAddress || 'الاستلام من المحل'}\n`;

    const encodedText = encodeURIComponent(orderText);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      <div className="bg-zinc-900 border border-orange-500/30 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-black font-extrabold text-xl">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div>
              <h3 className="text-xl font-black text-white">سلة الطلبات - Casa Snack</h3>
              <p className="text-xs text-zinc-400">تأكيد طلبك وتجهيز التوصيل السريع</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 flex items-center justify-center transition-all"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 text-right">
          
          {/* Cart Empty State */}
          {cartItems.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <i className="fa-solid fa-basket-shopping text-6xl text-zinc-700 block"></i>
              <h4 className="text-white font-bold text-lg">السلة ديالك خاوية حالياً</h4>
              <p className="text-zinc-400 text-sm max-w-xs mx-auto">
                اختار الوجبات اللي كتعجبك من المنيو وضيفها للسلة باش تصيفط طلبك عبر الواتساب.
              </p>
              <button
                onClick={onClose}
                className="bg-orange-500 text-black font-extrabold px-6 py-2.5 rounded-xl text-sm"
              >
                شوف المنيو الآن
              </button>
            </div>
          ) : (
            <>
              {/* Selected Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    <i className="fa-solid fa-burger text-orange-400"></i>
                    <span>الوجبات المختارة ({cartItems.length})</span>
                  </h4>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-red-400 hover:text-red-300 font-bold"
                  >
                    محي السلة
                  </button>
                </div>

                <div className="space-y-2.5">
                  {cartItems.map((item) => (
                    <div
                      key={item.menuItem.id}
                      className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h5 className="text-white font-extrabold text-sm sm:text-base">
                            {item.menuItem.name}
                          </h5>
                          <span className="text-xs text-orange-400 font-bold">
                            {item.menuItem.price} DH
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                          className="text-zinc-400 hover:text-white w-6 h-6 flex items-center justify-center font-bold"
                        >
                          -
                        </button>
                        <span className="text-white font-black text-sm px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                          className="text-orange-400 hover:text-orange-300 w-6 h-6 flex items-center justify-center font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sauces Picker */}
              <div className="space-y-2.5 pt-3 border-t border-zinc-800">
                <label className="text-white font-bold text-sm block">
                  اختار الصلصات المرافقة (اختياري):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SAUCES_LIST.map((sauce) => {
                    const isChecked = selectedSauces.includes(sauce.id);
                    return (
                      <button
                        type="button"
                        key={sauce.id}
                        onClick={() => toggleSauce(sauce.id)}
                        className={`p-2.5 rounded-xl text-xs font-bold text-right transition-all border ${
                          isChecked
                            ? 'bg-orange-500/20 border-orange-500 text-orange-300'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        {sauce.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Customer Information Form */}
              <form onSubmit={handleSendWhatsappOrder} className="space-y-4 pt-3 border-t border-zinc-800">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-orange-400"></i>
                  <span>معلومات التوصيل</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-zinc-400 font-bold block mb-1">الاسم الكامل *</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="مثال: ياسين العمراني"
                      className="w-full bg-zinc-950 text-white text-sm rounded-xl px-3.5 py-2.5 border border-zinc-800 focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 font-bold block mb-1">رقم الهاتف *</label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="مثال: 0612345678"
                      className="w-full bg-zinc-950 text-white text-sm rounded-xl px-3.5 py-2.5 border border-zinc-800 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-400 font-bold block mb-1">العنوان / الحي فكازا *</label>
                  <input
                    type="text"
                    required
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="مثال: شارع المسيرة، زاوية زنقة 4، المعاريف"
                    className="w-full bg-zinc-950 text-white text-sm rounded-xl px-3.5 py-2.5 border border-zinc-800 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400 font-bold block mb-1">ملاحظات إضافية (اختياري)</label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="مثال: كثروا لاصوص فرومادج / كوكا باردة..."
                    className="w-full bg-zinc-950 text-white text-sm rounded-xl px-3.5 py-2.5 border border-zinc-800 focus:border-orange-500 focus:outline-none"
                  />
                </div>

                {/* Total and Submit Button */}
                <div className="pt-4 border-t border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between text-lg font-black text-white">
                    <span>المجموع الإجمالي:</span>
                    <span className="text-2xl text-orange-400">{totalPrice} DH</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base py-4 rounded-2xl transition-all shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-2xl"></i>
                    <span>تأكيد وإرسال الطلب عبر الواتساب</span>
                  </button>
                </div>

              </form>
            </>
          )}

        </div>

      </div>

    </div>
  );
};
