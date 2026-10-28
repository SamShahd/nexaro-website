import type { Locale, ServiceId } from "./types";

export const studio = {
  name: "NEXARO",
  email: "hello@nexaro.studio",
  phone: "+90 543 459 79 73",
  phoneRaw: "+905434597973",
  whatsappUrl: "https://wa.me/905434597973?text=Hello%20Shahd,%20I'd%20like%20to%20inquire%20about%20a%20website%20project.",
  calUrl: "https://cal.com/nexaro/15min",
  city: "Istanbul, Türkiye",
  linkedIn: "https://www.linkedin.com/in/shahdbelhadj/",
  github: "https://github.com/shahdbelhadj",
  behance: "https://www.behance.net/shahdbelhadj",
  instagram: "https://instagram.com/nexaro.studio",
  founder: {
    name: "Shahd Belhadj",
    initials: "SB",
    role: "Founder & Lead Engineer",
    image: "/shahd-belhadj.jpg",
  },
};

export const navItems = [
  { href: "#services", key: "nav.services" },
  { href: "#pricing", key: "nav.pricing" },
  { href: "#work", key: "nav.work" },
  { href: "#process", key: "nav.process" },
  { href: "#about", key: "nav.about" },
  { href: "#faq", key: "nav.faq" },
  { href: "#contact", key: "nav.contact" },
] as const;

export interface LocalizedService {
  id: ServiceId;
  index: string;
  tag: string;
  title: string;
  result: string;
  includes: string[];
  fromPriceTRY: string;
  fromPriceUSD: string;
  badge?: string;
  ctaText: string;
}

export function getServices(locale: Locale): LocalizedService[] {
  const data: Record<Locale, LocalizedService[]> = {
    en: [
      {
        id: "websites",
        index: "01",
        tag: "CORE",
        title: "Websites",
        result: "A site that turns visitors into enquiries.",
        includes: [
          "Mobile-first responsive design",
          "WhatsApp direct click-to-chat button",
          "Interactive Google Maps integration",
          "Basic on-page SEO & meta tags",
          "Hardened security headers & SSL",
        ],
        fromPriceTRY: "From ₺15,000",
        fromPriceUSD: "From $400",
        badge: "Most in-demand",
        ctaText: "Get a website",
      },
      {
        id: "care",
        index: "02",
        tag: "RECURRING",
        title: "Care Plans",
        result: "Stay online, secure and up to date.",
        includes: [
          "Automated off-site backups",
          "Core & dependency security updates",
          "24/7 uptime & latency monitoring",
          "Monthly health & traffic summary report",
          "Dedicated engineering support hours",
        ],
        fromPriceTRY: "From ₺1,500 / mo",
        fromPriceUSD: "From $60 / mo",
        ctaText: "Choose a care plan",
      },
      {
        id: "security",
        index: "03",
        tag: "NEW CORE · SPECIALTY",
        title: "Website Security Audit & Hardening",
        result: "Find the holes before someone else does.",
        includes: [
          "Comprehensive vulnerability scan",
          "Plain-language written risk assessment",
          "Actionable hardening fix list",
          "Security headers (CSP, HSTS) configuration",
          "Spam & form exploit mitigation",
        ],
        fromPriceTRY: "₺6,000",
        fromPriceUSD: "$200",
        badge: "Cybersecurity edge",
        ctaText: "Get an audit",
      },
    ],
    tr: [
      {
        id: "websites",
        index: "01",
        tag: "TEMEL",
        title: "Web Siteleri",
        result: "Ziyaretçileri potansiyel müşteriye dönüştüren siteler.",
        includes: [
          "Mobil öncelikli responsive tasarım",
          "WhatsApp doğrudan iletişim butonu",
          "Google Haritalar konum entegrasyonu",
          "Temel sayfa içi SEO ve meta etiketleri",
          "Güvenlik başlıkları ve SSL şifreleme",
        ],
        fromPriceTRY: "₺15,000'den",
        fromPriceUSD: "$400'den",
        badge: "En çok tercih edilen",
        ctaText: "Site Teklifi Al",
      },
      {
        id: "care",
        index: "02",
        tag: "SÜREKLİ DESTEK",
        title: "Bakım ve Güvenlik Planları",
        result: "Siteniz daima yayında, güncel ve güvende kalsın.",
        includes: [
          "Düzenli bulut tabanlı yedeklemeler",
          "Güvenlik ve altyapı güncellemeleri",
          "7/24 kesintisiz çalışma (uptime) izleme",
          "Aylık site sağlığı ve güvenlik raporu",
          "Aylık ayrılmış teknik destek süresi",
        ],
        fromPriceTRY: "₺1,500 / ay'dan",
        fromPriceUSD: "$60 / ay'dan",
        ctaText: "Bakım Planı Seç",
      },
      {
        id: "security",
        index: "03",
        tag: "UZMANLIK ALANI",
        title: "Web Sitesi Güvenlik Denetimi",
        result: "Açıkları başkaları bulmadan önce tespit edin.",
        includes: [
          "Kapsamlı güvenlik açığı taraması",
          "Anlaşılır dille yazılmış risk raporu",
          "Adım adım düzeltme ve sıkılaştırma listesi",
          "Güvenlik başlıkları (CSP, HSTS) kurulumu",
          "Form spam ve kötü niyetli istek koruması",
        ],
        fromPriceTRY: "₺6,000",
        fromPriceUSD: "$200",
        badge: "Siber güvenlik uzmanlığı",
        ctaText: "Denetim Başlat",
      },
    ],
    fr: [
      {
        id: "websites",
        index: "01",
        tag: "PRINCIPAL",
        title: "Sites Web",
        result: "Un site qui convertit vos visiteurs en demandes réelles.",
        includes: [
          "Design mobile responsive soigné",
          "Bouton WhatsApp d'échange direct",
          "Intégration Google Maps interactive",
          "Optimisation SEO de base & balises",
          "En-têtes de sécurité renforcés & SSL",
        ],
        fromPriceTRY: "À partir de ₺15,000",
        fromPriceUSD: "À partir de $400",
        badge: "Le plus demandé",
        ctaText: "Démarrer un site",
      },
      {
        id: "care",
        index: "02",
        tag: "RÉCURRENT",
        title: "Plans de Maintenance",
        result: "Restez en ligne, sécurisé et à jour sans tracas.",
        includes: [
          "Sauvegardes automatiques régulières",
          "Mises à jour de sécurité et de dépendances",
          "Surveillance 24/7 du temps de réponse",
          "Rapport mensuel de santé et de sécurité",
          "Heures d'assistance technique dédiée",
        ],
        fromPriceTRY: "À partir de ₺1,500 / mois",
        fromPriceUSD: "À partir de $60 / mois",
        ctaText: "Choisir une formule",
      },
      {
        id: "security",
        index: "03",
        tag: "EXPERTISE",
        title: "Audit de Sécurité & Renforcement",
        result: "Trouvez les failles avant qu'elles ne soient exploitées.",
        includes: [
          "Scan complet des vulnérabilités web",
          "Rapport rédigé en langage clair et direct",
          "Plan d'action et liste de correctifs",
          "Configuration des en-têtes (CSP, HSTS)",
          "Protection anti-spam et durcissement des formulaires",
        ],
        fromPriceTRY: "₺6,000",
        fromPriceUSD: "$200",
        badge: "Atout cybersécurité",
        ctaText: "Demander un audit",
      },
    ],
    ar: [
      {
        id: "websites",
        index: "01",
        tag: "أساسي",
        title: "مواقع الويب",
        result: "موقع يحوّل الزوار إلى استفسارات وعملاء فعليين.",
        includes: [
          "تصميم متجاوب وسريع للهواتف الذكية",
          "زر تواصل مباشر عبر واتساب",
          "ربط تفاعلي مع خرائط جوجل",
          "تهيئة أساسية لمحركات البحث SEO",
          "ترويسات أمنية مشددة وشهادة SSL",
        ],
        fromPriceTRY: "ابتداءً من ₺15,000",
        fromPriceUSD: "ابتداءً من $400",
        badge: "الأكثر طلبًا",
        ctaText: "ابدأ موقعك",
      },
      {
        id: "care",
        index: "02",
        tag: "دوري ومستمر",
        title: "باقات الرعاية والصيانة",
        result: "ابقَ متصلًا وآمنًا ومحدثًا دومًا دون قلق.",
        includes: [
          "نسخ احتياطية دورية خارج الموقع",
          "تحديثات أمان البرمجيات والمكتبات",
          "مراقبة استقرار وسرعة الموقع 24/7",
          "تقرير شهري مفصل عن صحة وأمان الموقع",
          "ساعات دعم تقني مباشر من المهندسة",
        ],
        fromPriceTRY: "ابتداءً من ₺1,500 / شهريًا",
        fromPriceUSD: "ابتداءً من $60 / شهريًا",
        ctaText: "اختر باقة صيانة",
      },
      {
        id: "security",
        index: "03",
        tag: "ميزة تخصصية",
        title: "فحص وتحصين أمان الموقع",
        result: "اكتشف الثغرات ونقاط الضعف قبل أن يستغلها غيرك.",
        includes: [
          "فحص شامل للثغرات البرمجية والتهيئة",
          "تقرير كتابي بلغة واضحة دون تعقيد",
          "قائمة محددة بالإصلاحات وخطوات التحصين",
          "ضبط ترويسات الأمان الصارمة CSP وHSTS",
          "حماية النماذج من السبام والهجمات التلقائية",
        ],
        fromPriceTRY: "₺6,000",
        fromPriceUSD: "$200",
        badge: "خلفية الأمن السيبراني",
        ctaText: "اطلب فحص أمان",
      },
    ],
  };

  return data[locale] || data.en;
}

