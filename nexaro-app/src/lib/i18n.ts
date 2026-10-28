import type { Locale } from "./types";

export const locales: { id: Locale; label: string; path: string }[] = [
  { id: "en", label: "EN", path: "/" },
  { id: "tr", label: "TR", path: "/tr" },
  { id: "fr", label: "FR", path: "/fr" },
  { id: "ar", label: "عربي", path: "/ar" },
];

const en = {
  "meta.title": "Website Design & Development in Istanbul | Fast, Secure Websites | NEXARO",
  "meta.description":
    "NEXARO is a web & security studio in Istanbul building fast, secure websites for small businesses in 5-14 days with security built in. Fixed prices, no agency overhead.",
  "nav.services": "Services",
  "nav.pricing": "Pricing",
  "nav.work": "Work",
  "nav.process": "Process",
  "nav.about": "About",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.cta": "Get a Free Website Audit →",
  "nav.menu": "Open menu",
  "nav.close": "Close menu",

  "hero.eyebrow": "Web & Security Studio · Istanbul",
  "hero.headline": "Fast, secure websites that bring you customers.",
  "hero.subline":
    "NEXARO is an independent studio in Istanbul. I build websites for small businesses in 5-14 days, with security built in. Fixed prices, no agency overhead.",
  "hero.cta.audit": "Get a free website audit",
  "hero.cta.pricing": "See pricing",
  "hero.trust": "Fixed prices · 50% deposit · 2 revision rounds · 30 days free support after launch",
  "hero.city": "Istanbul, Türkiye",
  "hero.tagline": "Design. Develop. Harden.",
  "hero.note": "Direct collaboration with lead engineer",

  "benefits.1": "⚡ 5–14 days delivery",
  "benefits.2": "🛡️ Security-first (A+ score)",
  "benefits.3": "🏷️ Fixed transparent prices",
  "benefits.4": "👤 Direct 1-on-1 with builder",
  "benefits.5": "🔄 2 revision rounds included",
  "benefits.6": "🤝 30 days free support",
  "benefits.7": "🔑 100% code & design ownership",

  "services.eyebrow": "What I Sell",
  "services.title.1": "Three focused services.",
  "services.title.2": "Zero agency bloat.",
  "services.side":
    "I focus exclusively on high-performance websites, ongoing technical peace of mind, and proactive cybersecurity hardening.",
  "services.includes": "What's included:",
  "services.addon.title": "Add-On & Custom Solutions",
  "services.addon.brand":
    "Brand Starter Kit (Logo, colours, fonts): ₺8,000 ($220) — sold exclusively as an add-on alongside a website project.",
  "services.addon.custom":
    "Custom Web Apps & Dashboards: Quote only, scoped through a structured discovery phase.",

  "pricing.eyebrow": "Transparent Pricing",
  "pricing.title.1": "Fixed prices.",
  "pricing.title.2": "No surprise invoices.",
  "pricing.side":
    "Every package comes with a written scope, exact boundaries, and clear milestones. Choose your currency and see what fits your business.",
  "pricing.toggle.try": "Turkish Lira (TRY)",
  "pricing.toggle.usd": "US Dollar (USD)",
  "pricing.tabs.websites": "Websites & Audits",
  "pricing.tabs.care": "Monthly Care Plans",
  "pricing.tabs.addons": "Add-ons & Extras",
  "pricing.mostPopular": "Most popular",
  "pricing.getStarted": "Get started →",
  "pricing.founding.badge": "Founding Client Offer",
  "pricing.founding.title": "Save 20% on your project",
  "pricing.founding.desc":
    "20% off for the first 3 clients in exchange for a written testimonial and permission to showcase the finished work in my portfolio.",
  "pricing.terms.title": "Clear Terms & Guarantees",
  "pricing.terms.payment":
    "Payment terms: 50% deposit to book your sprint, 50% upon final delivery (for projects above ₺50,000 / $1,500: structured 40% deposit / 30% milestone / 30% delivery).",
  "pricing.terms.vat":
    "Taxes & Hosting: Prices exclude 20% KDV (VAT) where applicable. You cover your own domain and hosting provider directly so you keep 100% control with zero studio markup.",
  "pricing.terms.ownership":
    "Ownership: You own everything. Full code repository, design assets, and content are transferred to you upon launch.",
  "pricing.terms.invoicing":
    "Official Invoicing: Invoiced from Istanbul, Türkiye with official commercial tax invoice (e-fatura). International clients are invoiced in USD with secure cross-border payment.",

  "work.eyebrow": "Portfolio",
  "work.title.1": "Work &",
  "work.title.2": "case studies.",
  "work.side":
    "Real architecture, real code, and transparent demonstrations. Here is how I solve design, conversion, and telemetry challenges.",
  "work.problem": "Problem",
  "work.solution": "Delivered",
  "work.result": "Result",
  "work.concept": "Concept Demo",
  "work.demo": "View Demo ↗",
  "work.footnote":
    "Concept integrity: These case studies represent deliberate design and engineering studies built with production Next.js code to showcase performance and aesthetic standards.",

  "security.eyebrow": "Security-First Engineering",
  "security.title.1": "Security built in,",
  "security.title.2": "not bolted on later.",
  "security.side":
    "Most freelancers build for appearance and ignore security. With a cybersecurity degree, every site I launch is hardened against common exploits from day one.",
  "security.score.badge": "A+ Grade on SecurityHeaders.com",
  "security.score.desc":
    "Tested and verified against industry standards for Content Security Policy, HSTS, and frame protections.",
  "security.audit.cta": "Want your existing site checked? Get a free security audit →",

  "process.eyebrow": "How We Work",
  "process.title.1": "Fast 14-day turnaround.",
  "process.title.2": "Zero guesswork.",
  "process.side":
    "A sprint-based process designed for small businesses that need to launch quickly without infinite delays.",

  "founder.eyebrow": "About NEXARO",
  "founder.title.1": "Direct access to the person",
  "founder.title.2": "who builds your site.",
  "founder.lead":
    "Direct access to the person who builds your site, with a security background most freelancers don’t have.",
  "founder.bio":
    "I'm Shahd Belhadj, a software engineering graduate with advanced expertise in cybersecurity. I founded NEXARO as an independent studio in Istanbul to give small businesses and founders clean, high-performing websites without agency bureaucracy, account managers, or junior handoffs.",
  "founder.response": "⚡ Response promise: I reply within 24 hours.",
  "founder.availability": "Taking 2 new projects this month",
  "founder.cta": "Let's discuss your project →",

  "faq.eyebrow": "Frequently Asked Questions",
  "faq.title.1": "Clear answers,",
  "faq.title.2": "before we begin.",
  "faq.side": "Everything you need to know about pricing, timelines, support, and technical ownership.",

  "contact.eyebrow": "Start Here",
  "contact.title": "Get a free website audit or project quote.",
  "contact.body":
    "Tell me about your business or share your current URL. I’ll review your site's speed, security, and mobile layout, and reply within 24 hours.",
  "contact.direct": "Prefer to chat directly? Reach me on WhatsApp or book a 15-minute call.",
  "contact.book": "Book a 15-min discovery call on Cal.com ↗",
  "contact.form.name": "Your Name",
  "contact.form.contact": "Email or WhatsApp",
  "contact.form.service": "What do you need?",
  "contact.form.url": "Current website URL (optional, for free audit)",
  "contact.form.details": "Tell me about your project",
  "contact.form.submit": "Get a Free Website Audit →",
  "contact.form.sending": "Sending inquiry…",
  "contact.form.success": "Thanks! I’ve received your inquiry and will reply within 24 hours.",
  "contact.form.error": "Something went wrong. Please WhatsApp or email hello@nexaro.studio directly.",
  "contact.privacy.notice":
    "Privacy Notice: By submitting this form, you agree to NEXARO processing your information strictly to respond to your inquiry in compliance with KVKK and privacy laws.",

  "footer.rights": "All rights reserved.",
  "footer.top": "Back to top",
  "footer.privacy": "Privacy & KVKK Policy",
  "lang.label": "Language",
};

