// Set your target date here
const targetDate = new Date("2025-09-21T00:15:00").getTime();

const countdownEl = document.getElementById("countdown");
const container = document.getElementById("countdown-container");
const logoScreen = document.getElementById("logo-screen");
const navbar = document.getElementById("navbar");

// Step 1: Keep logo visible for 2.5s, then fade it out
setTimeout(() => {
  logoScreen.classList.add("fade-out");

  // Step 2: Reveal navbar + countdown after fade
  setTimeout(() => {
    navbar.classList.add("show");
    container.classList.add("show");
  }, 1500); // matches CSS fade-out duration
}, 2500); // logo display duration (includes fade-in time)

// Countdown function
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownEl.innerHTML = "Time's up!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
