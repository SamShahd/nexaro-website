import type { Locale, ServiceId } from "./types";

export const studio = {
  name: "NEXARO",
  email: "belhadjshahd9@gmail.com",
  phone: "+90 543 459 79 73",
  phoneRaw: "+905434597973",
  whatsappUrl: "https://wa.me/905434597973",
  city: "Istanbul, Türkiye",
  linkedIn: "https://www.linkedin.com/in/shahdbelhadj/",
  founder: {
    name: "Shahd Belhadj",
    initials: "SB",
    role: "Founder & Lead Engineer",
    image: "/shahd-belhadj.jpg",
  },
};

export const navItems = [
  { href: "#services", key: "nav.services" },
  { href: "#work", key: "nav.work" },
  { href: "#pricing", key: "nav.pricing" },
  { href: "#process", key: "nav.process" },
  { href: "#founder", key: "nav.founder" },
  { href: "#contact", key: "nav.contact" },
] as const;

export interface LocalizedService {
  id: ServiceId;
  index: string;
  tag: string;
  symbol: string;
  title: string;
  summary: string;
  tags: string[];
  details: string;
}

export function getServices(locale: Locale): LocalizedService[] {
  const data: Record<Locale, LocalizedService[]> = {
    en: [
      {
        id: "web",
        index: "01",
        tag: "DIGITAL",
        symbol: "↗",
        title: "Websites that work as hard as you do.",
        summary: "Fast, clear digital storefronts built to turn visitors into enquiries and customers.",
        tags: ["Business Sites", "E-Commerce", "SEO Basics", "Fast Load"],
        details: "Responsive landing pages, corporate websites, multilingual platforms, online stores, redesigns, and continuous maintenance. Engineered for conversion and search visibility.",
      },
      {
        id: "brand",
        index: "02",
        tag: "BRAND",
        symbol: "✳",
        title: "Make your brand instantly recognizable.",
        summary: "A distinct visual identity that feels consistent wherever people meet your business.",
        tags: ["Logo Systems", "Typography", "Color Palettes", "Brand Guides"],
        details: "Original logo design, cohesive visual identities, typography guidelines, social media kit templates, and comprehensive brand-use systems.",
      },
      {
        id: "content",
        index: "03",
        tag: "CONTENT",
        symbol: "◌",
        title: "Show up online with a clear point of view.",
        summary: "Social content and campaign assets designed to make your message feel unmistakably yours.",
        tags: ["Social Content", "Campaigns", "Short Video", "Art Direction"],
        details: "Branded social assets, content calendars, promotional graphics, print-ready artwork, and vertical short-form video editing for modern platforms.",
      },
      {
        id: "software",
        index: "04",
        tag: "STRATEGY",
        symbol: "⌘",
        title: "Turn ideas into measurable growth.",
        summary: "Purpose-driven strategy, customer insights and performance focused solutions.",
        tags: ["Strategy & Consulting", "Analytics", "Growth"],
        details: "Data-informed product strategy, high-converting digital architectures, automated dashboards, and growth engines built for long-term momentum.",
      },
      {
        id: "documents",
        index: "05",
        tag: "DOCUMENTS",
        symbol: "◆",
        title: "Present your experience with confidence.",
        summary: "Polished documents and personal-brand assets that make your story easy to understand.",
        tags: ["CV & LinkedIn", "Pitch Decks", "Proposals", "Company Profiles"],
        details: "Executive CVs, cover letters, LinkedIn positioning, investor pitch decks, and commercial proposals designed for maximum credibility.",
      },
      {
        id: "support",
        index: "06",
        tag: "SUPPORT",
        symbol: "＋",
        title: "Keep your digital presence in good shape.",
        summary: "Practical technical guidance, security maintenance, and steady support after launch.",
        tags: ["Maintenance", "Security Checks", "Troubleshooting", "Consulting"],
        details: "Routine updates, performance health checks, technical troubleshooting, security best practices, and ongoing advisory allowances.",
      },
    ],
    tr: [
      {
        id: "web",
        index: "01",
        tag: "DİJİTAL",
        symbol: "↗",
        title: "Sizin kadar iyi çalışan web siteleri.",
        summary: "Ziyaretçileri müşteriye dönüştüren hızlı, anlaşılır ve modern dijital vitrinler.",
        tags: ["Kurumsal Siteler", "E-Ticaret", "Temel SEO", "Hızlı Yükleme"],
        details: "Mobil uyumlu açılış sayfaları, kurumsal web siteleri, çok dilli platformlar, e-ticaret mağazaları ve web sitesi yenileme hizmetleri.",
      },
      {
        id: "brand",
        index: "02",
        tag: "MARKA",
        symbol: "✳",
        title: "Markanızı hemen tanınır kılın.",
        summary: "İşletmenizin her temas noktasında tutarlı ve özgün görünen güçlü bir görsel kimlik.",
        tags: ["Logo Sistemleri", "Tipografi", "Renk Paleti", "Marka Kiti"],
        details: "Özgün logo tasarımı, kurumsal kimlik sistemleri, sosyal medya şablonları, kartvizit ve kapsamlı marka kullanım kılavuzu.",
      },
      {
        id: "content",
        index: "03",
        tag: "İÇERİK",
        symbol: "◌",
        title: "Dijitalde kendinizi net ifade edin.",
        summary: "Mesajınızı özgün kılan sosyal medya içerikleri ve dikkat çekici kampanya tasarımları.",
        tags: ["Sosyal Medya", "Kampanyalar", "Kısa Video", "Görsel Tasarım"],
        details: "Markanıza özel sosyal medya tasarımları, içerik takvimi, kampanya grafikleri, baskı hazırlıkları ve dikey kısa video kurguları.",
      },
      {
        id: "software",
        index: "04",
        tag: "YAZILIM",
        symbol: "⌘",
        title: "Karmaşık süreçleri kullanışlı ürünlere dönüştürün.",
        summary: "Ekiplerin daha verimli çalışmasına ve işinizi büyütmenize yardımcı olan özel uygulamalar.",
        tags: ["Web Uygulamaları", "Müşteri Paneli", "MVP Ürünler", "Dashboard"],
        details: "İş süreçlerinizi kolaylaştıran web tabanlı yönetim panelleri, özel yazılımlar, güvenli veritabanı ve MVP dijital platformlar.",
      },
      {
        id: "documents",
        index: "05",
        tag: "BELGELER",
        symbol: "◆",
        title: "Deneyiminizi güvenle sunun.",
        summary: "Hikâyenizi daha anlaşılır ve ikna edici kılan profesyonel belgeler ve kişisel marka tasarımları.",
        tags: ["CV ve LinkedIn", "Yatırımcı Sunumu", "Teklifler", "Şirket Profili"],
        details: "Yönetici CV tasarımları, LinkedIn profil konumlandırması, şirket tanıtım dosyaları ve yatırımcı sunumları.",
      },
      {
        id: "support",
        index: "06",
        tag: "DESTEK",
        symbol: "＋",
        title: "Dijital varlığınızı güçlü tutun.",
        summary: "Pratik teknik danışmanlık, güvenlik kontrolleri, bakım ve yayından sonra sürekli destek.",
        tags: ["Bakım", "Güvenlik Kontrolü", "Sorun Giderme", "Danışmanlık"],
        details: "Düzenli güncellemeler, site sağlığı kontrolleri, hızlı sorun giderme ve teknik danışmanlık desteği.",
      },
    ],
    fr: [
      {
        id: "web",
        index: "01",
        tag: "DIGITAL",
        symbol: "↗",
        title: "Des sites web aussi performants que vous.",
        summary: "Des vitrines numériques rapides et claires qui convertissent vos visiteurs en clients.",
        tags: ["Sites Vitrines", "E-Commerce", "SEO de Base", "Haute Vitesse"],
        details: "Pages d'atterrissage réactives, sites d'entreprise, plateformes multilingues, boutiques en ligne et refontes complètes.",
      },
      {
        id: "brand",
        index: "02",
        tag: "MARQUE",
        symbol: "✳",
        title: "Rendez votre marque immédiatement reconnaissable.",
        summary: "Une identité visuelle distinctive et cohérente sur tous vos points de contact.",
        tags: ["Systèmes de Logo", "Typographie", "Palettes Couleurs", "Kits de Marque"],
        details: "Création de logos originaux, chartes graphiques, déclinaisons sur supports, modèles sociaux et directives d'utilisation.",
      },
      {
        id: "content",
        index: "03",
        tag: "CONTENU",
        symbol: "◌",
        title: "Affirmez votre présence en ligne.",
        summary: "Des contenus sociaux et supports de campagne qui portent clairement votre signature.",
        tags: ["Réseaux Sociaux", "Campagnes", "Vidéo Courte", "Design Graphique"],
        details: "Créations graphiques pour les réseaux, calendriers de contenu, supports promotionnels et montage vidéo vertical.",
      },
      {
        id: "software",
        index: "04",
        tag: "LOGICIEL",
        symbol: "⌘",
        title: "Transformez vos processus en outils concrets.",
        summary: "Des applications sur mesure conçues pour fluidifier le travail de vos équipes et faire grandir vos services.",
        tags: ["Apps Web", "Portails Clients", "MVP", "Tableaux de Bord"],
        details: "Outils de gestion internes dans le navigateur, portails clients, MVP SaaS et tableaux de bord opérationnels.",
      },
      {
        id: "documents",
        index: "05",
        tag: "DOCUMENTS",
        symbol: "◆",
        title: "Présentez votre parcours avec assurance.",
        summary: "Des documents soignés qui rendent votre histoire et vos propositions percutantes.",
        tags: ["CV & LinkedIn", "Pitch Decks", "Propositions", "Profils d'Entreprise"],
        details: "CV professionnels, positionnement de profil LinkedIn, présentations pour investisseurs et propositions commerciales.",
      },
      {
        id: "support",
        index: "06",
        tag: "SUPPORT",
        symbol: "＋",
        title: "Maintenez votre présence digitale au sommet.",
        summary: "Conseils techniques clairs, maintenance sécurisée et accompagnement continu après lancement.",
        tags: ["Maintenance", "Sécurité", "Dépannage", "Conseil"],
        details: "Mises à jour régulières, diagnostics de santé technique, résolution d'incidents et assistance au pilotage.",
      },
    ],
    ar: [
      {
        id: "web",
        index: "01",
        tag: "رقمي",
        symbol: "↗",
        title: "مواقع إلكترونية تعمل بكفاءة عالية.",
        summary: "واجهات رقمية سريعة ومتقنة تحوّل الزوار إلى عملاء وطلبات فعلية.",
        tags: ["مواقع أعمال", "تجارة إلكترونية", "تحسين SEO", "سرعة فائقة"],
        details: "صفحات هبوط متجاوبة، مواقع شركات، مواقع متعددة اللغات، متاجر إلكترونية، وإعادة تصميم متطورة.",
      },
      {
        id: "brand",
        index: "02",
        tag: "هوية",
        symbol: "✳",
        title: "اجعل علامتك التجارية سهلة التمييز.",
        summary: "هوية بصرية مميزة ومتناسقة في كل نقطة يتفاعل فيها الجمهور مع نشاطك.",
        tags: ["أنظمة الشعارات", "الخطوط", "الألوان", "حزمة الهوية"],
        details: "تصميم شعارات أصلية، أنظمة الهوية المتكاملة، قوالب وسائل التواصل، ودليل استخدام شامل للهوية.",
      },
      {
        id: "content",
        index: "03",
        tag: "محتوى",
        symbol: "◌",
        title: "احضر رقميًا برسالة واضحة وجذابة.",
        summary: "محتوى اجتماعي ومواد حملات تسويقية تعكس صوتك ورؤيتك بكل وضوح.",
        tags: ["محتوى اجتماعي", "حملات", "فيديو قصير", "تصاميم بصرية"],
        details: "تصاميم مخصصة لمنصات التواصل، خطط نشر، تصاميم مطبوعات إعلانية، ومونتاج فيديوهات رأسية قصيرة.",
      },
      {
        id: "software",
        index: "04",
        tag: "برمجيات",
        symbol: "⌘",
        title: "حوّل العمليات المعقدة إلى منتجات عملية.",
        summary: "تطبيقات وأدوات ويب مخصصة تساعد الفرق على إنجاز الأعمال وتطوير الخدمات.",
        tags: ["تطبيقات ويب", "بوابات عملاء", "منتجات أولية MVP", "لوحات تحكم"],
        details: "لوحات تحكم داخلية، بوابات خدمات، منصات برمجية أولية MVP، وتطبيقات ويب سريعة وآمنة.",
      },
      {
        id: "documents",
        index: "05",
        tag: "وثائق",
        symbol: "◆",
        title: "اعرض مسيرتك المهنية باحترافية وثقة.",
        summary: "مستندات مصممة بعناية ومواد للعلامة الشخصية تجعل إنجازاتك واضحة ومقنعة.",
        tags: ["السيرة الذاتية وLinkedIn", "عروض تقديمية", "عروض أعمال", "ملفات تعريف"],
        details: "تصميم السير الذاتية الاحترافية، صياغة حسابات LinkedIn، عروض المستثمرين، وملفات التعريف بالشركات.",
      },
      {
        id: "support",
        index: "06",
        tag: "دعم",
        symbol: "＋",
        title: "حافظ على استقرار حضورك الرقمي.",
        summary: "استشارات تقنية عملية، صيانة دورية، ومساندة مستمرة بعد إطلاق المشاريع.",
        tags: ["صيانة مستمرة", "فحص أمان", "حل المشكلات", "استشارات تقنية"],
        details: "تحديثات روتينية، فحوصات دورية للأداء والأمان، معالجة الأعطال، وجلسات استشارية متخصصة.",
      },
    ],
  };

  return data[locale] || data.en;
}

