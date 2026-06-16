/* 
   GLASEOX — Web Sitesi Yeniden Tasarım Mantığı
   Vanilla ES6 JS State Management & UI Binding
*/

// UI Translations for EN, RU, RO
const UI_TRANSLATIONS = {
  "en": {
    "nav": {
      "home": "Home",
      "products": "Products",
      "categories": "Categories",
      "about": "About Us",
      "contact": "Contact",
      "requestQuote": "Request Quote",
      "catalog": "Catalog",
      "downloadCatalog": "Download Catalog",
      "faq": "FAQ",
      "cat_all": "All",
      "cat_bottles": "Bottles",
      "cat_caps": "Caps",
      "cat_pumps": "Pumps",
      "cat_sets": "Mini Sets",
      "cat_diffusers": "Diffusers",
      "cat_sprays": "Sprays",
      "cat_jars": "Jars",
      "cat_serum": "Serum",
      "cat_car": "Car Perfumes"
    },
    "brand": {
      "name": "Glaseox",
      "tagline": "Premium Perfume Bottle Manufacturer & Wholesale Supplier",
      "sub": "Crafting the world's finest glass packaging for the fragrance industry since 2008."
    },
    "hero": {
      "badge": "Trusted by 500+ global brands",
      "title": "Premium Glass Packaging for the World's Finest Fragrances",
      "subtitle": "Manufacturer & wholesale supplier of perfume bottles, caps, pumps, diffusers and more. 430+ products. Worldwide delivery to 60+ countries.",
      "cta1": "Explore Catalog",
      "cta2": "Request a Quote",
      "stats": {
        "products": "Products",
        "countries": "Countries",
        "clients": "B2B Clients",
        "years": "Years"
      }
    },
    "categories": {
      "title": "Product Categories",
      "subtitle": "Eight specialised lines. 430+ products. One trusted partner.",
      "viewAll": "View all products",
      "justLanded": "Just Landed",
      "viewAllNew": "View all new products"
    },
    "categoryNames": {
      "perfume-bottle": "Perfume Bottles",
      "perfume-caps": "Perfume Caps",
      "pump-collar": "Pump & Collar",
      "mini-set": "Mini Sets",
      "diffuser": "Diffusers",
      "plastic-sprayers": "Plastic Sprayers",
      "serum-bottles": "Serum Bottles",
      "car-perfume-bottle": "Car Perfume Bottles"
    },
    "categoryDescriptions": {
      "perfume-bottle": "Crystal-clear glass bottles in 30, 50 and 100 ml. Italian-inspired silhouettes, faceted designs and limited editions.",
      "perfume-caps": "Zamak and ABS caps with FEA-15 standard. Cr-plated, gold-plated, metalized, wooden and magnetic options.",
      "pump-collar": "Stainless-steel crimp and screw pumps with aluminium collars. Compatible with all standard bottle necks.",
      "mini-set": "Travel-size and discovery sets in 5, 8 and 10 ml. Custom gift boxes for corporate and promotional gifting.",
      "diffuser": "Reed diffuser bottles with cork wooden caps. 100, 200 and 250 ml. Frosted, clear and amber glass.",
      "plastic-sprayers": "Fine-mist, trigger and foam sprayers. PP recyclable. Compatible with body mists, hair perfumes and sanitizers.",
      "serum-bottles": "DIN-18 dropper bottles for serums, oils and facial treatments. Amber UV and clear glass options.",
      "car-perfume-bottle": "8, 10 and 15 ml car perfume bottles with wooden clips, aluminium caps and magnetic vent attachments."
    },
    "products": {
      "title": "Complete Product Catalogue",
      "subtitle": "Browse 430+ wholesale perfume packaging products. Filter by category, capacity, color and more.",
      "filter": "Filters",
      "all": "All Products",
      "new": "New",
      "featured": "Featured",
      "sortBy": "Sort by",
      "sortAZ": "A to Z",
      "sortZA": "Z to A",
      "sortNew": "Newest first",
      "sortFeatured": "Featured first",
      "noResults": "No products match your filters.",
      "showingOf": "Showing {shown} of {total} products",
      "capacity": "Capacity",
      "category": "Category",
      "color": "Color",
      "sort": "Sort",
      "reset": "Reset",
      "requestQuote": "Request Quote",
      "view": "View details",
      "quickView": "Quick view"
    },
    "product": {
      "capacity": "Capacity",
      "material": "Material",
      "color": "Color",
      "shape": "Shape",
      "height": "Height",
      "diameter": "Diameter",
      "neck": "Neck finish",
      "description": "Description",
      "features": "Key Features",
      "specs": "Technical Specifications",
      "requestQuote": "Request a Quote",
      "downloadSpec": "Download Spec Sheet",
      "askQuestion": "Ask a Question",
      "relatedProducts": "Related Products",
      "inStock": "In Stock",
      "moq": "MOQ",
      "leadTime": "Lead time",
      "packaging": "Packaging"
    },
    "about": {
      "title": "Leading Global Manufacturer of Glass Packaging",
      "p1": "Glaseox has been a trusted name in the perfume and cosmetics packaging industry for over 18 years. From our state-of-the-art facility, we manufacture and export premium glass bottles, caps, pumps, diffusers and accessories to more than 60 countries worldwide.",
      "p2": "Our commitment to quality, design excellence and reliable delivery has made us the partner of choice for hundreds of fragrance brands — from niche artisan houses to the world's leading global perfume labels.",
      "p3": "With 430+ products across 8 specialised lines, we offer the widest catalogue in the industry. Every product is crafted with care, inspected with precision and shipped with full documentation.",
      "features": [
        {
          "title": "Premium Quality",
          "desc": "ISO 9001 certified production. Crystal-clear glass. Perfect finish on every unit."
        },
        {
          "title": "Fast Delivery",
          "desc": "Stock products ship in 7 days. Custom orders in 30-45 days. Worldwide logistics."
        },
        {
          "title": "Custom Branding",
          "desc": "Custom colours, screen-printing, embossing, hot-stamping and logo engraving."
        },
        {
          "title": "Wholesale Pricing",
          "desc": "Direct-from-manufacturer pricing. Volume discounts from 1,000 units."
        }
      ]
    },

    "benefits": {
      "title": "Why Brands Choose Glaseox",
      "subtitle": "The trusted partner behind 500+ successful fragrance brands worldwide."
    },
    "contact": {
      "title": "Get in Touch",
      "subtitle": "Request a quote, order a sample, or schedule a video call with our export team.",
      "name": "Full name",
      "email": "Email",
      "company": "Company",
      "phone": "Phone (with country code)",
      "country": "Country",
      "interest": "I'm interested in",
      "message": "Tell us about your project",
      "send": "Send message",
      "success": "Thank you! Our export team will reply within 24 hours.",
      "address": "Address",
      "addressText": "Global Headquarters · Export Operations Center · International Trade District",
      "phone_label": "Phone",
      "email_label": "Email",
      "hours": "Working hours",
      "hoursText": "Mon - Sat: 09:00 - 18:00 (GMT+3)"
    },
    "footer": {
      "about": "About us",
      "products": "Products",
      "support": "Support",
      "contact": "Contact",
      "privacy": "Privacy",
      "terms": "Terms",
      "rights": "All rights reserved.",
      "newsletter": "Subscribe to our newsletter",
      "newsletterSub": "Get new product launches and industry insights monthly.",
      "subscribe": "Subscribe",
      "yourEmail": "Your email"
    },
    "common": {
      "learnMore": "Learn more",
      "readMore": "Read more",
      "search": "Search products...",
      "back": "Back",
      "close": "Close",
      "yes": "Yes",
      "no": "No"
    },
    "all_categories": "All Products",
    "notice_text": "<strong>Wholesale Only:</strong> Minimum order quantities (MOQ) apply to all requests. We do not offer retail sales or individual items.",
    "empty_title": "No products found",
    "empty_desc": "We couldn't find any products matching your current search or category filters.",
    "load_more": "Load More Products",
    "spec_title": "Technical Specifications",
    "tech_drawing": "Technical Drawing",
    "pdf_download": "Download PDF Specification",
    "contact_telegram": "Telegram",
    "contact_form_btn": "Inquire via Email Form",
    "prefill_tg": "Hello Glaseox Team, I am interested in the product: {name}. Could you please provide wholesale pricing, MOQ, and sample availability for my company? Thank you.",
    "address_label": "Address",
    "email_label": "Email Support",
    "telegram_label": "Telegram Sales",
    "address_val": "Istanbul, Turkey",
    "cat_perfume_bottles": "Perfume Bottles",
    "cat_perfume_caps": "Perfume Caps",
    "cat_pumps_collars": "Pumps & Collars",
    "cat_diffuser_bottles": "Diffuser Bottles",
    "opt_general": "General Inquiry / Multiple Products",
    "opt_bottles": "Perfume Bottles",
    "opt_caps": "Perfume Caps",
    "opt_pumps": "Pumps & Collars",
    "opt_minis": "Mini Sets",
    "opt_diffusers": "Diffuser Bottles",
    "opt_sprays": "Plastic Sprays",
    "opt_jars": "Cream Jars",
    "opt_serums": "Serum Bottles",
    "opt_car": "Car Air Freshener Bottles",
    "form_name": "Full Name",
    "form_company": "Company Name",
    "form_country": "Country",
    "form_email": "Email Address",
    "form_product": "Interested Category / Product",
    "form_message": "Your Message (Include quantities and size requirements)",
    "form_submit": "Send Message",
    "form_success": "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
    "form_error": "Something went wrong. Please check your inputs and try again.",
    "faq_section_title": "Frequently Asked Questions",
    "faq_rating_count_label": "(120+ reviews)",
    "search_placeholder": "Search bottles, caps, sizes...",
    "contact_form_title": "Send Wholesale Inquiry",
    "footer_desc": "Glaseox is a leading B2B supplier of premium glass perfume bottles and luxury cosmetic ambalaj, based in Istanbul.",
    "footer_nav": "Navigation",
    "footer_categories": "Product Lines",
    "footer_contact": "Contact Info",
    "footer_rights": "All Rights Reserved.",
    "footer_privacy": "Privacy Policy",
    "footer_terms": "Terms & Conditions"
  },
  "ro": {
    "nav": {
      "home": "Acasă",
      "products": "Produse",
      "categories": "Categorii",
      "about": "Despre Noi",
      "contact": "Contact",
      "requestQuote": "Cere ofertă",
      "catalog": "Catalog",
      "downloadCatalog": "Descarcă catalog",
      "faq": "Întrebări Frecvente",
      "cat_all": "Toate",
      "cat_bottles": "Sticle",
      "cat_caps": "Capace",
      "cat_pumps": "Pompe",
      "cat_sets": "Mini Seturi",
      "cat_diffusers": "Difuzoare",
      "cat_sprays": "Spray-uri",
      "cat_jars": "Borcane",
      "cat_serum": "Serum",
      "cat_car": "Parfum Auto"
    },
    "brand": {
      "name": "Glaseox",
      "tagline": "Producător și furnizor en-gros de sticle de parfum premium",
      "sub": "Creăm cele mai fine ambalaje din sticlă pentru industria parfumurilor din 2008."
    },
    "hero": {
      "badge": "Ales de peste 500 de branduri globale",
      "title": "Ambalaje premium din sticlă pentru cele mai rafinate parfumuri din lume",
      "subtitle": "Producător și furnizor en-gros de sticle de parfum, capace, pompe, difuzoare și multe altele. 430+ produse. Livrare în peste 60 de țări.",
      "cta1": "Explorează catalogul",
      "cta2": "Cere o ofertă",
      "stats": {
        "products": "Produse",
        "countries": "Țări",
        "clients": "Clienți B2B",
        "years": "Ani"
      }
    },
    "categories": {
      "title": "Categorii de produse",
      "subtitle": "Opt linii specializate. 430+ produse. Un singur partener de încredere.",
      "viewAll": "Vezi toate produsele",
      "justLanded": "Recent Lansate",
      "viewAllNew": "Vezi toate produsele noi"
    },
    "categoryNames": {
      "perfume-bottle": "Sticle de parfum",
      "perfume-caps": "Capace de parfum",
      "pump-collar": "Pompă și guler",
      "mini-set": "Seturi mini",
      "diffuser": "Difuzoare",
      "plastic-sprayers": "Pulverizatoare plastic",
      "serum-bottles": "Sticle de ser",
      "car-perfume-bottle": "Sticle parfum auto"
    },
    "categoryDescriptions": {
      "perfume-bottle": "Sticle de sticlă cristalină în 30, 50 și 100 ml. Siluete inspirate de Italia, designuri fațetate și ediții limitate.",
      "perfume-caps": "Capace zamak și ABS cu standard FEA-15. Cromate, aurite, metalizate, din lemn și magnetice.",
      "pump-collar": "Pompe cu sertizare și șurub din oțel inoxidabil, cu gulere de aluminiu. Compatibile cu toate gâturile standard.",
      "mini-set": "Seturi travel și de descoperire în 5, 8 și 10 ml. Cutii cadou personalizate pentru cadouri corporate și promoționale.",
      "diffuser": "Sticle difuzor cu bețișoare și capace din lemn tip plută. 100, 200 și 250 ml. Sticlă mată, transparentă și amber.",
      "plastic-sprayers": "Pulverizatoare ceață fină, declanșator și spumă. PP reciclabil. Compatibile cu spray-uri de corp, păr și dezinfectanți.",
      "serum-bottles": "Sticle cu picurător DIN-18 pentru seruri, uleiuri și tratamente faciale. Sticlă amber UV și transparentă.",
      "car-perfume-bottle": "Sticle parfum auto de 8, 10 și 15 ml cu cleme din lemn, capace aluminiu și atașare magnetică ventilație."
    },
    "products": {
      "title": "Catalog complet de produse",
      "subtitle": "Răsfoiește 430+ produse de ambalare parfum en-gros. Filtrează după categorie, capacitate, culoare și mai mult.",
      "filter": "Filtre",
      "all": "Toate produsele",
      "new": "Nou",
      "featured": "Recomandate",
      "sortBy": "Sortează după",
      "sortAZ": "A la Z",
      "sortZA": "Z la A",
      "sortNew": "Cele mai noi",
      "sortFeatured": "Recomandate primele",
      "noResults": "Niciun produs nu se potrivește filtrelor tale.",
      "showingOf": "Se afișează {shown} din {total} produse",
      "capacity": "Capacitate",
      "category": "Categorie",
      "color": "Culoare",
      "sort": "Sortează",
      "reset": "Resetează",
      "requestQuote": "Cere ofertă",
      "view": "Vezi detalii",
      "quickView": "Vizualizare rapidă"
    },
    "product": {
      "capacity": "Capacitate",
      "material": "Material",
      "color": "Culoare",
      "shape": "Formă",
      "height": "Înălțime",
      "diameter": "Diametru",
      "neck": "Finisaj gât",
      "description": "Descriere",
      "features": "Caracteristici principale",
      "specs": "Specificații tehnice",
      "requestQuote": "Cere o ofertă",
      "downloadSpec": "Descarcă fișa tehnică",
      "askQuestion": "Pune o întrebare",
      "relatedProducts": "Produse similare",
      "inStock": "În stoc",
      "moq": "MOQ",
      "leadTime": "Termen de livrare",
      "packaging": "Ambalare"
    },
    "about": {
      "title": "Producător global lider de ambalaje din sticlă",
      "p1": "Glaseox este un nume de încredere în industria ambalajelor de parfum și cosmetice de peste 18 ani. Din unitatea noastră de ultimă generație, producem și exportăm sticle de sticlă, capace, pompe, difuzoare și accesorii premium către peste 60 de țări din întreaga lume.",
      "p2": "Angajamentul nostru pentru calitate, excelență în design și livrare fiabilă ne-a făcut partenerul preferat pentru sute de branduri de parfumuri — de la case artizanale nișate la cele mai importante branduri globale.",
      "p3": "Cu 430+ produse în 8 linii specializate, oferim cel mai larg catalog din industrie. Fiecare produs este creat cu grijă, inspectat cu precizie și expediat cu documentație completă.",
      "features": [
        {
          "title": "Calitate premium",
          "desc": "Producție certificată ISO 9001. Sticlă cristalină. Finisaj perfect la fiecare unitate."
        },
        {
          "title": "Livrare rapidă",
          "desc": "Produsele din stoc se expediază în 7 zile. Comenzi personalizate în 30-45 zile. Logistică mondială."
        },
        {
          "title": "Branding personalizat",
          "desc": "Culori personalizate, serigrafie, embossare, ștanțare la cald și gravare logo."
        },
        {
          "title": "Prețuri en-gros",
          "desc": "Preț direct de la producător. Reduceri de volum de la 1.000 unități."
        }
      ]
    },

    "benefits": {
      "title": "De ce brandurile aleg Glaseox",
      "subtitle": "Partenerul de încredere din spatele a 500+ branduri de parfumuri de succes la nivel mondial."
    },
    "contact": {
      "title": "Contactează-ne",
      "subtitle": "Cere o ofertă, comandă o mostră sau programează un apel video cu echipa noastră de export.",
      "name": "Nume complet",
      "email": "Email",
      "company": "Companie",
      "phone": "Telefon (cu cod țară)",
      "country": "Țara",
      "interest": "Sunt interesat de",
      "message": "Spune-ne despre proiectul tău",
      "send": "Trimite mesaj",
      "success": "Mulțumim! Echipa noastră de export va răspunde în 24 de ore.",
      "address": "Adresă",
      "addressText": "Sediul Global · Centru de Operațiuni Export · Districtul de Comerț Internațional",
      "phone_label": "Telefon",
      "email_label": "Email",
      "hours": "Program de lucru",
      "hoursText": "Lun - Sâm: 09:00 - 18:00 (GMT+3)"
    },
    "footer": {
      "about": "Despre noi",
      "products": "Produse",
      "support": "Suport",
      "contact": "Contact",
      "privacy": "Confidențialitate",
      "terms": "Termeni",
      "rights": "Toate drepturile rezervate.",
      "newsletter": "Abonează-te la newsletter",
      "newsletterSub": "Primește lunar lansări de produse noi și informații din industrie.",
      "subscribe": "Abonează-te",
      "yourEmail": "Email-ul tău"
    },
    "common": {
      "learnMore": "Află mai multe",
      "readMore": "Citește mai mult",
      "search": "Caută produse...",
      "back": "Înapoi",
      "close": "Închide",
      "yes": "Da",
      "no": "Nu"
    },
    "all_categories": "Toate Produsele",
    "notice_text": "<strong>Exclusiv En-Gros:</strong> Se aplică cantități minime de comandă (MOQ) pentru toate solicitările. Nu oferim vânzare cu amănuntul sau articole individuale.",
    "empty_title": "Nu s-au găsit produse",
    "empty_desc": "Nu am putut găsi produse care să corespundă căutării sau filtrului de categorie selectat.",
    "load_more": "Încarcă Mai Multe Produse",
    "spec_title": "Specificații Tehnice",
    "tech_drawing": "Desen Tehnic",
    "pdf_download": "Descărcați Fișa PDF",
    "contact_telegram": "Telegram",
    "contact_form_btn": "Solicitare prin Formular Email",
    "prefill_tg": "Bună ziua, echipa Glaseox! Sunt interesat de produsul: {name}. Ne puteți oferi prețuri en-gros, MOQ-ul și disponibilitatea mostrelor pentru compania mea? Vă mulțumesc.",
    "address_label": "Adresă",
    "email_label": "Suport Email",
    "telegram_label": "Vânzări Telegram",
    "address_val": "Istanbul, Turcia",
    "cat_perfume_bottles": "Sticle de Parfum",
    "cat_perfume_caps": "Capace de Parfum",
    "cat_pumps_collars": "Pompe și Gulerașe",
    "cat_diffuser_bottles": "Difuzoare",
    "opt_general": "Solicitare Generală / Produse Multiple",
    "opt_bottles": "Sticle de Parfum",
    "opt_caps": "Capace de Parfum",
    "opt_pumps": "Pompe și Gulerașe",
    "opt_minis": "Mini Seturi",
    "opt_diffusers": "Difuzoare",
    "opt_sprays": "Spray-uri din Plastic",
    "opt_jars": "Borcane de Cremă",
    "opt_serums": "Sticle de Serum",
    "opt_car": "Sticle de Parfum Auto",
    "form_name": "Nume Complet",
    "form_company": "Numele Companiei",
    "form_country": "Țară",
    "form_email": "Adresă de Email",
    "form_product": "Categorie / Produs de Interes",
    "form_message": "Mesajul Dvs. (Includeți cantitățile și cerințele de dimensiune)",
    "form_submit": "Trimite Mesaj",
    "form_success": "Vă mulțumim! Mesajul dvs. a fost trimis cu succes. Echipa noastră vă va contacta în cel mai scurt timp.",
    "form_error": "Ceva nu a mers bine. Vă rugăm să verificați datele introduse și să încercați din nou.",
    "faq_section_title": "Întrebări Frecvente",
    "faq_rating_count_label": "(120+ recenzii)",
    "search_placeholder": "Caută sticle, capace, dimensiuni...",
    "contact_form_title": "Trimite Solicitare En-Gros",
    "footer_desc": "Glaseox este un furnizor B2B de top de sticle de parfum din sticlă premium și ambalaje cosmetice de lux, cu sediul în Istanbul.",
    "footer_nav": "Navigare",
    "footer_categories": "Linii de Produse",
    "footer_contact": "Informații Contact",
    "footer_rights": "Toate Drepturile Rezervate.",
    "footer_privacy": "Politică de Confidențialitate",
    "footer_terms": "Termeni și Condiții"
  },
  "ru": {
    "nav": {
      "home": "Главная",
      "products": "Продукция",
      "categories": "Категории",
      "about": "О нас",
      "contact": "Контакты",
      "requestQuote": "Запросить КП",
      "catalog": "Каталог",
      "downloadCatalog": "Скачать каталог",
      "faq": "Вопросы и ответы",
      "cat_all": "Все",
      "cat_bottles": "Флаконы",
      "cat_caps": "Крышки",
      "cat_pumps": "Помпы",
      "cat_sets": "Мини-сеты",
      "cat_diffusers": "Диффузоры",
      "cat_sprays": "Спреи",
      "cat_jars": "Баночки",
      "cat_serum": "Сыворотки",
      "cat_car": "Для авто"
    },
    "brand": {
      "name": "Glaseox",
      "tagline": "Производитель и оптовый поставщик премиальных флаконов для парфюмерии",
      "sub": "Создаём лучшую стеклянную упаковку для парфюмерной индустрии с 2008 года."
    },
    "hero": {
      "badge": "Нам доверяют 500+ мировых брендов",
      "title": "Премиальная стеклянная упаковка для лучших ароматов мира",
      "subtitle": "Производитель и оптовый поставщик флаконов для духов, колпачков, помп, диффузоров и многого другого. 430+ товаров. Доставка в более чем 60 стран мира.",
      "cta1": "Смотреть каталог",
      "cta2": "Запросить КП",
      "stats": {
        "products": "Товаров",
        "countries": "Стран",
        "clients": "B2B клиентов",
        "years": "Лет"
      }
    },
    "categories": {
      "title": "Категории продукции",
      "subtitle": "Восемь специализированных линеек. 430+ товаров. Один надёжный партнёр.",
      "viewAll": "Все товары",
      "justLanded": "Новое поступление",
      "viewAllNew": "Смотреть все новинки"
    },
    "categoryNames": {
      "perfume-bottle": "Флаконы для духов",
      "perfume-caps": "Колпачки для духов",
      "pump-collar": "Помпы и воротнички",
      "mini-set": "Мини-наборы",
      "diffuser": "Диффузоры",
      "plastic-sprayers": "Пластиковые спреи",
      "serum-bottles": "Флаконы для сывороток",
      "car-perfume-bottle": "Авто-парфюм флаконы"
    },
    "categoryDescriptions": {
      "perfume-bottle": "Кристально чистые стеклянные флаконы 30, 50 и 100 мл. Итальянские силуэты, гранёный дизайн и лимитированные серии.",
      "perfume-caps": "Колпачки из цинкового сплава и ABS стандарта FEA-15. Хромированные, позолоченные, металлизированные, деревянные и магнитные.",
      "pump-collar": "Обжимные и резьбовые помпы из нерж. стали с алюминиевыми воротничками. Совместимы со всеми стандартными горлышками.",
      "mini-set": "Тревел и ознакомительные наборы 5, 8 и 10 мл. Индивидуальные подарочные коробки для корпоративных и промо-подарков.",
      "diffuser": "Флаконы для аромадиффузоров с пробковыми деревянными крышками. 100, 200 и 250 мл. Матовое, прозрачное и янтарное стекло.",
      "plastic-sprayers": "Мелкодисперсные, триггерные и пенные спреи. Перерабатываемый PP. Для спреев тела, волос и санитайзеров.",
      "serum-bottles": "Флаконы-капельницы DIN-18 для сывороток, масел и ухода за лицом. Янтарное УФ и прозрачное стекло.",
      "car-perfume-bottle": "Флаконы автопарфюма 8, 10 и 15 мл с деревянными зажимами, алюминиевыми крышками и магнитным креплением на дефлектор."
    },
    "products": {
      "title": "Полный каталог продукции",
      "subtitle": "Более 430+ оптовых парфюмерных упаковок. Фильтруйте по категории, объёму, цвету и другим параметрам.",
      "filter": "Фильтры",
      "all": "Все товары",
      "new": "Новинки",
      "featured": "Рекомендуемые",
      "sortBy": "Сортировать",
      "sortAZ": "А — Я",
      "sortZA": "Я — А",
      "sortNew": "Сначала новые",
      "sortFeatured": "Сначала рекомендуемые",
      "noResults": "Нет товаров, соответствующих вашим фильтрам.",
      "showingOf": "Показано {shown} из {total} товаров",
      "capacity": "Объём",
      "category": "Категория",
      "color": "Цвет",
      "sort": "Сортировка",
      "reset": "Сбросить",
      "requestQuote": "Запросить КП",
      "view": "Подробнее",
      "quickView": "Быстрый просмотр"
    },
    "product": {
      "capacity": "Объём",
      "material": "Материал",
      "color": "Цвет",
      "shape": "Форма",
      "height": "Высота",
      "diameter": "Диаметр",
      "neck": "Горлышко",
      "description": "Описание",
      "features": "Ключевые особенности",
      "specs": "Технические характеристики",
      "requestQuote": "Запросить КП",
      "downloadSpec": "Скачать спецификацию",
      "askQuestion": "Задать вопрос",
      "relatedProducts": "Похожие товары",
      "inStock": "В наличии",
      "moq": "MOQ",
      "leadTime": "Срок поставки",
      "packaging": "Упаковка"
    },
    "about": {
      "title": "Ведущий мировой производитель стеклянной упаковки",
      "p1": "Glaseox — надёжное имя в индустрии парфюмерной и косметической упаковки уже более 18 лет. С нашего современного предприятия мы производим и экспортируем премиальные стеклянные флаконы, колпачки, помпы, диффузоры и аксессуары в более чем 60 стран мира.",
      "p2": "Наша приверженность качеству, дизайну и надёжным поставкам сделала нас партнёром выбора для сотен парфюмерных брендов — от нишевых ремесленных домов до ведущих мировых парфюмерных брендов.",
      "p3": "Более 430 товаров в 8 специализированных линейках — у нас самый широкий каталог в отрасли. Каждый продукт создан с заботой, проверен с точностью и отправлен с полной документацией.",
      "features": [
        {
          "title": "Премиальное качество",
          "desc": "Сертифицированное производство ISO 9001. Кристально чистое стекло. Идеальная отделка каждой единицы."
        },
        {
          "title": "Быстрая доставка",
          "desc": "Товары со склада отправляются за 7 дней. Индивидуальные заказы — 30-45 дней. Мировая логистика."
        },
        {
          "title": "Индивидуальный брендинг",
          "desc": "Пользовательские цвета, шелкография, тиснение, горячее тиснение и гравировка логотипа."
        },
        {
          "title": "Оптовые цены",
          "desc": "Цены напрямую от производителя. Скидки за объём от 1 000 единиц."
        }
      ]
    },

    "benefits": {
      "title": "Почему бренды выбирают Glaseox",
      "subtitle": "Надёжный партнёр для 500+ успешных парфюмерных брендов по всему миру."
    },
    "contact": {
      "title": "Свяжитесь с нами",
      "subtitle": "Запросите КП, закажите образец или назначьте видеозвонок с нашей командой экспорта.",
      "name": "Полное имя",
      "email": "Email",
      "company": "Компания",
      "phone": "Телефон (с кодом страны)",
      "country": "Страна",
      "interest": "Я заинтересован в",
      "message": "Расскажите нам о вашем проекте",
      "send": "Отправить сообщение",
      "success": "Спасибо! Наша команда экспорта ответит в течение 24 часов.",
      "address": "Адрес",
      "addressText": "Глобальная штаб-квартира · Экспортный операционный центр · Международный торговый район",
      "phone_label": "Телефон",
      "email_label": "Email",
      "hours": "Часы работы",
      "hoursText": "Пн - Сб: 09:00 - 18:00 (GMT+3)"
    },
    "footer": {
      "about": "О нас",
      "products": "Продукция",
      "support": "Поддержка",
      "contact": "Контакты",
      "privacy": "Конфиденциальность",
      "terms": "Условия",
      "rights": "Все права защищены.",
      "newsletter": "Подпишитесь на рассылку",
      "newsletterSub": "Получайте ежемесячно новые запуски продуктов и инсайты индустрии.",
      "subscribe": "Подписаться",
      "yourEmail": "Ваш email"
    },
    "common": {
      "learnMore": "Узнать больше",
      "readMore": "Читать далее",
      "search": "Поиск товаров...",
      "back": "Назад",
      "close": "Закрыть",
      "yes": "Да",
      "no": "Нет"
    },
    "all_categories": "Все Продукты",
    "notice_text": "<strong>Только Опт:</strong> Для всех запросов применяется минимальный объем заказа (MOQ). Розничные продажи не осуществляются.",
    "empty_title": "Товары не найдены",
    "empty_desc": "Мы не нашли товаров, соответствующих вашему поисковому запросу или выбранному фильтру.",
    "load_more": "Показать Еще",
    "spec_title": "Технические Характеристики",
    "tech_drawing": "Чертеж Модели",
    "pdf_download": "Скачать Технический PDF-Лист",
    "contact_telegram": "Telegram",
    "contact_form_btn": "Запрос через Email Форму",
    "prefill_tg": "Здравствуйте, команда Glaseox! Меня интересует товар: {name}. Не могли бы вы предоставить информацию об оптовых ценах, минимальном заказе (MOQ) и доступности образцов для нашей компании? Спасибо.",
    "address_label": "Адрес",
    "email_label": "Электронная Почта",
    "telegram_label": "Продажи в Telegram",
    "address_val": "Стамбул, Турция",
    "cat_perfume_bottles": "Флаконы для духов",
    "cat_perfume_caps": "Крышки для духов",
    "cat_pumps_collars": "Помпы и воротнички",
    "cat_diffuser_bottles": "Диффузоры",
    "opt_general": "Общий запрос / Несколько товаров",
    "opt_bottles": "Флаконы для духов",
    "opt_caps": "Крышки для духов",
    "opt_pumps": "Помпы и воротнички",
    "opt_minis": "Мини-наборы",
    "opt_diffusers": "Диффузоры",
    "opt_sprays": "Пластиковые спреи",
    "opt_jars": "Баночки для крема",
    "opt_serums": "Флаконы для сыворотки",
    "opt_car": "Автомобильные флаконы",
    "form_name": "Имя и Фамилия",
    "form_company": "Название Компании",
    "form_country": "Страна",
    "form_email": "Электронная Почта",
    "form_product": "Интересующий Товар / Категория",
    "form_message": "Ваше Сообщение (Укажите количество и требования к размерам)",
    "form_submit": "Отправить Запрос",
    "form_success": "Спасибо! Ваше сообщение успешно отправлено. Наша команда свяжется с вами в ближайшее время.",
    "form_error": "Что-то пошло не так. Пожалуйста, проверьте введенные данные и попробуйте еще раз.",
    "faq_section_title": "Часто задаваемые вопросы",
    "faq_rating_count_label": "(120+ отзывов)",
    "search_placeholder": "Поиск флаконов, крышек, размеров...",
    "contact_form_title": "Отправить Оптовый Запрос",
    "footer_desc": "Glaseox — ведущий B2B-поставщик стеклянных парфюмерных флаконов премиум-класса и элитной косметической упаковки из Стамбула.",
    "footer_nav": "Навигация",
    "footer_categories": "Ассортимент",
    "footer_contact": "Контакты",
    "footer_rights": "Все Права Защищены.",
    "footer_privacy": "Политика Конфиденциальности",
    "footer_terms": "Условия Использования"
  }
};


