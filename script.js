/**
 * =========================================================================
 * CASA SNACK - CENTRAL RESTAURANT CONFIGURATION & INTERACTIVE ENGINE
 * =========================================================================
 * جميع بيانات وتفاصيل المطعم توجد في كائن restaurantConfig أدناه.
 * لتغيير بيانات المطعم، فقط قم بتعديل هذا الكائن دون المساس بباقي الكود.
 */

const restaurantConfig = {
  name: "Casa Snack",
  tagline: "المذاق الرفيع والسرعة فالتوصيل 🍔🔥",
  topBadge: "🔥 أكثر من 15000 طلب ناجح فكازا",
  phone: "0661123456",
  whatsappPhone: "212661123456",
  address: "شارع المسيرة الخضراء، المعاريف، الدار البيضاء",
  city: "الدار البيضاء (كازابلانكا)",
  
  // أوقات العمل وحساب الحالة التلقائية (نظام 24 ساعة)
  openingHour: 11,
  openingMinute: 30,
  closingHour: 2,
  closingMinute: 0,
  workingHoursText: "كل يوم: من 11:30 صباحاً حتال 02:00 دالليل",

  // التوصيل والطلبات
  deliveryTime: "25 - 35 دقيقة",
  minOrder: "30 DH",

  // روابط ومواقع الخرائط ومواقع التواصل
  googleMapsDirectUrl: "https://maps.google.com/?q=33.5855729,-7.6329124",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.758461876527!2d-7.63291242352843!3d33.58557294224729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29bc3533867%3A0x6b4f70823521b7d5!2sBoulevard%20de%20la%20Massira%20Al%20Khadra%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma",
  
  socialLinks: {
    whatsapp: "https://wa.me/212661123456",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },

  // مسارات الصور المحددة في البنية الجديدة
  logo: "/assets/logo/logo.jpg",
  heroImage: "/assets/images/hero.jpg",
  kitchenImage: "/assets/images/about_kitchen.jpg",

  // قائمة الوجبات
  menuItems: [
    {
      id: 'tacos-supreme',
      name: 'تاكوس سوبريم (2 لحوم)',
      nameFr: 'Tacos Supreme',
      category: 'tacos',
      price: 45,
      description: 'كوردون بلو + دجاج ماريني، فريت سخونة، ولاصوص فرومادج الخاصة د Casa Snack.',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
      popular: true,
      bestSeller: true,
      ingredients: ['كوردون بلو', 'دجاج ماريني', 'فريت', 'صلصة الجبن المذابة', 'صلصة جزائرية']
    },
    {
      id: 'tacos-kefta-xl',
      name: 'تاكوس كفتة XL',
      nameFr: 'Tacos Kefta XL',
      category: 'tacos',
      price: 40,
      description: 'كفتة بقرية طرية متبلة بالأعشاب المغربية، فريت مقرمشة، وجبن الشيدار المذاب.',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
      popular: true,
      ingredients: ['كفتة بقرية', 'جبن شيدار', 'فريت', 'صلصة ساموراي']
    },
    {
      id: 'tacos-mixte-giant',
      name: 'تاكوس عملاق 3 لحوم',
      nameFr: 'Tacos Giant 3 Viandes',
      category: 'tacos',
      price: 60,
      description: 'للعشاق د الشبعة: كفتة + دجاج + نوجيتس مع دبل صوص فرومادج وغراتيناج بالفرماج الأحمر.',
      image: 'https://images.unsplash.com/photo-1584031036380-3fb6f23e7275?auto=format&fit=crop&w=800&q=80',
      isNew: true,
      ingredients: ['كفتة', 'دجاج', 'نوجيتس', 'غراتيناج موزاريلا', 'فريت']
    },
    {
      id: 'burger-casa-cheese',
      name: 'كازا تشيز برغر',
      nameFr: 'Casa Cheese Burger',
      category: 'burger',
      price: 38,
      description: 'شريحة كفتة بلدي 150ج مع دبل فرماج شيدار، بصل معسل، طماطم طازجة، وصوص برغر خاصة.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      popular: true,
      ingredients: ['150g كفتة بقرية', 'شيدار مذاب', 'بصل كراميليزي', 'خس وطماطم']
    },
    {
      id: 'burger-crispy-chicken',
      name: 'برغر كريسبي شيكن',
      nameFr: 'Crispy Chicken Burger',
      category: 'burger',
      price: 35,
      description: 'صدر دجاج مقرمش 100%، صلصة مايو-ثومية، خس طازج وجبن موزاريلا.',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
      popular: false,
      ingredients: ['دجاج كريسبي', 'مايو بالثوم', 'جبن موزاريلا', 'خس']
    },
    {
      id: 'burger-double-smokey',
      name: 'برغر سموكي دبل بيض وستيك',
      nameFr: 'Smokey Double Steak & Egg',
      category: 'burger',
      price: 50,
      description: '2 شرايح كفتة + بيضة مقلية + بيكون داند فومي + صلصة باربيكيو مدخنة.',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
      isNew: true,
      ingredients: ['2x ستيك كفتة', 'بيض مقلي', 'داند فومي', 'صوص باربيكيو']
    },
    {
      id: 'pizza-royale',
      name: 'بيتزا رويال كازا',
      nameFr: 'Pizza Royale Casa',
      category: 'pizza',
      price: 55,
      description: 'صلصة طماطم إيطالية، موزاريلا غنية، كفتة، شامبينيون، زيتون أسود وفلفل ألوان.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      popular: true,
      ingredients: ['صلصة طماطم', 'موزاريلا', 'كفتة', 'فطر طازج', 'زيتون']
    },
    {
      id: 'pizza-4-fromages',
      name: 'بيتزا 4 أجباَن',
      nameFr: 'Pizza 4 Fromages',
      category: 'pizza',
      price: 50,
      description: 'عشاق الفرماج: موزاريلا، شيدار، روكفور وغودة هولندية مع لمسة أوريغانو إيطالي.',
      image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80',
      ingredients: ['موزاريلا', 'شيدار', 'روكفور', 'غودة', 'أوريغانو']
    },
    {
      id: 'pizza-poulet-curry',
      name: 'بيتزا دجاج بالكريمة والكاري',
      nameFr: 'Pizza Poulet Curry',
      category: 'pizza',
      price: 48,
      description: 'صلصة بيضاء بالكريمة الطرية، قطع دجاج متبلة بالكاري، وفلفل حلو.',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
      isNew: true,
      ingredients: ['كريمة طرية', 'دجاج كاري', 'موزاريلا', 'فلفل أصفر']
    },
    {
      id: 'panini-dinde-fromage',
      name: 'بانيني داند فومي وفرماج',
      nameFr: 'Panini Dinde Fumé & Cheese',
      category: 'panini',
      price: 28,
      description: 'خبز بانيني سخون ومقرمش، ديك رومي مدخن، جبن إيدام مذاب وصلصة أندالوز.',
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
      popular: true,
      ingredients: ['ديك رومي مدخن', 'جبن إيدام', 'صلصة أندالوز']
    },
    {
      id: 'panini-kefta-special',
      name: 'بانيني كفتة سبسيال',
      nameFr: 'Panini Kefta Spécial',
      category: 'panini',
      price: 32,
      description: 'كفتة مشوية على الفحم، بصل طازج، فرماج أحمر وصلصة أندالوز.',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
      ingredients: ['كفتة مشوية', 'فرماج أحمر', 'صلصة أندالوز']
    },
    {
      id: 'drink-selecto',
      name: 'سيلكتو بارد 33cl (Selecto)',
      nameFr: 'Selecto Glacé',
      category: 'drinks',
      price: 10,
      description: 'المشروب الأسطوري البارد والمقرمش.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
      popular: true
    },
    {
      id: 'drink-hawai',
      name: 'هاواي تروبيكال (Hawai)',
      nameFr: 'Hawai Tropical',
      category: 'drinks',
      price: 10,
      description: 'مذاق الفواكه الاستوائية الانتعاش التام.',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      popular: true
    },
    {
      id: 'drink-poms',
      name: 'بومس تفاح (Poms)',
      nameFr: 'Poms Pomme',
      category: 'drinks',
      price: 10,
      description: 'مشروب غازي بنكهة التفاح الأخضر المنعش.',
      image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'drink-water',
      name: 'ماء معدني سيدي علي (50cl)',
      nameFr: 'Eau Minérale Sidi Ali',
      category: 'drinks',
      price: 6,
      description: 'ماء معدني نقاء طبيعي.',
      image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=800&q=80'
    }
  ],

  // الصلصات المتاحة
  sauces: [
    { id: 'algerienne', name: 'صلصة جزائرية (Algérienne) 🌶️' },
    { id: 'andalouse', name: 'صلصة أندالوز (Andalouse) 🧅' },
    { id: 'samourai', name: 'صلصة ساموراي حارة (Samouraï) 🔥' },
    { id: 'fromagere', name: 'صلصة الجبن الخاصة d Casa Snack 🧀' },
    { id: 'mayo', name: 'مايونيز بالثوم (Mayo Ail) 🧄' },
    { id: 'ketchup', name: 'كاتشب طماطم 🍅' }
  ],

  // مميزات المطعم
  features: [
    {
      id: 'f1',
      title: 'لحوم حلال 100% وطازجة',
      description: 'كنختارو الجودة العالية يومياً من عند أحسن الجزارين فكازا بدون مواد حافظة.',
      iconName: 'fa-drumstick-bite'
    },
    {
      id: 'f2',
      title: 'أسرع توصيل فكازا 🚀',
      description: 'طلبك كتوصل بيه سخون ومقرمش فقل من 30 دقيقة فين ما كنتي فالمدينة.',
      iconName: 'fa-motorcycle'
    },
    {
      id: 'f3',
      title: 'سر لاصوص فرومادج الخاصة 🧀',
      description: 'وصفة سرية للصلصة البيضاء بالفرماج المذاب كتعطي للتاكوس والبرغر مذاق خيالي.',
      iconName: 'fa-cheese'
    },
    {
      id: 'f4',
      title: 'نظافة ومعايير صحية عالية ✨',
      description: 'مطابخ حديثة ومراقبين دايماً للنظافة والتعقيم لسلامتك وسلامة عائلتك.',
      iconName: 'fa-shield-halved'
    }
  ],

  // آراء الزبناء
  reviews: [
    {
      id: 'r1',
      name: 'ياسين بنجلون',
      location: 'المعاريف، الدار البيضاء',
      rating: 5,
      comment: 'صراحة أحسن تاكوس كليتو فكازا! لاصوص فرومادج ديالهم خطيرة بزااف والخدمة نضيم والتوصيل وصل ف 20 دقيقة!',
      date: 'منذ يومين',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 'r2',
      name: 'سارة العلمي',
      location: 'عين الذئاب، الدار البيضاء',
      rating: 5,
      comment: 'البيتزا رويال عند Casa Snack طوب، العجينة رقيقة والفرماج كيتجبد! وطلبت عبر واتساب وكان التعامل راقي وسريع.',
      date: 'منذ أسبوع',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 'r3',
      name: 'حمزة التازي',
      location: 'بورگون، الدار البيضاء',
      rating: 5,
      comment: 'كازا تشيز برغر شي حاجة ديال الهبال! كفتة بلدية بنينة بزاف ومجمرة. ديما كنعاود نطلب من Casa Snack.',
      date: 'منذ 3 أيام',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    }
  ],

  // معرض الصور
  gallery: [
    {
      id: 'g1',
      title: 'تاكوس سوبريم غراتيني بالفرماج',
      category: 'تاكوس',
      imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g2',
      title: 'كازا تشيز برغر دبل ستيك',
      category: 'برغر',
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g3',
      title: 'بيتزا إيطالية رويال سخونة',
      category: 'بيتزا',
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g4',
      title: 'تحضير الطلبات فالفرن العالي',
      category: 'المطبخ',
      imageUrl: "/assets/images/about_kitchen.jpg"
    },
    {
      id: 'g5',
      title: 'وجبات كريسبي شيكن مع الفريت',
      category: 'وجبات',
      imageUrl: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g6',
      title: 'مشروبات باردة منعشة',
      category: 'مشروبات',
      imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

// =========================================================================
// APPLICATION ENGINE (LOCAL STATE & RENDERING)
// =========================================================================

let cart = [];
let selectedSauces = ['fromagere', 'algerienne'];
let activeCategory = 'all';
let searchQuery = '';

// تهيئة وإخفاء شاشة التحميل
document.addEventListener("DOMContentLoaded", () => {
  // 1. شحن وتحديث عناصر التصميم الأساسية من الكائن
  hydrateStaticContent();

  // 2. تفعيل شاشة التحميل لثانية واحدة لمظهر احترافي
  setTimeout(() => {
    const loader = document.getElementById("loading-screen");
    if (loader) {
      loader.classList.add("opacity-0", "pointer-events-none");
      setTimeout(() => loader.remove(), 600);
    }
  }, 1000);

  // 3. تهيئة الأقسام التفاعلية
  renderCategories();
  renderMenuItems();
  renderFeatures();
  renderGallery();
  renderReviews();
  setupEventListeners();

  // 4. تشغيل عداد الساعات التلقائي
  updateWorkingHoursStatus();
  setInterval(updateWorkingHoursStatus, 60000);

  // 5. تفعيل مراقب التمرير لحركات الظهور Smooth Scroll-Reveal
  setupScrollReveal();

  // 6. تحميل السلة من التخزين المحلي إن وجدت
  loadCartFromStorage();
});

// ملء النصوص والروابط الثابتة من الكائن
function hydrateStaticContent() {
  // العناوين والشعارات
  document.querySelectorAll(".r-name").forEach(el => el.innerText = restaurantConfig.name);
  document.querySelectorAll(".r-tagline").forEach(el => el.innerText = restaurantConfig.tagline);
  document.getElementById("top-badge-text").innerText = restaurantConfig.topBadge;
  
  // صور الخلفيات
  const heroSec = document.getElementById("hero");
  if (heroSec) {
    heroSec.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5)), url('${restaurantConfig.heroImage}')`;
  }
  const kitchenImg = document.getElementById("about-kitchen-img");
  if (kitchenImg) {
    kitchenImg.src = restaurantConfig.kitchenImage;
    kitchenImg.alt = `${restaurantConfig.name} Kitchen`;
  }

  // معلومات التواصل والموقع
  document.getElementById("working-hours-text").innerText = restaurantConfig.workingHoursText;
  document.getElementById("restaurant-address").innerText = restaurantConfig.address;
  document.getElementById("restaurant-city").innerText = restaurantConfig.city;
  document.getElementById("restaurant-phone-link").href = `tel:${restaurantConfig.phone}`;
  document.getElementById("restaurant-phone-text").innerText = restaurantConfig.phone;
  document.getElementById("maps-iframe").src = restaurantConfig.googleMapsEmbedUrl;
  
  document.querySelectorAll(".maps-direct-link").forEach(el => el.href = restaurantConfig.googleMapsDirectUrl);

  // روابط التواصل الاجتماعي في الفوتر
  document.getElementById("social-instagram").href = restaurantConfig.socialLinks.instagram;
  document.getElementById("social-facebook").href = restaurantConfig.socialLinks.facebook;
  document.getElementById("social-tiktok").href = restaurantConfig.socialLinks.tiktok;

  // أزرار الواتساب السريعة
  const defaultText = encodeURIComponent(`السلام عليكم ${restaurantConfig.name}، بغيت نطلب وجبة 🍔`);
  document.querySelectorAll(".whatsapp-order-link").forEach(el => {
    el.href = `https://wa.me/${restaurantConfig.whatsappPhone}?text=${defaultText}`;
  });
}

