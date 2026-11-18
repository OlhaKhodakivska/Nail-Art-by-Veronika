"use strict";
(() => {
  const translations = {
  "en": {
    "nav.skip": "Skip to content",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "contact.open": "Get in touch",
    "hero.description": "Manicure, nail art, and care for your hands.",
    "hero.book": "Book Now",
    "social.instagram": "Open Instagram",
    "social.whatsapp": "Open WhatsApp",
    "gallery.title": "Selected work",
    "services.title": "Care, colour & detail.",
    "service.classicTitle": "Classic & express manicure",
    "service.classicText": "Nail shaping, cuticle care and hydration, finished with regular nail polish or a clear treatment.",
    "service.gelTitle": "Gel polish / Shellac",
    "service.gelText": "Nail preparation and a long-lasting colour finish, typically lasting 3–4 weeks.",
    "service.extensionsTitle": "Extensions & infills",
    "service.extensionsText": "Gel or acrylic extensions and strengthening, shape modelling, infills for nail regrowth and removal of the previous coating.",
    "service.spaTitle": "Spa care & nail art",
    "service.spaText": "Hand soaks, exfoliation, masks and massage, plus French tips, ombré, chrome powders, rhinestones or accent nail designs.",
    "contact.kicker": "Let’s connect",
    "contact.title": "Your next manicure.",
    "contact.description": "Get in touch to discuss your preferred design and arrange an appointment.",
    "contact.demo": "Concept website. Appointment requests require confirmation.",
    "nav.top": "Back to top",
    "form.title": "A little time for you.",
    "form.description": "Choose your preferred date and time. Veronika will contact you to confirm availability.",
    "form.name": "Your name",
    "form.phone": "Phone number",
    "form.date": "Preferred date",
    "form.time": "Preferred time",
    "form.send": "Send booking request",
    "form.note": "This is a request, not a confirmed appointment. Your details will be used to respond to your request.",
    "nav.home": "Veronika — home",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "nav.main": "Main navigation",
    "nav.social": "Social media",
    "form.close": "Close booking form",
    "photo.hero": "Glossy burgundy manicure against a soft knitted sleeve",
    "photo.detail": "Pink and green manicure with delicate floral nail art",
    "photo.nude": "Natural pink manicure with a glossy finish",
    "photo.floral": "Pink and sage-green nails decorated with flowers",
    "photo.burgundy": "Deep burgundy manicure on rounded nails",
    "photo.turquoise": "Turquoise and white nail art with gold details",
    "photo.christmas": "Red festive manicure with snowflakes and holly",
    "photo.autumn": "Olive and orange manicure with fine decorative lines",
    "meta.description": "Manicure, nail art, and care for your hands. Explore the selected nail designs by Veronika.",
    "form.zone": "Your device's time zone: {zone}.",
    "form.invalidName": "Please enter your name (at least 2 characters).",
    "form.invalidPhone": "Enter a phone number with 7–15 digits, including the country code.",
    "form.invalidDate": "Please choose a future date and time.",
    "form.notConfigured": "This concept form is not connected to email yet. No request was sent.",
    "form.unavailable": "The email service could not load. Please check your connection and try again.",
    "form.sending": "Sending…",
    "form.sendingStatus": "Sending your request…",
    "form.success": "Your request has been sent. Veronika will contact you to confirm your appointment.",
    "form.failure": "Your request could not be sent. Your details are still here — please try again."
  },
  "de": {
    "nav.skip": "Zum Inhalt",
    "nav.services": "Leistungen",
    "nav.gallery": "Galerie",
    "nav.contact": "Kontakt",
    "contact.open": "Kontakt aufnehmen",
    "hero.description": "Maniküre, Nail Art und Pflege für Ihre Hände.",
    "hero.book": "Termin anfragen",
    "social.instagram": "Instagram öffnen",
    "social.whatsapp": "WhatsApp öffnen",
    "gallery.title": "Ausgewählte Arbeiten",
    "services.title": "Pflege, Farbe & Detail.",
    "service.classicTitle": "Klassische & Express-Maniküre",
    "service.classicText": "Nägel in Form bringen, Nagelhaut pflegen und Feuchtigkeit spenden – mit klassischem Nagellack oder einer transparenten Pflege als Abschluss.",
    "service.gelTitle": "Gellack / Shellac",
    "service.gelText": "Vorbereitung der Nagelplatte und eine langanhaltende Farbbeschichtung, in der Regel für 3–4 Wochen.",
    "service.extensionsTitle": "Nagelverlängerung & Auffüllen",
    "service.extensionsText": "Verlängerung oder Verstärkung mit Gel oder Acryl, Modellieren der Form, Auffüllen des herausgewachsenen Ansatzes und Entfernen der bisherigen Beschichtung.",
    "service.spaTitle": "Spa-Pflege & Nageldesign",
    "service.spaText": "Handbäder, Peelings, Masken und Massage sowie French Nails, Ombré, Chrome-Puder, Strass oder Akzentdesigns auf einzelnen Nägeln.",
    "contact.kicker": "Lassen Sie uns sprechen",
    "contact.title": "Ihre nächste Maniküre.",
    "contact.description": "Kontaktieren Sie Veronika, um Ihr Wunschdesign und einen passenden Termin zu besprechen.",
    "contact.demo": "Konzeptwebsite. Terminanfragen müssen bestätigt werden.",
    "nav.top": "Nach oben",
    "form.title": "Ein wenig Zeit für Sie.",
    "form.description": "Wählen Sie Ihr Wunschdatum und Ihre Wunschzeit. Veronika meldet sich bei Ihnen, um die Verfügbarkeit zu bestätigen.",
    "form.name": "Ihr Name",
    "form.phone": "Telefonnummer",
    "form.date": "Wunschdatum",
    "form.time": "Wunschzeit",
    "form.send": "Terminanfrage senden",
    "form.note": "Dies ist eine Anfrage, kein bestätigter Termin. Ihre Angaben werden zur Beantwortung Ihrer Anfrage verwendet.",
    "nav.home": "Veronika — Startseite",
    "nav.open": "Menü öffnen",
    "nav.close": "Menü schließen",
    "nav.main": "Hauptnavigation",
    "nav.social": "Soziale Medien",
    "form.close": "Terminformular schließen",
    "photo.hero": "Glänzende bordeauxrote Maniküre vor einem weichen Strickärmel",
    "photo.detail": "Rosa und grüne Maniküre mit zartem Blumen-Nageldesign",
    "photo.nude": "Natürlich rosafarbene Maniküre mit glänzendem Finish",
    "photo.floral": "Rosa und salbeigrüne Nägel mit Blumenverzierungen",
    "photo.burgundy": "Tief bordeauxrote Maniküre auf abgerundeten Nägeln",
    "photo.turquoise": "Türkis-weißes Nageldesign mit goldenen Details",
    "photo.christmas": "Festliche rote Maniküre mit Schneeflocken und Stechpalmenmotiven",
    "photo.autumn": "Olivgrüne und orangefarbene Maniküre mit feinen dekorativen Linien",
    "meta.description": "Maniküre, Nail Art und Pflege für Ihre Hände. Entdecken Sie ausgewählte Nageldesigns von Veronika.",
    "form.zone": "Zeitzone Ihres Geräts: {zone}.",
    "form.invalidName": "Bitte geben Sie Ihren Namen ein (mindestens 2 Zeichen).",
    "form.invalidPhone": "Bitte geben Sie eine Telefonnummer mit 7–15 Ziffern einschließlich Ländervorwahl ein.",
    "form.invalidDate": "Bitte wählen Sie ein Datum und eine Uhrzeit in der Zukunft.",
    "form.notConfigured": "Dieses Konzeptformular ist noch nicht mit dem E-Mail-Versand verbunden. Es wurde keine Anfrage versendet.",
    "form.unavailable": "Der E-Mail-Dienst konnte nicht geladen werden. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
    "form.sending": "Wird gesendet…",
    "form.sendingStatus": "Ihre Anfrage wird gesendet…",
    "form.success": "Ihre Anfrage wurde versendet. Veronika meldet sich bei Ihnen, um Ihren Termin zu bestätigen.",
    "form.failure": "Ihre Anfrage konnte nicht versendet werden. Ihre Angaben bleiben erhalten – bitte versuchen Sie es erneut."
  }
};
  let language = "de";
  const t = (key, values = {}) => (translations[language][key] || key)
    .replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
  function setLanguage(next, persist = true) {
    language = Object.hasOwn(translations, next) ? next : "de";
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach(node => {
      node.textContent = t(node.dataset.i18n);
    });
    for (const attribute of ["aria-label", "alt", "placeholder", "content"]) {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(node => {
        node.setAttribute(attribute, t(node.getAttribute(`data-i18n-${attribute}`)));
      });
    }
    document.querySelectorAll("[data-language]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    if (persist) {
      try { localStorage.setItem("veronika-language", language); } catch { /* Optional preference. */ }
    }
    window.dispatchEvent(new CustomEvent("veronika:languagechange"));
  }
  window.veronikaI18n = { t, setLanguage, get language() { return language; } };
  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  let saved = "de";
  try { saved = localStorage.getItem("veronika-language") || "de"; } catch { /* German is the default. */ }
  setLanguage(saved, false);
  document.querySelector(".language-switch").hidden = false;
})();
