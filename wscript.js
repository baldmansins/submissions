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
  }, 1500);
}, 2500);

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

  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// --- Review rotation ---
const reviews = [
  { text: "Best place to gain both weight and memories!", author: "Aditya L." },
  { text: "The bulk has never been easier!", author: "Akein V." },
  { text: "Maybe next time I'll manage to eat 50 McNuggets!", author: "Santana S." },
  { text: "I can't wait for the next one to see Waniga again!.", author: "Mateo P." },
  { text: "So many baddies attended!!", author: "Vibhor J." },
  { text: "Loved eating all the halal foods and brawling Aditya!", author: "Sham S." },
  { text: "Kept me fed for a week!!", author: "Aman S." },
  { text: "Losing to Waniga on CR was a bummer but it was fun.", author: "Biman W." },
  { text: "So much chicken to go around!!!", author: "Sharky." },
  { text: "Simply wonderful, I loved how everyone got along!", author: "Divit C." },
  { text: "I will never forget my first Waniga Feast.", author: "Semyon D." },
  { text: "Enough food to feed all four of my beautiful girls!!", author: "Tyler H." },
  { text: "It felt like Waniga was inside of me!!", author: "Jeremiah Potts." }
];

const reviewTextEl = document.getElementById("review-text");
const reviewAuthorEl = document.getElementById("review-author");

let lastIndex = -1;

function showReview() {
  // fade out
  const reviewSection = document.getElementById("review-section");
  reviewSection.style.opacity = 0;

  setTimeout(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reviews.length);
    } while (newIndex === lastIndex); // avoid repeating the last review

    const review = reviews[newIndex];
    reviewTextEl.textContent = `"${review.text}"`;
    reviewAuthorEl.innerHTML = `<strong>- ${review.author}</strong>`;

    // fade back in
    reviewSection.style.opacity = 1;

    lastIndex = newIndex;
  }, 1000); // match fade duration
}

// Initial load
showReview();
setInterval(showReview, 5000);


