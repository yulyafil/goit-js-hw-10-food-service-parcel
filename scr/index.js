import menuCardTpl from './template/menu-card.hbs';
import menuCardsTpl from './template/menu-cards.hbs';
import menu from './menu.json';

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const menuCards = document.querySelector('.js-menu');
const menuMarkup = makeMenuCards(menu);
const onBody = document.body;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
themeSwitchToggle.addEventListener('change', changeThemeDark);

menuCards.insertAdjacentHTML('beforeend', menuMarkup);

function makeMenuCards(menu) {
  // return menu.map(menuCardTpl).join('');
  return menuCardsTpl(menu);
}
saveThemeColor();

function changeThemeDark() {
  if (!themeSwitchToggle.checked) {
    onBody.classList.remove(Theme.DARK);
    onBody.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    onBody.classList.remove(Theme.LIGHT);
    onBody.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}

function saveThemeColor() {
  const bodyThemeColor = localStorage.getItem('theme');

  if (bodyThemeColor === null) {
    localStorage.setItem('theme', Theme.LIGHT);
  } else if (bodyThemeColor === Theme.DARK) {
    themeSwitchToggle.checked = true;
    //themeSwitchToggle.setAttribute('checked', 'checked');
    onBody.classList.add(Theme.DARK);
  } else if (bodyThemeColor === Theme.LIGHT) {
    //themeSwitchToggle.removeAttribute('checked');
    themeSwitchToggle.checked = false;
  }
}
