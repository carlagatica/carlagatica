function setLanguage(language) {
  const dictionary = translations[language];

  if (!dictionary) return;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;

      if (Object.hasOwn(dictionary, key)) {
          element.textContent = dictionary[key];
      }
  });

  document.querySelectorAll(".date").forEach(date => {
      date.textContent = date.textContent.replace(
          /actualidad|present/gi,
          language === "en" ? "present" : "actualidad"
      );
  });

  document.querySelectorAll(".language-btn").forEach(button => {
      const selected = button.dataset.language === language;

      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".language-btn").forEach(button => {
      button.addEventListener("click", () => {
          setLanguage(button.dataset.language);
      });
  });

  setLanguage("es");
});