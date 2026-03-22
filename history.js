function updateCountup(id, targetDateStr) {
    const countupEl = document.getElementById(id);
    const targetDate = new Date(targetDateStr).getTime();
  
    function refresh() {
      const now = new Date().getTime();
      let distance = now - targetDate;
  
      if (distance < 0) distance = 0; // in case date is in future
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countupEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    refresh();
    setInterval(refresh, 1000);
  }
  
  // Example dates for feasts (replace with actual dates)
  updateCountup("countup1", "2024-06-19T16:30:00");
  updateCountup("countup2", "2024-09-11T16:00:00");
  updateCountup("countup3", "2026-03-21T23:00:00");

  function createReviewRotator(textId, nameId, reviews) {
    let index = 0;
  
    const textEl = document.getElementById(textId);
    const nameEl = document.getElementById(nameId);
  
    function showReview() {
      // fade OUT both
      textEl.style.opacity = 0;
      nameEl.style.opacity = 0;
  
      setTimeout(() => {
        // change content
        textEl.textContent = `"${reviews[index].text}"`;
        nameEl.textContent = `- ${reviews[index].name}`;
  
        // fade IN both
        textEl.style.opacity = 1;
        nameEl.style.opacity = 1;
  
        index = (index + 1) % reviews.length;
      }, 300);
    }
  
    showReview();
    setInterval(showReview, 4000);
  }
  
  // ===== EDIT YOUR REVIEWS HERE =====
  
  // Feast 1
  createReviewRotator("review1-text", "review1-name", [
    { text: "Kept me fed for a week!!", name: "Aman S." },
    { text: "Losing to Waniga on CR was a bummer but it was fun.", name: "Biman W." },
    { text: "Enough food to feed all four of my beautiful girls!!", name: "Tyler H." },
    { text: "So much chicken to go around!!!", name: "Sharky." },
    { text: "Simply wonderful, I loved how everyone got along!", name: "Divit C." },
    { text: "I will never forget my first Waniga Feast.", name: "Semyon D." },
    { text: "It felt like Waniga was inside of me!!", name: "Jeremiah Potts." }
  ]);
  
  // Feast 2
  createReviewRotator("review2-text", "review2-name", [
    { text: "Best place to gain both weight and memories!", name: "Aditya L." },
    { text: "The bulk has never been easier!", name: "Akein V." },
    { text: "Maybe next time I'll manage to eat 50 McNuggets!", name: "Santana S." },
    { text: "I can't wait for the next one to see Waniga again!", name: "Mateo P." },
    { text: "So many baddies attended!!", name: "Vibhor J." },
    { text: "Loved eating all the halal foods and brawling Aditya!", name: "Sham S." }
  ]);
  
  // Pereira Feast
  createReviewRotator("review3-text", "review3-name", [
    { text: "Pov: u put the fork down", name: "Ethan P." },
    { text: "Lemme see you get hard", name: "Darren D." },
    { text: "As I watched my beautiful Lankan friends stuff their faces with my handmade glizzies with onion and mustard, I think I felt true calm for the first time in a while. Life is a treacherous whirlwind yet here, well within the eye of the storm, we are able to find peace in each others presence. Long live Waniga. Long live the Glizzy.", name: "Divit C." },
    { text: "Don't rush greatness", name: "Akein V." }
  ]);

  
  