export interface LocalizedWork {
  id: string;
  label: string;
  title: string;
  body: string;
  kind: "website" | "brand" | "app";
}

export function getWorkItems(locale: Locale): LocalizedWork[] {
  const data: Record<Locale, LocalizedWork[]> = {
    en: [
      {
        id: "north",
        label: "Concept · Website",
        title: "North Studio — Corporate Website",
        body: "A responsive website concept with clean editorial hierarchy, fast loading, and conversion pathways.",
        kind: "website",
      },
      {
        id: "formfield",
        label: "Concept · Brand Kit",
        title: "Form & Field — Identity Study",
        body: "A cohesive visual direction and stationery set for a modern everyday living label.",
        kind: "brand",
      },
      {
        id: "atlas",
        label: "Concept · Web App",
        title: "Atlas — Operations Dashboard",
        body: "A dashboard concept designed to make operational metrics and team tasks easy to scan.",
        kind: "app",
      },
    ],
    tr: [
      {
        id: "north",
        label: "Konsept · Web Sitesi",
        title: "North Studio — Kurumsal Web Sitesi",
        body: "Net tipografik hiyerarşi, hızlı açılış ve odaklanmış çağrı yollarına sahip web sitesi konsepti.",
        kind: "website",
      },
      {
        id: "formfield",
        label: "Konsept · Marka Kiti",
        title: "Form & Field — Kimlik Çalışması",
        body: "Modern bir yaşam markası için tutarlı görsel yönlendirme ve kurumsal kimlik seti.",
        kind: "brand",
      },
      {
        id: "atlas",
        label: "Konsept · Web Uygulaması",
        title: "Atlas — Operasyon Paneli",
        body: "İşletme bilgilerini ve operasyon verilerini daha kolay incelemeyi sağlayan kontrol paneli.",
        kind: "app",
      },
    ],
    fr: [
      {
        id: "north",
        label: "Concept · Site Web",
        title: "North Studio — Site d'Entreprise",
        body: "Un concept de site web réactif avec une hiérarchie éditoriale claire et des appels à l'action ciblés.",
        kind: "website",
      },
      {
        id: "formfield",
        label: "Concept · Kit de Marque",
        title: "Form & Field — Étude d'Identité",
        body: "Une direction visuelle harmonieuse pour une marque d'objets du quotidien.",
        kind: "brand",
      },
      {
        id: "atlas",
        label: "Concept · Application Web",
        title: "Atlas — Tableau de Bord",
        body: "Un tableau de bord épuré facilitant la lecture rapide des métriques d'activité de l'équipe.",
        kind: "app",
      },
    ],
    ar: [
      {
        id: "north",
        label: "تصور · موقع إلكتروني",
        title: "North Studio — موقع شركة",
        body: "مفهوم موقع متجاوب يتميز بتنظيم محتوى واضح، وسرعة تحميل، ومسارات تواصل مباشرة.",
        kind: "website",
      },
      {
        id: "formfield",
        label: "تصور · حزمة هوية",
        title: "Form & Field — دراسة هوية",
        body: "توجه بصري متكامل وهوية أنيقة مخصصة لعلامة تجارية متخصصة في أسلوب الحياة اليومي.",
        kind: "brand",
      },
      {
        id: "atlas",
        label: "تصور · تطبيق ويب",
        title: "Atlas — لوحة تحكم العمليات",
        body: "تصور لوحة تحكم تفاعلية لتسهيل متابعة مؤشرات الأداء والمهام التشغيلية بوضوح.",
        kind: "app",
      },
    ],
  };

  return data[locale] || data.en;
}

