// Confetti animation for special moments
export function createConfetti() {
  const colors = ['#4A90E2', '#FF69B4', '#FFD700', '#B48BFF'];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
  }
}

function createConfettiPiece(color: string) {
  const confetti = document.createElement('div');
  confetti.className = 'confetti-piece';
  confetti.style.left = Math.random() * 100 + '%';
  confetti.style.backgroundColor = color;
  confetti.style.animationDelay = Math.random() * 3 + 's';
  confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
  
  document.body.appendChild(confetti);
  
  setTimeout(() => confetti.remove(), 5000);
}

// Trigger confetti on featured horse card click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.badge-featured').forEach(badge => {
    badge.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      createConfetti();
    });
  });
});
