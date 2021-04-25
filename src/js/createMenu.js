import cards from '../menu.json';
import cardsTpl from '../templates/cards.hbs';

const menuRef = document.querySelector('.js-menu');
const renderMenuItems = createMenuCards(cards);

menuRef.insertAdjacentHTML('beforeend', renderMenuItems);

function createMenuCards(cards) {
  return cardsTpl(cards);
}