export interface LocalizedPricingCategory {
  id: string;
  index: string;
  title: string;
  short: string;
  items: {
    name: string;
    scope: string;
    price: string;
  }[];
}

export function getPricingCategories(locale: Locale): LocalizedPricingCategory[] {
  const data: Record<Locale, LocalizedPricingCategory[]> = {
    en: [
      {
        id: "web",
        index: "01",
        title: "Websites & E-Commerce",
        short: "Websites",
        items: [
          { name: "Landing Page", scope: "1 responsive page, up to 7 sections, contact/lead form, basic SEO, 2 revisions", price: "₺12,000" },
          { name: "Business Website", scope: "Up to 5 unique pages, contact form, WhatsApp button, Google Maps, 2 revisions", price: "₺25,000" },
          { name: "Corporate Website", scope: "Up to 10 pages, design system, blog/CMS ready, analytics setup, 2 revisions", price: "₺45,000" },
          { name: "Multilingual Website", scope: "Up to 5 pages in 2 languages (10 page versions total), language switcher, 2 revisions", price: "₺60,000" },
          { name: "E-Commerce Website", scope: "Full storefront, up to 20 products, payment gateway & shipping integration, 2 revisions", price: "₺50,000" },
          { name: "Website Maintenance", scope: "Monthly plan: routine updates, security checks, and up to 3 hours of support", price: "₺3,000 / mo" },
        ],
      },
      {
        id: "brand",
        index: "02",
        title: "Branding & Visual Identity",
        short: "Branding",
        items: [
          { name: "Logo Design", scope: "1 final logo, 2 initial concepts, 3 refinement rounds, SVG/PNG/PDF vector exports", price: "₺10,000" },
          { name: "Logo + Basic Identity", scope: "Logo system, color palette, typography guidelines, business card & social cover", price: "₺18,000" },
          { name: "Complete Brand Kit", scope: "Full logo suite, colors, fonts, graphic assets, 3 social templates, brand guide book", price: "₺30,000" },
          { name: "Logo Refresh", scope: "Modernization of existing logo, 2 refinement rounds, vector master files", price: "₺7,500" },
        ],
      },
      {
        id: "social",
        index: "03",
        title: "Social Media & Marketing Design",
        short: "Social",
        items: [
          { name: "Social Media Management", scope: "1 platform, 12 feed posts, 12 story designs, copywriting, scheduling & monthly report", price: "₺15,000 / mo" },
          { name: "Design-Only Content Plan", scope: "8 static custom feed posts per month, visual assets delivered ready to publish", price: "₺5,000 / mo" },
          { name: "Short-Form Video Editing", scope: "1 vertical video (up to 30s) with cuts, animated titles, captions, and music", price: "₺2,000 / video" },
          { name: "Campaign Banner Design", scope: "Master digital banner design in agreed size, high-res web & print export", price: "₺2,500" },
        ],
      },
      {
        id: "apps",
        index: "04",
        title: "Web Applications & Products",
        short: "Web Apps",
        items: [
          { name: "Small Web Tool", scope: "Core workflow tool, up to 3 screens, input forms & calculated results", price: "From ₺35,000" },
          { name: "Business Dashboard", scope: "Up to 5 views, authentication, real-time charts, data export (CSV/PDF)", price: "From ₺75,000" },
          { name: "Custom Web Application", scope: "Up to 10 views, role-based access, database CRUD, third-party API integration", price: "From ₺130,000" },
          { name: "SaaS MVP Platform", scope: "Discovery-led MVP, user authentication, billing integration, database & deployment", price: "From ₺250,000" },
        ],
      },
      {
        id: "docs",
        index: "05",
        title: "Documents & Personal Brand",
        short: "Documents",
        items: [
          { name: "CV / Résumé Design", scope: "Up to 2 pages, clean executive hierarchy, printable PDF & editable source", price: "₺2,500" },
          { name: "LinkedIn Positioning", scope: "Headline, About summary, experience alignment, and custom banner", price: "₺2,500" },
          { name: "Pitch Deck Presentation", scope: "Up to 15 slides, investor ready, custom typography and infographic charts", price: "₺10,000" },
          { name: "Company Profile / Proposal", scope: "Up to 8 designed pages, commercial layout, digital and print-ready PDF", price: "₺7,500" },
        ],
      },
    ],
    tr: [
      {
        id: "web",
        index: "01",
        title: "Web Siteleri ve E-Ticaret",
        short: "Web Siteleri",
        items: [
          { name: "Açılış Sayfası (Landing Page)", scope: "1 mobil uyumlu sayfa, 7 bölüme kadar, iletişim formu, temel SEO, 2 revizyon", price: "₺12,000" },
          { name: "İşletme Web Sitesi", scope: "5 sayfaya kadar, iletişim formu, WhatsApp butonu, harita entegrasyonu, 2 revizyon", price: "₺25,000" },
          { name: "Kurumsal Web Sitesi", scope: "10 sayfaya kadar, tasarım sistemi, blog/içerik altyapısı, analiz kurulumu, 2 revizyon", price: "₺45,000" },
          { name: "Çok Dilli Web Sitesi", scope: "2 dilde 5 sayfaya kadar (toplam 10 sayfa), dil seçici altyapısı, 2 revizyon", price: "₺60,000" },
          { name: "E-Ticaret Sitesi", scope: "Mağaza kurulumu, 20 ürüne kadar giriş, ödeme ve kargo entegrasyonu, 2 revizyon", price: "₺50,000" },
          { name: "Web Sitesi Bakımı", scope: "Aylık plan: rutin güncellemeler, güvenlik kontrolü ve 3 saate kadar destek", price: "₺3,000 / ay" },
        ],
      },
      {
        id: "brand",
        index: "02",
        title: "Marka Kimliği ve Tasarım",
        short: "Marka",
        items: [
          { name: "Logo Tasarımı", scope: "1 nihai logo, 2 başlangıç konsepti, 3 revizyon turu, vektörel SVG/PNG/PDF çıktılar", price: "₺10,000" },
          { name: "Logo + Temel Kimlik", scope: "Logo sistemi, renk paleti, tipografi, kartvizit ve sosyal medya kapak tasarımı", price: "₺18,000" },
          { name: "Tam Marka Kiti", scope: "Logo ailesi, renkler, fontlar, 3 sosyal medya şablonu, kurumsal marka rehberi", price: "₺30,000" },
          { name: "Logo Yenileme", scope: "Mevcut logonun modernizasyonu, 2 revizyon turu, vektörel teslimat", price: "₺7,500" },
        ],
      },
      {
        id: "social",
        index: "03",
        title: "Sosyal Medya ve Pazarlama",
        short: "Sosyal Medya",
        items: [
          { name: "Sosyal Medya Yönetimi", scope: "1 platform, 12 gönderi, 12 hikaye tasarımı, metin yazımı, planlama ve aylık rapor", price: "₺15,000 / ay" },
          { name: "Tasarım Odaklı İçerik Planı", scope: "Ayda 8 özel tasarım gönderi, yayına hazır yüksek çözünürlüklü teslimat", price: "₺5,000 / ay" },
          { name: "Kısa Video Kurgusu (Reels/Shorts)", scope: "1 dikey video (30 saniyeye kadar), kurgu, altyazılar, müzik ve başlıklar", price: "₺2,000 / video" },
          { name: "Kampanya Banner Tasarımı", scope: "Belirlenen ölçüde ana kampanya tasarımı, dijital ve baskı formatlarında teslim", price: "₺2,500" },
        ],
      },
      {
        id: "apps",
        index: "04",
        title: "Web Uygulamaları ve Ürünler",
        short: "Uygulamalar",
        items: [
          { name: "Küçük Web Aracı", scope: "Temel iş akışı aracı, 3 ekrana kadar, form ve hesaplama mantığı", price: "₺35,000'den" },
          { name: "İşletme Kontrol Paneli", scope: "5 ekrana kadar, giriş yetkilendirme, grafikler, veri dışa aktarma (CSV/PDF)", price: "₺75,000'den" },
          { name: "Özel Web Uygulaması", scope: "10 ekrana kadar, rol tabanlı erişim, veritabanı yönetimi, harici API entegrasyonu", price: "₺130,000'den" },
          { name: "SaaS MVP Platformu", scope: "Keşif odaklı MVP, üyelik sistemi, ödeme entegrasyonu, veritabanı ve canlı dağıtım", price: "₺250,000'den" },
        ],
      },
      {
        id: "docs",
        index: "05",
        title: "Belgeler ve Kişisel Marka",
        short: "Belgeler",
        items: [
          { name: "CV / Özgeçmiş Tasarımı", scope: "2 sayfaya kadar, net yönetici hiyerarşisi, baskıya hazır PDF ve düzenlenebilir dosya", price: "₺2,500" },
          { name: "LinkedIn Konumlandırması", scope: "Başlık, Hakkında özeti, deneyim yapılandırması ve özel profil kapağı", price: "₺2,500" },
          { name: "Yatırımcı Sunumu (Pitch Deck)", scope: "15 slayta kadar, yatırımcıya hazır, infografik grafikler ve özel tipografi", price: "₺10,000" },
          { name: "Şirket Profili / Teklif Dosyası", scope: "8 sayfaya kadar, ticari sunum düzeni, dijital ve baskıya hazır PDF", price: "₺7,500" },
        ],
      },
    ],
    fr: [
      {
        id: "web",
        index: "01",
        title: "Sites Web et E-Commerce",
        short: "Sites Web",
        items: [
          { name: "Page d'Atterrissage (Landing)", scope: "1 page réactive, jusqu'à 7 sections, formulaire de contact, SEO, 2 révisions", price: "₺12,000" },
          { name: "Site d'Entreprise", scope: "Jusqu'à 5 pages uniques, formulaire, bouton WhatsApp, carte Google Maps, 2 révisions", price: "₺25,000" },
          { name: "Site Corporate", scope: "Jusqu'à 10 pages, design system, blog/CMS, outils d'analyse, 2 révisions", price: "₺45,000" },
          { name: "Site Multilingue", scope: "Jusqu'à 5 pages en 2 langues (10 versions au total), sélecteur de langue, 2 révisions", price: "₺60,000" },
          { name: "Site E-Commerce", scope: "Boutique complète, jusqu'à 20 produits, passerelle de paiement et livraison, 2 révisions", price: "₺50,000" },
          { name: "Maintenance de Site", scope: "Forfait mensuel : mises à jour, contrôle de sécurité et jusqu'à 3h d'assistance", price: "₺3,000 / mois" },
        ],
      },
      {
        id: "brand",
        index: "02",
        title: "Identité de Marque et Design",
        short: "Marque",
        items: [
          { name: "Création de Logo", scope: "1 logo final, 2 concepts initiaux, 3 tours de révision, exports vectoriels SVG/PDF/PNG", price: "₺10,000" },
          { name: "Logo + Identité de Base", scope: "Système de logo, palette de couleurs, typographie, carte de visite et bannière", price: "₺18,000" },
          { name: "Kit de Marque Complet", scope: "Suite complète de logo, typographie, 3 modèles réseaux sociaux, guide de marque", price: "₺30,000" },
          { name: "Modernisation de Logo", scope: "Refonte et actualisation du logo existant, 2 révisions, fichiers vectoriels", price: "₺7,500" },
        ],
      },
      {
        id: "social",
        index: "03",
        title: "Réseaux Sociaux et Marketing",
        short: "Réseaux",
        items: [
          { name: "Gestion des Réseaux Sociaux", scope: "1 plateforme, 12 publications, 12 stories, rédaction, planification et rapport", price: "₺15,000 / mois" },
          { name: "Plan de Contenu Design", scope: "8 visuels personnalisés par mois, prêts à publier en haute résolution", price: "₺5,000 / mois" },
          { name: "Montage Vidéo Court Format", scope: "1 vidéo verticale (jusqu'à 30s), découpage, sous-titres animés et musique", price: "₺2,000 / vidéo" },
          { name: "Visuel de Campagne", scope: "Visuel publicitaire décliné au format convenu, exports haute définition", price: "₺2,500" },
        ],
      },
      {
        id: "apps",
        index: "04",
        title: "Applications Web et Produits",
        short: "Apps Web",
        items: [
          { name: "Petit Outil Web", scope: "Outil métier ciblé, jusqu'à 3 écrans, formulaires et calculs automatiques", price: "À partir de ₺35,000" },
          { name: "Tableau de Bord d'Entreprise", scope: "Jusqu'à 5 vues, authentification, graphiques en temps réel, export CSV/PDF", price: "À partir de ₺75,000" },
          { name: "Application Web Sur-Mesure", scope: "Jusqu'à 10 vues, gestion des rôles, base de données CRUD, API externes", price: "À partir de ₺130,000" },
          { name: "Plateforme SaaS MVP", scope: "MVP complet, comptes utilisateurs, intégration paiement, base de données et déploiement", price: "À partir de ₺250,000" },
        ],
      },
      {
        id: "docs",
        index: "05",
        title: "Documents et Marque Personnelle",
        short: "Documents",
        items: [
          { name: "Design de CV / Résumé", scope: "Jusqu'à 2 pages, hiérarchie claire et soignée, PDF prêt pour impression et source", price: "₺2,500" },
          { name: "Optimisation Profil LinkedIn", scope: "Titre percutant, section À propos, mise en avant du parcours et bannière", price: "₺2,500" },
          { name: "Pitch Deck Investisseurs", scope: "Jusqu'à 15 slides, design convaincant, infographies et graphiques sur-mesure", price: "₺10,000" },
          { name: "Plaquette d'Entreprise / Offre", scope: "Jusqu'à 8 pages, mise en page commerciale soignée, PDF digital et impression", price: "₺7,500" },
        ],
      },
    ],
    ar: [
      {
        id: "web",
        index: "01",
        title: "المواقع والتجارة الإلكترونية",
        short: "المواقع",
        items: [
          { name: "صفحة هبوط (Landing Page)", scope: "صفحة واحدة متجاوبة، حتى 7 أقسام، نموذج تواصل، تهيئة أساسية لـ SEO، مراجعتان", price: "₺12,000" },
          { name: "موقع أعمال", scope: "حتى 5 صفحات فريدة، نموذج تواصل، زر واتساب، ربط خريطة، مراجعتان", price: "₺25,000" },
          { name: "موقع شركات متكامل", scope: "حتى 10 صفحات، نظام تصميم موحد، مدونة/نظام إدارة محتوى، ربط تحليلات، مراجعتان", price: "₺45,000" },
          { name: "موقع متعدد اللغات", scope: "حتى 5 صفحات بلغتين (إجمالي 10 صفحات)، محول لغات، مراجعتان", price: "₺60,000" },
          { name: "متجر إلكتروني", scope: "متجر متكامل، إدخال حتى 20 منتجًا، ربط بوابات الدفع والشحن، مراجعتان", price: "₺50,000" },
          { name: "صيانة المواقع", scope: "خطة شهرية: تحديثات مستمرة، فحص أمني دوري، وحتى 3 ساعات دعم فني", price: "₺3,000 / شهريًا" },
        ],
      },
      {
        id: "brand",
        index: "02",
        title: "الهوية التجارية والبصرية",
        short: "الهوية",
        items: [
          { name: "تصميم شعار", scope: "شعار نهائي، تصوران مبدئيان، 3 جولات تعديل، تصدير ملفات فيكتور SVG/PNG/PDF", price: "₺10,000" },
          { name: "شعار + هوية أساسية", scope: "نظام الشعار، لوحة الألوان، الخطوط، تصميم بطاقة عمل وغلاف المنصات", price: "₺18,000" },
          { name: "حزمة هوية متكاملة", scope: "مجموعة الشعار الكاملة، خطوط، أصول بصرية، 3 قوالب للمنصات، دليل الهوية الشامل", price: "₺30,000" },
          { name: "تحديث وتطوير الشعار", scope: "عصرنة الشعار القائم، جولتا تعديل، تسليم الملفات الأصلية بجودة عالية", price: "₺7,500" },
        ],
      },
      {
        id: "social",
        index: "03",
        title: "التواصل الاجتماعي والتسويق",
        short: "التواصل",
        items: [
          { name: "إدارة وسائل التواصل الاجتماعي", scope: "منصة واحدة، 12 منشورًا، 12 تصميم قصة، كتابة المحتوى، جدولة وتقرير شهري", price: "₺15,000 / شهريًا" },
          { name: "خطة تصاميم فقط", scope: "8 تصاميم منشورات شهرية مخصصة، جاهزة للنشر بأعلى دقة", price: "₺5,000 / شهريًا" },
          { name: "مونتاج فيديو قصير (Reels/Shorts)", scope: "فيديو رأسي واحد (حتى 30 ثانية)، قص متقن، نصوص متحركة وموسيقى", price: "₺2,000 / فيديو" },
          { name: "تصميم بنر حملة إعلانية", scope: "تصميم إعلاني رئيسي بالقياس المطلوب، جاهز للاستخدام الرقمي أو الطباعة", price: "₺2,500" },
        ],
      },
      {
        id: "apps",
        index: "04",
        title: "تطبيقات الويب والمنتجات",
        short: "تطبيقات",
        items: [
          { name: "أداة ويب مخصصة", scope: "أداة لتدفق عمل محدد، حتى 3 شاشات، نماذج إدخال ونتائج وحسابات فورية", price: "ابتداءً من ₺35,000" },
          { name: "لوحة تحكم للأعمال", scope: "حتى 5 شاشات، تسجيل دخول آمن، رسوم بيانية تفاعلية، تصدير CSV/PDF", price: "ابتداءً من ₺75,000" },
          { name: "تطبيق ويب متكامل", scope: "حتى 10 شاشات، صلاحيات مستخدمين، إدارة قواعد البيانات، ربط واجهات API", price: "ابتداءً من ₺130,000" },
          { name: "منصة SaaS MVP أولية", scope: "منتج أولي متكامل، إدارة الاشتراكات، بوابات الدفع، خادم آمن ونشر حي", price: "ابتداءً من ₺250,000" },
        ],
      },
      {
        id: "docs",
        index: "05",
        title: "المستندات والعلامة الشخصية",
        short: "المستندات",
        items: [
          { name: "تصميم السيرة الذاتية CV", scope: "حتى صفحتين، ترتيب احترافي وتنظيم واضح، ملف PDF جاهز وملف قابل للتعديل", price: "₺2,500" },
          { name: "تطوير حساب LinkedIn", scope: "عنوان احترافي، نبذة تعريفية مؤثرة، مواءمة الخبرات، وتصميم غلاف مخصص", price: "₺2,500" },
          { name: "عرض المستثمرين (Pitch Deck)", scope: "حتى 15 شريحة، إخراج مقنع للمستثمرين، رسوم بيانية وتصميم تفاعلي", price: "₺10,000" },
          { name: "ملف تعريفي بالشركة / عرض أسعار", scope: "حتى 8 صفحات بتصميم تجاري راقٍ، تصدير رقمي وللطباعة PDF", price: "₺7,500" },
        ],
      },
    ],
  };

  return data[locale] || data.en;
}