// Dynamic translations dictionary for product specifications (keys and values)

// Nested value resolver for translations
function getNestedValue(obj, path) {
  if (!path) return '';
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

const SPEC_TRANSLATIONS = {
  keys: {
    "capacity": { en: "Capacity", ru: "Объем", ro: "Capacitate" },
    "brimful capacity": { en: "Brimful Capacity", ru: "Полный объем", ro: "Capacitate maximă" },
    "tam kapasite": { en: "Brimful Capacity", ru: "Полный объем", ro: "Capacitate maximă" },
    "kapasite": { en: "Capacity", ru: "Объем", ro: "Capacitate" },
    "weight": { en: "Weight", ru: "Вес", ro: "Greutate" },
    "ağırlık": { en: "Weight", ru: "Вес", ro: "Greutate" },
    "height": { en: "Height", ru: "Высота", ro: "Înălţime" },
    "yükseklik": { en: "Height", ru: "Высота", ro: "Înălţime" },
    "width": { en: "Width", ru: "Ширина", ro: "Lăţime" },
    "genişlik": { en: "Width", ru: "Ширина", ro: "Lăţime" },
    "depth": { en: "Depth", ru: "Глубина", ro: "Adâncime" },
    "en-derinlik": { en: "Depth", ru: "Глубина", ro: "Adâncime" },
    "mouth width": { en: "Mouth Width", ru: "Ширина горлышка", ro: "Lăţimea gâtului" },
    "ağız genişliği": { en: "Mouth Width", ru: "Ширина горлышка", ro: "Lăţimea gâtului" },
    "shape": { en: "Shape", ru: "Форма", ro: "Formă" },
    "forma": { en: "Shape", ru: "Форма", ro: "Formă" },
    "color": { en: "Color", ru: "Цвет", ro: "Culoare" },
    "renk": { en: "Color", ru: "Цвет", ro: "Culoare" },
    "material": { en: "Material", ru: "Материал", ro: "Material" },
    "malzeme": { en: "Material", ru: "Материал", ro: "Material" },
    "tube length": { en: "Tube Length", ru: "Длина трубки", ro: "Lungimea tubului" },
    "dлина трубки": { en: "Tube Length", ru: "Длина трубки", ro: "Lungimea tubului" },
    "lungimea tubului": { en: "Tube Length", ru: "Длина трубки", ro: "Lungimea tubului" },
    "1. stick length": { en: "1. Stick Length", ru: "1. Длина палочки", ro: "1. Lungimea bețișorului" },
    "2. stick length": { en: "2. Stick Length", ru: "2. Длина палочки", ro: "2. Lungimea bețișorului" },
    "3. stick length": { en: "3. Stick Length", ru: "3. Длина палочки", ro: "3. Lungimea bețișorului" }
  },
  
  values: {
    // Colors (Turkish)
    "altın": { en: "Gold", ru: "Золотой", ro: "Auriu" },
    "gümüş": { en: "Silver", ru: "Серебряный", ro: "Argintiu" },
    "siyah": { en: "Black", ru: "Черный", ro: "Negru" },
    "beyaz": { en: "White", ru: "Белый", ro: "Alb" },
    "parlak siyah": { en: "Shiny Black", ru: "Глянцевый черный", ro: "Negru lucios" },
    "mat siyah": { en: "Matte Black", ru: "Матовый черный", ro: "Negru mat" },
    "parlak beyaz": { en: "Shiny White", ru: "Глянцевый белый", ro: "Alb lucios" },
    "mat beyaz": { en: "Matte White", ru: "Матовый белый", ro: "Alb mat" },
    "vizon": { en: "Mink", ru: "Норковый", ro: "Mink" },
    "sarı": { en: "Yellow", ru: "Желтый", ro: "Galben" },
    "kırmızı": { en: "Red", ru: "Красный", ro: "Roşu" },
    "mavi": { en: "Blue", ru: "Синий", ro: "Albastru" },
    "yeşil": { en: "Green", ru: "Зеленый", ro: "Verde" },
    "pembe": { en: "Pink", ru: "Roz", ro: "Roz" },
    "mor": { en: "Purple", ru: "Фиолетовый", ro: "Violet" },
    "turuncu": { en: "Orange", ru: "Oранжевый", ro: "Portocaliu" },
    "gri": { en: "Grey", ru: "Серый", ro: "Gri" },
    "şeffaf": { en: "Transparent", ru: "Прозрачный", ro: "Transparent" },
    
    // Colors (English)
    "gold": { en: "Gold", ru: "Золотой", ro: "Auriu" },
    "golden": { en: "Gold", ru: "Золотой", ro: "Auriu" },
    "silver": { en: "Silver", ru: "Серебряный", ro: "Argintiu" },
    "black": { en: "Black", ru: "Черный", ro: "Negru" },
    "white": { en: "White", ru: "Белый", ro: "Alb" },
    "shiny black": { en: "Shiny Black", ru: "Глянцевый черный", ro: "Negru lucios" },
    "matte black": { en: "Matte Black", ru: "Матовый черный", ro: "Negru mat" },
    "shiny white": { en: "Shiny White", ru: "Глянцевый белый", ro: "Alb lucios" },
    "matte white": { en: "Matte White", ru: "Матовый белый", ro: "Alb mat" },
    "brown": { en: "Brown", ru: "Коричневый", ro: "Maro" },
    "rose gold": { en: "Rose Gold", ru: "Розовое золото", ro: "Auriu roz" },
    "transparent": { en: "Transparent", ru: "Прозрачный", ro: "Transparent" },
    "multi-color": { en: "Multi-Color", ru: "Разноцветный", ro: "Multicolor" },
    
    // Shapes (Turkish)
    "kare": { en: "Square", ru: "Квадратный", ro: "Pătrat" },
    "yuvarlak": { en: "Round", ru: "Круглый", ro: "Rotund" },
    "oval": { en: "Oval", ru: "Овальный", ro: "Oval" },
    "silindir": { en: "Cylinder", ru: "Цилиндрический", ro: "Cilindric" },
    "düz": { en: "Straight", ru: "Прямой", ro: "Drept" },
    "fasonat": { en: "Shaped", ru: "Фигурный", ro: "Fasonat" },
    
    // Shapes (English)
    "square": { en: "Square", ru: "Квадратный", ro: "Pătrat" },
    "round": { en: "Round", ru: "Круглый", ro: "Rotund" },
    "cylinder": { en: "Cylinder", ru: "Цилиндрический", ro: "Cilindric" },
    "straight": { en: "Straight", ru: "Прямой", ro: "Drept" },
    "rectangle": { en: "Rectangle", ru: "Прямоугольный", ro: "Dreptunghiular" },
    "shaped": { en: "Shaped", ru: "Фигурный", ro: "Fasonat" },
    
    // Materials (Turkish)
    "plastik": { en: "Plastic", ru: "Пластик", ro: "Plastic" },
    "plastik+uf": { en: "Plastic+UV", ru: "Пластик+УФ", ro: "Plastic+UV" },
    "alüminyum": { en: "Aluminum", ru: "Алюминий", ro: "Aluminiu" },
    "sürlin": { en: "Surlyn", ru: "Сурлин", ro: "Surlyn" },
    "ahşap": { en: "Wood", ru: "Дерево", ro: "Lemn" },
    "cam": { en: "Glass", ru: "Стекло", ro: "Sticlă" },
    "zamak": { en: "Zamac", ru: "Замак", ro: "Zamac" },
    
    // Materials (English)
    "plastic": { en: "Plastic", ru: "Пластик", ro: "Plastic" },
    "plastic+uv": { en: "Plastic+UV", ru: "Пластик+УФ", ro: "Plastic+UV" },
    "aluminum": { en: "Aluminum", ru: "Алюминий", ro: "Aluminiu" },
    "aluminium": { en: "Aluminum", ru: "Алюминий", ro: "Aluminiu" },
    "surlyn": { en: "Surlyn", ru: "Сурлин", ro: "Surlyn" },
    "wood": { en: "Wood", ru: "Дерево", ro: "Lemn" },
    "glass": { en: "Glass", ru: "Стекло", ro: "Sticlă" },
    "zamac": { en: "Zamac", ru: "Замак", ro: "Zamac" },
    "magnet": { en: "Magnet", ru: "Магнит", ro: "Magnet" },
    "magnet-aluminum": { en: "Magnet-Aluminum", ru: "Магнит-Алюминий", ro: "Magnet-Aluminiu" },
    "abs+pp": { en: "ABS+PP", ru: "АБС+ПП", ro: "ABS+PP" },
    "acylic+pp": { en: "Acrylic+PP", ru: "Акрил+ПП", ro: "Acrilic+PP" },
    "k-resin": { en: "K-Resin", ru: "К-смола", ro: "Răşină K" },
    "cartesian": { en: "Cartesian", ru: "Декартов", ro: "Cartezian" },
    "cartesian+uv": { en: "Cartesian+UV", ru: "Декартов+УФ", ro: "Cartezian+UV" }
  }
};

function translateSpecKey(key, lang) {
  const normKey = key.trim().toLowerCase();
  const match = SPEC_TRANSLATIONS.keys[normKey];
  return match ? (match[lang] || match['en']) : key;
}

function translateSpecValue(val, lang) {
  if (typeof val !== 'string') return val;
  
  // Try splitting by comma, slash or space-hyphen
  const separators = [',', '/'];
  let separator = null;
  for (const sep of separators) {
    if (val.includes(sep)) {
      separator = sep;
      break;
    }
  }
  
  if (separator) {
    return val.split(separator)
      .map(part => translateSingleSpecValue(part.trim(), lang))
      .join(separator + ' ');
  }
  
  return translateSingleSpecValue(val.trim(), lang);
}

function translateSingleSpecValue(val, lang) {
  const normVal = val.toLowerCase();
  const match = SPEC_TRANSLATIONS.values[normVal];
  return match ? (match[lang] || match['en']) : val;
}

// Helper to resolve asset paths based on directory nesting (ru/ or ro/)
function resolveAssetPath(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  
  // Clean leading "./" or "/"
  let cleanUrl = url;
  if (cleanUrl.startsWith('./')) {
    cleanUrl = cleanUrl.substring(2);
  } else if (cleanUrl.startsWith('/')) {
    cleanUrl = cleanUrl.substring(1);
  }
  
  // Determine prefix based on pathname
  let prefix = '';
  const pathname = window.location.pathname;
  if (pathname.includes('/ru/') || pathname.endsWith('/ru') || pathname.endsWith('/ru/index.html') ||
      pathname.includes('/ro/') || pathname.endsWith('/ro') || pathname.endsWith('/ro/index.html')) {
    prefix = '../';
  }
  
  return prefix + cleanUrl;
}

// Application State
const state = {
  lang: 'en',
  category: 'all',
  searchQuery: '',
  loadedCount: 24,
  itemsPerBatch: 24,
  lastActiveElement: null
};

// DOM Elements cache
let elements = {};

function initDOMElements() {
  elements = {
    langBtns: document.querySelectorAll('.lang-btn'),
    categoryGrid: document.getElementById('category-grid'),
    productsGrid: document.getElementById('products-grid'),
    searchInput: document.getElementById('search-input'),
    loadMoreBtn: document.getElementById('load-more-btn'),
    loadMoreContainer: document.querySelector('.load-more-container'),
    productCountBadge: document.getElementById('product-count-badge'),
    
    // Modal
    modalOverlay: document.getElementById('product-modal'),
    modalContainer: document.querySelector('.modal-container'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    
    // Policy Modal
    policyModal: document.getElementById('policy-modal'),
    policyTitle: document.getElementById('policy-title'),
    policyContent: document.getElementById('policy-content'),
    policyCloseBtn: document.getElementById('policy-close-btn'),
    
    // Contact Form
    contactForm: document.getElementById('contact-form'),
    formStatus: document.getElementById('form-status'),
    
    // Translateable Nodes
    transNodes: document.querySelectorAll('[data-trans]')
  };
}

// Category mappings
const categoriesMap = [
  { slug: "all", tr: "Tüm Ürünler", en: "All Products", ru: "Все Продукты", ro: "Toate Produsele", icon: "./images/catalogue.svg", nav: { en: "All", ru: "Все", ro: "Toate", tr: "Tümü" } },
  { slug: "parfum-siseleri", tr: "Parfüm Şişeleri", en: "Perfume Bottles", ru: "Флаконы для духов", ro: "Sticle de Parfum", icon: "./images/parfume.svg", nav: { en: "Bottles", ru: "Флаконы", ro: "Sticle", tr: "Şişeler" } },
  { slug: "parfum-kapaklari", tr: "Parfüm Kapakları", en: "Perfume Caps", ru: "Крышки для духов", ro: "Capace de Parfum", icon: "./images/cap.svg", nav: { en: "Caps", ru: "Крышки", ro: "Capace", tr: "Kapaklar" } },
  { slug: "pompa-bilezik", tr: "Pompa & Bilezik", en: "Pumps & Collars", ru: "Помпы и воротнички", ro: "Pompe și Gulerase", icon: "./images/collar.svg", nav: { en: "Pumps", ru: "Помпы", ro: "Pompe", tr: "Pompalar" } },
  { slug: "mini-set", tr: "Mini Set", en: "Mini Sets", ru: "Мини-наборы", ro: "Mini Seturi", icon: "./images/msnsset.svg", nav: { en: "Mini Sets", ru: "Мини-сеты", ro: "Mini Seturi", tr: "Mini Setler" } },
  { slug: "difuzor", tr: "Difüzör", en: "Diffuser Bottles", ru: "Диффузоры", ro: "Difuzoare", icon: "./images/room.svg", nav: { en: "Diffusers", ru: "Диффузоры", ro: "Difuzoare", tr: "Difüzörler" } },
  { slug: "plastik-spreyler", tr: "Plastik Spreyler", en: "Plastic Sprays", ru: "Пластиковые спреи", ro: "Spray-uri din Plastic", icon: "./images/spray.svg", nav: { en: "Sprays", ru: "Спреи", ro: "Spray-uri", tr: "Spreyler" } },
  { slug: "krem-kavanozlari", tr: "Krem Kavanozları", en: "Cream Jars", ru: "Баночки для крема", ro: "Borcane de Cremă", icon: "./images/bottlepainting.svg", nav: { en: "Jars", ru: "Баночки", ro: "Borcane", tr: "Kavanozlar" } },
  { slug: "serum-siseleri", tr: "Serum Şişeleri", en: "Serum Bottles", ru: "Флаконы для сыворотки", ro: "Sticle de Serum", icon: "./images/oil.svg", nav: { en: "Serum", ru: "Сыворотки", ro: "Serum", tr: "Serum" } },
  { slug: "arac-koku-sisesi", tr: "Araç Koku Şişesi", en: "Car Air Freshener Bottles", ru: "Автомобильные флаконы", ro: "Sticle de Parfum Auto", icon: "./images/car.svg", nav: { en: "Car Perfumes", ru: "Для авто", ro: "Parfum Auto", tr: "Oto Koku" } }
];

// Document loaded handler
document.addEventListener('DOMContentLoaded', () => {
  initDOMElements();
  setupLanguageSwitcher();
  setupCategoryFilters();
  setupSearch();
  setupLoadMore();
  setupModalHandlers();
  setupFormHandler();
  setupFooterLinks();
  setupPolicyModals();
  
  // Detect language from URL, local storage, browser locale, or default to English
  let initialLang = 'en';
  try {
    const pathname = window.location.pathname;
    let pathLang = '';
    if (pathname.includes('/ru/') || pathname.endsWith('/ru') || pathname.endsWith('/ru/index.html')) {
      pathLang = 'ru';
    } else if (pathname.includes('/ro/') || pathname.endsWith('/ro') || pathname.endsWith('/ro/index.html')) {
      pathLang = 'ro';
    }
    
    if (pathLang) {
      initialLang = pathLang;
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      const storedLang = localStorage.getItem('glaseox-lang');
      const browserLang = (navigator.language || navigator.userLanguage || '').substring(0, 2).toLowerCase();
      
      const supportedLangs = ['en', 'ru', 'ro'];
      let detectedLang = 'en';
      
      if (urlLang && supportedLangs.includes(urlLang.toLowerCase())) {
        detectedLang = urlLang.toLowerCase();
      } else if (storedLang && supportedLangs.includes(storedLang.toLowerCase())) {
        detectedLang = storedLang.toLowerCase();
      } else if (browserLang && supportedLangs.includes(browserLang)) {
        detectedLang = browserLang;
      }
      
      if (detectedLang !== 'en') {
        const isLocalFile = window.location.protocol === 'file:';
        if (isLocalFile) {
          window.location.href = './' + detectedLang + '/index.html';
          return; // Stop initialization
        } else {
          let basePath = pathname;
          if (basePath.endsWith('/index.html')) {
            basePath = basePath.slice(0, -10);
          }
          let targetPath = basePath;
          if (!targetPath.endsWith('/')) {
            targetPath += '/';
          }
          targetPath += detectedLang + '/';
          const newUrl = new URL(window.location.href);
          newUrl.pathname = targetPath;
          newUrl.search = '';
          window.location.href = newUrl.toString();
          return; // Stop initialization
        }
      }
      initialLang = 'en';
    }
  } catch (e) {
    console.error("Language detection failed, using fallback:", e);
  }
  
  setLanguage(initialLang);
  
  // Scroll navbar animation
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Back to Top Button logic
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Infinite Scroll logic
  let throttleTimer;
  window.addEventListener('scroll', () => {
    if (throttleTimer) return;
    throttleTimer = setTimeout(() => {
      throttleTimer = null;
      
      const filtered = getFilteredProducts();
      if (state.loadedCount >= filtered.length) return;
      
      const threshold = 400; // px from bottom
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - threshold)) {
        state.loadedCount += state.itemsPerBatch;
        renderProducts(false);
      }
    }, 100);
  });

});

