/* =========================================================
   قائمة الأعمال — Portfolio projects
   كل فيديو = سطر هنا. الفيديوهات في فولدر videos/
   category: "news" | "washington" | "reels" | "motion" | "ads" | "other"
   orientation: "vertical" (9:16) | "horizontal" (16:9) | "square"
   ========================================================= */
window.PROJECTS = [
  {
    file: "videos/washington-mix/medicaid-work-rule.mp4", poster: "videos/washington-mix/medicaid-work-rule.jpg", preview: "videos/washington-mix/medicaid-work-rule-preview.mp4",
    category: "washington", orientation: "vertical",
    title: { ar: "قاعدة العمل في ميديكيد", en: "Medicaid Work Rule" },
    client: { ar: "واشنطن آي", en: "Washington Eye" }, tools: ["Ae", "Pr"]
  },
  {
    file: "videos/washington-mix/voter-backlash.mp4", poster: "videos/washington-mix/voter-backlash.jpg", preview: "videos/washington-mix/voter-backlash-preview.mp4",
    category: "washington", orientation: "vertical",
    title: { ar: "ترامب يواجه غضب الناخبين", en: "Trump Faces Voter Backlash" },
    client: { ar: "واشنطن آي", en: "Washington Eye" }, tools: ["Ae", "Pr"]
  },
  {
    file: "videos/washington-mix/midterm-final-stretch.mp4", poster: "videos/washington-mix/midterm-final-stretch.jpg", preview: "videos/washington-mix/midterm-final-stretch-preview.mp4",
    category: "washington", orientation: "vertical",
    title: { ar: "انتخابات التجديد النصفي في المرحلة الأخيرة", en: "Midterm Campaign Enters Final Stretch" },
    client: { ar: "واشنطن آي", en: "Washington Eye" }, tools: ["Ae", "Pr"]
  },
  {
    file: "videos/motion/collage-architecture.mp4", poster: "videos/motion/collage-architecture.jpg", preview: "videos/motion/collage-architecture-preview.mp4",
    category: "motion", orientation: "vertical",
    title: { ar: "موشن كولاج — شركة مقاولات", en: "Collage Motion — Architecture Brand" }, tools: ["Ae"]
  },
  {
    file: "videos/motion/minimal-kinetic-type.mp4", poster: "videos/motion/minimal-kinetic-type.jpg", preview: "videos/motion/minimal-kinetic-type-preview.mp4",
    category: "motion", orientation: "vertical",
    title: { ar: "كاينتك تايب مينيمال", en: "Minimal Kinetic Typography" }, tools: ["Ae"]
  },
  {
    file: "videos/motion/ui-widgets.mp4", poster: "videos/motion/ui-widgets.jpg", preview: "videos/motion/ui-widgets-preview.mp4",
    category: "motion", orientation: "vertical",
    title: { ar: "أنيميشن ويدجتس", en: "UI Widget Animation" }, tools: ["Ae"]
  },
  {
    file: "videos/news/new-mexico.mp4", poster: "videos/news/new-mexico.jpg", preview: "videos/news/new-mexico-preview.mp4",
    category: "washington", orientation: "vertical",
    title: { ar: "تغيير اسم نيو مكسيكو؟", en: "Renaming New Mexico?" },
    client: { ar: "واشنطن آي", en: "Washington Eye" }, tools: ["Ae", "Pr"]
  },
  {
    file: "videos/reels/medical-reels-showcase.mp4", poster: "videos/reels/medical-reels-showcase.jpg", preview: "videos/reels/medical-reels-showcase-preview.mp4",
    category: "reels", orientation: "horizontal",
    title: { ar: "ريلز طبية — مختارات", en: "Medical Reels — Selected Edits" }, tools: ["Pr", "Ae"]
  },
  {
    file: "videos/reels/dental-reel.mp4", poster: "videos/reels/dental-reel.jpg", preview: "videos/reels/dental-reel-preview.mp4",
    category: "reels", orientation: "vertical",
    title: { ar: "ريل طب أسنان", en: "Dental Clinic Reel" }, tools: ["Pr", "Ae"]
  },
  {
    file: "videos/ads/africalix.mp4", poster: "videos/ads/africalix.jpg", preview: "videos/ads/africalix-preview.mp4",
    category: "ads", orientation: "vertical",
    title: { ar: "أفريكاليكس — نشرة اقتصادية", en: "Africalix — Economic Bulletin" },
    client: { ar: "أفريكاليكس", en: "Africalix" }, tools: ["Pr", "Ae"]
  },
  {
    file: "videos/news/missing-beauty.mp4", poster: "videos/news/missing-beauty.jpg", preview: "videos/news/missing-beauty-preview.mp4",
    category: "news", orientation: "vertical", featured: true,
    title: { ar: "تفاصيل جديدة عن الحسناء المختفية", en: "New Details on the Missing Polyglot" },
    client: { ar: "قناة الحدث", en: "Al Hadath" }, tools: ["Pr", "Ae"]
  },
  {
    file: "videos/news/melania-book.mp4", poster: "videos/news/melania-book.jpg", preview: "videos/news/melania-book-preview.mp4",
    category: "news", orientation: "vertical", featured: true,
    title: { ar: "كتاب ميلانيا ترامب", en: "Melania Trump's Memoir" },
    client: { ar: "قناة الحدث", en: "Al Hadath" }, tools: ["Pr", "Ae"]
  },
  {
    file: "videos/news/facebook-black-logo.mp4", poster: "videos/news/facebook-black-logo.jpg", preview: "videos/news/facebook-black-logo-preview.mp4",
    category: "news", orientation: "vertical", featured: true,
    title: { ar: "شعار فيسبوك باللون الأسود", en: "Why Facebook's Logo Turned Black" },
    client: { ar: "قناة العربية", en: "Al Arabiya" }, tools: ["Pr", "Ae"]
  },
  {
    file: "videos/news/jet-crash.mp4", poster: "videos/news/jet-crash.jpg", preview: "videos/news/jet-crash-preview.mp4",
    category: "news", orientation: "vertical", featured: true,
    title: { ar: "سقوط طائرة مقاتلة", en: "Fighter Jet Crash" },
    client: { ar: "قناة الحدث", en: "Al Hadath" }, tools: ["Pr", "Ae"]
  },

  // مثال:
  // {
  //   file: "videos/washington-mix/taxpayer-ads.mp4",
  //   poster: "videos/washington-mix/taxpayer-ads.jpg",
  //   preview: "videos/washington-mix/taxpayer-ads-preview.mp4",
  //   category: "washington",
  //   orientation: "vertical",
  //   title: { ar: "إعلانات بأموال دافعي الضرائب", en: "Taxpayer-Funded TV Ads" },
  //   client: { ar: "واشنطن آي", en: "Washington Eye" },
  //   tools: ["Ae", "Pr"]
  // },
];

/* الفيديو الرئيسي (Showreel) — سيبه فاضي لحد ما يتعمل */
window.SHOWREEL = { file: "", poster: "" };

/* وسائل التواصل — اللي يتساب فاضي مش هيظهر */
window.CONTACT = {
  email: "ibrahemnasef220@gmail.com",
  whatsapp: "201067302495",   // بالصيغة الدولية بدون +
  phone: "+201067302495",
  behance: "",
  linkedin: "https://www.linkedin.com/in/ibrahem-nasef",
  instagram: "",
  youtube: ""
};
