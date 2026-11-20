// === Translations ===
const translations = {
  en: {
    meta_title: "riverya4life | Python & Lua Developer",
    menu_home: "Home",
    menu_projects: "Projects",
    menu_about: "About",
    menu_github: "GitHub",
    menu_language: "Language",
    to_top: "Back to top",
    menu_toggle: "Menu",

    hero_title: "Hi, I’m riverya4life",
    hero_role: "Python & Lua Developer",
    hero_text:
      "I build and moderate projects for communities, from Discord bots to GTA: SAMP scripts",
    btn_contact: "Get in touch",
    btn_projects: "Projects",
    scroll: "Scroll",

    projects_title: "Projects",
    project_lunaris_text:
      "A GTA: SAMP script that adds new features and makes your gameplay more convenient.",
    project_fistashkin_text:
      "A simple, multi-purpose Discord bot created with love: ranking, automod, music and much more.",
    project_waveform_text:
      "Oscillogram of PC system audio (WASAPI loopback) in a modern dark-themed interface.",
    project_view: "View on GitHub",

    about_title: "About",
    about_1:
      "I’m interested in developing, moderating and creating interesting projects for communities.",
    about_2:
      "In my free time I study new languages, such as C++, JavaScript and Lua.",
    about_3:
      "I’m working on FistashkinBot for Discord, and I also write scripts for GTA: SAMP.",
    about_4:
      "Fun fact: I’m a verified bot developer on Discord and a reverse engineer (I use IDA Pro).",
    stack_title: "Tech stack",

    footer_text: "© 2026 riverya4life. All rights reserved.",
    toast_changed: "Language changed to English",
  },
  ru: {
    meta_title: "riverya4life | Python и Lua разработчик",
    menu_home: "Главная",
    menu_projects: "Проекты",
    menu_about: "Обо мне",
    menu_github: "GitHub",
    menu_language: "Язык",
    to_top: "Наверх",
    menu_toggle: "Меню",

    hero_title: "Привет, я riverya4life",
    hero_role: "Python и Lua разработчик",
    hero_text:
      "Создаю и модерирую проекты для сообществ: от Discord-ботов до скриптов для GTA: SAMP",
    btn_contact: "Связаться",
    btn_projects: "Проекты",
    scroll: "Вниз",

    projects_title: "Проекты",
    project_lunaris_text:
      "Скрипт для GTA: SAMP, который добавляет новые функции и делает игру удобнее.",
    project_fistashkin_text:
      "Простой многоцелевой Discord-бот, созданный с любовью: рейтинг, автомод, музыка и многое другое.",
    project_waveform_text:
      "Осциллограмма системного звука ПК (WASAPI loopback) в современном тёмном интерфейсе.",
    project_view: "Открыть на GitHub",

    about_title: "Обо мне",
    about_1:
      "Мне интересно разрабатывать, модерировать и создавать интересные проекты для сообществ.",
    about_2:
      "В свободное время изучаю новые языки, такие как C++, JavaScript и Lua.",
    about_3:
      "Работаю над FistashkinBot для Discord, а также пишу скрипты для GTA: SAMP.",
    about_4:
      "Факт обо мне: я верифицированный разработчик ботов в Discord и реверс-инженер (использую IDA Pro).",
    stack_title: "Технологии",

    footer_text: "© 2026 riverya4life. Все права защищены.",
    toast_changed: "Язык изменён на Русский",
  },
  uk: {
    meta_title: "riverya4life | Python та Lua розробник",
    menu_home: "Головна",
    menu_projects: "Проєкти",
    menu_about: "Про мене",
    menu_github: "GitHub",
    menu_language: "Мова",
    to_top: "Нагору",
    menu_toggle: "Меню",

    hero_title: "Привіт, я riverya4life",
    hero_role: "Python та Lua розробник",
    hero_text:
      "Створюю та модерую проєкти для спільнот: від Discord-ботів до скриптів для GTA: SAMP",
    btn_contact: "Зв’язатися",
    btn_projects: "Проєкти",
    scroll: "Вниз",

    projects_title: "Проєкти",
    project_lunaris_text:
      "Скрипт для GTA: SAMP, який додає нові функції та робить гру зручнішою.",
    project_fistashkin_text:
      "Простий багатофункціональний Discord-бот, створений з любов’ю: рейтинг, автомод, музика та багато іншого.",
    project_waveform_text:
      "Осцилограма системного звуку ПК (WASAPI loopback) у сучасному темному інтерфейсі.",
    project_view: "Відкрити на GitHub",

    about_title: "Про мене",
    about_1:
      "Мені цікаво розробляти, модерувати та створювати цікаві проєкти для спільнот.",
    about_2:
      "У вільний час вивчаю нові мови, такі як C++, JavaScript та Lua.",
    about_3:
      "Працюю над FistashkinBot для Discord, а також пишу скрипти для GTA: SAMP.",
    about_4:
      "Цікавий факт: я верифікований розробник ботів у Discord і реверс-інженер (використовую IDA Pro).",
    stack_title: "Технології",

    footer_text: "© 2026 riverya4life. Усі права захищено.",
    toast_changed: "Мову змінено на Українську",
  },
};

