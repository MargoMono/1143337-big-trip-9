import {menuTemplate} from './components/templates/menu-template.js';
import {filtersTemplate} from './components/templates/filters-template.js';
import {routeTemplate} from './components/templates/route-template.js';
import {sortTemplate} from './components/templates/sort-template.js';
import {boardTemplate} from './components/templates/board-template.js';
import {eventData, summaryData, filtersData} from './components/data.js';
import {EVENT_COUNT} from './components/constans.js';

const initEventList = Array.from(new Array(EVENT_COUNT)).map(() => eventData());
const filtersList = filtersData(initEventList);

const initEventListByDate = initEventList.reduce((eventListByDate, event) => {
  let eventDateInCurrentFormat = Number(new Date(event.beginDate).setHours(0, 0, 0, 0));
  if (eventListByDate[eventDateInCurrentFormat]) {
    eventListByDate[eventDateInCurrentFormat].push(event);
  } else {
    eventListByDate[eventDateInCurrentFormat] = [event];
  }
  let eventListByDateSort = {};
  Object.keys(eventListByDate).sort().forEach((key) => {
    eventListByDateSort[key] = eventListByDate[key];
  });
  return eventListByDateSort;
}, {});

const massRenderElements = () => {
  return `${sortTemplate()}
          ${boardTemplate(initEventListByDate)}`;
};

const mainControl = document.querySelector(`.trip-main`);
const mainControlElement = mainControl.querySelector(`.trip-main__trip-controls`);
const mainInfoElement = mainControl.querySelector(`.trip-main__trip-info`);
const tripEventsElement = document.querySelector(`.trip-events`);

const render = (element, template, place) => {
  element.insertAdjacentHTML(place, template);
};

render(mainControlElement.firstElementChild, menuTemplate(), `afterend`);
render(mainControlElement.lastElementChild, filtersTemplate(filtersList), `afterend`);
render(mainInfoElement, routeTemplate(summaryData(initEventList)), `afterBegin`);
render(tripEventsElement, massRenderElements(), `beforeend`);

