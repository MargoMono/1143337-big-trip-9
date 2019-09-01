import {Event} from './board-event-template.js';
import {EditEvent} from './board-edit-event-template';
import {createElement} from "../utils";

class Board {
  constructor(eventMocksByDate) {
    this._eventMocksByDate = eventMocksByDate;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getEventTemplate(eventsMock) {
    let template = ``;
    eventsMock.forEach((eventMock) => {
      const event = new Event(eventMock);
      template += event.getTemplate();
    });
    return template;
  }

  geEditEventTemplate(eventMock) {
    const editEvent = new EditEvent(eventMock);
    return editEvent.getTemplate();
  }

  getTemplate() {
    console.log(this._eventMocksByDate)
    return `<ul class="trip-days">
            ${Object.keys(this._eventMocksByDate).map((day, index) => `      
            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${index + 1}</span>
                <time class="day__date" datetime="">${new Date(Number(day)).getMonth()} / ${new Date(Number(day)).getDate()}</time>
              </div>
              <ul class="trip-events__list">
                 ${this.getEventTemplate(this._eventMocksByDate[day])}
              </ul>
            </li>`).join(``)}  
          </ul>`;
  }
}

export {Board};