export interface PricingPlan {
  id: string;
  name: string;
  popular?: boolean;
  priceTRY: string;
  priceUSD: string;
  period?: string;
  scope: string;
  highlights: string[];
}

export interface AddOnItem {
  name: string;
  priceTRY: string;
  priceUSD: string;
  detail: string;
}

export function getPricingData(locale: Locale) {
  const websites: Record<Locale, PricingPlan[]> = {
    en: [
      {
        id: "landing",
        name: "Landing Page",
        priceTRY: "₺15,000",
        priceUSD: "$400",
        scope: "Up to 7 sections on 1 focused high-converting page",
        highlights: [
          "Designed & delivered in 5–7 days",
          "Lead capture / inquiry form + WhatsApp button",
          "Fast load speed & mobile responsive",
          "Basic on-page SEO & OpenGraph tags",
          "2 revision rounds included",
        ],
      },
      {
        id: "business",
        name: "Business Website",
        popular: true,
        priceTRY: "₺30,000",
        priceUSD: "$800",
        scope: "Up to 5 custom-designed pages",
        highlights: [
          "Delivered in 10–14 days",
          "Contact form, Google Maps & WhatsApp integration",
          "Security-first headers & SSL setup",
          "Fast load score & responsive across all devices",
          "2 revision rounds & 30 days free support",
        ],
      },
      {
        id: "corporate",
        name: "Corporate Website",
        priceTRY: "₺55,000",
        priceUSD: "$1,600",
        scope: "Up to 10 comprehensive pages",
        highlights: [
          "Custom design system & modular layout",
          "Blog / CMS structure ready",
          "Analytics & conversion tracking configuration",
          "Complete security hardening report",
          "2 revision rounds & 30 days free support",
        ],
      },
      {
        id: "ecommerce",
        name: "E-Commerce",
        priceTRY: "₺65,000",
        priceUSD: "$1,800",
        scope: "Full online store with up to 20 initial products",
        highlights: [
          "Payment gateway & shipping rate integration",
          "Product catalog, filtering & cart checkout",
          "Customer order notifications & receipt emails",
          "Security-hardened transaction workflows",
          "Full training handover & 30 days support",
        ],
      },
      {
        id: "audit",
        name: "Security Audit (Standalone)",
        priceTRY: "₺6,000",
        priceUSD: "$200",
        scope: "Comprehensive independent site audit",
        highlights: [
          "Delivered within 3 business days",
          "Full vulnerability scan & misconfiguration audit",
          "Plain-language written report for owners",
          "Step-by-step hardening checklist",
          "Includes 1 follow-up verification scan",
        ],
      },
    ],
    tr: [
      {
        id: "landing",
        name: "Açılış Sayfası (Landing Page)",
        priceTRY: "₺15,000",
        priceUSD: "$400",
        scope: "Dönüşüm odaklı tek sayfada 7 bölüme kadar",
        highlights: [
          "5–7 gün içinde teslim",
          "İletişim / talep formu ve WhatsApp butonu",
          "Yüksek hız puanı ve mobil uyumlu altyapı",
          "Temel sayfa içi SEO ve meta etiketleri",
          "2 revizyon hakkı dahil",
        ],
      },
      {
        id: "business",
        name: "İşletme Web Sitesi",
        popular: true,
        priceTRY: "₺30,000",
        priceUSD: "$800",
        scope: "Özel tasarlanmış 5 sayfaya kadar",
        highlights: [
          "10–14 gün içinde teslim",
          "İletişim formu, Google Haritalar & WhatsApp",
          "Güvenlik başlıkları & SSL yapılandırması",
          "Tüm cihazlarda kusursuz hız ve uyumluluk",
          "2 revizyon turu ve 30 gün ücretsiz destek",
        ],
      },
      {
        id: "corporate",
        name: "Kurumsal Web Sitesi",
        priceTRY: "₺55,000",
        priceUSD: "$1,600",
        scope: "10 sayfaya kadar kapsamlı kurumsal site",
        highlights: [
          "Özel tasarım sistemi ve modüler mimari",
          "Blog / içerik yönetim altyapısına hazır",
          "Google Analytics ve dönüşüm takip kurulumu",
          "Kapsamlı güvenlik sıkılaştırma raporu",
          "2 revizyon turu ve 30 gün ücretsiz destek",
        ],
      },
      {
        id: "ecommerce",
        name: "E-Ticaret Sitesi",
        priceTRY: "₺65,000",
        priceUSD: "$1,800",
        scope: "20 ürüne kadar giriş yapılan tam mağaza",
        highlights: [
          "Ödeme altyapısı (PayTR, iyzico, Stripe) ve kargo entegrasyonu",
          "Katalog, filtreleme, sepet ve güvenli ödeme",
          "Müşteri sipariş bildirimleri ve e-posta şablonları",
          "Sıkılaştırılmış güvenli işlem akışları",
          "Yönetim paneli eğitimi ve 30 gün ücretsiz destek",
        ],
      },
      {
        id: "audit",
        name: "Güvenlik Denetimi (Bağımsız)",
        priceTRY: "₺6,000",
        priceUSD: "$200",
        scope: "Mevcut web sitenizin bağımsız denetimi",
        highlights: [
          "3 iş günü içinde teslim",
          "Güvenlik açığı taraması ve hatalı yapılandırma kontrolü",
          "Teknik olmayan net ve anlaşılır yazılı rapor",
          "Adım adım sıkılaştırma ve onarım rehberi",
          "Düzeltmeler sonrası 1 kontrol taraması dahil",
        ],
      },
    ],
    fr: [
      {
        id: "landing",
        name: "Page d'Atterrissage (Landing)",
        priceTRY: "₺15,000",
        priceUSD: "$400",
        scope: "Jusqu'à 7 sections sur une page axée conversion",
        highlights: [
          "Conçue et livrée en 5 à 7 jours",
          "Formulaire de capture & bouton WhatsApp",
          "Vitesse de chargement élevée & mobile",
          "Optimisation SEO de base & balises",
          "2 tours de révision inclus",
        ],
      },
      {
        id: "business",
        name: "Site d'Entreprise",
        popular: true,
        priceTRY: "₺30,000",
        priceUSD: "$800",
        scope: "Jusqu'à 5 pages uniques sur-mesure",
        highlights: [
          "Livré en 10 à 14 jours",
          "Formulaire, Google Maps & WhatsApp",
          "En-têtes de sécurité renforcés & SSL",
          "Testé sur tous les écrans & haute vitesse",
          "2 tours de révision et 30 jours de support offert",
        ],
      },
      {
        id: "corporate",
        name: "Site Corporate",
        priceTRY: "₺55,000",
        priceUSD: "$1,600",
        scope: "Jusqu'à 10 pages complètes",
        highlights: [
          "Système de design personnalisé & modulaire",
          "Prêt pour blog / CMS éditorial",
          "Configuration des outils d'analyse d'audience",
          "Rapport de durcissement de sécurité complet",
          "2 tours de révision et 30 jours de support",
        ],
      },
      {
        id: "ecommerce",
        name: "Boutique E-Commerce",
        priceTRY: "₺65,000",
        priceUSD: "$1,800",
        scope: "Boutique en ligne avec jusqu'à 20 produits",
        highlights: [
          "Intégration passerelle de paiement & transporteurs",
          "Catalogue, filtres, panier et paiement sécurisé",
          "E-mails automatiques de confirmation de commande",
          "Sécurisation stricte des transactions",
          "Formation à la gestion et 30 jours de support",
        ],
      },
      {
        id: "audit",
        name: "Audit de Sécurité (Autonome)",
        priceTRY: "₺6,000",
        priceUSD: "$200",
        scope: "Audit complet de votre site web existant",
        highlights: [
          "Rendu sous 3 jours ouvrés",
          "Scan des failles & détection des mauvaises configurations",
          "Rapport rédigé en termes simples et actionnables",
          "Liste détaillée des correctifs prioritaires",
          "Inclut 1 vérification de validation après correctifs",
        ],
      },
    ],
    ar: [
      {
        id: "landing",
        name: "صفحة هبوط (Landing Page)",
        priceTRY: "₺15,000",
        priceUSD: "$400",
        scope: "حتى 7 أقسام في صفحة واحدة تركز على تحويل الزوار",
        highlights: [
          "تسليم سريع خلال 5 إلى 7 أيام",
          "نموذج تواصل مباشر + زر محادثة واتساب",
          "سرعة تحميل فائقة وتوافق كامل مع الهواتف",
          "تهيئة أولية لمحركات البحث SEO ومشاركات الوسائط",
          "جولتا مراجعة وتعديل مشمولة",
        ],
      },
      {
        id: "business",
        name: "موقع أعمال متكامل",
        popular: true,
        priceTRY: "₺30,000",
        priceUSD: "$800",
        scope: "حتى 5 صفحات مخصصة ومصممة بعناية",
        highlights: [
          "تسليم خلال 10 إلى 14 يومًا",
          "نموذج تواصل، خريطة جوجل، وزر واتساب",
          "ترويسات أمان متقدمة وشهادة SSL",
          "أداء سريع وتوافق كامل عبر مختلف الأجهزة",
          "جولتا مراجعة + 30 يوم دعم فني مجاني بعد الإطلاق",
        ],
      },
      {
        id: "corporate",
        name: "موقع شركات شامل",
        priceTRY: "₺55,000",
        priceUSD: "$1,600",
        scope: "حتى 10 صفحات مفصلة للشركات والمؤسسات",
        highlights: [
          "نظام تصميم خاص وتوزيع معماري مرن",
          "جاهز للمدونة أو نظام إدارة المحتوى",
          "ربط تحليلات الزوار وأدوات قياس التحويل",
          "تقرير فحص وتحصين أمان متكامل قبل التسليم",
          "جولتا مراجعة + 30 يوم دعم فني مجاني",
        ],
      },
      {
        id: "ecommerce",
        name: "متجر إلكتروني متكامل",
        priceTRY: "₺65,000",
        priceUSD: "$1,800",
        scope: "متجر كامل مع إدخال حتى 20 منتجًا أساسيًا",
        highlights: [
          "ربط بوابات الدفع الإلكتروني وشركات الشحن",
          "كتالوج المنتجات، سلة الشراء، والدفع الآمن",
          "إشعارات تلقائية للطلبات والفواتير عبر البريد",
          "حماية مشددة لعمليات الدفع والبيانات",
          "تدريب كامل على إدارة المتجر + 30 يوم دعم",
        ],
      },
      {
        id: "audit",
        name: "فحص أمان الموقع (مستقل)",
        priceTRY: "₺6,000",
        priceUSD: "$200",
        scope: "تدقيق أمني مستقل وشامل لموقعك الحالي",
        highlights: [
          "تسليم التقرير خلال 3 أيام عمل",
          "فحص الثغرات، إعدادات الخادم، ونقاط الضعف",
          "تقرير كتابي بلغة واضحة موجه لأصحاب الأعمال",
          "قائمة خطوات عملية للإصلاح والتحصين",
          "يشمل فحصًا إضافيًا للتأكد بعد تطبيق الإصلاحات",
        ],
      },
    ],
  };

  const carePlans: Record<Locale, PricingPlan[]> = {
    en: [
      {
        id: "care-basic",
        name: "Care Basic",
        priceTRY: "₺1,500",
        priceUSD: "$60",
        period: "/ mo",
        scope: "Essential stability and peace of mind",
        highlights: [
          "Automated off-site backups",
          "Core platform & security updates",
          "24/7 uptime & latency monitoring",
          "1 hour included monthly support / edits",
        ],
      },
      {
        id: "care-standard",
        name: "Care Standard",
        popular: true,
        priceTRY: "₺3,000",
        priceUSD: "$120",
        period: "/ mo",
        scope: "Continuous protection and active maintenance",
        highlights: [
          "Everything in Basic",
          "Monthly security audit & vulnerability report",
          "Performance & database optimization",
          "3 hours included monthly support / changes",
        ],
      },
      {
        id: "care-pro",
        name: "Care Pro",
        priceTRY: "₺6,000",
        priceUSD: "$240",
        period: "/ mo",
        scope: "Priority response and dedicated engineering support",
        highlights: [
          "Everything in Standard",
          "Priority WhatsApp direct line (same-day reply)",
          "Monthly speed, SEO & conversion check",
          "6 hours included monthly support / improvements",
        ],
      },
    ],
    tr: [
      {
        id: "care-basic",
        name: "Temel Bakım (Care Basic)",
        priceTRY: "₺1,500",
        priceUSD: "$60",
        period: "/ ay",
        scope: "Temel kararlılık ve kesintisiz çalışma güvencesi",
        highlights: [
          "Düzenli bulut yedeklemeleri",
          "Altyapı ve güvenlik güncellemeleri",
          "7/24 kesintisiz çalışma (uptime) izleme",
          "Ayda 1 saat dahil teknik destek veya içerik düzenleme",
        ],
      },
      {
        id: "care-standard",
        name: "Standart Bakım (Care Standard)",
        popular: true,
        priceTRY: "₺3,000",
        priceUSD: "$120",
        period: "/ ay",
        scope: "Sürekli koruma ve proaktif site yönetimi",
        highlights: [
          "Temel paketteki her şey",
          "Aylık güvenlik denetimi ve risk değerlendirme raporu",
          "Hız ve veritabanı optimizasyonu",
          "Ayda 3 saat dahil teknik destek veya geliştirme",
        ],
      },
      {
        id: "care-pro",
        name: "Profesyonel Bakım (Care Pro)",
        priceTRY: "₺6,000",
        priceUSD: "$240",
        period: "/ ay",
        scope: "Öncelikli müdahale ve kapsamlı teknik ortaklık",
        highlights: [
          "Standart paketteki her şey",
          "Öncelikli WhatsApp doğrudan destek (aynı gün yanıt)",
          "Aylık hız, SEO ve dönüşüm kontrol raporu",
          "Ayda 6 saat dahil teknik destek ve yeni özellik ekleme",
        ],
      },
    ],
    fr: [
      {
        id: "care-basic",
        name: "Care Basic",
        priceTRY: "₺1,500",
        priceUSD: "$60",
        period: "/ mois",
        scope: "Stabilité essentielle et sérénité au quotidien",
        highlights: [
          "Sauvegardes automatiques hors-site",
          "Mises à jour de sécurité et de plateforme",
          "Surveillance 24/7 du bon fonctionnement",
          "1h d'assistance ou de retouches mensuelles incluses",
        ],
      },
      {
        id: "care-standard",
        name: "Care Standard",
        popular: true,
        priceTRY: "₺3,000",
        priceUSD: "$120",
        period: "/ mois",
        scope: "Protection continue et maintenance proactive",
        highlights: [
          "Tout ce qui est inclus dans Basic",
          "Rapport mensuel d'audit de sécurité",
          "Optimisation continue de la vitesse",
          "3h d'assistance ou d'évolutions mensuelles incluses",
        ],
      },
      {
        id: "care-pro",
        name: "Care Pro",
        priceTRY: "₺6,000",
        priceUSD: "$240",
        period: "/ mois",
        scope: "Assistance prioritaire et partenariat technique complet",
        highlights: [
          "Tout ce qui est inclus dans Standard",
          "Ligne directe WhatsApp prioritaire (réponse le jour même)",
          "Bilan mensuel vitesse, SEO et conversion",
          "6h d'assistance ou de développement mensuelles incluses",
        ],
      },
    ],
    ar: [
      {
        id: "care-basic",
        name: "الرعاية الأساسية (Basic)",
        priceTRY: "₺1,500",
        priceUSD: "$60",
        period: "/ شهريًا",
        scope: "استقرار أساسي وراحة بال تامة لموقعك",
        highlights: [
          "نسخ احتياطي سحابي دوري",
          "تحديثات الأمان والأنظمة الأساسية",
          "مراقبة استقرار وتشغيل الموقع 24/7",
          "ساعة دعم وتعديلات فنية مشمولة شهريًا",
        ],
      },
      {
        id: "care-standard",
        name: "الرعاية القياسية (Standard)",
        popular: true,
        priceTRY: "₺3,000",
        priceUSD: "$120",
        period: "/ شهريًا",
        scope: "حماية مستمرة وصيانة استباقية لموقعك",
        highlights: [
          "كل ما تشمله الباقة الأساسية",
          "تقرير أمني شهري وفحص دوري للثغرات",
          "تحسين مستمر لسرعة الموقع وقواعد البيانات",
          "3 ساعات دعم فني وتطويرات مشمولة شهريًا",
        ],
      },
      {
        id: "care-pro",
        name: "الرعاية المتقدمة (Pro)",
        priceTRY: "₺6,000",
        priceUSD: "$240",
        period: "/ شهريًا",
        scope: "أولوية استجابة وشراكة تقنية مخصصة لنمو موقعك",
        highlights: [
          "كل ما تشمله الباقة القياسية",
          "قناة واتساب ذات أولوية (رد خلال ساعات العمل نفسها)",
          "تقرير شهري شامل للسرعة، SEO ومعدلات التحويل",
          "6 ساعات دعم وتطوير مشمولة شهريًا",
        ],
      },
    ],
  };

  const addOns: Record<Locale, AddOnItem[]> = {
    en: [
      {
        name: "Extra Language",
        priceTRY: "+₺10,000",
        priceUSD: "+$250",
        detail: "Up to 5 pages per language with full localized routing (/tr, /fr, /ar)",
      },
      {
        name: "Brand Starter Kit",
        priceTRY: "₺8,000",
        priceUSD: "$220",
        detail: "Logo system, primary & secondary colours, web font pairings (add-on with website)",
      },
      {
        name: "Extra Page",
        priceTRY: "₺2,500",
        priceUSD: "$70",
        detail: "Designed, coded and integrated into your navigation and site structure",
      },
      {
        name: "Extra Revision Round",
        priceTRY: "₺2,000",
        priceUSD: "$55",
        detail: "Dedicated round of design and feedback refinements before final approval",
      },
      {
        name: "Professional Copywriting",
        priceTRY: "₺1,500 / page",
        priceUSD: "$40 / page",
        detail: "Clear, commercial copy written to turn visitors into enquiries",
      },
      {
        name: "Google Business Profile Setup",
        priceTRY: "₺2,500",
        priceUSD: "$70",
        detail: "Local business profile creation, optimization, category selection & verification guide",
      },
    ],
    tr: [
      {
        name: "Ek Dil Desteği",
        priceTRY: "+₺10,000",
        priceUSD: "+$250",
        detail: "Dil başına 5 sayfaya kadar, ayrı URL yapısı (/en, /fr, /ar) ile tam entegrasyon",
      },
      {
        name: "Marka Başlangıç Kiti",
        priceTRY: "₺8,000",
        priceUSD: "$220",
        detail: "Logo sistemi, renk paleti, font eşleştirmeleri (web sitesi ile birlikte satılır)",
      },
      {
        name: "Ek Sayfa",
        priceTRY: "₺2,500",
        priceUSD: "$70",
        detail: "Özel tasarlanmış, kodlanmış ve menüye entegre edilmiş ek sayfa",
      },
      {
        name: "Ek Revizyon Turu",
        priceTRY: "₺2,000",
        priceUSD: "$55",
        detail: "Onay öncesi ek tasarım ve geri bildirim revizyon turu",
      },
      {
        name: "Profesyonel Metin Yazımı",
        priceTRY: "₺1,500 / sayfa",
        priceUSD: "$40 / sayfa",
        detail: "Ziyaretçiyi müşteriye dönüştüren net ve ticari web metinleri",
      },
      {
        name: "Google İşletme Profili Kurulumu",
        priceTRY: "₺2,500",
        priceUSD: "$70",
        detail: "Yerel aramalarda öne çıkmanız için Google Haritalar & İşletme profili kurulumu",
      },
    ],
    fr: [
      {
        name: "Langue Additionnelle",
        priceTRY: "+₺10,000",
        priceUSD: "+$250",
        detail: "Jusqu'à 5 pages par langue avec routage dédié (/tr, /fr, /ar)",
      },
      {
        name: "Kit de Marque Initial",
        priceTRY: "₺8,000",
        priceUSD: "$220",
        detail: "Système de logo, palette de couleurs, typographies (avec un site web)",
      },
      {
        name: "Page Supplémentaire",
        priceTRY: "₺2,500",
        priceUSD: "$70",
        detail: "Conçue, intégrée et reliée à votre arborescence",
      },
      {
        name: "Tour de Révision Supplémentaire",
        priceTRY: "₺2,000",
        priceUSD: "$55",
        detail: "Itération complète d'ajustements avant validation finale",
      },
      {
        name: "Rédaction Commerciale",
        priceTRY: "₺1,500 / page",
        priceUSD: "$40 / page",
        detail: "Textes clairs et persuasifs pour convertir vos prospects",
      },
      {
        name: "Profil Google Business",
        priceTRY: "₺2,500",
        priceUSD: "$70",
        detail: "Création et optimisation de votre fiche d'établissement locale",
      },
    ],
    ar: [
      {
        name: "لغة إضافية للموقع",
        priceTRY: "+₺10,000",
        priceUSD: "+$250",
        detail: "حتى 5 صفحات لكل لغة مع روابط مستقلة ومحسنة (/tr, /fr, /ar)",
      },
      {
        name: "حزمة بداية الهوية البصرية",
        priceTRY: "₺8,000",
        priceUSD: "$220",
        detail: "نظام الشعار، لوحة الألوان الأساسية، والخطوط (تُباع كإضافة مع الموقع)",
      },
      {
        name: "صفحة إضافية",
        priceTRY: "₺2,500",
        priceUSD: "$70",
        detail: "تصميم وبرمجة صفحة إضافية متكاملة ضمن هيكل موقعك",
      },
      {
        name: "جولة مراجعة إضافية",
        priceTRY: "₺2,000",
        priceUSD: "$55",
        detail: "جولة تعديلات وتطويرات مخصصة قبل الاعتماد النهائي",
      },
      {
        name: "كتابة نصوص احترافية",
        priceTRY: "₺1,500 / صفحة",
        priceUSD: "$40 / صفحة",
        detail: "صياغة نصوص تجارية واضحة ومقنعة لتحفيز التواصل والمبيعات",
      },
      {
        name: "تهيئة ملف Google للأعمال",
        priceTRY: "₺2,500",
        priceUSD: "$70",
        detail: "إنشاء وضبط ملف نشاطك التجاري على خرائط جوجل لظهور محلي مميز",
      },
    ],
  };

  return {
    websites: websites[locale] || websites.en,
    carePlans: carePlans[locale] || carePlans.en,
    addOns: addOns[locale] || addOns.en,
  };
}

