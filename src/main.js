import {getEventData, getTripRouteData, filtersData, getTotalPrice} from './components/data.js';
import {EVENT_COUNT} from './components/constans.js';
import {Menu} from './components/templates/menu-template';
import {SortEvents} from './components/templates/sort-template';
import {TripRoute} from './components/templates/route-template';
import {Filters} from './components/templates/filters-template';
import {Board} from './components/templates/board-template';
import {TotalPrice} from './components/templates/total-price-template';
import {Event} from './components/templates/board-event-template.js';
import {EditEvent} from './components/templates/board-edit-event-template';
import {render, Position} from './components/utils';

const eventMocks = Array.from(new Array(EVENT_COUNT)).map(() => getEventData());
const filtersList = filtersData(eventMocks);

const eventMocksByDate = eventMocks.reduce((eventListByDate, event) => {
  let eventDateInCurrentFormat = Number(new Date(event.beginDate).setHours(0, 0, 0, 0));
  if (eventListByDate[eventDateInCurrentFormat]) {
    eventListByDate[eventDateInCurrentFormat].push(event);
  } else {
    eventListByDate[eventDateInCurrentFormat] = [event];
  }
  let eventMocksByDateSort = {};
  Object.keys(eventListByDate).sort().forEach((key) => {
    eventMocksByDateSort[key] = eventListByDate[key];
  });
  return eventMocksByDateSort;
}, {});

const mainControl = document.querySelector(`.trip-main`);
const mainInfoElement = mainControl.querySelector(`.trip-main__trip-info`);
const mainControlElement = mainControl.querySelector(`.trip-main__trip-controls`);
const tripEventsElement = document.querySelector(`.trip-events`);

const tripRoute = new TripRoute(getTripRouteData(eventMocks));
const totalPrice = new TotalPrice(getTotalPrice(eventMocks));
const menu = new Menu();
const filters = new Filters(filtersList);
const sortEvents = new SortEvents();
const board = new Board(eventMocksByDate);

render(mainInfoElement, tripRoute.getElement(), Position.BEFOREEND);
render(mainInfoElement, totalPrice.getElement(), Position.BEFOREEND);
render(mainControlElement, menu.getElement(), Position.BEFOREEND);
render(mainControlElement, filters.getElement(), Position.BEFOREEND);
render(tripEventsElement, sortEvents.getElement(), Position.BEFOREEND);
render(tripEventsElement, board.getElement(), Position.BEFOREEND);

const renderEventMock = (eventMock) => {
  const event = new Event(eventMock);
  const editEvent = new EditEvent(eventMock);

  event.getElement()
    .querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
      tripEventsElement.replaceChild(editEvent.getElement(), event.getElement());
    });

  editEvent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    tripEventsElement.replaceChild(event.getElement(), editEvent.getElement());
  });

  render(tripEventsElement, board.getElement(), Position.BEFOREEND);

  render(tripEventsElement, event.getElement(), Position.BEFOREEND);
};

eventMocks.forEach((eventMock) => renderEventMock(eventMock));


