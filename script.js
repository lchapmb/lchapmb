const theme = localStorage.getItem('theme');

const themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener('click', function () {
    const mode = this.dataset.mode;
    setTheme(mode);
    console.log('Button click', mode);
  });
}

const setTheme = (mode) => {
  if (mode === 'light') {
    document.getElementById('theme-style').href = 'default.css';
  }
  if (mode === 'blue') {
    document.getElementById('theme-style').href = 'blue.css';
  }
  if (mode === 'green') {
    document.getElementById('theme-style').href = 'green.css';
  }
  if (mode === 'purple') {
    document.getElementById('theme-style').href = 'purple.css';
  }

  localStorage.setItem('theme', mode);
};

if (theme === null) {
  setTheme('light');
} else if (theme) {
  setTheme(theme);
}