export interface SecurityChecklistItem {
  title: string;
  description: string;
}

export function getSecurityChecklist(locale: Locale): SecurityChecklistItem[] {
  const data: Record<Locale, SecurityChecklistItem[]> = {
    en: [
      {
        title: "Strict Security Headers (A+ Rated)",
        description: "Hardened Content-Security-Policy (CSP), HSTS, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy out of the box.",
      },
      {
        title: "Automated Off-Site Backups",
        description: "Scheduled snapshots of your site database and assets, with tested one-click restore readiness.",
      },
      {
        title: "Spam & Exploit Protected Forms",
        description: "Intelligent honeypot field traps and IP rate-limiting that block spam bots without annoying captcha challenges for legitimate clients.",
      },
      {
        title: "KVKK & GDPR Compliant Data Flow",
        description: "Legal consent controls, secure HTTPS transmission, and zero unneeded third-party tracking scripts.",
      },
      {
        title: "Zero-Trust HTTPS & Modern TLS",
        description: "Strict SSL/TLS 1.3 encryption with automatic certificate renewals and enforced secure redirection.",
      },
      {
        title: "Written Pre-Launch Hardening Report",
        description: "Every website launch includes a verified security report confirming tests passed before going live.",
      },
    ],
    tr: [
      {
        title: "Sıkı Güvenlik Başlıkları (A+ Derecesi)",
        description: "Varsayılan olarak yapılandırılmış CSP, HSTS, X-Content-Type-Options ve Referrer-Policy güvenlik başlıkları.",
      },
      {
        title: "Otomatik Bulut Yedekleme",
        description: "Veritabanınızın ve varlıklarınızın planlı yedekleri ve test edilmiş tek tıkla geri yükleme altyapısı.",
      },
      {
        title: "Spam ve Bot Korumalı Formlar",
        description: "Ziyaretçiyi yormayan görünmez honeypot tuzakları ve hız sınırlaması (rate limiting) ile sıfır spam.",
      },
      {
        title: "KVKK & GDPR Uyumlu Veri İşleme",
        description: "Yasal mevzuata uygun aydınlatma metinleri, güvenli veri aktarımı ve gizlilik odaklı mimari.",
      },
      {
        title: "Sıfır Güven HTTPS & TLS 1.3",
        description: "Otomatik yenilenen SSL sertifikası ve zorunlu şifreli bağlantı ile güvenli iletişim.",
      },
      {
        title: "Yayına Çıkış Öncesi Güvenlik Raporu",
        description: "Her web sitesi tesliminde yapılan güvenlik kontrollerini belgeleyen yazılı onay raporu.",
      },
    ],
    fr: [
      {
        title: "En-Têtes de Sécurité Stricts (Note A+)",
        description: "Configuration native de CSP, HSTS, X-Content-Type-Options et Referrer-Policy pour un score maximal.",
      },
      {
        title: "Sauvegardes Automatiques Déportées",
        description: "Copies de sécurité programmées de vos données et fichiers avec procédure de restauration testée.",
      },
      {
        title: "Formulaires Protégés Contre les Spams",
        description: "Champs pièges (honeypot) et limitation de débit pour bloquer les robots sans imposer de captchas pénibles.",
      },
      {
        title: "Conformité RGPD & Données Protégées",
        description: "Gestion respectueuse des données, transferts chiffrés et aucun script de pistage invasif superflu.",
      },
      {
        title: "HTTPS Strict & Chiffrement Moderne",
        description: "Certificats SSL avec renouvellement automatique et redirection chiffrée obligatoire.",
      },
      {
        title: "Rapport de Sécurité Écrit Avant Lancement",
        description: "Chaque livraison s'accompagne d'un rapport de validation vérifiant la solidité de votre plateforme.",
      },
    ],
    ar: [
      {
        title: "ترويسات أمان صارمة (تقييم A+ معتمد)",
        description: "ضبط مباشر لبروتوكولات CSP وHSTS وX-Content-Type-Options لمنع هجمات الحقن والتصيد.",
      },
      {
        title: "نسخ احتياطي سحابي تلقائي",
        description: "جدولة دورية لحفظ نسخ الموقع وقواعد البيانات مع آلية استعادة سريعة مجربة.",
      },
      {
        title: "حماية النماذج من السبام والروبوتات",
        description: "مصائد برمجية ذكية (Honeypot) وحدود معدل الإرسال لمنع الإزعاج دون إرهاق العملاء باختبارات كابتشا.",
      },
      {
        title: "معالجة بيانات متوافقة مع لوائح الخصوصية",
        description: "نقل بيانات مشفر بالكامل، إشعارات قانونية واضحة، وعدم استخدام أي برمجيات تتبع غير ضرورية.",
      },
      {
        title: "تشفير HTTPS وTLS 1.3 صارم",
        description: "تجديد تلقائي لشهادات الأمان وتحويل إجباري لكل الاتصالات إلى روابط مشفرة وآمنة.",
      },
      {
        title: "تقرير تحصين كتابي قبل الإطلاق",
        description: "نسلّم كل مشروع مع تقرير تدقيق أمني كتابي يؤكد جاهزية الموقع وخلوه من الثغرات.",
      },
    ],
  };

  return data[locale] || data.en;
}