export interface LocalizedProcessStep {
  index: string;
  title: string;
  body: string;
}

export function getProcessSteps(locale: Locale): LocalizedProcessStep[] {
  const data: Record<Locale, LocalizedProcessStep[]> = {
    en: [
      { index: "01", title: "Discover", body: "We clarify your exact goals, target audience, and scope before any work begins." },
      { index: "02", title: "Design", body: "We craft thoughtful visual solutions and refine them through transparent revision milestones." },
      { index: "03", title: "Develop", body: "We build clean, secure, and fast-loading code tested across modern devices." },
      { index: "04", title: "Deliver", body: "We hand over all agreed assets or launch live, with optional long-term maintenance." },
    ],
    tr: [
      { index: "01", title: "Keşif", body: "İşe başlamadan önce hedeflerinizi, kitlenizi ve proje kapsamını ayrıntılarıyla netleştiririz." },
      { index: "02", title: "Tasarım", body: "Markanıza özel görsel yönü belirler ve planlı revizyonlarla en mükemmel hale getiririz." },
      { index: "03", title: "Geliştirme", body: "Tüm ekranlarda hızlı, modern ve güvenli çalışan kusursuz kod altyapısı kurarız." },
      { index: "04", title: "Teslim", body: "Projeyi yayına alır veya dosyaları eksiksiz teslim eder, isteğe bağlı bakım sunarız." },
    ],
    fr: [
      { index: "01", title: "Découverte", body: "Nous clarifions vos objectifs, votre cible et votre périmètre avant de démarrer." },
      { index: "02", title: "Conception", body: "Nous élaborons des visuels soignés et les affinons lors d'étapes de validation claires." },
      { index: "03", title: "Développement", body: "Nous programmons un code propre, rapide et sécurisé, testé sur tous les écrans." },
      { index: "04", title: "Livraison", body: "Nous mettons en ligne et livrons tous les fichiers, avec support et maintenance en option." },
    ],
    ar: [
      { index: "01", title: "الاكتشاف", body: "نحدد أهدافك وجمهورك المستهدف ونطاق العمل بدقة تامة قبل انطلاق المشروع." },
      { index: "02", title: "التصميم", body: "نصمم حلولًا بصرية مميزة ونطورها عبر محطات مراجعة واضحة ومنظمة." },
      { index: "03", title: "التطوير", body: "نكتب برمجيات نظيفة وسريعة وآمنة تخضع للفحص الدقيق على جميع الشاشات." },
      { index: "04", title: "التسليم", body: "نسلّم جميع المخرجات كاملة أو نطلق المشروع على الهواء مع توفير الدعم والصيانة." },
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
      { q: "How is a project priced?", a: "Pricing is transparent and based on defined deliverables, complexity, and timeline. NEXARO provides a written scope and schedule with payment milestones before work begins." },
      { q: "How long does a typical project take?", a: "A focused landing page or brand identity usually takes 1 to 3 weeks; complete custom web platforms take 4 to 8 weeks depending on scope." },
      { q: "What do you need from me to get started?", a: "Your goals, required features, any existing assets (logos, copy, imagery), and designated feedback rounds." },
      { q: "Do you provide ongoing technical support?", a: "Yes, ongoing monthly maintenance, security monitoring, and design allowances are available after launch." },
      { q: "Can we collaborate in multiple languages?", a: "Yes. NEXARO operates internationally in English, Turkish, French, and Arabic." },
    ],
    tr: [
      { q: "Proje fiyatlandırması nasıl belirlenir?", a: "Fiyatlandırma şeffaftır ve belirlenen teslimatlara, işin kapsamına ve takvime dayanır. Başlamadan önce yazılı teklif ve ödeme aşamaları onaylanır." },
      { q: "Bir proje ortalama ne kadar sürer?", a: "Odaklı bir açılış sayfası veya marka kimliği 1-3 hafta sürer; kapsamlı özel web uygulamaları ise 4-8 hafta içinde tamamlanır." },
      { q: "Başlamak için benden ne gerekiyor?", a: "Hedefleriniz, istediğiniz özellikler, mevcut materyalleriniz (logo, metin, görseller) ve geri bildirim sağlayacak bir karar verici." },
      { q: "Yayından sonra teknik destek sağlıyor musunuz?", a: "Evet, yayından sonra düzenli güncellemeler, güvenlik takibi ve aylık bakım destek paketlerimiz mevcuttur." },
      { q: "Farklı dillerde çalışabilir miyiz?", a: "Kesinlikle. NEXARO uluslararası standartta Türkçe, İngilizce, Fransızca ve Arapça dillerinde hizmet vermektedir." },
    ],
    fr: [
      { q: "Comment sont établis les tarifs ?", a: "Nos prix sont transparents et basés sur des livrables précis et un calendrier convenu. Un devis cadré est validé avant le début du projet." },
      { q: "Combien de temps prend un projet ?", a: "Une page d'atterrissage ou une identité visuelle prend 1 à 3 semaines ; une application web sur-mesure requiert 4 à 8 semaines selon la complexité." },
      { q: "De quoi avez-vous besoin pour commencer ?", a: "Vos objectifs, votre contenu éventuel (textes, images, logo), vos attentes fonctionnelles et vos retours aux étapes de validation." },
      { q: "Proposez-vous un support continu après le lancement ?", a: "Oui, des formules mensuelles de maintenance technique, de veille de sécurité et d'évolution sont disponibles." },
      { q: "Peut-on collaborer en plusieurs langues ?", a: "Oui, NEXARO travaille couramment en anglais, turc, français et arabe." },
    ],
    ar: [
      { q: "كيف يتم تحديد سعر المشروع؟", a: "الأسعار شفافة ومبنية على مخرجات محددة وواضحة. تقدم NEXARO عرض عمل مكتوبًا بجدول زمني ومراحل دفع واضحة قبل البدء." },
      { q: "كم يستغرق إنجاز المشروع عادةً؟", a: "تستغرق صفحة الهبوط أو الهوية البصرية من أسبوع إلى 3 أسابيع، بينما تتطلب المنصات والتطبيقات المتكاملة من 4 إلى 8 أسابيع." },
      { q: "ما المطلوب مني لبدء المشروع؟", a: "أهدافك، المتطلبات الرئيسية، أي مواد متوفرة لديك (شعار، نصوص، صور)، وتحديد مسؤول لتقديم الملاحظات والاعتماد." },
      { q: "هل تقدمون دعمًا فنيًا بعد الإطلاق؟", a: "نعم، نوفر باقات صيانة شهرية تشمل التحديثات، الفحص الأمني، والمساعدة التقنية المستمرة." },
      { q: "هل يمكننا العمل بلغات متعددة؟", a: "نعم، تقدم استوديو NEXARO خدماتها باحترافية باللغات الإنجليزية، التركية، الفرنسية، والعربية." },
    ],
  };

  return data[locale] || data.en;
}

