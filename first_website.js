const verticalLine = document.getElementById('vertical-line');
const maxHeight = 300;


window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const newHeight = Math.min(scrollTop, maxHeight);
  verticalLine.style.height = `${newHeight}px`;
});

const circle = document.getElementById('.circle');
const percentageText = document.getElementById('percentage');

// Function to calculate and update the scroll percentage with border effect
const updateScrollPercentage = () => {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate raw scroll percentage
  const rawPercentage = Math.min((scrollTop / documentHeight) * 100, 100);

  // Apply a square root transformation for a heavier effect
  const heavyPercentage = Math.sqrt(rawPercentage) * 10; // Scale to match 0-100 range

  // Update percentage text
  percentageText.textContent = `${Math.round(heavyPercentage)}%`;

  // Update circle background
  circle.style.background = `conic-gradient(#4caf50 ${heavyPercentage}%, #ddd ${heavyPercentage}%)`;

  // Update border color dynamically
  const darkness = Math.round((heavyPercentage / 100) * 200); // Scale from 0 to 200
  circle.style.borderColor = `rgb(${200 - darkness}, ${200 - darkness}, ${200 - darkness})`;
};

// Event listener for scrolling
window.addEventListener('scroll', updateScrollPercentage);

// Initial calculation on page load
window.addEventListener('load', updateScrollPercentage);