export interface LocalizedWork {
  id: string;
  badge: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  kind: "website" | "brand" | "app";
  demoUrl?: string;
  isConcept: boolean;
}

export function getWorkItems(locale: Locale): LocalizedWork[] {
  const data: Record<Locale, LocalizedWork[]> = {
    en: [
      {
        id: "north",
        badge: "Concept · Corporate Website",
        title: "North Studio — Architecture & Design Practice",
        problem: "The practice needed a calm, editorial website to showcase high-value architectural projects and convert private inquiries without cluttered layouts.",
        solution: "Built a lightning-fast responsive website with high-contrast typography, crisp visual grid, WhatsApp lead capture, and A+ security headers.",
        result: "Clean 5-page structure, sub-second load speed, and friction-free inquiry pathways.",
        kind: "website",
        isConcept: true,
      },
      {
        id: "formfield",
        badge: "Concept · Brand Starter Kit",
        title: "Form & Field — Everyday Living Objects",
        problem: "A new lifestyle brand required a cohesive visual identity, typography system, and colour palette before launching its web storefront.",
        solution: "Crafted a minimalist logo suite, warm neutral color palette, typography guidelines, and digital stationery templates designed for immediate web implementation.",
        result: "Complete ready-to-use brand starter kit paired seamlessly with the web rollout.",
        kind: "brand",
        isConcept: true,
      },
      {
        id: "atlas",
        badge: "Concept · Operations Dashboard",
        title: "Atlas — Operations & Fleet Telemetry",
        problem: "A regional logistics team needed an intuitive operational dashboard to monitor key status indicators without bloated enterprise software costs.",
        solution: "Designed and engineered a focused Next.js web application with role-based authentication, real-time status cards, and clean CSV reporting.",
        result: "Interactive working demo with responsive layouts and sub-second data filtering.",
        kind: "app",
        isConcept: true,
      },
    ],
    tr: [
      {
        id: "north",
        badge: "Konsept · Kurumsal Web Sitesi",
        title: "North Studio — Mimarlık ve Tasarım Stüdyosu",
        problem: "Stüdyonun yüksek bütçeli projelerini sergilemek ve doğrudan müşteri talebi toplamak için sakin, tipografik ve hızlı bir kurumsal web sitesine ihtiyacı vardı.",
        solution: "Ziyaretçiyi yormayan net hiyerarşi, WhatsApp doğrudan iletişim butonu, harita entegrasyonu ve A+ güvenlik başlıklarına sahip modern bir web sitesi inşa edildi.",
        result: "1 saniyenin altında açılış hızı, 5 sayfalık net yapı ve yüksek dönüşüm odaklı iletişim yolları.",
        kind: "website",
        isConcept: true,
      },
      {
        id: "formfield",
        badge: "Konsept · Marka Başlangıç Kiti",
        title: "Form & Field — Yaşam ve Tasarım Ürünleri",
        problem: "Yeni bir yaşam markasının web sitesi açılışı öncesinde tutarlı bir logo sistemine, renk paletine ve tipografi rehberine ihtiyacı vardı.",
        solution: "Sade ve akılda kalıcı logo ailesi, doğal renk paleti, kurumsal font hiyerarşisi ve dijital şablonlardan oluşan bir başlangıç kiti hazırlandı.",
        result: "Web sitesine doğrudan entegre edilmeye hazır eksiksiz bir marka başlangıç paketi.",
        kind: "brand",
        isConcept: true,
      },
      {
        id: "atlas",
        badge: "Konsept · Operasyon Paneli",
        title: "Atlas — Operasyon ve Filo Takip Paneli",
        problem: "Bölgesel bir lojistik ekibinin, karmaşık kurumsal yazılımlara servet ödemeden günlük operasyonel verilerini izleyebileceği sade bir panele ihtiyacı vardı.",
        solution: "Yetkilendirme altyapısı, anlık durum kartları ve CSV veri dışa aktarımı sunan hızlı bir Next.js web uygulaması geliştirildi.",
        result: "Mobil ve masaüstünde sorunsuz çalışan canlı interaktif demo kontrol paneli.",
        kind: "app",
        isConcept: true,
      },
    ],
    fr: [
      {
        id: "north",
        badge: "Concept · Site Corporate",
        title: "North Studio — Studio d'Architecture & Design",
        problem: "Le cabinet avait besoin d'un site éditorial raffiné pour présenter ses projets majeurs et convertir des demandes sans fioritures.",
        solution: "Développement d'un site ultra-rapide avec hiérarchie typographique forte, prise de contact WhatsApp et en-têtes de sécurité A+.",
        result: "Structure épurée de 5 pages, affichage quasi-instantané et parcours de contact direct.",
        kind: "website",
        isConcept: true,
      },
      {
        id: "formfield",
        badge: "Concept · Kit de Marque",
        title: "Form & Field — Objets du Quotidien",
        problem: "Une nouvelle marque lifestyle nécessitait une identité visuelle cohérente et des palettes de couleurs avant le lancement de sa vitrine en ligne.",
        solution: "Conception d'une suite de logos minimaliste, palette de tons naturels et directives d'application digitale prêtes pour le web.",
        result: "Kit de marque clé en main intégré directement au développement du site.",
        kind: "brand",
        isConcept: true,
      },
      {
        id: "atlas",
        badge: "Concept · Tableau de Bord",
        title: "Atlas — Télémétrie & Opérations",
        problem: "Une équipe logistique souhaitait suivre ses métriques opérationnelles clés sans les coûts disproportionnés des logiciels d'entreprise lourds.",
        solution: "Création d'une application web Next.js ciblée avec authentification, indicateurs en temps réel et export de données.",
        result: "Démonstration fonctionnelle interactive fluide et réactive sur tous les écrans.",
        kind: "app",
        isConcept: true,
      },
    ],
    ar: [
      {
        id: "north",
        badge: "تصور · موقع شركة معماري",
        title: "North Studio — استوديو العمارة والتصميم",
        problem: "كان الاستوديو بحاجة إلى موقع إلكتروني هادئ وأنيق لعرض مشاريعه المعمارية الكبرى وتحويل استفسارات العملاء دون تعقيد بصري.",
        solution: "بناء موقع متجاوب فائق السرعة بتنظيم طباعي واضح، وتواصل فوري عبر واتساب، مع ترويسات أمان معتمدة بدرجة A+.",
        result: "هيكل متكامل من 5 صفحات، وسرعة تحميل أقل من ثانية، ومسارات تواصل واضحة ومباشرة.",
        kind: "website",
        isConcept: true,
      },
      {
        id: "formfield",
        badge: "تصور · حزمة هوية بصرية أولية",
        title: "Form & Field — منتجات الحياة اليومية",
        problem: "احتاجت علامة تجارية ناشئة إلى هوية بصرية متناسقة، لوحة ألوان دافئة، ودليل خطوط قبل إطلاق متجرها الرقمي.",
        solution: "تصميم حزمة شعار مبسّطة، لوحة ألوان طبيعية، ونظام خطوط رقمي معد للاستخدام المباشر على الويب.",
        result: "حزمة هوية متكاملة وجاهزة تم ربطها بسلاسة مع انطلاق الموقع الإلكتروني.",
        kind: "brand",
        isConcept: true,
      },
      {
        id: "atlas",
        badge: "تصور · لوحة تحكم تشغيلية",
        title: "Atlas — متابعة العمليات والأسطول",
        problem: "احتاج فريق لوجستي إقليمي إلى لوحة تحكم واضحة لمتابعة مؤشرات الأداء التشغيلية دون تكاليف البرمجيات الضخمة والمعقدة.",
        solution: "تصميم وبرمجة تطبيق ويب تفاعلي بتقنية Next.js مع صلاحيات دخول آمنة، بطاقات مؤشرات حية، وتصدير فوري للبيانات.",
        result: "نموذج تجريبي تفاعلي يعمل بكفاءة وسرعة عبر مختلف الشاشات.",
        kind: "app",
        isConcept: true,
      },
    ],
  };

  return data[locale] || data.en;
}