type Dict = typeof en;

const tr: Dict = {
  "meta.title": "İstanbul Web Tasarım ve Geliştirme | Hızlı ve Güvenli Web Siteleri | NEXARO",
  "meta.description":
    "İstanbul'da küçük işletmeler ve kurucular için 5-14 günde teslim edilen, siber güvenlik altyapısına sahip hızlı ve modern web siteleri. Sabit fiyat, doğrudan kurucu ile çalışma.",
  "nav.services": "Hizmetler",
  "nav.pricing": "Fiyatlar",
  "nav.work": "Projeler",
  "nav.process": "Süreç",
  "nav.about": "Hakkımda",
  "nav.faq": "SSS",
  "nav.contact": "İletişim",
  "nav.cta": "Ücretsiz Web Denetimi Al →",
  "nav.menu": "Menüyü aç",
  "nav.close": "Menüyü kapat",

  "hero.eyebrow": "Web & Güvenlik Stüdyosu · İstanbul",
  "hero.headline": "Müşteri kazandıran, hızlı ve güvenli web siteleri.",
  "hero.subline":
    "NEXARO, İstanbul merkezli bir web ve teknoloji stüdyosudur. Küçük işletmeler için 5–14 gün içinde, siber güvenlik altyapısı hazır web siteleri inşa ediyorum. Sabit fiyatlar, ajans masrafı yok.",
  "hero.cta.audit": "Ücretsiz web sitesi denetimi al",
  "hero.cta.pricing": "Fiyatları gör",
  "hero.trust": "Sabit fiyatlar · %50 peşinat · 2 revizyon turu · Yayından sonra 30 gün ücretsiz destek",
  "hero.city": "İstanbul, Türkiye",
  "hero.tagline": "Tasarla. Kodla. Güçlendir.",
  "hero.note": "Doğrudan baş mühendis ile çalışma",

  "benefits.1": "⚡ 5–14 günde hızlı teslim",
  "benefits.2": "🛡️ Dahili siber güvenlik (A+ puan)",
  "benefits.3": "🏷️ Sabit ve şeffaf fiyatlar",
  "benefits.4": "👤 Doğrudan kurucu ile birebir iletişim",
  "benefits.5": "🔄 2 revizyon turu dahil",
  "benefits.6": "🤝 30 gün ücretsiz teknik destek",
  "benefits.7": "🔑 %100 kod ve tasarım mülkiyeti",

  "services.eyebrow": "NEXARO Ne Sunar?",
  "services.title.1": "Üç net hizmet.",
  "services.title.2": "Gereksiz masraf yok.",
  "services.side":
    "Yalnızca yüksek performanslı web siteleri, sürekli teknik bakım ve proaktif siber güvenlik denetimlerine odaklanıyorum.",
  "services.includes": "Dahil olanlar:",
  "services.addon.title": "Ek Hizmetler ve Özel Çözümler",
  "services.addon.brand":
    "Marka Başlangıç Kiti (Logo, renkler, fontlar): ₺8,000 ($220) — yalnızca web sitesi projesiyle birlikte satılır.",
  "services.addon.custom":
    "Özel Web Uygulamaları ve Yönetim Panelleri: Sabit fiyat yok, ücretli keşif süreciyle tekliflendirilir.",

  "pricing.eyebrow": "Şeffaf Fiyatlandırma",
  "pricing.title.1": "Sabit fiyatlar.",
  "pricing.title.2": "Sürpriz fatura yok.",
  "pricing.side":
    "Her paket yazılı bir kapsam, kesin teslimat sınırları ve net aşamalarla gelir. Para biriminizi seçin ve ihtiyacınıza uygun olanı inceleyin.",
  "pricing.toggle.try": "Türk Lirası (₺ TRY)",
  "pricing.toggle.usd": "Amerikan Doları ($ USD)",
  "pricing.tabs.websites": "Web Siteleri & Denetim",
  "pricing.tabs.care": "Aylık Bakım Planları",
  "pricing.tabs.addons": "Ekstralar & İlaveler",
  "pricing.mostPopular": "En popüler",
  "pricing.getStarted": "Başla →",
  "pricing.founding.badge": "Kurucu Müşteri Fırsatı",
  "pricing.founding.title": "Projenizde %20 İndirim",
  "pricing.founding.desc":
    "İlk 3 müşteri için, yazılı bir referans yorumu ve tamamlanan projeyi portföyümde sergileme izni karşılığında %20 indirim.",
  "pricing.terms.title": "Net Şartlar & Güvenceler",
  "pricing.terms.payment":
    "Ödeme koşulları: Çalışmaya başlamak için %50 peşinat, kalan %50 nihai teslimatta (₺50,000 üzeri projelerde 40/30/30 aşamalı ödeme).",
  "pricing.terms.vat":
    "Vergi ve Barındırma: Fiyatlara uygulanabildiği durumlarda %20 KDV dahil değildir. Alan adı ve barındırma doğrudan sizin adınıza açılır, %100 kontrol sizdedir.",
  "pricing.terms.ownership":
    "Tam Mülkiyet: Kodlar, grafikler ve içerikler dahil her şey %100 size aittir. Yayından sonra tüm dosyalar eksiksiz teslim edilir.",
  "pricing.terms.invoicing":
    "Resmi Faturalandırma: İstanbul'dan resmi ticari e-fatura kesilir. Yurt dışı müşteriler için USD cinsinden güvenli faturalama yapılır.",

  "work.eyebrow": "Portföy & Vaka Analizleri",
  "work.title.1": "İşler ve",
  "work.title.2": "vaka çalışmaları.",
  "work.side":
    "Gerçek mimari, temiz kod ve şeffaf gösterimler. Tasarım, dönüşüm ve veri takibi sorunlarını nasıl çözdüğümü inceleyin.",
  "work.problem": "Sorun",
  "work.solution": "Geliştirilen",
  "work.result": "Sonuç",
  "work.concept": "Konsept Demo",
  "work.demo": "Demoyu İncele ↗",
  "work.footnote":
    "Portföy dürüstlüğü: Bu projeler, yüksek performans standartlarını ve tasarım vizyonunu kanıtlamak amacıyla canlı Next.js koduyla hazırlanmış konsept vaka çalışmalarıdır.",

  "security.eyebrow": "Siber Güvenlik Öncelikli Mühendislik",
  "security.title.1": "Güvenlik sonradan eklenmez,",
  "security.title.2": "en baştan inşa edilir.",
  "security.side":
    "Çoğu serbest çalışan web tasarımcısı yalnızca dış görünüme odaklanır, güvenliği ihmal eder. Siber güvenlik uzmanlığım sayesinde her site ilk günden itibaren saldırılara karşı sıkılaştırılır.",
  "security.score.badge": "SecurityHeaders.com'da A+ Derecesi",
  "security.score.desc":
    "İçerik Güvenliği Politikası (CSP), HSTS ve iframe korumalarında uluslararası standartlara tam uyum.",
  "security.audit.cta": "Mevcut sitenizin açıklarını öğrenmek ister misiniz? Ücretsiz denetim isteyin →",

  "process.eyebrow": "Nasıl Çalışırım?",
  "process.title.1": "14 günde teslim.",
  "process.title.2": "Belirsizlik yok.",
  "process.side":
    "Aylarca süren ajans gecikmeleri olmadan, hızlıca canlıya geçmek isteyen işletmeler için adım adım net bir süreç.",

  "founder.eyebrow": "NEXARO Hakkında",
  "founder.title.1": "Sitenizi kodlayan kişiyle",
  "founder.title.2": "doğrudan iletişim.",
  "founder.lead":
    "Sitenizi kodlayan kişiyle doğrudan iletişim; çoğu serbest çalışanda olmayan siber güvenlik uzmanlığı.",
  "founder.bio":
    "Ben Shahd Belhadj. Yazılım mühendisliği mezunuyum ve siber güvenlik alanında ileri düzey uzmanlığa sahibim. NEXARO'yu İstanbul'da küçük işletmelerin ve kurucuların ajans bürokrasisi, müşteri temsilcisi engelleri ve tecrübesiz stajyer devirleri olmadan modern web sitelerine kavuşması için kurdum.",
  "founder.response": "⚡ Yanıt taahhüdü: 24 saat içinde dönüş yaparım.",
  "founder.availability": "Bu ay 2 yeni proje kabul ediyorum",
  "founder.cta": "Projenizi konuşalım →",

  "faq.eyebrow": "Sıkça Sorulan Sorular",
  "faq.title.1": "Net yanıtlar,",
  "faq.title.2": "başlamadan önce.",
  "faq.side": "Fiyatlar, teslim süreleri, destek ve teknik mülkiyet hakkında bilmeniz gereken tüm ayrıntılar.",

  "contact.eyebrow": "Buradan Başlayın",
  "contact.title": "Ücretsiz web sitesi denetimi veya teklif alın.",
  "contact.body":
    "İşletmenizden kısaca bahsedin veya mevcut web sitenizin adresini iletin. Sitenizin hızını, güvenliğini ve mobil uyumunu inceleyip 24 saat içinde dönüş yapayım.",
  "contact.direct": "Doğrudan mesajlaşmak ister misiniz? WhatsApp'tan yazabilir veya 15 dakikalık tanışma görüşmesi planlayabilirsiniz.",
  "contact.book": "Cal.com üzerinden 15 dk tanışma randevusu alın ↗",
  "contact.form.name": "Adınız Soyadınız",
  "contact.form.contact": "E-posta adresiniz veya WhatsApp numaranız",
  "contact.form.service": "Hangi hizmete ihtiyacınız var?",
  "contact.form.url": "Mevcut web sitenizin adresi (varsa, ücretsiz denetim için)",
  "contact.form.details": "Projenizi veya hedeflerinizi kısaca anlatın",
  "contact.form.submit": "Ücretsiz Web Denetimi Al →",
  "contact.form.sending": "İletiliyor…",
  "contact.form.success": "Teşekkürler! Mesajınızı aldım, 24 saat içinde sizinle iletişime geçeceğim.",
  "contact.form.error": "Bir sorun oluştu. Lütfen doğrudan WhatsApp üzerinden veya hello@nexaro.studio adresine yazın.",
  "contact.privacy.notice":
    "Aydınlatma Metni: Bu formu doldurarak, bilgilerinizin yalnızca talebinize dönüş yapmak amacıyla KVKK ve gizlilik politikamıza uygun olarak işlenmesini kabul etmiş olursunuz.",

  "footer.rights": "Tüm hakları saklıdır.",
  "footer.top": "Başa dön",
  "footer.privacy": "Gizlilik ve KVKK Politikası",
  "lang.label": "Dil",
};

