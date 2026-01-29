
document.querySelector('.signup').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! We’ll notify you soon.');
});


const launchDate = new Date("2026-03-01").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = launchDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m`;
}, 1000);