export function getServiceOptions(locale: Locale): string[] {
  const options: Record<Locale, string[]> = {
    en: [
      "Websites & E-Commerce",
      "Branding & Visual Identity",
      "Social Media & Marketing Design",
      "Web Applications & Digital Products",
      "Professional Documents & Personal Brand",
      "Technical Consulting & Maintenance",
      "Custom project / not listed",
      "Not sure yet (Need guidance)",
    ],
    tr: [
      "Web Siteleri ve E-Ticaret",
      "Marka Kimliği ve Tasarım",
      "Sosyal Medya ve Pazarlama",
      "Web Uygulamaları ve Ürünler",
      "Belgeler ve Kişisel Marka",
      "Teknik Danışmanlık ve Bakım",
      "Özel proje / listede yok",
      "Henüz emin değilim (Rehberlik gerekli)",
    ],
    fr: [
      "Sites Web et E-Commerce",
      "Identité de Marque et Visuelle",
      "Réseaux Sociaux et Marketing",
      "Applications Web et Produits",
      "Documents et Marque Personnelle",
      "Conseil Technique et Maintenance",
      "Projet sur-mesure / non listé",
      "Pas encore sûr (Besoin d'orientation)",
    ],
    ar: [
      "المواقع والتجارة الإلكترونية",
      "الهوية التجارية والبصرية",
      "التواصل الاجتماعي والتسويق",
      "تطبيقات الويب والمنتجات",
      "المستندات والعلامة الشخصية",
      "الاستشارات التقنية والصيانة",
      "مشروع مخصص / غير مدرج",
      "غير متأكد بعد (بحاجة لتوجيه)",
    ],
  };

  return options[locale] || options.en;
}