const fr: Dict = {
  "meta.title": "Conception & Développement Web à Istanbul | Sites Rapides & Sécurisés | NEXARO",
  "meta.description":
    "Studio indépendant à Istanbul : création de sites web rapides et sécurisés pour petites entreprises en 5 à 14 jours. Tarifs fixes, cybersécurité intégrée, sans frais d'agence.",
  "nav.services": "Services",
  "nav.pricing": "Tarifs",
  "nav.work": "Réalisations",
  "nav.process": "Méthode",
  "nav.about": "À propos",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.cta": "Obtenir un Audit Gratuit →",
  "nav.menu": "Ouvrir le menu",
  "nav.close": "Fermer le menu",

  "hero.eyebrow": "Studio Web & Sécurité · Istanbul",
  "hero.headline": "Des sites web rapides et sécurisés qui vous apportent des clients.",
  "hero.subline":
    "NEXARO est un studio indépendant à Istanbul. Je conçois des sites web pour petites entreprises en 5 à 14 jours, avec la cybersécurité intégrée. Tarifs fixes, sans frais d'agence.",
  "hero.cta.audit": "Obtenir un audit gratuit",
  "hero.cta.pricing": "Voir les tarifs",
  "hero.trust": "Tarifs fixes · Acompte 50 % · 2 tours de révision · 30 jours de support offert",
  "hero.city": "Istanbul, Türkiye",
  "hero.tagline": "Concevoir. Développer. Sécuriser.",
  "hero.note": "Collaboration directe avec l'ingénieure",

  "benefits.1": "⚡ Livraison en 5 à 14 jours",
  "benefits.2": "🛡️ Cybersécurité native (Note A+)",
  "benefits.3": "🏷️ Tarifs fixes et transparents",
  "benefits.4": "👤 Échange direct 1-à-1 avec la fondatrice",
  "benefits.5": "🔄 2 tours de révision inclus",
  "benefits.6": "🤝 30 jours de support technique offert",
  "benefits.7": "🔑 Cession intégrale du code et du design à 100 %",

  "services.eyebrow": "Ce que propose NEXARO",
  "services.title.1": "Trois services ciblés.",
  "services.title.2": "Zéro frais d'agence superflus.",
  "services.side":
    "Je me consacre exclusivement aux sites web à forte conversion, aux plans de maintenance sereins et à l'audit de cybersécurité.",
  "services.includes": "Ce qui est inclus :",
  "services.addon.title": "Options & Solutions Sur-Mesure",
  "services.addon.brand":
    "Kit de Marque Initial (Logo, couleurs, typographies) : ₺8,000 ($220) — vendu exclusivement en complément d'un site web.",
  "services.addon.custom":
    "Applications Web & Tableaux de Bord Sur-Mesure : Sur devis uniquement, cadré via une phase de découverte dédiée.",

  "pricing.eyebrow": "Tarifs Transparents",
  "pricing.title.1": "Tarifs fixes.",
  "pricing.title.2": "Aucun coût caché.",
  "pricing.side":
    "Chaque prestation s'accompagne d'un périmètre écrit, d'échéances fermes et d'étapes de validation. Choisissez votre devise.",
  "pricing.toggle.try": "Livre Turque (TRY)",
  "pricing.toggle.usd": "Dollar US (USD)",
  "pricing.tabs.websites": "Sites Web & Audits",
  "pricing.tabs.care": "Maintenance Mensuelle",
  "pricing.tabs.addons": "Options & Add-ons",
  "pricing.mostPopular": "Le plus populaire",
  "pricing.getStarted": "Démarrer →",
  "pricing.founding.badge": "Offre Client Pionnier",
  "pricing.founding.title": "Bénéficiez de 20 % de remise",
  "pricing.founding.desc":
    "20 % de réduction sur vos 3 premiers projets en échange d'un témoignage écrit et de l'autorisation de présenter la réalisation dans mon portfolio.",
  "pricing.terms.title": "Conditions Claires & Garanties",
  "pricing.terms.payment":
    "Modalités : Acompte de 50 % pour bloquer votre sprint, 50 % à la livraison (au-delà de ₺50,000 / $1,500 : 40 % acompte / 30 % étape / 30 % livraison).",
  "pricing.terms.vat":
    "TVA et Hébergement : Tarifs hors TVA (20 % le cas échéant). L'hébergement et le nom de domaine sont souscrits directement par vos soins pour préserver votre totale indépendance.",
  "pricing.terms.ownership":
    "Propriété intégrale : Tout vous appartient. Le code source, les fichiers de design et les contenus vous sont transférés dès le lancement.",
  "pricing.terms.invoicing":
    "Facturation officielle : Émise depuis Istanbul, Türkiye avec facture commerciale officielle. Facturation internationale en USD disponible.",

  "work.eyebrow": "Portfolio & Études de Cas",
  "work.title.1": "Réalisations et",
  "work.title.2": "études concrètes.",
  "work.side":
    "Une vraie architecture, du code propre et des démonstrations transparentes pour répondre aux enjeux de conversion et de performance.",
  "work.problem": "Problématique",
  "work.solution": "Livrable",
  "work.result": "Résultat",
  "work.concept": "Démonstration Concept",
  "work.demo": "Tester la démo ↗",
  "work.footnote":
    "Intégrité du portfolio : Ces réalisations sont des études de cas interactives conçues en Next.js pour prouver le niveau d'exigence technique et esthétique.",

  "security.eyebrow": "Ingénierie Cybersécurité Native",
  "security.title.1": "La sécurité intégrée dès le départ,",
  "security.title.2": "pas ajoutée après coup.",
  "security.side":
    "La plupart des freelances privilégient l'apparence et négligent la sécurité. Diplômée en cybersécurité, je sécurise chaque site contre les attaques dès le premier jour.",
  "security.score.badge": "Note A+ sur SecurityHeaders.com",
  "security.score.desc":
    "Vérifié et conforme aux standards industriels stricts pour CSP, HSTS et protection anti-clicjacking.",
  "security.audit.cta": "Vous souhaitez tester votre site actuel ? Demandez un audit gratuit →",

  "process.eyebrow": "Méthode de Travail",
  "process.title.1": "Livraison en 14 jours.",
  "process.title.2": "Zéro imprévu.",
  "process.side":
    "Un processus structuré en sprints pensé pour les petites entreprises qui souhaitent être en ligne rapidement sans retards interminables.",

  "founder.eyebrow": "À Propos de NEXARO",
  "founder.title.1": "Un accès direct à la personne",
  "founder.title.2": "qui conçoit votre site.",
  "founder.lead":
    "Un accès direct à la personne qui développe votre site, avec une expertise en cybersécurité rare chez les freelances.",
  "founder.bio":
    "Je m'appelle Shahd Belhadj, diplômée en génie logiciel avec une spécialisation avancée en cybersécurité. J'ai créé NEXARO à Istanbul pour offrir aux petites entreprises et aux fondateurs des sites fiables et performants, sans intermédiaires inutiles.",
  "founder.response": "⚡ Engagement de réponse : Je réponds sous 24 heures.",
  "founder.availability": "2 nouveaux projets disponibles ce mois-ci",
  "founder.cta": "Échanger sur votre projet →",

  "faq.eyebrow": "Foire Aux Questions",
  "faq.title.1": "Des réponses claires,",
  "faq.title.2": "avant de débuter.",
  "faq.side": "Tout ce que vous devez savoir sur nos tarifs, délais, support et propriété intellectuelle.",

  "contact.eyebrow": "Contactez-moi",
  "contact.title": "Obtenez un audit gratuit ou un devis.",
  "contact.body":
    "Décrivez votre activité ou transmettez-moi l'adresse de votre site web actuel. J'analyserai sa rapidité, sa sécurité et son affichage mobile, et vous répondrai sous 24h.",
  "contact.direct": "Vous préférez échanger directement ? Contactez-moi par WhatsApp ou réservez un appel de 15 minutes.",
  "contact.book": "Réserver un appel de 15 min sur Cal.com ↗",
  "contact.form.name": "Votre nom",
  "contact.form.contact": "E-mail ou numéro WhatsApp",
  "contact.form.service": "De quoi avez-vous besoin ?",
  "contact.form.url": "URL du site actuel (facultatif, pour audit gratuit)",
  "contact.form.details": "Parlez-moi de votre projet",
  "contact.form.submit": "Obtenir un Audit Gratuit →",
  "contact.form.sending": "Envoi en cours…",
  "contact.form.success": "Merci ! Votre demande a bien été reçue. Je vous répondrai sous 24 heures.",
  "contact.form.error": "Une erreur s'est produite. Merci de me contacter sur WhatsApp ou par e-mail à hello@nexaro.studio.",
  "contact.privacy.notice":
    "Protection des données : En soumettant ce formulaire, vous acceptez que vos données soient traitées exclusivement pour répondre à votre demande conformément à notre politique de confidentialité.",

  "footer.rights": "Tous droits réservés.",
  "footer.top": "Retour en haut",
  "footer.privacy": "Politique de Confidentialité & KVKK",
  "lang.label": "Langue",
};

