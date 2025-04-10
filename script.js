// Select the spotlight overlay element
const imgCover = document.getElementById('imgCover');

// Update spotlight gradient based on mouse position
function updateGradient(e) {
  const rect = imgCover.getBoundingClientRect();
  const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
  const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

  imgCover.style.backgroundImage = `radial-gradient(circle at ${xPercent}% ${yPercent}%, transparent 50px, rgba(0, 0, 0, 0.88) 200px)`;
}

// Reset spotlight to center when mouse leaves
function resetGradient() {
  imgCover.style.backgroundImage = `radial-gradient(circle at 50% 50%, transparent 50px, rgba(0, 0, 0, 0.88) 200px)`;
}

// Attach event listeners
imgCover.parentElement.addEventListener('mousemove', updateGradient);
imgCover.parentElement.addEventListener('mouseleave', resetGradient);