// =========================================================================
// RENDERERS (توليد العناصر الحركية)
// =========================================================================

// 1. توليد أقسام المنيو
function renderCategories() {
  const categories = [
    { id: 'all', label: 'الكل', icon: 'fa-border-all' },
    { id: 'tacos', label: 'تاكوس', icon: 'fa-border-top-left' },
    { id: 'burger', label: 'برغر', icon: 'fa-burger' },
    { id: 'pizza', label: 'بيتزا', icon: 'fa-pizza-slice' },
    { id: 'panini', label: 'بانيني', icon: 'fa-bread-slice' },
    { id: 'drinks', label: 'مشروبات', icon: 'fa-bottle-water' }
  ];

  const catContainer = document.getElementById("categories-container");
  if (!catContainer) return;

  catContainer.innerHTML = categories.map(cat => `
    <button
      data-category="${cat.id}"
      class="cat-tab px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
        activeCategory === cat.id
          ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/30 scale-105'
          : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800'
      }"
    >
      <i class="fa-solid ${cat.icon}"></i>
      <span>${cat.label}</span>
    </button>
  `).join('');

  // ربط أحداث النقر للتبويب
  catContainer.querySelectorAll(".cat-tab").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const selected = e.currentTarget.getAttribute("data-category");
      activeCategory = selected;
      
      // تحديث مظهر الأزرار النشطة
      catContainer.querySelectorAll(".cat-tab").forEach(b => {
        b.className = "cat-tab px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800";
      });
      e.currentTarget.className = "cat-tab px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer bg-orange-500 text-black shadow-lg shadow-orange-500/30 scale-105";

      renderMenuItems();
    });
  });
}