const languages = {
  en: { name: "English", code: "EN" },
  ru: { name: "Русский", code: "RU" },
  uk: { name: "Українська", code: "UK" },
};

const DEFAULT_LANG = "en";
const I18N_FADE_MS = 200;

// === Helpers ===
function detectLanguage() {
  const saved = localStorage.getItem("siteLanguage");
  if (saved && translations[saved]) return saved;
  const nav = (navigator.language || "").slice(0, 2).toLowerCase();
  return translations[nav] ? nav : DEFAULT_LANG;
}

function t(key, lang) {
  lang = lang || document.documentElement.dataset.lang || DEFAULT_LANG;
  const pack = translations[lang] || {};
  return pack[key] ?? translations[DEFAULT_LANG][key] ?? key;
}

// === Page translation ===
function translatePage(lang) {
  const pack = translations[lang];
  if (!pack) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key in pack) el.textContent = pack[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (key in pack) el.innerHTML = pack[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (key in pack) el.setAttribute("aria-label", pack[key]);
  });

  document.title = pack.meta_title;
}

function translatePageAnimated(lang, afterUpdate) {
  const els = [
    ...document.querySelectorAll(
      "[data-i18n], [data-i18n-html], #lang-current",
    ),
  ];
  const apply = () => {
    translatePage(lang);
    afterUpdate?.();
  };
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (!els.length || reduce || !els[0].animate) return apply();

  // Web Animations API: работает поверх CSS-анимаций и transition'ов,
  // поэтому не конфликтует с .reveal и анимацией появления hero.
  const out = els.map((el) =>
    el.animate(
      [
        { opacity: 1, filter: "blur(0px)" },
        { opacity: 0, filter: "blur(4px)" },
      ],
      { duration: I18N_FADE_MS, easing: "ease-in", fill: "forwards" },
    ),
  );

  setTimeout(() => {
    apply();
    out.forEach((a) => a.cancel());
    els.forEach((el, i) =>
      el.animate(
        [
          { opacity: 0, filter: "blur(4px)" },
          { opacity: 1, filter: "blur(0px)" },
        ],
        { duration: 320, delay: Math.min(i * 12, 180), easing: "ease-out", fill: "backwards" },
      ),
    );
  }, I18N_FADE_MS);
}

function setLanguage(lang, { animate = true } = {}) {
  if (!translations[lang]) return;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  localStorage.setItem("siteLanguage", lang);

  const after = () => updateLanguageSwitcher(lang);
  animate ? translatePageAnimated(lang, after) : (translatePage(lang), after());
}

// === Language switcher ===
function updateLanguageSwitcher(lang) {
  const cur = document.getElementById("lang-current");
  if (cur) cur.textContent = languages[lang].code;

  document.querySelectorAll(".lang-option").forEach((opt) => {
    const active = opt.dataset.lang === lang;
    opt.classList.toggle("active", active);
    opt.setAttribute("aria-checked", String(active));
  });
}

function toggleLangMenu(forceOpen) {
  const wrap = document.getElementById("lang-switcher");
  const btn = document.getElementById("lang-button");
  if (!wrap || !btn) return;
  const open =
    typeof forceOpen === "boolean" ? forceOpen : !wrap.classList.contains("open");
  wrap.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", String(open));
}

function initLanguageSwitcher() {
  const wrap = document.getElementById("lang-switcher");
  const btn = document.getElementById("lang-button");
  const menu = document.getElementById("lang-menu");
  if (!wrap || !btn || !menu) return;

  menu.innerHTML = "";
  Object.entries(languages).forEach(([key, data]) => {
    const opt = document.createElement("button");
    opt.type = "button";
    opt.className = "lang-option";
    opt.dataset.lang = key;
    opt.setAttribute("role", "menuitemradio");
    opt.innerHTML = `<span class="lang-code">${data.code}</span><span>${data.name}</span>`;
    opt.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLangMenu(false);
      if (key === document.documentElement.dataset.lang) return;
      setLanguage(key);
    });
    menu.appendChild(opt);
  });

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLangMenu();
  });
  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target)) toggleLangMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleLangMenu(false);
  });
}

// Expose for other scripts
window.translations = translations;
window.t = t;
window.setLanguage = setLanguage;
window.getCurrentLanguage = () =>
  document.documentElement.dataset.lang || detectLanguage();

// === Init ===
(function init() {
  initLanguageSwitcher();
  setLanguage(detectLanguage(), { animate: false });
})();