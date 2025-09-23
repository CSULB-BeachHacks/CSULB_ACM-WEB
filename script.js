// Halloween Theme Auto-Detection
function checkHalloweenTheme() {
  const today = new Date();
  const month = today.getMonth() + 1; // getMonth() returns 0-11
  const day = today.getDate();

  // Check if it's Halloween (October 31st)
  const isHalloween = month === 10 && day === 31;

  if (isHalloween) {
    applyHalloweenTheme();
  } else {
    // Check if it's Halloween season (October 1-31)
    const isHalloweenSeason = month === 10;
    if (isHalloweenSeason) {
      applyHalloweenSeasonTheme();
    } else {
      applyDefaultTheme();
    }
  }
}

function applyHalloweenTheme() {
  // Halloween theme - Orange and Black
  document.documentElement.style.setProperty("--nav-bg", "rgba(0, 0, 0, 0.9)");
  document.documentElement.style.setProperty(
    "--nav-border",
    "rgba(255, 165, 0, 0.3)"
  );
  document.documentElement.style.setProperty("--text-primary", "#ffffff");
  document.documentElement.style.setProperty(
    "--text-muted",
    "rgba(255, 255, 255, 0.8)"
  );
  document.documentElement.style.setProperty("--accent", "#ff8c00");

  // Change logo to halo-acm.png
  const logoImg = document.querySelector(".brand img");
  if (logoImg) {
    logoImg.src = "halo-acm.png";
    logoImg.alt = "ACM Halloween";
  }

  // Add Halloween class to body for additional styling
  document.body.classList.add("halloween-theme");

  // Update hero background with Halloween colors
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.setProperty(
      "--halloween-overlay",
      "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(255, 140, 0, 0.3))"
    );
  }
}

function applyHalloweenSeasonTheme() {
  // Halloween season theme - Subtle orange accents
  document.documentElement.style.setProperty(
    "--nav-bg",
    "rgba(17, 24, 39, 0.8)"
  );
  document.documentElement.style.setProperty(
    "--nav-border",
    "rgba(255, 165, 0, 0.2)"
  );
  document.documentElement.style.setProperty("--text-primary", "#ffffff");
  document.documentElement.style.setProperty(
    "--text-muted",
    "rgba(255, 255, 255, 0.8)"
  );
  document.documentElement.style.setProperty("--accent", "#ffa500");

  // Keep default logo during season
  const logoImg = document.querySelector(".brand img");
  if (logoImg) {
    logoImg.src = "acm.png";
    logoImg.alt = "ACM";
  }

  // Add Halloween season class
  document.body.classList.add("halloween-season");
}

function applyDefaultTheme() {
  // Default theme - Blue accents
  document.documentElement.style.setProperty(
    "--nav-bg",
    "rgba(17, 24, 39, 0.7)"
  );
  document.documentElement.style.setProperty(
    "--nav-border",
    "rgba(255, 255, 255, 0.08)"
  );
  document.documentElement.style.setProperty("--text-primary", "#ffffff");
  document.documentElement.style.setProperty(
    "--text-muted",
    "rgba(255, 255, 255, 0.8)"
  );
  document.documentElement.style.setProperty("--accent", "#60a5fa");

  // Default logo
  const logoImg = document.querySelector(".brand img");
  if (logoImg) {
    logoImg.src = "acm.png";
    logoImg.alt = "ACM";
  }

  // Remove Halloween classes
  document.body.classList.remove("halloween-theme", "halloween-season");
}

// Mobile menu functionality
function initMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      menuBtn.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("mobile-open").toString()
      );
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  checkHalloweenTheme();
  initMobileMenu();

  // Check theme every hour in case date changes
  setInterval(checkHalloweenTheme, 60 * 60 * 1000);

  // Add dark mode toggle button
  addDarkModeToggle();

  // NEW: build the Team cards
  renderOfficers();
  
});

// Dark mode toggle functionality
function addDarkModeToggle() {
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "dark-mode-toggle";
  toggleBtn.innerHTML = "🌙";
  toggleBtn.title = "Toggle Dark Mode";
  toggleBtn.setAttribute(
    "aria-label",
    "Toggle between default and Halloween theme"
  );

  // Add click event
  toggleBtn.addEventListener("click", toggleDarkMode);

  // Add to body
  document.body.appendChild(toggleBtn);

  // Check if user has a saved preference
  const savedTheme = localStorage.getItem("userTheme");
  if (savedTheme === "halloween") {
    applyHalloweenTheme();
    toggleBtn.innerHTML = "☀️";
    toggleBtn.title = "Switch to Default Theme";
  }
}