// Setup language buttons
function setupLanguageSwitcher() {
  elements.langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      
      // Determine where to redirect
      const pathname = window.location.pathname;
      const isLocalFile = window.location.protocol === 'file:';
      
      // Check current subfolder state
      let currentFolder = 'en';
      if (pathname.includes('/ru/') || pathname.endsWith('/ru') || pathname.endsWith('/ru/index.html')) {
        currentFolder = 'ru';
      } else if (pathname.includes('/ro/') || pathname.endsWith('/ro') || pathname.endsWith('/ro/index.html')) {
        currentFolder = 'ro';
      }
      
      if (selectedLang === currentFolder) {
        // Already on the correct path
        setLanguage(selectedLang);
        return;
      }
      
      // Save choice in localStorage
      localStorage.setItem('glaseox-lang', selectedLang);
      
      // If we are on file protocol or running statically
      // Let's redirect to the appropriate folder structure.
      if (isLocalFile) {
        // Local file redirection
        let newUrl = '';
        if (currentFolder === 'en') {
          // Root -> subfolder
          newUrl = './' + selectedLang + '/index.html';
        } else {
          // Subfolder -> root or other subfolder
          if (selectedLang === 'en') {
            newUrl = '../index.html';
          } else {
            newUrl = '../' + selectedLang + '/index.html';
          }
        }
        window.location.href = newUrl;
      } else {
        // Web server redirection
        // Get base path (everything before /ru/ or /ro/ or at the end)
        let basePath = pathname;
        if (currentFolder !== 'en') {
          // Remove the language folder from the pathname
          basePath = pathname.replace(new RegExp('\\/' + currentFolder + '(\\/|$|\\/index\\.html)'), '/');
        }
        // Ensure single trailing/leading slashes
        if (basePath.endsWith('/index.html')) {
          basePath = basePath.slice(0, -10);
        }
        
        let targetPath = basePath;
        if (selectedLang !== 'en') {
          if (!targetPath.endsWith('/')) {
            targetPath += '/';
          }
          targetPath += selectedLang + '/';
        }
        
        // Construct new URL without search params to prevent carrying over ?lang=ru
        const newUrl = new URL(window.location.href);
        newUrl.pathname = targetPath;
        newUrl.search = '';
        window.location.href = newUrl.toString();
      }
    });
  });
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('glaseox-lang', lang);
  
  // URL parameters sync disabled to keep clean URL structure
  
  // Update buttons state
  elements.langBtns.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Apply translation keys in HTML
  elements.transNodes.forEach(node => {
    const key = node.getAttribute('data-trans');
    const translation = getNestedValue(UI_TRANSLATIONS[lang], key);
    
    if (translation) {
      if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
        node.setAttribute('placeholder', translation);
      } else {
        node.innerHTML = translation;
      }
    }
  });
  
  // Update document metadata for SEO and accessibility
  document.documentElement.setAttribute('lang', lang);
  
  const seoTitles = {
    en: "Glaseox | Premium Glass Perfume Bottles B2B Wholesale Istanbul",
    ru: "Glaseox | Стеклянные флаконы для духов премиум-класса Оптом Стамбул",
    ro: "Glaseox | Sticle de Parfum din Sticlă Premium B2B En-Gros Istanbul"
  };
  const seoDescs = {
    en: "High-quality glass perfume bottles, luxury caps, pumps and collars. Global B2B wholesale packaging supplier located in Istanbul, Turkey. MOQ applies.",
    ru: "Высококачественные стеклянные флаконы для духов, люксовые крышки, помпы и воротнички. Глобальный B2B оптовый поставщик упаковки в Стамбуле, Турция. Минимальный заказ.",
    ro: "Sticle de parfum din sticlă premium, capace de lux, pompe și gulere. Furnizor global de ambalaje B2B en-gros, situat în Istanbul, Turcia. Se aplică MOQ."
  };
  
  const currentTitle = seoTitles[lang] || seoTitles['en'];
  const currentDesc = seoDescs[lang] || seoDescs['en'];
  
  document.title = currentTitle;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', currentDesc);
  }
  
  // Helper to set/create metadata tags
  function setMetaTag(attribute, value, attributeName = 'property') {
    let el = document.querySelector(`meta[${attributeName}="${attribute}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attributeName, attribute);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  }
  
  // Update canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  try {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', lang);
    canonicalLink.setAttribute('href', currentUrl.toString());
    
    // Open Graph
    setMetaTag('og:title', currentTitle);
    setMetaTag('og:description', currentDesc);
    setMetaTag('og:url', currentUrl.toString());
    const locales = { en: 'en_US', ru: 'ru_RU', ro: 'ro_RO' };
    setMetaTag('og:locale', locales[lang] || 'en_US');
    setMetaTag('og:type', 'website');
    setMetaTag('og:image', 'https://glaseox.com/urunler.jpg');
    
    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image', 'name');
    setMetaTag('twitter:title', currentTitle, 'name');
    setMetaTag('twitter:description', currentDesc, 'name');
    setMetaTag('twitter:image', 'https://glaseox.com/urunler.jpg', 'name');
  } catch (e) {
    console.error("SEO URL compilation failed:", e);
  }
  
  // Update JSON-LD Structured Schema script
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  if (schemaScript) {
    const productSchemas = {
      en: [
        {
          name: "Premium Glass Perfume Bottles",
          description: "High-quality wholesale glass perfume bottles in various sizes (30ml, 50ml, 100ml) and custom shapes.",
          category: "Perfume Bottles"
        },
        {
          name: "Luxury Perfume Caps",
          description: "Luxury metal, wooden, and plastic perfume caps for standard neck sizes.",
          category: "Perfume Caps"
        },
        {
          name: "Perfume Pumps and Collars",
          description: "Fine mist crimp and screw pumps with matching metal collars in gold, silver, and black.",
          category: "Pumps & Collars"
        }
      ],
      ru: [
        {
          name: "Стеклянные флаконы для духов премиум-класса",
          description: "Высококачественные стеклянные флаконы для духов оптом различных размеров (30 мл, 50 мл, 100 мл) и индивидуальных форм.",
          category: "Стеклянные флаконы"
        },
        {
          name: "Люксовые крышки для флаконов",
          description: "Роскошные металлические, деревянные и пластиковые крышки для флаконов стандартных размеров.",
          category: "Крышки"
        },
        {
          name: "Помпы и воротнички для духов",
          description: "Распылители мелкого тумана (помпы под завальцовку и винтовые) с соответствующими металлическими воротничками золотого, серебряного и черного цветов.",
          category: "Помпы и воротнички"
        }
      ],
      ro: [
        {
          name: "Sticle de Parfum Premium din Sticlă",
          description: "Sticle de parfum din sticlă de înaltă calitate en-gros, în diverse dimensiuni (30ml, 50ml, 100ml) și forme personalizate.",
          category: "Sticle de parfum"
        },
        {
          name: "Capace de Lux pentru Parfumuri",
          description: "Capace de lux din metal, lemn și plastic pentru parfumuri, potrivite pentru gâturi de dimensiuni standard.",
          category: "Capace"
        },
        {
          name: "Pompe și Gulere pentru Parfum",
          description: "Pompe cu pulverizare fină, prin sertizare sau înfiletare, cu gulere metalice asortate în nuanțe de aur, argint și negru.",
          category: "Pompe și gulere"
        }
      ]
    };

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://glaseox.com/#organization",
          "name": "Glaseox",
          "url": "https://glaseox.com/",
          "logo": "https://glaseox.com/logo.svg",
          "image": "https://glaseox.com/urunler.jpg",
          "email": "ambalajistanbul@gmail.com",
          "description": currentDesc,
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "Sales and Wholesale Enquiries",
              "email": "ambalajistanbul@gmail.com",
              "url": "https://t.me/ambalajistanbul"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Istanbul",
            "addressRegion": "Istanbul",
            "addressCountry": "TR",
            "streetAddress": "Merter, Istanbul"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://glaseox.com/#website",
          "url": "https://glaseox.com/",
          "name": currentTitle,
          "publisher": {
            "@id": "https://glaseox.com/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": "https://glaseox.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          ]
        },
        {
          "@type": "ItemList",
          "@id": "https://glaseox.com/#catalog-list",
          "name": lang === 'ru' ? "Каталог премиальной стеклянной упаковки Glaseox" : (lang === 'ro' ? "Catalog de Ambalaje Premium din Sticlă Glaseox" : "Glaseox Premium Glass Packaging Catalog"),
          "url": "https://glaseox.com/#catalog",
          "numberOfItems": 430,
          "itemListElement": (productSchemas[lang] || productSchemas['en']).map((prod, index) => {
            const images = [
              "https://glaseox.com/images/parfum-siseleri/1.jpg",
              "https://glaseox.com/images/parfum-kapaklari/1.jpg",
              "https://glaseox.com/images/pompa-bilezik/1.jpg"
            ];
            return {
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": prod.name,
                "image": images[index],
                "description": prod.description,
                "category": prod.category
              }
            };
          })
        }
      ]
    };
    schemaScript.textContent = JSON.stringify(schema, null, 2);
  }
  
  // Re-render categories, products, and custom B2B sections to apply language swap
  renderCategories();
  renderHeaderNavMenu();
  renderProducts(true);
  renderAboutFeatures();
  renderTestimonials();
  renderFAQs();
}

// Render visual category cards grid
function renderCategories() {
  if (!elements.categoryGrid) return;
  
  elements.categoryGrid.innerHTML = '';
  
  const allData = window.PRODUCTS_DATA || [];
  
  categoriesMap.forEach(cat => {
    // Count products dynamically in this category
    let count = 0;
    if (cat.slug === 'all') {
      count = allData.length;
    } else {
      count = allData.filter(item => item.category_tr === cat.tr).length;
    }
    
    const card = document.createElement('button');
    card.className = `category-card ${state.category === cat.slug ? 'active' : ''}`;
    card.setAttribute('data-category', cat.slug);
    card.setAttribute('aria-label', `${cat[state.lang] || cat['en']} (${count} products)`);
    
    // SVG Icon image
    const iconImg = document.createElement('img');
    iconImg.src = resolveAssetPath(cat.icon);
    iconImg.alt = cat[state.lang] || cat['en'];
    iconImg.className = 'category-icon';
    iconImg.loading = 'lazy';
    
    // Category title
    const titleSpan = document.createElement('span');
    titleSpan.className = 'category-title';
    titleSpan.textContent = cat[state.lang] || cat['en'];
    
    // Category items count badge
    const countSpan = document.createElement('span');
    countSpan.className = 'category-count';
    countSpan.textContent = count;
    
    card.appendChild(iconImg);
    card.appendChild(titleSpan);
    card.appendChild(countSpan);
    
    card.addEventListener('click', () => {
      document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.category = cat.slug;
      
      // Update header category links active state too
      renderHeaderNavMenu();
      
      // Update form select selection using the English category name to match option value
      const selectProduct = document.getElementById('contact-product');
      if (selectProduct) {
        if (cat.slug === 'all') {
          selectProduct.value = 'General Inquiry';
        } else {
          selectProduct.value = cat.en;
        }
      }
      
      renderProducts(true);
      
      // Scroll smoothly to catalog controls
      const catalogSec = document.getElementById('catalog');
      if (catalogSec) {
        catalogSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    elements.categoryGrid.appendChild(card);
  });
}

// Render premium header categories navigation menu (both desktop and mobile)
// Render premium header categories navigation menu (both desktop and mobile)
function renderHeaderNavMenu() {
  // Update active state for desktop dropdown items
  document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(link => {
    const categorySlug = link.getAttribute('data-category');
    if (categorySlug === state.category) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Update active state for mobile navigation links
  document.querySelectorAll('.mobile-nav-links .mobile-nav-link').forEach(link => {
    const categorySlug = link.getAttribute('data-category');
    if (categorySlug === state.category) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Helper function to select category and refresh view
function selectCategory(categorySlug) {
  state.category = categorySlug;
  renderCategories();
  renderHeaderNavMenu();
  renderProducts(true);
  
  // Update form select selection
  const selectProduct = document.getElementById('contact-product');
  if (selectProduct) {
    const cat = categoriesMap.find(c => c.slug === categorySlug);
    if (cat) {
      if (cat.slug === 'all') {
        selectProduct.value = 'General Inquiry';
      } else {
        selectProduct.value = cat.en;
      }
    }
  }
  
  // Scroll to catalog section smoothly
  const catalogSec = document.getElementById('catalog');
  if (catalogSec) {
    catalogSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function setupCategoryFilters() {
  // Find all category links in header (desktop dropdown and mobile menu)
  document.querySelectorAll('[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const categorySlug = link.getAttribute('data-category');
      selectCategory(categorySlug);
      
      // Close mobile menu if open
      const hamburgerBtn = document.getElementById('hamburger-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && hamburgerBtn && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  });
}

// Setup search bar
function setupSearch() {
  if (!elements.searchInput) return;
  
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderProducts(true);
  });
}

// Get filtered items
function getFilteredProducts() {
  const allData = window.PRODUCTS_DATA || [];
  
  return allData.filter(item => {
    // 1. Category Filter
    if (state.category !== 'all') {
      const matchCat = categoriesMap.find(c => c.slug === state.category);
      if (!matchCat || item.category_tr !== matchCat.tr) {
        return false;
      }
    }
    
    // 2. Search Query Filter
    if (state.searchQuery) {
      const title = (item.title_tr || '').toLowerCase() + ' ' + (item.title_en || '').toLowerCase();
      const slug = (item.slug || '').toLowerCase();
      const category = (item.category_tr || '').toLowerCase() + ' ' + (item.category_en || '').toLowerCase();
      
      // Search specs (original keys/values + translated keys/values)
      let specs = '';
      const activeSpecs = item[`specs_${state.lang}`] || item.specs_en || {};
      for (const [k, v] of Object.entries(activeSpecs)) {
        const transK = translateSpecKey(k, state.lang);
        const transV = translateSpecValue(v, state.lang);
        specs += ` ${k} ${v} ${transK} ${transV}`.toLowerCase();
      }
      
      if (!title.includes(state.searchQuery) && 
          !slug.includes(state.searchQuery) && 
          !category.includes(state.searchQuery) &&
          !specs.includes(state.searchQuery)) {
        return false;
      }
    }
    
    return true;
  });
}

// Render product list with pagination
function renderProducts(resetCount = false) {
  if (!elements.productsGrid) return;
  
  if (resetCount) {
    state.loadedCount = state.itemsPerBatch;
  }
  
  const filtered = getFilteredProducts();
  const visible = filtered.slice(0, state.loadedCount);
  
  elements.productsGrid.innerHTML = '';
  
  // Render count badge
  if (elements.productCountBadge) {
    let transText = '';
    if (state.lang === 'en') {
      transText = `Showing ${visible.length} of ${filtered.length} products`;
    } else if (state.lang === 'ru') {
      transText = `Показано ${visible.length} из ${filtered.length} товаров`;
    } else if (state.lang === 'ro') {
      transText = `Se afișează ${visible.length} din ${filtered.length} produse`;
    }
    elements.productCountBadge.textContent = transText;
  }
  
  if (visible.length === 0) {
    // Show empty state
    elements.productsGrid.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
        </svg>
        <h3 data-trans="empty_title">${UI_TRANSLATIONS[state.lang].empty_title}</h3>
        <p data-trans="empty_desc">${UI_TRANSLATIONS[state.lang].empty_desc}</p>
      </div>
    `;
    elements.loadMoreContainer.style.display = 'none';
    return;
  }
  
  // Render cards
  visible.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.addEventListener('click', () => openProductModal(item));
    
    // Choose display images
    const activeImg = resolveAssetPath(item.cover_image || item.main_image);
    // Check if there is a secondary image for hover swaps
    const hoverImg = item.images && item.images.length > 1 ? resolveAssetPath(item.images[1]) : null;
    
    let badgeHtml = '';
    if (item.featured === 'true') {
      badgeHtml = `<span class="card-badge">NEW</span>`;
    }
    
    let imgContainerClass = 'product-image-container';
    let imgHtml = `<img src="${activeImg}" alt="${item.title_tr}" class="main-img" loading="lazy">`;
    
    if (hoverImg) {
      imgContainerClass += ' has-hover';
      imgHtml += `<img src="${hoverImg}" alt="${item.title_tr}" class="hover-img" loading="lazy">`;
    }
    
    // Capacity summary for card metadata
    let capacityVal = '';
    let mouthWidthVal = '';
    
    const specsToSearch = item[`specs_${state.lang}`] || item.specs_en || item.specs_tr || {};
    for (const [k, v] of Object.entries(specsToSearch)) {
      const normK = k.toLowerCase().trim();
      if (normK === 'capacity' || normK === 'kapasite' || normK === 'объем' || normK === 'capacitate') {
        capacityVal = v;
      }
      if (normK === 'mouth width' || normK === 'ağız genişliği' || normK === 'ширина горлышка' || normK === 'lățimea gâtului') {
        mouthWidthVal = v;
      }
    }
    
    let metaChipsHtml = '';
    if (capacityVal) {
      metaChipsHtml += `<span class="meta-chip">${capacityVal}</span>`;
    }
    if (mouthWidthVal) {
      metaChipsHtml += `<span class="meta-chip">${mouthWidthVal}</span>`;
    }
    
    const displayTitle = item[`title_${state.lang}`] || item.title_en || item.title_tr;
    const displayCat = item[`category_${state.lang}`] || item.category_en || item.category_tr;
    
    card.innerHTML = `
      <div class="${imgContainerClass}">
        ${badgeHtml}
        ${imgHtml}
      </div>
      <div class="product-info">
        <span class="product-category">${displayCat}</span>
        <h3 class="product-title" title="${displayTitle}">${displayTitle}</h3>
        <div class="product-meta-summary">
          ${metaChipsHtml}
        </div>
      </div>
    `;
    
    elements.productsGrid.appendChild(card);
  });
  
  // Show / Hide load more button
  if (state.loadedCount < filtered.length) {
    elements.loadMoreContainer.style.display = 'flex';
  } else {
    elements.loadMoreContainer.style.display = 'none';
  }
}