// 2. توليد وجبات المنيو مع الفلترة والبحث
function renderMenuItems() {
  const container = document.getElementById("menu-items-grid");
  if (!container) return;

  const filtered = restaurantConfig.menuItems.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.nameFr && item.nameFr.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-zinc-900/50 rounded-3xl border border-zinc-800 max-w-md mx-auto">
        <i class="fa-solid fa-burger text-5xl text-zinc-600 mb-4 block"></i>
        <h3 class="text-white font-bold text-lg">ما لقينا حتا وجبة بهذا الاسم</h3>
        <p class="text-zinc-500 text-sm mt-1">جرب تبحث بسمية ثانية أو اختار قسم آخر.</p>
        <button id="reset-search-btn" class="mt-4 bg-orange-500 text-black font-bold text-xs px-4 py-2 rounded-xl cursor-pointer">
          إعادة الضبط
        </button>
      </div>
    `;
    
    document.getElementById("reset-search-btn")?.addEventListener("click", () => {
      searchQuery = '';
      const searchInput = document.getElementById("search-input");
      if (searchInput) searchInput.value = '';
      activeCategory = 'all';
      renderCategories();
      renderMenuItems();
    });
    return;
  }

  container.innerHTML = filtered.map((item, idx) => {
    // شارات التميز
    let badgeHtml = '';
    if (item.bestSeller) {
      badgeHtml = `
        <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 border border-amber-300">
          <i class="fa-solid fa-star text-xs text-black"></i>
          <span>الأكثر مبيعاً ⭐</span>
        </span>
      `;
    } else if (item.popular) {
      badgeHtml = `
        <span class="bg-orange-500 text-black text-[11px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <i class="fa-solid fa-fire text-xs"></i>
          <span>الأكثر طلباً 🔥</span>
        </span>
      `;
    } else if (item.isNew) {
      badgeHtml = `
        <span class="bg-emerald-400 text-black text-[11px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <i class="fa-solid fa-sparkles text-xs"></i>
          <span>جديد 🌟</span>
        </span>
      `;
    }

    // رقائق المكونات
    const ingredientsHtml = item.ingredients ? `
      <div class="flex flex-wrap gap-1.5 pt-1">
        ${item.ingredients.map(ing => `
          <span class="bg-zinc-800/80 text-zinc-400 text-[10px] font-medium px-2 py-0.5 rounded-md border border-zinc-700/50">
            ${ing}
          </span>
        `).join('')}
      </div>
    ` : '';

    return `
      <div class="scroll-reveal reveal-up bg-zinc-900/90 rounded-3xl overflow-hidden border border-zinc-800/80 hover:border-orange-500/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-950/20 h-full" style="transition-delay: ${(idx % 3) * 100}ms">
        <div>
          <!-- صورة الوجبة والأسعار -->
          <div class="relative h-52 sm:h-56 overflow-hidden bg-zinc-950">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer">
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>
            
            <div class="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
              ${badgeHtml}
            </div>

            <div class="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md text-orange-400 font-black text-lg sm:text-xl px-3.5 py-1.5 rounded-xl border border-orange-500/40">
              ${item.price} <span class="text-xs text-white">DH</span>
            </div>
          </div>

          <!-- تفاصيل الوجبة -->
          <div class="p-5 space-y-3 text-right">
            <div class="flex items-start justify-between gap-2">
              <div>
                <h3 class="text-lg sm:text-xl font-black text-white group-hover:text-orange-400 transition-colors">${item.name}</h3>
                ${item.nameFr ? `<span class="text-xs text-zinc-500 font-semibold block uppercase">${item.nameFr}</span>` : ''}
              </div>
            </div>
            <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">${item.description}</p>
            ${ingredientsHtml}
          </div>
        </div>

        <!-- أزرار التفاعل -->
        <div class="p-5 pt-0 grid grid-cols-2 gap-2 mt-2">
          <button data-id="${item.id}" class="add-to-cart-btn w-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shadow-orange-950/40">
            <i class="fa-solid fa-plus text-xs"></i>
            <span>أضف للطلب</span>
          </button>
          <button data-id="${item.id}" class="quick-order-btn w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md shadow-emerald-950/40" title="طلب فوري عبر واتساب">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>طلب مباشر</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // تفعيل حركات الظهور للعناصر الجديدة
  setupScrollReveal();

  // ربط الأزرار المضافة
  container.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      const item = restaurantConfig.menuItems.find(m => m.id === id);
      if (item) addToCart(item);
    });
  });

  container.querySelectorAll(".quick-order-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      const item = restaurantConfig.menuItems.find(m => m.id === id);
      if (item) handleQuickOrderWhatsapp(item);
    });
  });
}