const ar: Dict = {
  "meta.title": "تصميم وتطوير المواقع في إسطنبول | مواقع سريعة وآمنة | NEXARO",
  "meta.description":
    "استوديو مستقل تديره مهندسة برمجيات في إسطنبول: بناء مواقع سريعة وآمنة للشركات الصغيرة خلال 5-14 يومًا بأسعار ثابتة وأمان سيبراني مدمج دون تكاليف الوكالات الإضافية.",
  "nav.services": "الخدمات",
  "nav.pricing": "الأسعار",
  "nav.work": "أعمالنا",
  "nav.process": "آلية العمل",
  "nav.about": "نبذة",
  "nav.faq": "الأسئلة الشائعة",
  "nav.contact": "تواصل معنا",
  "nav.cta": "احصل على فحص مجاني →",
  "nav.menu": "فتح القائمة",
  "nav.close": "إغلاق القائمة",

  "hero.eyebrow": "استوديو الويب والأمان السيبراني · إسطنبول",
  "hero.headline": "مواقع سريعة وآمنة تجلب لك عملاء فعليين.",
  "hero.subline":
    "NEXARO استوديو مستقل في إسطنبول. أبني مواقع للأنشطة والشركات الصغيرة خلال 5–14 يومًا مع أمان مدمج وأسعار ثابتة ودون أي تكاليف إضافية للوكالات.",
  "hero.cta.audit": "احصل على فحص مجاني لموقعك",
  "hero.cta.pricing": "شاهد الأسعار",
  "hero.trust": "أسعار ثابتة · دفعة 50% · جولتا مراجعة · 30 يوم دعم فني مجاني بعد الإطلاق",
  "hero.city": "إسطنبول، تركيا",
  "hero.tagline": "تصميم. برمجة. تحصين.",
  "hero.note": "تعامل مباشر مع المهندسة المطورة",

  "benefits.1": "⚡ تسليم سريع خلال 5 إلى 14 يومًا",
  "benefits.2": "🛡️ أمان سيبراني مدمج (تقييم A+)",
  "benefits.3": "🏷️ أسعار ثابتة وشفافة دون مفاجآت",
  "benefits.4": "👤 تعامل وتواصل مباشر 1-إلى-1 مع المطورة",
  "benefits.5": "🔄 جولتا مراجعة وتعديل مشمولة",
  "benefits.6": "🤝 30 يوم دعم فني مجاني بعد الإطلاق",
  "benefits.7": "🔑 ملكية تامة لك 100% للكود والتصاميم",

  "services.eyebrow": "خدمات الاستوديو",
  "services.title.1": "ثلاث خدمات محددة.",
  "services.title.2": "دون هدر مالي.",
  "services.side":
    "أركز كليًا على المواقع عالية الأداء، باقات الصيانة والرعاية الشهرية، والتدقيق الأمني المتقدم للمواقع.",
  "services.includes": "ما يشمله كل مشروع:",
  "services.addon.title": "إضافات وحلول مخصصة",
  "services.addon.brand":
    "حزمة بداية الهوية البصرية (شعار، ألوان، خطوط): ₺8,000 ($220) — تُباع حصرًا كإضافة مع مشروع الموقع.",
  "services.addon.custom":
    "تطبيقات الويب ولوحات التحكم المخصصة: تسعير حسب الطلب، يبدأ بجلسة اكتشاف وتخطيط مدفوعة.",

  "pricing.eyebrow": "أسعار واضحة وشفافة",
  "pricing.title.1": "أسعار ثابتة.",
  "pricing.title.2": "لا فواتير مفاجئة.",
  "pricing.side":
    "كل باقة تأتي مع نطاق عمل مكتوب وحدود ومراحل تسليم واضحة تمامًا. اختر العملة واطلع على ما يناسب نشاطك.",
  "pricing.toggle.try": "الليرة التركية (TRY)",
  "pricing.toggle.usd": "الدولار الأمريكي (USD)",
  "pricing.tabs.websites": "المواقع والفحص الأمني",
  "pricing.tabs.care": "باقات الرعاية الشهرية",
  "pricing.tabs.addons": "الإضافات والخدمات المكملة",
  "pricing.mostPopular": "الأكثر طلبًا",
  "pricing.getStarted": "ابدأ الآن →",
  "pricing.founding.badge": "عرض العملاء المؤسسين",
  "pricing.founding.title": "خصم 20% على مشروعك",
  "pricing.founding.desc":
    "خصم 20% لأول 3 عملاء جدد مقابل تقييم وتوصية مكتوبة والإذن بعرض المشروع المنجز في معرض أعمالي.",
  "pricing.terms.title": "شروط وضمانات واضحة",
  "pricing.terms.payment":
    "شروط الدفع: 50% دفعة مقدمة لحجز موعد العمل، و50% عند التسليم النهائي (للمشاريع التي تتجاوز ₺50,000 / $1,500: دفعة 40% مقدمًا / 30% مع المعاينة / 30% عند الإطلاق).",
  "pricing.terms.vat":
    "الضرائب والاستضافة: الأسعار لا تشمل 20% ضريبة القيمة المضافة عند انطباقها. تقوم بحجز النطاق والاستضافة مباشرة باسمك لضمان تحكمك الكامل 100%.",
  "pricing.terms.ownership":
    "ملكية كاملة: تمتلك كل شيء بنسبة 100%. يتم تسليم كامل الكود المصدري، ملفات التصميم، والمحتوى فور الإطلاق.",
  "pricing.terms.invoicing":
    "فواتير رسمية: تصدر الفواتير من إسطنبول بفاتورة تجارية رسمية. نوفر للعملاء الدوليين فواتير بالدولار الأمريكي ودفعًا إلكترونيًا آمنًا.",

  "work.eyebrow": "معرض الأعمال ودراسات الحالة",
  "work.title.1": "مشاريع و",
  "work.title.2": "نماذج حقيقية.",
  "work.side":
    "بنية برمجية حقيقية، كود نظيف وتجارب تفاعلية توضح كيف أحل مشكلات التصميم والأداء والتحويل.",
  "work.problem": "المشكلة",
  "work.solution": "ما تم بناؤه",
  "work.result": "النتيجة",
  "work.concept": "نموذج تجريبي",
  "work.demo": "معاينة النموذج ↗",
  "work.footnote":
    "مصداقية الأعمال: تمثل هذه المشاريع دراسات ونماذج متقنة مبنية بكود Next.js فعّال لعرض مستوى الدقة الهندسية والجمالية.",

  "security.eyebrow": "هندسة الأمان السيبراني أولًا",
  "security.title.1": "الأمان مدمج في صلب الموقع،",
  "security.title.2": "وليس مجرد فكرة ثانوية.",
  "security.side":
    "معظم مصممي المواقع يركزون على المظهر الخارجي ويهملون الثغرات. بفضل خلفيتي الأكاديمية في الأمن السيبراني، أسلّم كل موقع محصنًا ضد أشهر الهجمات من اليوم الأول.",
  "security.score.badge": "تقييم A+ على موقع SecurityHeaders.com",
  "security.score.desc":
    "فحص معتمد وفقًا لأعلى معايير الحماية لسياسات CSP، HSTS، ومنع استغلال النماذج.",
  "security.audit.cta": "هل ترغب في فحص موقعك الحالي؟ اطلب فحص أمان أولي مجاني →",

  "process.eyebrow": "آلية العمل",
  "process.title.1": "تسليم في 14 يومًا.",
  "process.title.2": "دون أي غموض.",
  "process.side":
    "منهجية عمل محددة بخطوات واضحة مصممة لأصحاب الأعمال الذين يرغبون في إطلاق سريع دون تأخير مستمر.",

  "founder.eyebrow": "عن استوديو NEXARO",
  "founder.title.1": "تواصل مباشر مع الشخص",
  "founder.title.2": "الذي يبني موقعك.",
  "founder.lead":
    "وصول مباشر إلى المهندسة التي تطور موقعك، مع خلفية في الأمن السيبراني لا يمتلكها معظم المستقلين.",
  "founder.bio":
    "أنا شهد بلحاج، خريجة هندسة البرمجيات مع تخصص متقدم في الأمن السيبراني. أسست NEXARO كاستوديو مستقل في إسطنبول لأقدم للشركات الصغيرة ورواد الأعمال مواقع سريعة وآمنة دون تعقيدات الوكالات أو مديري الحسابات أو تسليم العمل لمتدربين.",
  "founder.response": "⚡ التزام بالرد: أرد دائمًا خلال 24 ساعة.",
  "founder.availability": "متاح مشروعان جديدان لهذا الشهر",
  "founder.cta": "تحدث معي عن مشروعك →",

  "faq.eyebrow": "الأسئلة الشائعة",
  "faq.title.1": "إجابات واضحة،",
  "faq.title.2": "قبل أن نبدأ.",
  "faq.side": "كل ما يهمك معرفته حول الأسعار، المدد الزمنية، الدعم الفني، وحقوق الملكية البرمجية.",

  "contact.eyebrow": "ابدأ الآن",
  "contact.title": "احصل على فحص مجاني لموقعك أو عرض سعر.",
  "contact.body":
    "أخبرني عن نشاطك أو شاركني رابط موقعك الحالي. سأراجع سرعة موقعك وأمانه وتوافقه مع الهواتف، وأرد عليك خلال 24 ساعة.",
  "contact.direct": "تفضل الحديث المباشر؟ تواصل معي على واتساب أو احجز مكالمة تعريفية لمدة 15 دقيقة.",
  "contact.book": "احجز مكالمة تعريفية مدتها 15 دقيقة على Cal.com ↗",
  "contact.form.name": "الاسم الكامل",
  "contact.form.contact": "البريد الإلكتروني أو رقم الواتساب",
  "contact.form.service": "ما الخدمة التي تحتاجها؟",
  "contact.form.url": "رابط موقعك الحالي (اختياري، للفحص المجاني)",
  "contact.form.details": "أخبرني تفاصيل مشروعك أو أهدافك",
  "contact.form.submit": "احصل على فحص مجاني للموقع →",
  "contact.form.sending": "جارٍ الإرسال…",
  "contact.form.success": "شكرًا لك! استلمت تفاصيلك وسأرد عليك شخصيًا خلال 24 ساعة.",
  "contact.form.error": "حدث خطأ غير متوقع. يرجى مراسلتي مباشرة عبر واتساب أو على hello@nexaro.studio.",
  "contact.privacy.notice":
    "إشعار الخصوصية: بإرسال هذا النموذج، فإنك توافق على معالجة معلوماتك حصرًا للرد على استفسارك وفقًا لسياسة الخصوصية وحماية البيانات.",

  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.top": "العودة للأعلى",
  "footer.privacy": "سياسة الخصوصية وحماية البيانات KVKK",
  "lang.label": "اللغة",
};

const dictionaries: Record<Locale, Dict> = { en, tr, fr, ar };

export type MessageKey = keyof Dict;

export function translate(locale: Locale, key: MessageKey): string {
  return dictionaries[locale]?.[key] ?? en[key] ?? key;
}
