const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.getElementById("langToggle");
let lang = "ko";

const dict = {
  en: {
    pill: "Dedicated for USCIS submissions",
    h1: "Korean → English<br/>USCIS Certified Translation",
    sub: "Green card · Naturalization · Marriage-based · RFE documents<br/>Translated accurately in USCIS-compliant format.",
    cta1: "Get a free quote",
    cta2: "See supported documents",
    t1a: "24–48 hours", t1b: "Fast turnaround",
    t2a: "USCIS", t2b: "Compliant format",
    t3a: "KakaoTalk", t3b: "Korean support",
    quickTitle: "Quick contact",
    quickText: "Send a photo/PDF and get a free quote.",
    emailBtn: "Email us",
    kakaoBtn: "Kakao Open Chat",
    smsBtn: "Text us",
    quickNote: "* Documents are used only for translation and deleted on request.",
    sTitle: "Supported documents",
    sSub: "For USCIS / NVC / Interview / RFE",
    doc1: "Family / Marriage / Basic certificates", doc1d: "Family relation, marriage relation, basic certificate, etc.",
    doc2: "Birth / Adoption / Court docs", doc2d: "Birth, court decisions, official documents",
    doc3: "Police / Military / Education", doc3d: "Criminal record, military record, diploma/transcripts",
    doc4: "Other documents", doc4d: "RFE evidence and additional supporting docs",
    pTitle: "How it works",
    p1: "Send documents", p1d: "Photo or PDF via email/KakaoTalk",
    p2: "Free quote", p2d: "Clear pricing based on pages & urgency",
    p3: "Translate + certificate", p3d: "USCIS-compliant certified translation statement included",
    p4: "Delivery", p4d: "Delivered as PDF; print options available",
    prTitle: "Pricing",
    pr1: "Standard", perPage: "/ page", pr1a: "1–2 business days", pr1b: "Certificate included", pr1c: "1 free revision",
    pr2: "Rush", rush: "extra", pr2a: "24 hours", pr2b: "Priority handling", pr2c: "Same-day (ask)",
    pr3: "Bulk / Attorney", pr3p: "Custom quote", pr3a: "Volume discounts", pr3b: "Referral partnerships", pr3c: "Preferred pricing",
    prCta: "Request a free quote",
    fTitle: "FAQ",
    f1q: "Do I need a Notary?", f1a: "USCIS typically requires a certification statement. Notary needs vary by case/agency; we’ll guide you.",
    f2q: "Do I have to mail originals?", f2a: "Usually no — scans/photos are enough.",
    f3q: "Can you handle RFE urgently?", f3a: "Yes. Rush and same-day options are available.",
    cTitle: "Free quote / Contact",
    cSub: "Send a photo or PDF for a quick quote. (You may redact sensitive info.)",
    c1: "Email", c2: "KakaoTalk", c3: "Text",
    formTitle: "Contact form",
    formSub: "You can also message us here.",
    name: "Name",
    email: "Email",
    msg: "Message",
    send: "Send",
    formNote: "* If you need attachments, email or KakaoTalk is best."
  }
};

function applyLang(next) {
  const map = dict[next];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (map && map[key]) el.innerHTML = map[key];
  });
  if (toggle) toggle.textContent = next === "ko" ? "EN" : "KO";
}

if (toggle) {
  toggle.addEventListener("click", () => {
    lang = (lang === "ko") ? "en" : "ko";
    applyLang(lang);
  });
}

applyLang(lang);