// 3. توليد المميزات (لماذا تختارنا)
function renderFeatures() {
  const container = document.getElementById("features-grid");
  if (!container) return;

  container.innerHTML = restaurantConfig.features.map((feat, idx) => `
    <div class="scroll-reveal reveal-up bg-zinc-900/80 p-8 rounded-3xl border border-zinc-800/80 hover:border-orange-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl text-right flex flex-col justify-between h-full" style="transition-delay: ${idx * 100}ms">
      <div>
        <div class="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-2xl mb-6 group-hover:bg-orange-500 group-hover:text-black transition-colors">
          <i class="fa-solid ${feat.iconName}"></i>
        </div>
        <h3 class="text-xl font-extrabold text-white mb-3 group-hover:text-orange-400 transition-colors">${feat.title}</h3>
        <p class="text-zinc-400 text-sm leading-relaxed">${feat.description}</p>
      </div>
      <div class="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-orange-400 font-bold">
        <span>جودة مضمونة</span>
        <i class="fa-solid fa-arrow-left text-[10px]"></i>
      </div>
    </div>
  `).join('');
}

// 4. توليد معرض الصور
function renderGallery() {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  container.innerHTML = restaurantConfig.gallery.map((item, idx) => `
    <div data-url="${item.imageUrl}" class="gallery-item-card scroll-reveal reveal-up group relative h-64 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer shadow-xl hover:border-orange-500/50 transition-all duration-500" style="transition-delay: ${idx * 100}ms">
      <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerpolicy="no-referrer">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      <div class="absolute bottom-4 right-4 left-4 p-3 text-right">
        <span class="bg-orange-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase inline-block mb-1">${item.category}</span>
        <h3 class="text-white font-black text-base group-hover:text-orange-400 transition-colors">${item.title}</h3>
      </div>

      <div class="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-orange-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </div>
    </div>
  `).join('');

  // ربط عارض الصور المكبر Lightbox
  container.querySelectorAll(".gallery-item-card").forEach(card => {
    card.addEventListener("click", () => {
      const url = card.getAttribute("data-url");
      openLightbox(url);
    });
  });
}

