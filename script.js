"use strict";

// Fill these in after creating an EmailJS service and template.
const EMAIL_CONFIG = {
  publicKey: "",
  serviceId: "",
  templateId: "",
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const contactToggle = document.getElementById("contact-toggle");
const contactPanel = document.getElementById("contact-links");
const mobileLayout = window.matchMedia("(max-width: 700px)");
const dialog = document.getElementById("booking-dialog");
const form = document.getElementById("booking-form");
const nameField = document.getElementById("booking-name");
const phoneField = document.getElementById("booking-phone");
const dateField = document.getElementById("booking-date");
const timeField = document.getElementById("booking-time");
const submitButton = document.getElementById("booking-submit");
const status = document.getElementById("booking-status");
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let returnFocus = null;
let sending = false;

menuButton.hidden = false;
document.getElementById("booking-zone").textContent =
  `Your device's time zone: ${timeZone}.`;

function closeContacts() {
  contactPanel.hidden = true;
  contactToggle.setAttribute("aria-expanded", "false");
}

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
  closeContacts();
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  closeContacts();
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

contactToggle.addEventListener("click", () => {
  const open = contactToggle.getAttribute("aria-expanded") !== "true";
  contactPanel.hidden = !open;
  contactToggle.setAttribute("aria-expanded", String(open));
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

function today() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function setStatus(message, success = false) {
  status.textContent = message;
  status.classList.toggle("is-success", success);
}

function openBooking(trigger) {
  if (dialog.open) return;
  returnFocus = mobileLayout.matches && trigger.closest(".site-nav")
    ? menuButton
    : trigger.closest(".contact-dropdown") ? contactToggle : trigger;
  closeMenu();
  dateField.min = today();
  if (!sending) setStatus("");
  dialog.showModal();
  document.documentElement.classList.add("modal-open");
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-booking]");
  if (trigger) {
    event.preventDefault();
    openBooking(trigger);
    return;
  }
  if (!event.target.closest(".contact-dropdown")) closeContacts();
  if (!event.target.closest(".site-header")) closeMenu();
});

document.getElementById("booking-close").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right ||
      event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});

dialog.addEventListener("close", () => {
  document.documentElement.classList.remove("modal-open");
  returnFocus?.focus({ preventScroll: true });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || dialog.open) return;
  if (!contactPanel.hidden) {
    closeContacts();
    contactToggle.focus();
  } else if (menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});

mobileLayout.addEventListener("change", closeMenu);
window.addEventListener("pageshow", closeMenu);
closeMenu();
dateField.min = today();

[nameField, phoneField, dateField, timeField].forEach((field) => {
  field.addEventListener("input", () => {
    field.setCustomValidity("");
    if (!sending) setStatus("");
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (sending) return;
  const fields = [nameField, phoneField, dateField, timeField];
  fields.forEach((field) => field.setCustomValidity(""));
  nameField.value = nameField.value.trim();
  phoneField.value = phoneField.value.trim();
  dateField.min = today();

  if (nameField.value.length < 2) {
    nameField.setCustomValidity("Please enter your name (at least 2 characters).");
  }
  const digits = phoneField.value.replace(/\D/g, "");
  if (!/^\+?[\d\s().-]+$/.test(phoneField.value) || digits.length < 7 || digits.length > 15) {
    phoneField.setCustomValidity("Enter a phone number with 7–15 digits, including the country code.");
  }
  const appointment = new Date(`${dateField.value}T${timeField.value}`);
  if (dateField.value && timeField.value && appointment.getTime() <= Date.now()) {
    timeField.setCustomValidity("Please choose a future date and time.");
  }
  if (!form.reportValidity()) return;

  if (!Object.values(EMAIL_CONFIG).every((value) => value.trim())) {
    setStatus("This concept form is not connected to email yet. No request was sent.");
    return;
  }
  if (!window.emailjs) {
    setStatus("The email service could not load. Please check your connection and try again.");
    return;
  }

  const request = {
    user_name: nameField.value,
    user_phone: phoneField.value,
    requested_date: dateField.value,
    requested_time: timeField.value,
    time_zone: timeZone,
  };
  sending = true;
  form.setAttribute("aria-busy", "true");
  fields.forEach((field) => { field.disabled = true; });
  submitButton.disabled = true;
  submitButton.textContent = "Sending…";
  setStatus("Sending your request…");

  try {
    await window.emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      request,
      { publicKey: EMAIL_CONFIG.publicKey }
    );
    form.reset();
    setStatus("Your request has been sent. Veronika will contact you to confirm your appointment.", true);
  } catch {
    setStatus("Your request could not be sent. Your details are still here — please try again.");
  } finally {
    sending = false;
    form.removeAttribute("aria-busy");
    fields.forEach((field) => { field.disabled = false; });
    submitButton.disabled = false;
    submitButton.textContent = "Send booking request";
  }
});

// Animate each photograph into place once it is loaded and visible.
// The gallery's frames move so image hover effects remain independent.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches && "IntersectionObserver" in window && Element.prototype.animate) {
  const photoTargets = document.querySelectorAll(
    ".hero-photo, .hero-detail, .gallery-grid figure"
  );
  const activeEntrances = new Set();
  const photoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      photoObserver.unobserve(entry.target);
      const image = entry.target.matches("img")
        ? entry.target : entry.target.querySelector("img");
      const reveal = () => {
        if (reducedMotion.matches || !image.naturalWidth) return;
        const index = Number(entry.target.dataset.entranceIndex);
        const direction = index % 2 === 0 ? 1 : -1;
        const animation = entry.target.animate([
          { opacity: 0, transform: `translate(${direction * 24}px, 28px) rotate(${direction * 1.2}deg) scale(.97)` },
          { opacity: 1, transform: "translate(0, 0) rotate(0deg) scale(1)" },
        ], {
          duration: 1000,
          delay: (index % 3) * 90,
          easing: "cubic-bezier(.16, 1, .3, 1)",
          fill: "backwards",
        });
        activeEntrances.add(animation);
        animation.finished.then(() => activeEntrances.delete(animation)).catch(() => {});
      };
      if (image.complete) reveal();
      else image.addEventListener("load", reveal, { once: true });
    });
  }, { threshold: 0.08 });
  photoTargets.forEach((target, index) => {
    target.dataset.entranceIndex = index;
    photoObserver.observe(target);
  });
  reducedMotion.addEventListener("change", () => {
    if (!reducedMotion.matches) return;
    photoObserver.disconnect();
    activeEntrances.forEach((animation) => animation.cancel());
    activeEntrances.clear();
  });
}
