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
  updateCountup("countup1", "2024-06-19T00:04:00");
  updateCountup("countup2", "2024-09-11T00:04:00");
  updateCountup("countup3", "2025-09-21T00:00:00");

  
  