export interface LocalizedProcessStep {
  index: string;
  title: string;
  timeline: string;
  deliverables: string;
  clientNeeds: string;
}

export function getProcessSteps(locale: Locale): LocalizedProcessStep[] {
  const data: Record<Locale, LocalizedProcessStep[]> = {
    en: [
      {
        index: "01",
        title: "Discover",
        timeline: "Days 1–2",
        deliverables: "20-minute kickoff call, written scope, timeline & 50% deposit confirmation.",
        clientNeeds: "What I need: Your logo (if available), any existing text/photos, and your business goals.",
      },
      {
        index: "02",
        title: "Design",
        timeline: "Days 3–6",
        deliverables: "Mobile & desktop responsive wireframes and high-fidelity prototype, with two structured revision rounds.",
        clientNeeds: "What I need: Your clear feedback and direction on layout, tone, and brand details.",
      },
      {
        index: "03",
        title: "Develop",
        timeline: "Days 7–12",
        deliverables: "Fast, accessible code, WhatsApp & Maps integrations, SEO configuration, and security headers.",
        clientNeeds: "What I need: Domain and hosting access (or I guide you through direct signup).",
      },
      {
        index: "04",
        title: "Deliver",
        timeline: "Day 14",
        deliverables: "Live deployment, DNS connection, full 100% asset handover, followed by 30 days of free bug fixes.",
        clientNeeds: "What I need: Final review approval and remaining balance transfer.",
      },
    ],
    tr: [
      {
        index: "01",
        title: "Keşif",
        timeline: "1.–2. Gün",
        deliverables: "20 dakikalık başlangıç görüşmesi, yazılı kapsam belgesi, takvim ve %50 peşinat onayı.",
        clientNeeds: "Sizden gerekenler: Varsa logonuz, eldeki metin/fotoğraflar ve işletme hedefleriniz.",
      },
      {
        index: "02",
        title: "Tasarım",
        timeline: "3.–6. Gün",
        deliverables: "Mobil ve masaüstü uyumlu arayüz prototipleri ve 2 turlu planlı revizyon süreci.",
        clientNeeds: "Sizden gerekenler: Tasarım yönü ve renkler üzerine net geri bildirimleriniz.",
      },
      {
        index: "03",
        title: "Geliştirme",
        timeline: "7.–12. Gün",
        deliverables: "Hızlı ve temiz kodlama, WhatsApp ve harita entegrasyonu, temel SEO ve güvenlik sıkılaştırması.",
        clientNeeds: "Sizden gerekenler: Alan adı veya barındırma bilgileri (yoksa doğrudan açılışı birlikte yaparız).",
      },
      {
        index: "04",
        title: "Teslim",
        timeline: "14. Gün",
        deliverables: "Canlı yayına alma, tüm dosya ve kodların %100 eksiksiz teslimi ve 30 gün ücretsiz hata desteği.",
        clientNeeds: "Sizden gerekenler: Son onay ve kalan ödemenin tamamlanması.",
      },
    ],
    fr: [
      {
        index: "01",
        title: "Découverte",
        timeline: "Jours 1–2",
        deliverables: "Appel de 20 min, périmètre écrit précis, calendrier et confirmation d'acompte de 50 %.",
        clientNeeds: "Ce dont j'ai besoin : Votre logo (si existant), vos textes/photos et vos objectifs.",
      },
      {
        index: "02",
        title: "Conception",
        timeline: "Jours 3–6",
        deliverables: "Prototypes interactifs mobile et bureau, avec deux étapes de révisions structurées.",
        clientNeeds: "Ce dont j'ai besoin : Vos retours clairs sur les maquettes et le ton général.",
      },
      {
        index: "03",
        title: "Développement",
        timeline: "Jours 7–12",
        deliverables: "Code propre et ultra-rapide, intégration WhatsApp & Maps, SEO et sécurisation stricte.",
        clientNeeds: "Ce dont j'ai besoin : Vos accès hébergement/domaine (ou accompagnement direct).",
      },
      {
        index: "04",
        title: "Livraison",
        timeline: "Jour 14",
        deliverables: "Mise en ligne, cession totale du code et des fichiers, puis 30 jours de support offert.",
        clientNeeds: "Ce dont j'ai besoin : Validation finale et règlement du solde convenu.",
      },
    ],
    ar: [
      {
        index: "01",
        title: "الاكتشاف والتخطيط",
        timeline: "اليومان 1–2",
        deliverables: "مكالمة انطلاق لمدة 20 دقيقة، نطاق عمل وجدول زمني مكتوب، واعتماد الدفعة الأولى 50%.",
        clientNeeds: "المطلوب منك: شعارك (إن وُجد)، أي نصوص أو صور متوفرة، وتوضيح أهداف نشاطك التجاري.",
      },
      {
        index: "02",
        title: "التصميم والتجربة",
        timeline: "الأيام 3–6",
        deliverables: "نماذج تفاعلية متجاوبة للشاشات والهواتف الذكية مع جولتي مراجعة منظمتين.",
        clientNeeds: "المطلوب منك: ملاحظاتك وتوجيهاتك الواضحة حول التصميم وتفاصيل الهوية.",
      },
      {
        index: "03",
        title: "البرمجة والتحصين",
        timeline: "الأيام 7–12",
        deliverables: "برمجة نظيفة فائقة السرعة، ربط واتساب والخرائط، ضبط محركات البحث، وتحصين الأمان.",
        clientNeeds: "المطلوب منك: بيانات النطاق والاستضافة (أو إرشادك لحجزها مباشرة باسمك).",
      },
      {
        index: "04",
        title: "التسليم والإطلاق",
        timeline: "اليوم 14",
        deliverables: "إطلاق الموقع على الهواء، تسليم كامل الأصول والبرمجيات بنسبة 100%، مع 30 يوم دعم فني مجاني.",
        clientNeeds: "المطلوب منك: الاعتماد النهائي وتحويل الدفعة المتبقية.",
      },
    ],
  };

  return data[locale] || data.en;
}