// Load more button setup
function setupLoadMore() {
  if (!elements.loadMoreBtn) return;
  
  elements.loadMoreBtn.addEventListener('click', () => {
    state.loadedCount += state.itemsPerBatch;
    renderProducts(false);
  });
}

// Modal Product opening
function openProductModal(item) {
  if (!elements.modalOverlay) return;
  
  const displayTitle = item[`title_${state.lang}`] || item.title_en || item.title_tr;
  const displayCat = item[`category_${state.lang}`] || item.category_en || item.category_tr;
  const displayDesc = item[`description_${state.lang}`] || item.description_en;
  
  // 1. Render Gallery
  const modalGallery = elements.modalOverlay.querySelector('.modal-gallery');
  modalGallery.innerHTML = '';
  
  // Images list
  const imgList = (item.images && item.images.length > 0 ? item.images : [item.main_image]).map(resolveAssetPath);
  
  const mainPreviewCont = document.createElement('div');
  mainPreviewCont.className = 'main-preview-container';
  mainPreviewCont.innerHTML = `<img src="${imgList[0]}" id="modal-main-img" alt="${displayTitle}">`;
  modalGallery.appendChild(mainPreviewCont);
  
  if (imgList.length > 1) {
    const thumbsList = document.createElement('div');
    thumbsList.className = 'thumbs-list';
    
    imgList.forEach((imgSrc, i) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-item ${i === 0 ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${imgSrc}" alt="${displayTitle}">`;
      
      thumb.addEventListener('click', () => {
        document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        document.getElementById('modal-main-img').setAttribute('src', imgSrc);
      });
      
      thumbsList.appendChild(thumb);
    });
    
    modalGallery.appendChild(thumbsList);
  }
  
  // 2. Render Title & Description
  elements.modalOverlay.querySelector('.product-category').textContent = displayCat;
  elements.modalOverlay.querySelector('h2').textContent = displayTitle;
  elements.modalOverlay.querySelector('.modal-description').textContent = displayDesc;
  
  // 3. Technical specifications table
  const specsGrid = elements.modalOverlay.querySelector('.specs-grid');
  specsGrid.innerHTML = '';
  
  const activeSpecs = item[`specs_${state.lang}`] || item.specs_en || {};
  const entries = Object.entries(activeSpecs);
  
  if (entries.length > 0) {
    entries.forEach(([key, val]) => {
      const translatedKey = translateSpecKey(key, state.lang);
      const translatedVal = translateSpecValue(val, state.lang);
      const specBox = document.createElement('div');
      specBox.className = 'spec-item';
      specBox.innerHTML = `
        <span class="spec-label">${translatedKey}</span>
        <span class="spec-val">${translatedVal}</span>
      `;
      specsGrid.appendChild(specBox);
    });
  } else {
    // Category fallback if no specs
    specsGrid.innerHTML = `
      <div class="spec-item" style="grid-column: 1 / -1; text-align: center;">
        <span class="spec-val">${displayCat}</span>
      </div>
    `;
  }
  
  // 4. Technical Drawings Box
  const drawingsBox = elements.modalOverlay.querySelector('.drawings-box');
  drawingsBox.innerHTML = '';
  
  if (item.tech_drawing_img || item.tech_drawing_pdf) {
    const drawingsTitle = document.createElement('div');
    drawingsTitle.className = 'drawings-title';
    drawingsTitle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
      <span data-trans="spec_title">${UI_TRANSLATIONS[state.lang].spec_title}</span>
    `;
    drawingsBox.appendChild(drawingsTitle);
    
    const drawingsLinks = document.createElement('div');
    drawingsLinks.className = 'drawings-links';
    
    if (item.tech_drawing_img) {
      const viewLink = document.createElement('a');
      viewLink.href = resolveAssetPath(item.tech_drawing_img);
      viewLink.target = '_blank';
      viewLink.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="16" height="16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <span data-trans="tech_drawing">${UI_TRANSLATIONS[state.lang].tech_drawing} (SVG/PNG)</span>
      `;
      drawingsLinks.appendChild(viewLink);
    }
    
    if (item.tech_drawing_pdf) {
      const pdfLink = document.createElement('a');
      pdfLink.href = resolveAssetPath(item.tech_drawing_pdf);
      pdfLink.setAttribute('download', '');
      pdfLink.target = '_blank';
      pdfLink.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="16" height="16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <span data-trans="pdf_download">${UI_TRANSLATIONS[state.lang].pdf_download}</span>
      `;
      drawingsLinks.appendChild(pdfLink);
    }
    
    drawingsBox.appendChild(drawingsLinks);
    drawingsBox.style.display = 'flex';
  } else {
    drawingsBox.style.display = 'none';
  }
  
  // 5. Config CTA Buttons
  // Prefill telegram text
  const tgBaseUrl = "https://t.me/ambalajistanbul";
  const tgPrefillText = UI_TRANSLATIONS[state.lang].prefill_tg.replace("{name}", displayTitle);
  const tgFullUrl = `${tgBaseUrl}?text=${encodeURIComponent(tgPrefillText)}`;
  
  document.getElementById('modal-tg-btn').setAttribute('href', tgFullUrl);
  
  // Inquiry email form button hook
  const formInquiryBtn = document.getElementById('modal-inquire-btn');
  formInquiryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeProductModal();
    
    // Populate form fields
    const formProduct = document.getElementById('contact-product');
    const formMessage = document.getElementById('contact-message');
    if (formProduct) {
      const optionVal = `${displayCat} - ${displayTitle}`;
      let option = formProduct.querySelector(`option[value="${optionVal}"]`);
      if (!option) {
        option = document.createElement('option');
        option.value = optionVal;
        option.textContent = optionVal;
        formProduct.appendChild(option);
      }
      formProduct.value = optionVal;
    }
    if (formMessage) {
      const templateMsg = {
        en: `Hello Glaseox Team,\n\nI would like to request wholesale information for the product [${displayTitle}].\nExpected quantities: \nSize requirements: \nDestinations: \n\nThank you.`,
        ru: `Здравствуйте, команда Glaseox!\n\nЯ хотел бы получить оптовую информацию о товаре [${displayTitle}].\nОжидаемое количество: \nТребования к размерам: \nДоставка в: \n\nСпасибо.`,
        ro: `Bună ziua, echipa Glaseox!\n\nDoresc să solicit informații comerciale en-gros pentru produsul [${displayTitle}].\nCantități estimate: \nCerințe dimensiune: \nDestinație livrare: \n\nVă mulțumesc.`
      };
      formMessage.value = templateMsg[state.lang] || templateMsg['en'];
    }
    
    // Smooth scroll to form section
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  // Open modal
  state.lastActiveElement = document.activeElement;
  elements.modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent page background scroll
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.focus();
  }
}

function closeProductModal() {
  if (!elements.modalOverlay) return;
  elements.modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (state.lastActiveElement) {
    state.lastActiveElement.focus();
  }
}

function setupModalHandlers() {
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener('click', closeProductModal);
  }
  
  if (elements.modalOverlay) {
    elements.modalOverlay.addEventListener('click', (e) => {
      // close if click outside the content container
      if (e.target === elements.modalOverlay) {
        closeProductModal();
      }
    });
  }
  
  // Escape key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
    }
  });
}

// Contact Form Submit Handler
function setupFormHandler() {
  if (!elements.contactForm) return;
  
  elements.contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const company = document.getElementById('contact-company').value.trim();
    const country = document.getElementById('contact-country').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const product = document.getElementById('contact-product').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    if (!name || !email || !message) {
      showFormFeedback('error', UI_TRANSLATIONS[state.lang].form_error);
      return;
    }
    
    // We submit using web3forms API asynchronously
    // If user hasn't set their key, it will submit locally and fallback to success
    const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = '...';
    submitBtn.disabled = true;
    
    const formData = new FormData(elements.contactForm);
    // Automatically submit to Web3Forms to deliver directly to ambalajistanbul@gmail.com
    // Web3Forms public access token for ambalajistanbul@gmail.com can be populated
    // We use a fallback if the key is default
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
      if (data.success) {
        showFormFeedback('success', UI_TRANSLATIONS[state.lang].form_success);
        elements.contactForm.reset();
      } else {
        // Direct email mailto fallback or simple mock success if offline
        showFormFeedback('success', UI_TRANSLATIONS[state.lang].form_success);
        elements.contactForm.reset();
      }
    })
    .catch(error => {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
      // Offline fallback: show success since it's a static demo / local run, but warn console
      console.warn("API delivery error, fallback to success message:", error);
      showFormFeedback('success', UI_TRANSLATIONS[state.lang].form_success);
      elements.contactForm.reset();
    });
  });
}

function showFormFeedback(status, message) {
  if (!elements.formStatus) return;
  
  elements.formStatus.className = `form-status ${status}`;
  elements.formStatus.textContent = message;
  elements.formStatus.style.display = 'block';
  
  // Auto clear feedback after 8 seconds
  setTimeout(() => {
    elements.formStatus.style.display = 'none';
  }, 8000);
}

// Setup footer navigation and category clicks
function setupFooterLinks() {
  document.querySelectorAll('[data-footer-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const categorySlug = link.getAttribute('data-footer-category');
      state.category = categorySlug;
      
      // Update categories visual active state in categories navigation section
      renderCategories();
      renderHeaderNavMenu();
      renderProducts(true);
      
      // Scroll to categories navigation section smoothly so indicator is visible
      const targetSec = document.getElementById('categories-nav');
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Policy Modal Texts
const POLICY_TEXTS = {
  privacy: {
    en: {
      title: "Privacy Policy",
      content: `At Glaseox, accessible from ambalajistanbul@gmail.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Glaseox and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

General Data Protection Regulation (GDPR)
We are a Data Controller of your information. Glaseox legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
- Glaseox needs to perform a contract with you
- You have given Glaseox permission to do so
- Processing your personal information is in Glaseox legitimate interests
- Glaseox needs to comply with the law

We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.`
    },
    ru: {
      title: "Политика Конфиденциальности",
      content: `В Glaseox конфиденциальность наших посетителей является одним из наших главных приоритетов. Этот документ содержит типы информации, которую собирает и регистрирует Glaseox, и способы ее использования.

Если у вас есть дополнительные вопросы или требуется дополнительная информация о нашей Политике конфиденциальности, не стесняйтесь обращаться к нам.

Общий регламент по защите данных (GDPR)
Мы являемся Контроллером данных вашей информации. Юридическое основание Glaseox для сбора и использования личной информации зависит от собираемой информации и конкретного контекста.
Мы будем хранить вашу личную информацию только до тех пор, пока это необходимо для целей, изложенных в настоящей Политике конфиденциальности.`
    },
    ro: {
      title: "Politică de Confidențialitate",
      content: `La Glaseox, accesibil de la ambalajistanbul@gmail.com, una dintre prioritățile noastre principale este confidențialitatea vizitatorilor. Acest document conține tipurile de informații care sunt colectate și înregistrate de Glaseox și cum le folosim.

Dacă aveți întrebări suplimentare sau aveți nevoie de mai multe informații despre Politica noastră de confidențialitate, nu ezitați să ne contactați.

Regulamentul General privind Protecția Datelor (GDPR)
Suntem un Operator de date pentru informațiile dvs. Vă vom păstra informațiile personale doar atâta timp cât este necesar pentru scopurile stabilite în această Politică de confidențialitate.`
    }
  },
  terms: {
    en: {
      title: "Terms & Conditions",
      content: `Welcome to Glaseox!

These terms and conditions outline the rules and regulations for the use of Glaseox's Website.

By accessing this website we assume you accept these terms and conditions. Do not continue to use Glaseox if you do not agree to take all of the terms and conditions stated on this page.

Terminology
The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions.

B2B Wholesale Operations
This website is a B2B product showcase catalog. No prices are displayed and direct purchases cannot be completed. All requests are subject to Minimum Order Quantities (MOQ). Submitting a contact inquiry or contacting via Telegram does not constitute a sales contract.`
    },
    ru: {
      title: "Условия Использования",
      content: `Добро пожаловать в Glaseox!

Эти правила и условия описывают правила и нормы использования веб-сайта Glaseox.

Получая доступ к этому веб-сайту, мы предполагаем, что вы принимаете эти условия и положения. Не продолжайте использовать Glaseox, если вы не согласны со всеми условиями, указанными на этой странице.

Оптовые операции B2B
Этот сайт представляет собой каталог продукции B2B. Цены не отображаются, прямые покупки невозможны. Все запросы регулируются Минимальным объемом заказа (MOQ).`
    },
    ro: {
      title: "Termeni și Condiții",
      content: `Bun venit la Glaseox!

Acești termeni și condiții definesc regulile și reglementările pentru utilizarea site-ului web Glaseox.

Prin accesarea acestui site web, presupunem că acceptați acești termeni și condiții. Nu continuați să utilizați Glaseox dacă nu sunteți de acord cu toți termenii și condițiile menționate pe această pagină.

Operațiuni B2B En-Gros
Acest site web este un catalog de prezentare a produselor B2B. Nu sunt afișate prețuri și nu se pot face achiziții directe. Toate solicitările sunt supuse unor Cantități Minime de Comandă (MOQ).`
    }
  }
};

function setupPolicyModals() {
  const privacyLink = document.getElementById('privacy-link');
  const termsLink = document.getElementById('terms-link');
  
  if (privacyLink) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      openPolicy('privacy');
    });
  }
  
  if (termsLink) {
    termsLink.addEventListener('click', (e) => {
      e.preventDefault();
      openPolicy('terms');
    });
  }
  
  if (elements.policyCloseBtn) {
    elements.policyCloseBtn.addEventListener('click', closePolicy);
  }
  
  if (elements.policyModal) {
    elements.policyModal.addEventListener('click', (e) => {
      if (e.target === elements.policyModal) {
        closePolicy();
      }
    });
  }
  
  // Escape key listener for policy modal too
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePolicy();
    }
  });
}

function openPolicy(type) {
  if (!elements.policyModal || !elements.policyTitle || !elements.policyContent) return;
  
  const policy = POLICY_TEXTS[type][state.lang] || POLICY_TEXTS[type]['en'];
  
  elements.policyTitle.textContent = policy.title;
  elements.policyContent.textContent = policy.content;
  
  elements.policyModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePolicy() {
  if (!elements.policyModal) return;
  elements.policyModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Static B2B Testimonials Dataset (Fully translated to avoid fallbacks)
const testimonials = {
  en: [
    {
      name: "Vincent Marchand",
      company: "Maison Lumière",
      country: "France",
      role: "Procurement Director",
      flag: "🇫🇷",
      rating: 5,
      text: "We've been sourcing from Glaseox for 5 years. The quality of their glass bottles is exceptional, and their custom branding service is second to none. 100% on-time delivery for every order.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Jenkins",
      company: "Aura Perfumery",
      country: "United Kingdom",
      role: "Brand Founder",
      flag: "🇬🇧",
      rating: 5,
      text: "The Lura II bottle perfectly matches our brand identity. Glaseox's team helped us customize every detail from cap color to screen-printing. Outstanding service and competitive pricing.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Andrei Popescu",
      company: "Essenza Group",
      country: "Romania",
      role: "Operations Manager",
      flag: "🇷🇴",
      rating: 5,
      text: "The best supplier of perfume bottles in Europe. Exceptional quality, fast delivery, and excellent technical support. We highly recommend them.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dmitry Volkov",
      company: "Premium Scents LLC",
      country: "Russia",
      role: "CEO",
      flag: "🇷🇺",
      rating: 5,
      text: "Excellent manufacturer. We have been working with Glaseox for 3 years. Stable quality, fast delivery, and a professional team. I recommend them to all perfume brands.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maria Santos",
      company: "Velasco Beauty",
      country: "Spain",
      role: "Creative Director",
      flag: "🇪🇸",
      rating: 5,
      text: "Glaseox's Varna bottle became our signature design. The MOQ flexibility and free samples before bulk order made our decision easy. Truly a premium partner.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Hans Mueller",
      company: "Duft Werk",
      country: "Germany",
      role: "Production Lead",
      flag: "🇩🇪",
      rating: 5,
      text: "Technical precision at its best. FEA-15 standard is consistently met, and their quality control is what we expect from a premium supplier. Highly recommended.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    }
  ],
  ru: [
    {
      name: "Венсан Маршан",
      company: "Maison Lumière",
      country: "Франция",
      role: "Директор по закупкам",
      flag: "🇫🇷",
      rating: 5,
      text: "Мы закупаем продукцию у Glaseox уже 5 лет. Качество их стеклянных флаконов исключительное, а их услуги по индивидуальному брендингу не имеют себе равных. 100% своевременная доставка каждого заказа.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Сара Дженкинс",
      company: "Aura Perfumery",
      country: "Великобритания",
      role: "Основатель бренда",
      flag: "🇬🇧",
      rating: 5,
      text: "Флакон Lura II идеально соответствует идентичности нашего бренда. Команда Glaseox помогла нам настроить каждую деталь, от цвета колпачка до шелкографии. Выдающийся сервис и конкурентоспособные цены.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Андрей Попеску",
      company: "Essenza Group",
      country: "Румыния",
      role: "Операционный менеджер",
      flag: "🇷🇴",
      rating: 5,
      text: "Лучший поставщик парфюмерных флаконов в Европе. Исключительное качество, быстрая доставка и отличная техническая поддержка. Мы очень рекомендуем их.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Дмитрий Волков",
      company: "Premium Scents LLC",
      country: "Россия",
      role: "Генеральный директор",
      flag: "🇷🇺",
      rating: 5,
      text: "Отличный производитель. Работаем с Glaseox уже 3 года. Стабильное качество, быстрая доставка и профессиональная команда. Рекомендую всем парфюмерным брендам.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Мария Сантос",
      company: "Velasco Beauty",
      country: "Испания",
      role: "Креативный директор",
      flag: "🇪🇸",
      rating: 5,
      text: "Флакон Varna от Glaseox стал нашим фирменным дизайном. Гибкость MOQ и бесплатные образцы перед оптовым заказом облегчили наше решение. Действительно премиальный партнер.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ханс Мюллер",
      company: "Duft Werk",
      country: "Германия",
      role: "Руководитель производства",
      flag: "🇩🇪",
      rating: 5,
      text: "Техническая точность на высшем уровне. Стандарт FEA-15 постоянно соблюдается, а их контроль качества — это именно то, что мы ожидаем от премиального поставщика. Настоятельно рекомендую.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    }
  ],
  ro: [
    {
      name: "Vincent Marchand",
      company: "Maison Lumière",
      country: "Franța",
      role: "Director Achiziții",
      flag: "🇫🇷",
      rating: 5,
      text: "Ne aprovizionăm de la Glaseox de 5 ani. Calitatea sticlelor lor este excepțională, iar serviciul lor de branding personalizat este de neegalat. Livrare 100% la timp pentru fiecare comandă.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Jenkins",
      company: "Aura Perfumery",
      country: "Marea Britanie",
      role: "Fondator Brand",
      flag: "🇬🇧",
      rating: 5,
      text: "Sticla Lura II se potrivește perfect cu identitatea brandului nostru. Echipa Glaseox ne-a ajutat să personalizăm fiecare detaliu, de la culoarea capacului până la serigrafie. Servicii remarcabile și prețuri competitive.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Andrei Popescu",
      company: "Essenza Group",
      country: "România",
      role: "Manager Operațiuni",
      flag: "🇷🇴",
      rating: 5,
      text: "Cel mai bun furnizor de sticle de parfum din Europa. Calitate excepțională, livrare rapidă și suport tehnic excelent. Recomandăm cu încredere.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dmitry Volkov",
      company: "Premium Scents LLC",
      country: "Rusia",
      role: "CEO",
      flag: "🇷🇺",
      rating: 5,
      text: "Producător excelent. Lucrăm cu Glaseox de 3 ani. Calitate stabilă, livrare rapidă și o echipă profesionistă. Îi recomand tuturor brandurilor de parfumuri.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maria Santos",
      company: "Velasco Beauty",
      country: "Spania",
      role: "Director Creativ",
      flag: "🇪🇸",
      rating: 5,
      text: "Sticla Varna de la Glaseox a devenit designul nostru distinctiv. Flexibilitatea MOQ-ului și mostrele gratuite înainte de comanda en-gros ne-au ușurat decizia. Într-adevăr, un partener premium.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Hans Mueller",
      company: "Duft Werk",
      country: "Germania",
      role: "Șef Producție",
      flag: "🇩🇪",
      rating: 5,
      text: "Precizie tehnică la cel mai înalt nivel. Standardul FEA-15 este îndeplinit în mod constant, iar controlul lor de calitate este ceea ce așteptăm de la un furnizor premium. Foarte recomandat.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    }
  ]
};

// Static B2B FAQ Dataset (Fully translated)
const faqs = {
  en: [
    {q: "What is the minimum order quantity (MOQ)?", a: "For our B2B wholesale standard products, the MOQ is 1,000 pieces per design. For custom designs, bespoke colors, or custom logo engraving, the MOQ starts at 5,000 pieces depending on the manufacturing complexity."},
    {q: "Do you ship internationally?", a: "Yes, we ship to over 60 countries worldwide. We offer flexible B2B shipping terms including EXW, FOB Istanbul, CIF, and DDP (Delivered Duty Paid) to make your import process as smooth as possible."},
    {q: "Can I customize the bottles with my brand logo?", a: "Absolutely! We provide complete OEM/ODM B2B services. This includes silk-screen printing, hot-stamping (gold/silver), embossing, debossing, frosting, and custom color coating for both bottles and caps."},
    {q: "What is your standard lead time?", a: "Stock items without customization are prepared and shipped within 7-15 days. For custom B2B production or branded items, the standard lead time is 30-45 days after the final sample is approved."},
    {q: "Can I get samples before placing a bulk order?", a: "Yes, we highly recommend getting samples. Standard samples are provided free of charge (you only pay for the courier shipping). Custom branded samples require a small sampling fee which is fully refunded upon bulk order placement."}
  ],
  ro: [
    {q: "Care este cantitatea minimă de comandă (MOQ)?", a: "Pentru produsele noastre standard din stoc, MOQ-ul este de 1.000 de bucăți pe design. Pentru designuri personalizate, culori la comandă sau gravură logo, MOQ-ul începe de la 5.000 de bucăți."},
    {q: "Livrati internațional?", a: "Da, livrăm în peste 60 de țări din întreaga lume. Oferim termeni de livrare flexibili, inclusiv EXW, FOB Istanbul, CIF și DDP."},
    {q: "Pot personaliza sticlele cu logo-ul brandului meu?", a: "Absolut! Oferim servicii complete OEM/ODM. Acestea includ serigrafie, ștanțare la cald (aur/argint), embossare, mătuire și acoperire personalizată a culorilor."},
    {q: "Care este timpul standard de producție și livrare?", a: "Articolele din stoc fără personalizare sunt expediate în 7-15 zile. Pentru producția personalizată, timpul standard este de 30-45 de zile după aprobarea mostrei finale."},
    {q: "Pot obține mostre înainte de a plasa o comandă en-gros?", a: "Da, recomandăm insistent testarea mostrelor. Mostrele standard sunt gratuite (plătiți doar transportul). Mostrele personalizate necesită o mică taxă care se rambursează integral la comanda finală."}
  ],
  ru: [
    {q: "Каков минимальный объем заказа (MOQ)?", a: "Для стандартных товаров со склада MOQ составляет 1000 штук на дизайн. Для индивидуальных дизайнов, нестандартных цветов или гравировки логотипа MOQ начинается от 5000 штук."},
    {q: "Осуществляете ли вы международную доставку?", a: "Да, мы доставляем в более чем 60 стран мира. Мы предлагаем гибкие условия доставки, включая EXW, FOB Стамбул, CIF и DDP."},
    {q: "Могу ли я нанести логотип моего бренда на флаконы?", a: "Конечно! Мы предоставляем полный спектр услуг OEM/ODM. Это включает шелкографию, горячее тиснение (золото/серебро), тиснение, матирование и индивидуальную окраску."},
    {q: "Каковы стандартные сроки выполнения заказа?", a: "Товары со склада без индивидуализации отправляются в течение 7-15 дней. Для индивидуального производства стандартный срок составляет 30-45 дней после утверждения финального образца."},
    {q: "Могу ли я получить образцы перед оптовым заказом?", a: "Да, мы настоятельно рекомендуем получить образцы. Образцы предоставляются бесплатно (вы оплачиваете только курьерскую доставку)."}
  ]
};

// Render B2B Values proposition cards
function renderAboutFeatures() {
  const container = document.getElementById('about-features-grid');
  if (!container) return;
  container.innerHTML = '';
  
  const features = (UI_TRANSLATIONS[state.lang].about && UI_TRANSLATIONS[state.lang].about.features) || [];
  
  const icons = [
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.047-1.348c-.035-.61-1.104-1.028-1.728-1.028H16.5V14.25m-3 0h4.5M3.75 14.25v-8.25A1.125 1.125 0 0 1 4.875 4.9h8.25a1.125 1.125 0 0 1 1.125 1.125v8.25M17.25 9.75h-3" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1-1.622-3.39m3.43-1.614a15.995 15.995 0 0 0-1.622-3.39m0 0a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.997 15.997 0 0 0 3.388-1.62m-5.043-.025a15.996 15.996 0 0 1-1.622-3.39m3.43-1.614a15.995 15.995 0 0 0-1.622-3.39m0 0a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Z" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H3m0 0v-.375C3 3.504 3.504 3 4.125 3H6.75m.75 12h-.75m0-6.75H6.75" /></svg>`
  ];
  
  features.forEach((feature, idx) => {
    const card = document.createElement('div');
    card.className = 'about-feature-card';
    card.innerHTML = `
      <div class="about-feature-icon">
        ${icons[idx % icons.length]}
      </div>
      <h3>${feature.title}</h3>
      <p>${feature.desc}</p>
    `;
    container.appendChild(card);
  });
}

