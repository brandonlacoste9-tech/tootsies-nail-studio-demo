/* EN-only i18n for Tootsies The Nail Studio demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(918) 853-5334",
    "hero.kicker": "Tulsa, Oklahoma · Nail studio · Call to book",
    "hero.title": "Nails that look<br>like art.",
    "hero.sub": "Rated 5.0 out of 5 from 10 reviews: manicures, pedicures, acrylics and nail art in a relaxing Tulsa studio.",
    "hero.cta1": "Call (918) 853-5334",
    "hero.cta2": "See services",
    "trust.t1t": "5-star rated",
    "trust.t1d": "Perfect score from clients",
    "trust.t2t": "Acrylic experts",
    "trust.t2d": "Full sets &amp; fills",
    "trust.t3t": "Relaxing studio",
    "trust.t3d": "Friendly, inviting atmosphere",
    "stats.s1n": "5.0\u2605",
    "stats.s1l": "from 10 reviews",
    "stats.s2n": "Tulsa",
    "stats.s2l": "&amp; surrounding areas",
    "stats.s3n": "Manis &amp; pedis",
    "stats.s3l": "hands &amp; feet",
    "stats.s4n": "Call to book",
    "stats.s4l": "your chair awaits",
    "services.kicker": "What we do",
    "services.title": "Hands &amp; feet — done beautifully",
    "services.s1t": "Classic manicure",
    "services.s1d": "Nail shaping, cuticle care and polish — a timeless clean finish.",
    "services.s2t": "Classic pedicure",
    "services.s2d": "Soak, scrub, massage and polish — feet that feel brand new.",
    "services.s3t": "Acrylic nails",
    "services.s3d": "Full sets and fills built strong, shaped to perfection.",
    "services.s4t": "Nail art",
    "services.s4d": "Hand-painted designs — from subtle accents to full art.",
    "services.s5t": "Classic polish",
    "services.s5d": "Fresh polish in your favorite shades, done right.",
    "services.s6t": "Polish change",
    "services.s6d": "A quick polish refresh for hands or toes.",
    "why.kicker": "Why choose us",
    "why.title": "Tulsa's friendly nail studio",
    "why.intro": "Tootsies is a local Tulsa nail studio with a perfect 5-star rating — quality work, a relaxing atmosphere and technicians who treat you like a regular from day one.",
    "why.l1t": "5-star service",
    "why.l1d": "A perfect rating from clients who keep coming back.",
    "why.l2t": "Acrylic &amp; art specialists",
    "why.l2d": "Full sets, fills and hand-painted designs — done with precision.",
    "why.l3t": "Clean, relaxing space",
    "why.l3d": "A comfortable studio where you can unwind while we work.",
    "why.l4t": "Call-to-book ease",
    "why.l4d": "To book your appointment, just call (918) 853-5334.",
    "gallery.kicker": "On the job",
    "gallery.title": "Work we are proud of",
    "gallery.c1": "Detailed nail art",
    "gallery.c2": "Flawless sets, every time",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 5.0 out of 5 by Tulsa customers",
    "reviews.more": "See what clients say on Facebook — 5.0 stars from 10 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "How do I book an appointment?",
    "faq.a1": "Call (918) 853-5334 to book your appointment.",
    "faq.q2": "Do you do acrylic nails?",
    "faq.a2": "Yes — full sets and fills in any shape and length you like.",
    "faq.q3": "Do you offer nail art?",
    "faq.a3": "Yes — hand-painted designs from subtle to statement.",
    "faq.q4": "What are your hours?",
    "faq.a4": "Monday, Wednesday through Friday, 10 AM to 6 PM.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Monday, Wednesday – Friday<br>10:00 AM – 6:00 PM<br><br>Tuesday, Saturday – Sunday<br>Call for availability",
    "contact.cta": "Call now",
    "footer.tag": "Nail studio · Tulsa, Oklahoma"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
