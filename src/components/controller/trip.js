import {render, Position} from '../utils';
import {TripEvent} from '../templates/board-event-template.js';
import {TripEditEvent} from '../templates/board-edit-event-template';
import {Board} from '../templates/board-template';

class TripController {
  constructor(container, eventMocks) {
    this._container = container;
    this._eventMocks = eventMocks;
  }

  init() {
    Object.keys(this._eventMocksByDate(this._eventMocks)).map((date, index) => {
      const board = new Board(date, index + 1);
      render(this._container, board.getElement(), Position.BEFOREEND);
      this._eventMocksByDate(this._eventMocks)[date].forEach(
          (eventMock) => this._renderEventMock(board, eventMock));
    });
  }

  _eventMocksByDate(eventMocks) {
    return eventMocks.reduce((eventListByDate, event) => {
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
  }

  _renderEventMock(board, eventMock) {
    const tripEvent = new TripEvent(eventMock);
    const tripEditEvent = new TripEditEvent(eventMock);
    const tripEventsList = board.getElement().
        querySelector(`.trip-events__list`);

    tripEvent.getElement().
        querySelector(`.event__rollup-btn`).
        addEventListener(`click`, () => {
          tripEventsList.replaceChild(tripEditEvent.getElement(),
              tripEvent.getElement());
        });

    tripEditEvent.getElement().
        querySelector(`.event__rollup-btn`).
        addEventListener(`click`, () => {
          tripEventsList.replaceChild(tripEvent.getElement(),
              tripEditEvent.getElement());
        });

    tripEditEvent.getElement().addEventListener(`submit`, (e) => {
      e.preventDefault();
      tripEventsList.replaceChild(tripEvent.getElement(),
          tripEditEvent.getElement());
    });

    render(tripEventsList, tripEvent.getElement(), Position.BEFOREEND);
  }
}

export {TripController};