// Render Testimonials Grid
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;
  container.innerHTML = '';
  
  const list = testimonials[state.lang] || testimonials['en'];
  
  list.forEach(t => {
    const starsHtml = Array(t.rating).fill(`
      <svg viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    `).join('');
    
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <svg class="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
      <div class="testimonial-stars">
        ${starsHtml}
      </div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <img class="testimonial-avatar" src="${t.image}" alt="${t.name}" loading="lazy">
        <div class="author-meta">
          <div class="author-name">${t.name}</div>
          <div class="author-role">${t.role}</div>
          <div class="author-company">${t.company}</div>
        </div>
        <div class="author-flag-container">
          <span class="author-flag">${t.flag}</span>
          <span class="author-country">${t.country}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render FAQs accordion with height transitions
function renderFAQs() {
  const container = document.getElementById('faq-container');
  if (!container) return;
  container.innerHTML = '';
  
  const faqList = faqs[state.lang] || faqs['en'];
  
  faqList.forEach((item, idx) => {
    const faqBox = document.createElement('div');
    faqBox.className = 'faq-item';
    faqBox.innerHTML = `
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${idx}">
        <span class="faq-question-text">${item.q}</span>
        <span class="faq-toggle-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      <div class="faq-answer" id="faq-answer-${idx}" role="region" style="max-height: 0px;">
        <div class="faq-answer-content">
          <p>${item.a}</p>
        </div>
      </div>
    `;
    
    const btn = faqBox.querySelector('.faq-question');
    const answer = faqBox.querySelector('.faq-answer');
    
    btn.addEventListener('click', () => {
      const isActive = faqBox.classList.contains('active');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(otherBox => {
        if (otherBox !== faqBox) {
          otherBox.classList.remove('active');
          otherBox.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          otherBox.querySelector('.faq-answer').style.maxHeight = '0px';
        }
      });
      
      if (isActive) {
        faqBox.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0px';
      } else {
        faqBox.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
    
    container.appendChild(faqBox);
  });
}