function toggleDarkMode() {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const currentTheme = document.body.classList.contains("halloween-theme");

  if (currentTheme) {
    // Currently Halloween theme, switch to default
    applyDefaultTheme();
    toggleBtn.innerHTML = "🌙";
    toggleBtn.title = "Switch to Halloween Theme";
    localStorage.setItem("userTheme", "default");
  } else {

    applyHalloweenTheme();
    toggleBtn.innerHTML = "☀️";
    toggleBtn.title = "Switch to Default Theme";
    localStorage.setItem("userTheme", "halloween");
  }
}


// ---- Officers data (edit roles/quotes as needed) ----
const OFFICERS = [
  { name: "Bryan Tineo", role: "President", img: "Officers_Image/BryanTineo.png", quote: "Mindset is Everything" },
  { name: "Keshav Jindal", role: "Co-President", img: "Officers_Image/KeshavJindal.png", quote: "Do the impossible, see the invisible" },
  { name: "Sophia Doan", role: "Media Chair", img: "Officers_Image/SophiaDoan.png", quote: "Live young, live hard" },
  { name: "Soham Vankudre", role: "Recruitment Chair", img: "Officers_Image/SohamVankudre.png", quote: "You can't be a winner if you're always afraid of losing" },
  { name: "Marisol Morales", role: "BeachHacks Logistics Director", img: "Officers_Image/MarisolMorales.png", quote: "Bingle bongle, dingle dangle, yickedy doo" },
  { name: "Aalind Kale", role: "Outreach Chair", img: "Officers_Image/AalindKale.png", quote: "I am McLovin" },
  { name: "Deanna Solis", role: "UI/UX Designer", img: "Officers_Image/DeannaSolis.png", quote: "90% of people quit before they win big" },
  { name: "Vansh Patel", role: "BeachHacks Tech Director", img: "Officers_Image/VanshPatel.png", quote: "Why not me?" },
  { name: "Divyanshu Mehta", role: "Webmaster", img: "Officers_Image/DivyanshuMehta.png", quote: "I am the danger. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks" },
  { name: "Nathan Nguyen", role: "Membership Chair", img: "Officers_Image/Nathan Nguyen.png", quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind" },
  { name: "Tiago Borges", role: "Social Media Chair", img: "Officers_Image/Tiago Borges.png", quote: "Do or do not, there is no try" },
  { name: "Winston Ta", role: "BeachHacks Marketing Director", img: "Officers_Image/WinstonTa.png", quote: "Take the leap of faith" },
  { name: "Krisha Hemani", role: "Treasurer", img: "Officers_Image/KrishaHemani.png", quote: "Live, Laugh, Love" },
  { name: "Krrish Kohli", role: "ASEB Representative", img: "Officers_Image/KrrishKohli.png", quote: "Limits only exist until you shatter them" },
  { name: "Angel Rivera", role: "Secretary", img: "Officers_Image/AngelRivera.png", quote: "Imagine you're on your deathbed, and standing around your deathbed are the ghosts representing your unfulfilled potential" },
];

// ---- Render Team cards ----
function renderOfficers() {
  const grid = document.getElementById("officers-grid");
  if (!grid) return;

  const cards = OFFICERS.map((o, idx) => {
    const alt = `${o.name} — ${o.role}`;
    return `
    <div class="flip-card">
      <button type="button" aria-label="Flip card for ${o.name}" data-card-index="${idx}">
        <div class="flip-inner" role="group" aria-roledescription="flip card">
          <div class="flip-face card-front">
            <div class="photo-wrap">
              <img src="${o.img}" alt="${alt}">
            </div>
            <div class="meta">
              <div class="name">${o.name}</div>
              <div class="role">${o.role}</div>
            </div>
          </div>
          <div class="flip-face card-back">
            <blockquote>${o.quote || "…"}</blockquote>
          </div>
        </div>
      </button>
    </div>`;
  }).join("");

  grid.innerHTML = cards;

  // Click / keyboard toggle
  grid.querySelectorAll(".flip-card button").forEach(btn => {
    btn.addEventListener("click", () => {
      const inner = btn.querySelector(".flip-inner");
      inner.classList.toggle("is-flipped");
    });
    // Enter/Space already trigger click on buttons; no extra handler needed
  });
}