export interface LocalizedFaq {
  q: string;
  a: string;
}

export function getFaqs(locale: Locale): LocalizedFaq[] {
  const data: Record<Locale, LocalizedFaq[]> = {
    en: [
      {
        q: "How is a project priced?",
        a: "Fixed price per package. You receive a clear written scope and timeline before any work starts. We work with a 50% deposit to book your sprint, and the remaining 50% upon delivery (or 40/30/30 for projects above ₺50,000 / $1,500).",
      },
      {
        q: "How long does a website take to build?",
        a: "A focused landing page takes 5 to 7 days. A standard business website takes 10 to 14 days. Comprehensive corporate websites or e-commerce stores take 3 to 5 weeks.",
      },
      {
        q: "What do you need from me to get started?",
        a: "Your logo (if you have one), your text and photos, and a 20-minute kickoff call. If you don't have finished text, I can write professional, conversion-focused copy for an extra fee (₺1,500 / $40 per page).",
      },
      {
        q: "Do you provide support after launch?",
        a: "Yes. Every project includes 30 days of free bug fixes and adjustments after going live. After that, optional care and security plans are available starting at ₺1,500/month ($60/month).",
      },
      {
        q: "Which languages do you work in?",
        a: "NEXARO works natively in English, Turkish, French, and Arabic. I can build fully multilingual sites with localized URL routing (/tr, /fr, /ar).",
      },
      {
        q: "Who owns the website and code?",
        a: "You do. You own 100% of the code, design, assets, and content. Everything is handed over completely upon launch, with no vendor lock-in.",
      },
      {
        q: "What if I don't like the initial design?",
        a: "Two structured revision rounds are included in every package. You see and approve responsive wireframes and interactive prototypes before development begins, so there are never surprises.",
      },
      {
        q: "Do you work with international clients?",
        a: "Yes. I frequently partner with businesses across Europe, the Gulf, and North America. International projects are priced in USD with secure invoice payments.",
      },
    ],
    tr: [
      {
        q: "Proje fiyatlandırması nasıl belirlenir?",
        a: "Paket başına sabit fiyat uygulanır. İşe başlamadan önce kapsamı ve takvimi net olarak belirlenmiş yazılı bir teklif alırsınız. %50 peşinat ile başlar, kalan %50'yi teslimatta ödersiniz (₺50,000 üzeri projelerde 40/30/30 aşamalı ödeme uygulanır).",
      },
      {
        q: "Bir web sitesinin tamamlanması ne kadar sürer?",
        a: "Odaklı bir açılış sayfası (landing page) 5–7 gün, 5 sayfalık bir işletme web sitesi 10–14 gün sürer. Kapsamlı kurumsal siteler veya e-ticaret projeleri ise 3–5 hafta içinde tamamlanır.",
      },
      {
        q: "Başlamak için benden ne gerekiyor?",
        a: "Varsa logonuz, metinleriniz, fotoğraflarınız ve 20 dakikalık bir başlangıç görüşmesi. Metinleriniz henüz hazır değilse, sayfa başına ₺1,500 ek ücretle profesyonel dönüşüm odaklı metin yazımı hizmeti sağlayabilirim.",
      },
      {
        q: "Yayından sonra teknik destek sağlıyor musunuz?",
        a: "Evet. Tüm projeler canlıya alındıktan sonra 30 gün boyunca ücretsiz hata düzeltme ve destek içerir. Sonrasında isteğe bağlı olarak aylık ₺1,500'den başlayan bakım ve güvenlik planlarımızdan yararlanabilirsiniz.",
      },
      {
        q: "Hangi dillerde hizmet veriyorsunuz?",
        a: "NEXARO Türkçe, İngilizce, Fransızca ve Arapça dillerinde akıcı hizmet vermektedir. Web siteniz için ayrı arama dostu URL'ler (/en, /fr, /ar) ile çok dilli altyapı kurabilirim.",
      },
      {
        q: "Web sitesinin ve kodların mülkiyeti kime ait?",
        a: "Tamamen size ait. Kodlar, tasarımlar ve içerikler dahil her şey %100 size aittir. Herhangi bir stüdyo bağımlılığı olmadan tüm kaynak dosyalar eksiksiz teslim edilir.",
      },
      {
        q: "Tasarımı beğenmezsem ne olacak?",
        a: "Her pakette 2 turlu planlı revizyon süreci dahildir. Kodlama aşamasına geçmeden önce görsel prototipleri birlikte inceler ve onayınızla ilerleriz; bu sayede beklenmedik sürprizler yaşanmaz.",
      },
      {
        q: "Yurt dışından müşterilerle çalışıyor musunuz?",
        a: "Evet. Avrupa, Körfez ve Kuzey Amerika'daki işletmelerle düzenli olarak çalışıyorum. Uluslararası müşteriler için USD cinsinden şeffaf fiyatlandırma ve güvenli faturalama uygulanmaktadır.",
      },
    ],
    fr: [
      {
        q: "Comment les tarifs sont-ils calculés ?",
        a: "Prix fixe par formule. Vous recevez un périmètre écrit et un calendrier précis avant tout démarrage. Nous fonctionnons avec un acompte de 50 % au lancement, et 50 % à la livraison (ou 40/30/30 pour les projets supérieurs à ₺50,000 / $1,500).",
      },
      {
        q: "Combien de temps prend la création d'un site ?",
        a: "Une page d'atterrissage ciblée prend 5 à 7 jours. Un site vitrine d'entreprise prend 10 à 14 jours. Les sites corporate complets ou boutiques e-commerce nécessitent 3 à 5 semaines.",
      },
      {
        q: "De quoi avez-vous besoin pour commencer ?",
        a: "Votre logo (si existant), vos textes, vos photos et un échange initial de 20 minutes. Si vos textes ne sont pas rédigés, je propose un service de rédaction persuasive (₺1,500 / $40 par page).",
      },
      {
        q: "Proposez-vous une assistance après le lancement ?",
        a: "Oui. Chaque projet inclut 30 jours de corrections et d'ajustements gratuits après la mise en ligne. Par la suite, des formules de maintenance optionnelles débutent à ₺1,500 / mois ($60/mois).",
      },
      {
        q: "Dans quelles langues pouvez-vous collaborer ?",
        a: "NEXARO travaille couramment en français, anglais, turc et arabe, avec une structure d'URL dédiée par langue (/fr, /tr, /ar) pour un référencement optimal.",
      },
      {
        q: "À qui appartient le site web et le code ?",
        a: "À vous, à 100 %. Vous possédez l'intégralité du code source, des maquettes et des contenus sans aucune dépendance ni abonnement captif.",
      },
      {
        q: "Que se passe-t-il si le design initial ne me convient pas ?",
        a: "Deux tours complets de révisions sont inclus. Vous validez les prototypes interactifs avant tout développement technique, ce qui évite toute mauvaise surprise.",
      },
      {
        q: "Travaillez-vous avec des clients internationaux ?",
        a: "Oui, régulièrement avec des entreprises en France, en Europe, au Moyen-Orient et en Amérique du Nord, avec tarification en USD et paiement sécurisé.",
      },
    ],
    ar: [
      {
        q: "كيف يتم تحديد أسعار المشاريع؟",
        a: "سعر ثابت ومحدد لكل باقة. تستلم وثيقة نطاق عمل وجدولًا زمنيًا واضحين قبل بدء العمل. نبدأ بدفعة 50% لحجز فترة العمل، وتُدفع الـ 50% المتبقية عند التسليم (أو بنظام 40/30/30 للمشاريع التي تتجاوز ₺50,000 / $1,500).",
      },
      {
        q: "كم يستغرق إنجاز وبرمجة الموقع؟",
        a: "تستغرق صفحة الهبوط المركزة من 5 إلى 7 أيام. وموقع الأعمال القياسي (حتى 5 صفحات) من 10 إلى 14 يومًا. بينما تستغرق مواقع الشركات الكبرى أو المتاجر الإلكترونية من 3 إلى 5 أسابيع.",
      },
      {
        q: "ما المطلوب مني لبدء المشروع؟",
        a: "شعارك (إن وجد)، نصوصك وصورك، ومكالمة انطلاق لمدة 20 دقيقة. وإذا لم تكن النصوص جاهزة، يمكنني كتابة محتوى تسويقي احترافي مقابل ₺1,500 / $40 لكل صفحة.",
      },
      {
        q: "هل توفرون دعمًا فنيًا بعد إطلاق الموقع؟",
        a: "نعم. يتضمن كل مشروع 30 يومًا من الدعم الفني المجاني وإصلاح الأخطاء بعد الإطلاق الحي. بعد ذلك، يمكنك الاشتراك اختياريًا في باقات الرعاية والأمان ابتداءً من ₺1,500 شهريًا ($60 شهريًا).",
      },
      {
        q: "ما اللغات التي تعمل بها استوديو NEXARO؟",
        a: "نعمل بطلاقة باللغات الإنجليزية، التركية، الفرنسية، والعربية، مع إمكانية بناء مواقع متعددة اللغات بروابط مستقلة ومفهرسة (/tr, /fr, /ar).",
      },
      {
        q: "لمن تعود ملكية الموقع البرمجي والتصميم؟",
        a: "لك بالكامل 100%. تمتلك الكود المصدري، التصاميم، والمحتوى دون أي قيود أو اشتراكات إلزامية أو احتكار.",
      },
      {
        q: "ماذا لو لم يعجبني التصميم المبدئي؟",
        a: "تتضمن كل باقة جولتي مراجعة وتعديل مفصلتين. تشاهد وتعتمد النماذج التفاعلية قبل البدء في كتابة الكود البرمجي، مما يضمن توافق الرؤية تمامًا دون مفاجآت.",
      },
      {
        q: "هل تعملون مع عملاء خارج تركيا؟",
        a: "نعم بالتأكيد. نعمل باستمرار مع رواد أعمال وشركات في الخليج العربي، أوروبا، وأمريكا الشمالية، مع تسعير بالدولار الأمريكي وطرق دفع دولية آمنة.",
      },
    ],
  };

  return data[locale] || data.en;
}

