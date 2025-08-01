const button = document.getElementById('mode-toggle');
const logoContainer = document.querySelector('.zaykabox-logo-container');

// Initialize mode based on system preference or previous class
if (!document.body.classList.contains('dark-mode') && !document.body.classList.contains('light-mode')) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.classList.add(prefersDark ? 'dark-mode' : 'light-mode');
  // Set logo container's background accordingly
  if(prefersDark) {
    logoContainer.style.background = '#2c2c2c';  // Dark mode logo bg (example)
  } else {
    logoContainer.style.background = '#181818';  // Light mode logo bg (default)
  }
}

// Toggle logic
button.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.replace('dark-mode', 'light-mode');
    logoContainer.style.background = '#181818';  // Light mode logo bg
  } else {
    document.body.classList.replace('light-mode', 'dark-mode');
    logoContainer.style.background = '#2c2c2c';  // Dark mode logo bg
  }
  // Live update button text
  button.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Set initial button text
button.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
