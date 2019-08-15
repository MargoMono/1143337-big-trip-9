import {menuTemplate} from './templates/menuTemplate.js';
import {filtersTemplate} from './templates/filtersTemplate.js';
import {routeTemplate} from './templates/routeTemplate.js';

import {sortTemplate} from './templates/sortTemplate.js';
import {boardTemplate} from './templates/boardTemplate.js';

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