export function getBudgetOptions(locale: Locale): string[] {
  const options: Record<Locale, string[]> = {
    en: [
      "Under ₺15,000",
      "₺15,000 – ₺35,000",
      "₺35,000 – ₺75,000",
      "₺75,000 – ₺150,000",
      "₺150,000+",
      "Need advice",
    ],
    tr: [
      "₺15,000 altı",
      "₺15,000 – ₺35,000",
      "₺35,000 – ₺75,000",
      "₺75,000 – ₺150,000",
      "₺150,000+",
      "Danışmanlık gerekli",
    ],
    fr: [
      "Moins de ₺15,000",
      "₺15,000 – ₺35,000",
      "₺35,000 – ₺75,000",
      "₺75,000 – ₺150,000",
      "₺150,000+",
      "Conseil souhaité",
    ],
    ar: [
      "أقل من ₺15,000",
      "₺15,000 – ₺35,000",
      "₺35,000 – ₺75,000",
      "₺75,000 – ₺150,000",
      "₺150,000+",
      "بحاجة لاستشارة",
    ],
  };

  return options[locale] || options.en;
}

export function getTimingOptions(locale: Locale): string[] {
  const options: Record<Locale, string[]> = {
    en: [
      "As soon as possible",
      "Within 1 month",
      "Within 1–3 months",
      "Flexible",
    ],
    tr: [
      "Mümkün olan en kısa sürede",
      "1 ay içinde",
      "1–3 ay içinde",
      "Esnek zamanlı",
    ],
    fr: [
      "Dès que possible",
      "D'ici 1 mois",
      "D'ici 1 à 3 mois",
      "Flexible",
    ],
    ar: [
      "في أقرب وقت ممكن",
      "خلال شهر واحد",
      "خلال 1–3 أشهر",
      "مرن",
    ],
  };

  return options[locale] || options.en;
}
