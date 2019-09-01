import {menuTemplate} from './components/templates/menu-template.js';
import {filtersTemplate} from './components/templates/filters-template.js';
import {routeTemplate} from './components/templates/route-template.js';

import {sortTemplate} from './components/templates/sort-template.js';
import {boardTemplate} from './components/templates/board-template.js';

const massRenderElements = () => {
  return `${sortTemplate()}
          ${boardTemplate()}`;
};

const mainControl = document.querySelector(`.trip-main`);
const mainControlElement = mainControl.querySelector(`.trip-main__trip-controls`);
const mainInfoElement = mainControl.querySelector(`.trip-main__trip-info`);
const tripEventsElement = document.querySelector(`.trip-events`);

const render = (element, template, place) => {
  element.insertAdjacentHTML(place, template);
};

render(mainControlElement.firstElementChild, menuTemplate(), `afterend`);
render(mainControlElement.lastElementChild, filtersTemplate(), `afterend`);
render(mainInfoElement, routeTemplate(), `afterBegin`);
render(tripEventsElement, massRenderElements(), `beforeend`);