// 5. توليد آراء العملاء
function renderReviews() {
  const container = document.getElementById("reviews-grid");
  if (!container) return;

  container.innerHTML = restaurantConfig.reviews.map((rev, idx) => {
    const starsHtml = Array.from({ length: 5 }, (_, i) => `
      <i class="fa-solid fa-star text-sm ${i < rev.rating ? 'text-amber-400' : 'text-zinc-700'}"></i>
    `).join('');

    return `
      <div class="scroll-reveal reveal-up bg-zinc-900/80 p-6 sm:p-8 rounded-3xl border border-zinc-800/80 text-right space-y-4 shadow-xl flex flex-col justify-between h-full" style="transition-delay: ${idx * 150}ms">
        <div class="space-y-4">
          <div class="flex items-center gap-1 text-amber-400">
            ${starsHtml}
          </div>
          <p class="text-zinc-200 text-sm sm:text-base leading-relaxed font-medium">"${rev.comment}"</p>
        </div>

        <div class="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
          <img src="${rev.avatar}" alt="${rev.name}" class="w-12 h-12 rounded-full object-cover border border-orange-500/30" referrerpolicy="no-referrer">
          <div>
            <h4 class="text-white font-extrabold text-sm sm:text-base">${rev.name}</h4>
            <span class="text-xs text-zinc-400 flex items-center gap-1">
              <i class="fa-solid fa-location-dot text-orange-500 text-[10px]"></i>
              ${rev.location}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// =========================================================================
// INTERACTIVE LOGIC & STATE HANDLING (المحركات والتحكم)
// =========================================================================

// إضافة وجبة للسلة
function addToCart(item) {
  const existing = cart.find(ci => ci.menuItem.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ menuItem: item, quantity: 1 });
  }
  
  saveCartToStorage();
  updateCartUI();
  showToast(`تمت إضافة ${item.name} إلى السلة! 🛒`);
}

// طلب فوري ومباشر على واتساب لوجبة معينة
function handleQuickOrderWhatsapp(item) {
  const text = `السلام عليكم ${restaurantConfig.name} 🍔، بغيت نطلب وجبة: *${item.name}* (${item.price} DH).\nشنو هما أوقات التوصيل المتاحة حاليا؟`;
  const url = `https://wa.me/${restaurantConfig.whatsappPhone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// تحديث السلة وحساب القيم الإجمالية
function updateCartUI() {
  const countBadge = document.getElementById("cart-count-badge");
  const countMobileBadge = document.getElementById("cart-count-mobile-badge");
  const drawerItems = document.getElementById("cart-drawer-items");
  const drawerFooter = document.getElementById("cart-drawer-footer");
  const totalPriceElement = document.getElementById("cart-total-price");

  const totalQty = cart.reduce((acc, ci) => acc + ci.quantity, 0);
  const totalSum = cart.reduce((acc, ci) => acc + ci.menuItem.price * ci.quantity, 0);

  // تحديث شارات العدد
  if (countBadge) {
    countBadge.innerText = totalQty;
    countBadge.classList.toggle("hidden", totalQty === 0);
  }
  if (countMobileBadge) {
    countMobileBadge.innerText = totalQty;
    countMobileBadge.classList.toggle("hidden", totalQty === 0);
  }

  // في حال خلو السلة
  if (cart.length === 0) {
    if (drawerItems) {
      drawerItems.innerHTML = `
        <div class="text-center py-12 space-y-4">
          <i class="fa-solid fa-basket-shopping text-6xl text-zinc-700 block"></i>
          <h4 class="text-white font-bold text-lg">السلة ديالك خاوية حالياً</h4>
          <p class="text-zinc-400 text-sm max-w-xs mx-auto">اختار الوجبات اللي كتعجبك من المنيو وضيفها للسلة باش تصيفط طلبك عبر الواتساب.</p>
          <button id="close-drawer-inner-btn" class="bg-orange-500 text-black font-extrabold px-6 py-2.5 rounded-xl text-sm cursor-pointer">
            شوف المنيو الآن
          </button>
        </div>
      `;
      document.getElementById("close-drawer-inner-btn")?.addEventListener("click", toggleCartDrawer);
    }
    if (drawerFooter) drawerFooter.classList.add("hidden");
    return;
  }

  // عرض العناصر المضافة في السلة
  if (drawerFooter) drawerFooter.classList.remove("hidden");
  if (totalPriceElement) totalPriceElement.innerText = `${totalSum} DH`;

  if (drawerItems) {
    drawerItems.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-white font-bold text-sm flex items-center gap-2">
            <i class="fa-solid fa-burger text-orange-400"></i>
            <span>الوجبات المختارة (${cart.length})</span>
          </h4>
          <button id="clear-cart-btn" class="text-xs text-red-400 hover:text-red-300 font-bold cursor-pointer">محي السلة</button>
        </div>

        <div class="space-y-2.5">
          ${cart.map(ci => `
            <div class="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800 flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <img src="${ci.menuItem.image}" alt="${ci.menuItem.name}" class="w-14 h-14 rounded-xl object-cover shrink-0">
                <div>
                  <h5 class="text-white font-extrabold text-sm sm:text-base">${ci.menuItem.name}</h5>
                  <span class="text-xs text-orange-400 font-bold">${ci.menuItem.price} DH</span>
                </div>
              </div>

              <!-- أزرار زيادة ونقصان الوجبات -->
              <div class="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800">
                <button data-id="${ci.menuItem.id}" class="qty-minus text-zinc-400 hover:text-white w-6 h-6 flex items-center justify-center font-bold cursor-pointer">-</button>
                <span class="text-white font-black text-sm px-1">${ci.quantity}</span>
                <button data-id="${ci.menuItem.id}" class="qty-plus text-orange-400 hover:text-orange-300 w-6 h-6 flex items-center justify-center font-bold cursor-pointer">+</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- اختيار الصلصات المرافقة -->
      <div class="space-y-2.5 pt-4 border-t border-zinc-800">
        <label class="text-white font-bold text-sm block">اختار الصلصات المرافقة (اختياري):</label>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          ${restaurantConfig.sauces.map(sauce => {
            const isChecked = selectedSauces.includes(sauce.id);
            return `
              <button
                type="button"
                data-sauce-id="${sauce.id}"
                class="sauce-toggle-btn p-2.5 rounded-xl text-xs font-bold text-right transition-all border ${
                  isChecked
                    ? 'bg-orange-500/20 border-orange-500 text-orange-300'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }"
              >
                ${sauce.name}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // ربط مغير الصلصات والتحكم في كمية الطلب
    drawerItems.querySelectorAll(".sauce-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const sId = btn.getAttribute("data-sauce-id");
        if (selectedSauces.includes(sId)) {
          selectedSauces = selectedSauces.filter(id => id !== sId);
        } else {
          selectedSauces.push(sId);
        }
        updateCartUI();
      });
    });

    drawerItems.querySelectorAll(".qty-minus").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const match = cart.find(ci => ci.menuItem.id === id);
        if (match) {
          match.quantity -= 1;
          if (match.quantity <= 0) {
            cart = cart.filter(ci => ci.menuItem.id !== id);
          }
          saveCartToStorage();
          updateCartUI();
        }
      });
    });

    drawerItems.querySelectorAll(".qty-plus").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const match = cart.find(ci => ci.menuItem.id === id);
        if (match) {
          match.quantity += 1;
          saveCartToStorage();
          updateCartUI();
        }
      });
    });

    document.getElementById("clear-cart-btn")?.addEventListener("click", () => {
      cart = [];
      saveCartToStorage();
      updateCartUI();
      showToast("تم إفراغ سلة الطلبات 🗑️");
    });
  }
}

