/* ========== ハンバーガー ========== */
const burger = document.getElementById('burger');
const panel  = document.getElementById('navPanel');
const overlay = document.getElementById('overlay');
const closePanel = document.getElementById('closePanel');

function openPanel(){
  panel.setAttribute('aria-hidden', 'false');
  burger.setAttribute('aria-expanded', 'true');
  overlay.hidden = false;
  document.documentElement.style.overflow = 'hidden';
}

function close(){
  panel.setAttribute('aria-hidden', 'true');
  burger.setAttribute('aria-expanded', 'false');
  overlay.hidden = true;
  document.documentElement.style.overflow = '';
}

burger.addEventListener('click', openPanel);
closePanel.addEventListener('click', close);
overlay.addEventListener('click', close);
window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });
document.querySelectorAll('.panel-link').forEach(a => a.addEventListener('click', close));

/* ========== スクロール時のフェードイン（下から） ========== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px -10% 0px',   // 少し早めに
  threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* === i18n: ここから追加 === */
const I18N = {
  ja: {
    "menu.title": "・おいそぎ　メニュー",
    "menu.sticker": "・ステッカー　を　つくりたい　ひとは　こちら",
    "menu.illustration": "・イラスト　を　おくってくれる　かたは　こちら",
    "about.title": "・PKTA　とは？",
    "about.body": "ご持参いただいたイラストをもとに、その場でオリジナルステッカーを作れるブースです。<br>デザインはプロのデザイナー青み と ほろ が担当し、文字入れやレイアウトをしてプリント・裁断してお渡しします。<br>完全非営利で運営しています。世界にひとつだけの記念ステッカーを楽しんでください！",
    "members.title": "・メンバー　しょうかい",
    "member.aomi.name": "青み",
    "member.aomi.desc": "色々なクリエイティブをやっている。<br>漫画(スマブラ学園SP)、イラスト、デザイン、Webデザイン、3DCGモデリング、Unityなどを幅広くできる。<br>好きなゲームはSSBU、LOL、APEX、VRCなど。<br>友達が欲しい。",
    "member.horo.name": "ほろ",
    "member.horo.desc": "カメラマン兼デザイナー。<br>ネスとエンダーマンとプリンを愛している。<br>旅行と東方と植物が好き。<br>好きなエレクトロプランクトンはマリンスノー。",
    "member.portfolio": "ポートフォリオ",
    "nav.make": "ステッカーをつくる",
    "nav.post": "イラストをとうこうする",
    "nav.about": "PKTAとは？",
    "nav.members": "メンバー しょうかい"
  },
  en: {
    "menu.title": "Quick Menu",
    "menu.sticker": "For those who want to make a sticker",
    "menu.illustration": "For those who want to send illustrations",
    "about.title": "What is PKTA?",
    "about.body": "Bring your illustration and we’ll make a one-and-only sticker on the spot!<br>Our designers Aomi and Horo handle layout, lettering, printing and trimming.<br>We operate completely non-profit. Enjoy your memorable sticker!",
    "members.title": "Members",
    "member.aomi.name": "Aomi",
    "member.aomi.desc": "A versatile creator.<br>Works in comics (Smash Academy SP), illustration, design, web design, 3D modeling, and Unity.<br>Loves games like SSBU, LOL, APEX, and VRC.<br>Wants more friends.",
    "member.horo.name": "Horo",
    "member.horo.desc": "Photographer and designer.<br>Loves Ness, Enderman, and Jigglypuff.<br>Enjoys travel, Touhou, and plants.<br>Favorite Electroplankton is Marine Snow.",
    "member.portfolio": "Portfolio",
    "nav.make": "Make a Sticker",
    "nav.post": "Submit Illustration",
    "nav.about": "About PKTA",
    "nav.members": "Members"
  }
};

// 既存の I18N に追記
I18N.ja = {
  ...I18N.ja,
  "flow.title": "ステッカー　さくせいのながれ",
  "flow.step1": "Googleフォームで作りたいステッカーのイメージを入力。<br>もちろん現地ブースに直接来ていただいてもOK！",
  "flow.note1": "※現地ブースとは、2025年11月2日,3日の篝火#14 PKTAブースを指します",
  "flow.step2": "ブース現地に向かい、ブーススタッフと一緒にデザイン。",
  "flow.step3": "スタッフが印刷裁断して、ステッカーを受け渡し。<br>",
  "flow.note2": "※一定枚数溜まってから印刷を行うので、少々お時間を頂く場合がございます。",

  // ハンバーガー（念のため）
  "nav.make": "ステッカーをつくる",
  "nav.post": "イラストをとうこうする",
  "nav.about": "PKTAとは？",
  "nav.members": "メンバー しょうかい"
};

I18N.en = {
  ...I18N.en,
  "flow.title": "Sticker Creation Flow",
  "flow.step1": "Fill out the Google Form with what you’d like to make.<br>You can also just visit the booth directly!",
  "flow.note1": "The booth refers to the PKTA booth at Kagari-bi #14 on Nov 2–3, 2025.",
  "flow.step2": "Come to the booth and design together with our staff.",
  "flow.step3": "We print and trim, then hand you the stickers.<br>",
  "flow.note2": "* Printing is done in batches, so there may be a short wait.",

  // ハンバーガー
  "nav.make": "Make a Sticker",
  "nav.post": "Submit Illustration",
  "nav.about": "About PKTA",
  "nav.members": "Members"
};



function applyLang(lang) {
  const dict = I18N[lang] || I18N.ja;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const html = dict[key];
    if (html != null) el.innerHTML = html;
  });
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);
  // ボタン状態
  document.querySelectorAll('.lang-switch button')
    .forEach(b => b.setAttribute('aria-current', b.dataset.lang === lang ? 'true' : 'false'));
}

function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;
  const nav = (navigator.language || "ja").toLowerCase();
  return nav.startsWith("en") ? "en" : "ja";
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(detectLang());
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});
/* === i18n: ここまで追加 === */