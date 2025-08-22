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
    // Currently default theme, switch to Halloween
    applyHalloweenTheme();
    toggleBtn.innerHTML = "☀️";
    toggleBtn.title = "Switch to Default Theme";
    localStorage.setItem("userTheme", "halloween");
  }
}
