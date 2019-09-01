import {getEventData, getTripRouteData, filtersData, getTotalPrice} from './components/data.js';
import {EVENT_COUNT} from './components/constans.js';
import {Menu} from './components/templates/menu-template';
import {SortEvents} from './components/templates/sort-template';
import {TripRoute} from './components/templates/route-template';
import {Filters} from './components/templates/filters-template';
import {Board} from './components/templates/board-template';
import {TotalPrice} from './components/templates/total-price-template';
import {TripEvent} from './components/templates/board-event-template.js';
import {TripEditEvent} from './components/templates/board-edit-event-template';
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

render(mainInfoElement, tripRoute.getElement(), Position.BEFOREEND);
render(mainInfoElement, totalPrice.getElement(), Position.BEFOREEND);
render(mainControlElement, menu.getElement(), Position.BEFOREEND);
render(mainControlElement, filters.getElement(), Position.BEFOREEND);
render(tripEventsElement, sortEvents.getElement(), Position.BEFOREEND);

const renderEventMock = (board, eventMock) => {
  const tripEvent = new TripEvent(eventMock);
  const tripEditEvent = new TripEditEvent(eventMock);
  const tripEventsList = board.getElement().querySelector(`.trip-events__list`);

  tripEvent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    tripEventsList.replaceChild(tripEditEvent.getElement(), tripEvent.getElement());
  });

  tripEditEvent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    tripEventsList.replaceChild(tripEvent.getElement(), tripEditEvent.getElement());
  });

  tripEditEvent.getElement().addEventListener(`submit`, (e) => {
    e.preventDefault();
    tripEventsList.replaceChild(tripEvent.getElement(), tripEditEvent.getElement());
  });

  render(tripEventsList, tripEvent.getElement(), Position.BEFOREEND);
};

Object.keys(eventMocksByDate).map((date, index) => {
  const board = new Board(date, index + 1);
  render(tripEventsElement, board.getElement(), Position.BEFOREEND);
  eventMocksByDate[date].forEach((eventMock) => renderEventMock(board, eventMock));
});
