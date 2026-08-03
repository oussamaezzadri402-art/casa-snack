import heroImg from '../assets/images/hero_tacos_burger_1784924096279.jpg';
import kitchenImg from '../assets/images/about_kitchen_1784924112400.jpg';
import logoImg from '../assets/images/casa_snack_logo_1784924126252.jpg';
import { MenuItem, Review, GalleryItem, Feature } from '../types';

/**
 * =========================================================================
 * CASA SNACK - CENTRAL RESTAURANT CONFIGURATION
 * =========================================================================
 * يمكنك تعديل جميع معلومات المطعم بسهولة من هذا الملف دون الحاجة لتغيير الكود.
 */
export const RESTAURANT_CONFIG = {
  // المعلومات الأساسية
  name: "Casa Snack",
  tagline: "المذاق الرفيع والسرعة فالتوصيل 🍔🔥",
  topBadge: "🔥 أكثر من 15000 طلب ناجح فكازا",
  phone: "0661123456",
  whatsappPhone: "212661123456",
  address: "شارع المسيرة الخضراء، المعاريف، الدار البيضاء",
  city: "الدار البيضاء (كازابلانكا)",
  
  // أوقات العمل وحساب الحالة التلقائية (24h format)
  // مثال: من 11:30 صباحاً (11:30) حتال 02:00 دالليل (02:00)
  openingHour: 11,
  openingMinute: 30,
  closingHour: 2,
  closingMinute: 0,
  workingHoursText: "كل يوم: من 11:30 صباحاً حتال 02:00 دالليل",

  // التوصيل والطلبات
  deliveryTime: "25 - 35 دقيقة",
  minOrder: "30 DH",

  // رابط وموقع Google Maps
  googleMapsDirectUrl: "https://maps.google.com/?q=33.5855729,-7.6329124",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.758461876527!2d-7.63291242352843!3d33.58557294224729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29bc3533867%3A0x6b4f70823521b7d5!2sBoulevard%20de%20la%20Massira%20Al%20Khadra%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma",

  // روابط مواقع التواصل الاجتماعي
  socialLinks: {
    whatsapp: "https://wa.me/212661123456",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },

  // الصور والشعار
  logo: logoImg,
  heroImage: heroImg,
  kitchenImage: kitchenImg,

  // قائمة المنيو والأسعار
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
  ] as MenuItem[],

  // قائمة الصلصات
  sauces: [
    { id: 'algerienne', name: 'صلصة جزائرية (Algérienne) 🌶️' },
    { id: 'andalouse', name: 'صلصة أندالوز (Andalouse) 🧅' },
    { id: 'samourai', name: 'صلصة ساموراي حارة (Samouraï) 🔥' },
    { id: 'fromagere', name: 'صلصة الجبن الخاصة d Casa Snack 🧀' },
    { id: 'mayo', name: 'مايونيز بالثوم (Mayo Ail) 🧄' },
    { id: 'ketchup', name: 'كاتشب طماطم 🍅' }
  ],

  // المميزات
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
  ] as Feature[],

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
  ] as Review[],

  // المعرض
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
      imageUrl: kitchenImg
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
  ] as GalleryItem[]
};