export function getServiceOptions(locale: Locale): string[] {
  const options: Record<Locale, string[]> = {
    en: [
      "New Website (Landing / Business / Corporate / E-Commerce)",
      "Free Website Audit (Security & Speed Check)",
      "Website Security Audit & Hardening (₺6,000 / $200)",
      "Care & Maintenance Plan (From ₺1,500/mo / $60/mo)",
      "Custom Web App / Paid Discovery",
      "Other / Consultation",
    ],
    tr: [
      "Yeni Web Sitesi (Açılış / İşletme / Kurumsal / E-Ticaret)",
      "Ücretsiz Web Sitesi Ön Denetimi (Güvenlik & Hız)",
      "Web Sitesi Güvenlik Denetimi & Sıkılaştırma (₺6,000 / $200)",
      "Bakım ve Güvenlik Planı (₺1,500/ay'dan itibaren)",
      "Özel Web Uygulaması / Keşif Süreci",
      "Diğer / Danışmanlık",
    ],
    fr: [
      "Nouveau Site Web (Landing / Entreprise / Corporate / E-Commerce)",
      "Audit Gratuit de Site Web (Sécurité & Vitesse)",
      "Audit de Sécurité & Renforcement (₺6,000 / $200)",
      "Formule de Maintenance & Sécurité (Dès ₺1,500/mois / $60/mois)",
      "Application Web Sur-Mesure / Cadrage Payant",
      "Autre / Conseil",
    ],
    ar: [
      "موقع ويب جديد (صفحة هبوط / أعمال / شركات / متجر إلكتروني)",
      "فحص مجاني أولي للموقع (الأمان والسرعة)",
      "فحص وتحصين أمان الموقع (₺6,000 / $200)",
      "باقة صيانة ورعاية شهرية (ابتداءً من ₺1,500 / شهريًا)",
      "تطبيق ويب مخصص / جلسة اكتشاف مدفوعة",
      "أمر آخر / استشارة تقنية",
    ],
  };

  return options[locale] || options.en;
}
