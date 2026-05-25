/* ── Portfolio Main JS ──────────────────────────────────────────────────────── */

// ── Custom Cursor ─────────────────────────────────────────────────────────────
const cursor       = document.getElementById("cursor");
const cursorFollow = document.getElementById("cursorFollower");

let mouseX = 0, mouseY = 0;
let followX = 0, followY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
});

function animateFollower() {
  followX += (mouseX - followX) * 0.12;
  followY += (mouseY - followY) * 0.12;
  cursorFollow.style.transform = `translate(${followX - 14}px, ${followY - 14}px)`;
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll("a, button, .project-card, .skill-card, .timeline__card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform += " scale(1.8)";
    cursorFollow.style.transform += " scale(1.5)";
    cursorFollow.style.opacity = "0.5";
  });
  el.addEventListener("mouseleave", () => {
    cursorFollow.style.opacity = "1";
  });
});

// ── Navbar Scroll ─────────────────────────────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ── Mobile Menu ───────────────────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ── Typewriter ────────────────────────────────────────────────────────────────
const phrases = [
  "MERN Stack Engineer",
  "Fintech Backend Architect",
  "Microservices Specialist",
  "Cloud Infrastructure Engineer",
  "Node.js Developer",
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const typeEl = document.getElementById("typewriter");

function type() {
  const phrase = phrases[phraseIndex];
  if (isDeleting) {
    typeEl.textContent = phrase.substring(0, charIndex--);
  } else {
    typeEl.textContent = phrase.substring(0, charIndex++);
  }

  let delay = isDeleting ? 50 : 80;

  if (!isDeleting && charIndex === phrase.length + 1) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 300;
  }

  setTimeout(type, delay);
}
type();

// ── Counter Animation ─────────────────────────────────────────────────────────
function animateCounter(el, target, duration = 1800) {
  const start = Date.now();
  const update = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  update();
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCounter(el, parseInt(el.dataset.count, 10));
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".stat__num[data-count]").forEach(el => counterObserver.observe(el));

// ── Hero Grid Canvas ──────────────────────────────────────────────────────────
const canvas = document.getElementById("gridCanvas");
const ctx    = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let animFrame = 0;
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const spacing = 48;
  const time    = Date.now() * 0.0008;

  for (let x = 0; x < canvas.width + spacing; x += spacing) {
    for (let y = 0; y < canvas.height + spacing; y += spacing) {
      const dist = Math.hypot(x - canvas.width * 0.5, y - canvas.height * 0.5);
      const wave = Math.sin(dist * 0.018 - time) * 0.5 + 0.5;
      const alpha = wave * 0.35;

      ctx.beginPath();
      ctx.arc(x, y, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59,130,246,${alpha})`;
      ctx.fill();
    }
  }

  // Subtle horizontal scan line
  const scanY = ((time * 120) % (canvas.height + 60)) - 30;
  const grad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
  grad.addColorStop(0,   "transparent");
  grad.addColorStop(0.5, "rgba(59,130,246,0.06)");
  grad.addColorStop(1,   "transparent");
  ctx.fillStyle = grad;
  ctx.fillRect(0, scanY - 30, canvas.width, 60);

  requestAnimationFrame(drawGrid);
}
drawGrid();

// ── Contact Form ──────────────────────────────────────────────────────────────
const form       = document.getElementById("contactForm");
const submitBtn  = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  formStatus.textContent = "";
  formStatus.className   = "form__status";

  const data = {
    name:    document.getElementById("name").value.trim(),
    email:   document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  if (!data.name || !data.email || !data.message) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.classList.add("error");
    return;
  }

  const btnText   = submitBtn.querySelector(".btn__text");
  const btnLoader = submitBtn.querySelector(".btn__loader");
  submitBtn.disabled = true;
  btnText.hidden  = true;
  btnLoader.hidden = false;

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(data),
    });
    const result = await res.json();

    if (result.success) {
      formStatus.textContent = "✓ Message sent! I'll be in touch soon.";
      formStatus.classList.add("success");
      form.reset();
    } else {
      throw new Error(result.error || "Something went wrong.");
    }
  } catch (err) {
    formStatus.textContent = `✕ ${err.message}`;
    formStatus.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    btnText.hidden  = false;
    btnLoader.hidden = true;
  }
});

// ── Active Nav Link on Scroll ─────────────────────────────────────────────────
const sections   = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav__link");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove("active"));
      const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// Active nav link styling
const styleActive = document.createElement("style");
styleActive.textContent = `.nav__link.active { color: var(--text) !important; } .nav__link.active::after { width: 100% !important; }`;
document.head.appendChild(styleActive);

console.log(
  "%c Saranraj S — Portfolio ",
  "background:#1565C0;color:#fff;font-family:monospace;font-size:14px;padding:6px 12px;border-radius:4px;",
);
console.log("%c Built with Node.js + Express", "color:#3B82F6;font-family:monospace;");