// تخزين السلة محلياً لعدم ضياع البيانات
function saveCartToStorage() {
  localStorage.setItem("casa_snack_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("casa_snack_cart");
    if (saved) {
      cart = JSON.parse(saved);
      updateCartUI();
    }
  } catch (err) {
    console.error("Error loading cart:", err);
  }
}

// =========================================================================
// MODALS AND EVENT HANDLERS (النوافذ المنبثقة والأحداث)
// =========================================================================

function setupEventListeners() {
  // تفعيل المنيو المتنقل للموبايل
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // إغلاق المنيو عند النقر على أي رابط داخله
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // البحث في المنيو
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderMenuItems();
    });
  }

  // تفعيل تبديل السلة
  document.querySelectorAll(".toggle-cart-btn").forEach(btn => {
    btn.addEventListener("click", toggleCartDrawer);
  });
  document.getElementById("close-cart-btn")?.addEventListener("click", toggleCartDrawer);

  // تفعيل تبديل نافذة المشاركة والـ QR
  document.querySelectorAll(".toggle-share-btn").forEach(btn => {
    btn.addEventListener("click", toggleShareModal);
  });
  document.getElementById("close-share-btn")?.addEventListener("click", toggleShareModal);
  document.getElementById("copy-link-btn")?.addEventListener("click", copyShareLink);

  // تفعيل كود التصدير HTML
  document.querySelectorAll(".toggle-export-btn").forEach(btn => {
    btn.addEventListener("click", toggleExportModal);
  });
  document.getElementById("close-export-btn")?.addEventListener("click", toggleExportModal);
  document.getElementById("copy-html-btn")?.addEventListener("click", copyExportHtml);
  document.getElementById("download-html-btn")?.addEventListener("click", downloadExportHtml);

  // إرسال الطلب النهائي عبر الواتساب
  const cartForm = document.getElementById("cart-delivery-form");
  if (cartForm) {
    cartForm.addEventListener("submit", handleSendOrder);
  }

  // إضافة تقييم جديد للزبناء (محلي مؤقت)
  const showReviewFormBtn = document.getElementById("show-review-form-btn");
  const reviewFormContainer = document.getElementById("review-form-container");
  const addReviewForm = document.getElementById("add-review-form");
  const cancelReviewBtn = document.getElementById("cancel-review-btn");

  if (showReviewFormBtn && reviewFormContainer) {
    showReviewFormBtn.addEventListener("click", () => {
      reviewFormContainer.classList.remove("hidden");
      showReviewFormBtn.classList.add("hidden");
    });
  }

  if (cancelReviewBtn && reviewFormContainer && showReviewFormBtn) {
    cancelReviewBtn.addEventListener("click", () => {
      reviewFormContainer.classList.add("hidden");
      showReviewFormBtn.classList.remove("hidden");
    });
  }

  if (addReviewForm) {
    addReviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("new-review-name").value;
      const location = document.getElementById("new-review-location").value || "الدار البيضاء";
      const rating = parseInt(document.getElementById("new-review-rating").value, 10);
      const comment = document.getElementById("new-review-comment").value;

      if (!name || !comment) return;

      const newRev = {
        id: Date.now().toString(),
        name,
        location,
        rating,
        comment,
        date: "الآن",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
      };

      // إلحاق التقييم الجديد في البداية وإعادة التوليد
      restaurantConfig.reviews.unshift(newRev);
      renderReviews();

      // تصفير الخانات
      addReviewForm.reset();
      reviewFormContainer.classList.add("hidden");
      showReviewFormBtn.classList.remove("hidden");
      showToast("شكراً لمشاركتنا رأيك الجميل! ❤️");
    });
  }
}

