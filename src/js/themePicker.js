const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const themeSwitchToggleTrackRef = document.querySelector('.theme-switch__track');
const bodyRef = document.querySelector('body');

const localStorageTheme = window.localStorage.getItem('theme');
const localStorageToggle = window.localStorage.getItem('toggle');

themeSwitchToggleRef.addEventListener('change', themePicker);

function themePicker(e) {
  if (this.checked) {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    window.localStorage.setItem('theme', 'dark-theme');
    window.localStorage.setItem('toggle', 'true');
  } else {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
    window.localStorage.setItem('theme', 'light-theme');
    window.localStorage.removeItem('toggle');
  }
}

bodyRef.classList.add(localStorageTheme);
themeSwitchToggleRef.checked = localStorageToggle;
window.localStorage.clear();
console.log('nothing');
