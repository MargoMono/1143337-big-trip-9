import {getEventData, getTripRouteData, filtersData, getTotalPrice} from './components/data.js';
import {EVENT_COUNT} from './components/constans.js';
import {Menu} from './components/templates/menu-template';
import {SortEvents} from './components/templates/sort-template';
import {TripRoute} from './components/templates/route-template';
import {Filters} from './components/templates/filters-template';
import {TotalPrice} from './components/templates/total-price-template';
import {render, Position} from './components/utils';
import {TripController} from './components/controller/trip';

const eventMocks = Array.from(new Array(EVENT_COUNT)).map(() => getEventData());
const filtersList = filtersData(eventMocks);

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

const boardController = new TripController(tripEventsElement, eventMocks);
boardController.init();