// تفعيل وتجميل النوافذ المنبثقة
function toggleCartDrawer() {
  const drawer = document.getElementById("cart-drawer-backdrop");
  if (drawer) {
    drawer.classList.toggle("hidden");
    drawer.classList.toggle("flex");
  }
}

function toggleShareModal() {
  const modal = document.getElementById("share-modal-backdrop");
  if (modal) {
    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
  }
}

function toggleExportModal() {
  const modal = document.getElementById("export-modal-backdrop");
  if (modal) {
    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
  }
}

// توليد ولصق رابط المشاركة
function copyShareLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast("تم نسخ رابط المطعم بنجاح! 🔗");
  });
}

// معالج عارض الصور Lightbox
function openLightbox(url) {
  const backdrop = document.getElementById("lightbox-backdrop");
  const img = document.getElementById("lightbox-image");
  if (backdrop && img) {
    img.src = url;
    backdrop.classList.remove("hidden");
    backdrop.classList.add("flex");
  }
}

document.getElementById("close-lightbox-btn")?.addEventListener("click", () => {
  const backdrop = document.getElementById("lightbox-backdrop");
  if (backdrop) {
    backdrop.classList.add("hidden");
    backdrop.classList.remove("flex");
  }
});

document.getElementById("lightbox-backdrop")?.addEventListener("click", (e) => {
  if (e.target.id === "lightbox-backdrop") {
    const backdrop = document.getElementById("lightbox-backdrop");
    if (backdrop) {
      backdrop.classList.add("hidden");
      backdrop.classList.remove("flex");
    }
  }
});

// =========================================================================
// WHATSAPP FINAL ORDER TEXT BUILDER (صياغة وإرسال طلب الواتساب)
// =========================================================================

function handleSendOrder(e) {
  e.preventDefault();
  if (cart.length === 0) return;

  const name = document.getElementById("delivery-name").value;
  const phone = document.getElementById("delivery-phone").value;
  const address = document.getElementById("delivery-address").value;
  const notes = document.getElementById("delivery-notes").value;

  const chosenSaucesNames = restaurantConfig.sauces
    .filter(s => selectedSauces.includes(s.id))
    .map(s => s.name)
    .join('، ');

  const totalSum = cart.reduce((acc, ci) => acc + ci.menuItem.price * ci.quantity, 0);

  let orderText = `*طلب جديد عبر موقع Casa Snack 🍔🔥*\n\n`;
  orderText += `*الوجبات المطلوبة:*\n`;

  cart.forEach((item, index) => {
    const itemTotal = item.menuItem.price * item.quantity;
    orderText += `${index + 1}. ${item.menuItem.name} (${item.quantity}x) = ${itemTotal} DH\n`;
  });

  orderText += `\n*الصلصات المختارة:* ${chosenSaucesNames || 'بدون صلصة'}\n`;
  if (notes) {
    orderText += `*ملاحظات:* ${notes}\n`;
  }

  orderText += `\n------------------------\n`;
  orderText += `*المجموع الإجمالي:* ${totalSum} DH 💵\n`;
  orderText += `------------------------\n\n`;

  orderText += `*معلومات التوصيل:*\n`;
  orderText += `👤 *الاسم:* ${name || 'غير محدد'}\n`;
  orderText += `📞 *رقم الهاتف:* ${phone || 'غير محدد'}\n`;
  orderText += `📍 *العنوان/الحي:* ${address || 'الاستلام من المحل'}\n`;

  const encoded = encodeURIComponent(orderText);
  const whatsappUrl = `https://wa.me/${restaurantConfig.whatsappPhone}?text=${encoded}`;
  
  window.open(whatsappUrl, '_blank');
}

// =========================================================================
// EXPORT COMPRESSED HTML CODE (تصدير كود صفحة الويب المدمجة)
// =========================================================================

function getExportTemplate() {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${restaurantConfig.name} | ${restaurantConfig.tagline}</title>
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
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-orange-500/20 py-3">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold text-xl">CS</div>
        <span class="text-2xl font-black text-white">${restaurantConfig.name}</span>
      </div>
      <a href="https://wa.me/${restaurantConfig.whatsappPhone}" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-4 py-2 rounded-xl flex items-center gap-2">
        <i class="fa-brands fa-whatsapp"></i> اطلب عبر واتساب
      </a>
    </div>
  </header>
  
  <section class="pt-32 pb-20 text-center max-w-4xl mx-auto px-4">
    <span class="bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold px-4 py-1.5 rounded-full text-xs">
      ${restaurantConfig.topBadge}
    </span>
    <h1 class="text-4xl sm:text-6xl font-black mt-6 leading-tight">
      أحسن وجبات سريعة فكازا <br><span class="text-orange-500">بمذاق خطير وتوصيل حار!</span>
    </h1>
    <p class="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
      مرحباً بك فـ ${restaurantConfig.name}! كنوفروا ليك أحسن تاكوس غراتيني، برغر شهي، وبيتزا طرية.. كولشي محضر يومياً بلحوم حلال 100% وبسر الصلصة الفريدة ديالنا.
    </p>
    <div class="mt-8 flex justify-center gap-4">
      <a href="https://wa.me/${restaurantConfig.whatsappPhone}" target="_blank" class="glow-orange bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-2xl text-lg flex items-center gap-2">
        <i class="fa-brands fa-whatsapp text-2xl"></i> تواصل عبر واتساب
      </a>
    </div>
  </section>
</body>
</html>`;
}

function copyExportHtml() {
  const template = getExportTemplate();
  navigator.clipboard.writeText(template).then(() => {
    const copyBtn = document.getElementById("copy-html-btn");
    if (copyBtn) copyBtn.innerText = "تم النسخ بنجاح! ✓";
    setTimeout(() => {
      if (copyBtn) copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i><span>نسخ الكود</span>`;
    }, 2500);
  });
}

function downloadExportHtml() {
  const template = getExportTemplate();
  const blob = new Blob([template], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'index.html');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =========================================================================
// TIMING AND COUNTDOWN ENGINE (توقيت فتح وإغلاق المطعم التلقائي)
// =========================================================================

function updateWorkingHoursStatus() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const opH = restaurantConfig.openingHour;
  const opM = restaurantConfig.openingMinute;
  const clH = restaurantConfig.closingHour;
  const clM = restaurantConfig.closingMinute;

  const nowMins = currentHour * 60 + currentMinute;
  const openMins = opH * 60 + opM;
  let closeMins = clH * 60 + clM;

  if (closeMins < openMins) {
    closeMins += 24 * 60; // احتساب الإغلاق بعد منتصف الليل
  }

  let adjustedNowMins = nowMins;
  if (nowMins < openMins && (nowMins + 24 * 60) <= closeMins) {
    adjustedNowMins += 24 * 60;
  }

  let isOpen = false;
  let countdownText = "";
  let badgeColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  let statusText = "مفتوح الآن 🟢";

  if (adjustedNowMins >= openMins && adjustedNowMins < closeMins) {
    isOpen = true;
    const remainingMins = closeMins - adjustedNowMins;
    const hrs = Math.floor(remainingMins / 60);
    const mins = remainingMins % 60;
    if (hrs > 0) {
      countdownText = `كنسدوا فـ غضون ${hrs} ساعة و ${mins} دقيقة`;
    } else {
      countdownText = `كنسدوا فـ غضون ${mins} دقيقة`;
    }
  } else {
    isOpen = false;
    statusText = "مغلق حالياً 🔴";
    badgeColor = "bg-red-500/10 text-red-400 border-red-500/20";

    let minsUntilOpen = 0;
    if (nowMins < openMins) {
      minsUntilOpen = openMins - nowMins;
    } else {
      minsUntilOpen = (openMins + 24 * 60) - nowMins;
    }
    const hrs = Math.floor(minsUntilOpen / 60);
    const mins = minsUntilOpen % 60;
    if (hrs > 0) {
      countdownText = `كنحلوا فـ غضون ${hrs} ساعة و ${mins} دقيقة`;
    } else {
      countdownText = `كنحلوا فـ غضون ${mins} دقيقة`;
    }
  }

  const statusBadge = document.getElementById("working-status-badge");
  const statusCountdown = document.getElementById("working-status-countdown");
  if (statusBadge) {
    statusBadge.className = `text-xs font-bold px-2.5 py-1 rounded-full border ${badgeColor}`;
    statusBadge.innerText = statusText;
  }
  if (statusCountdown) {
    statusCountdown.innerHTML = `<i class="fa-solid fa-hourglass-half ml-1.5"></i>${countdownText}`;
  }
}

// =========================================================================
// REAL-TIME SCROLL REVEAL OBSERVER (مراقب حركات التمرير الاحترافي)
// =========================================================================

function setupScrollReveal() {
  const elements = document.querySelectorAll(".scroll-reveal");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        observer.unobserve(entry.target); // تشغيل الحركة لمرة واحدة فقط
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "-20px"
  });

  elements.forEach(el => {
    // تحديد الاتجاه الافتراضي إن لم يكن محدداً مسبقاً
    if (!el.classList.contains("reveal-up") && 
        !el.classList.contains("reveal-down") && 
        !el.classList.contains("reveal-left") && 
        !el.classList.contains("reveal-right")) {
      el.classList.add("reveal-up");
    }
    observer.observe(el);
  });
}

// =========================================================================
// SYSTEM TOAST NOTIFIER (إشعارات النظام المنبثقة)
// =========================================================================

function showToast(message) {
  // إيجاد أو إنشاء حاوية الإشعارات
  let toast = document.getElementById("system-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "system-toast";
    toast.className = "fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-orange-500 text-black font-black text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 transition-all duration-300 transform -translate-y-4 opacity-0 border-2 border-white/40 dir-rtl";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-lg"></i><span>${message}</span>`;
  
  // إظهار الإشعار مع حركة انزلاق
  toast.classList.remove("opacity-0", "-translate-y-4");
  toast.classList.add("opacity-100", "translate-y-0");

  // إخفاء الإشعار بعد 3.5 ثانية
  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "-translate-y-4");
  }, 3500);
}
