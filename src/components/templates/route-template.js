import {createElement} from "../utils";

class TripRoute {
  constructor({beginDate, endDate, destination}) {
    this._beginDate = beginDate;
    this._endDate = endDate;
    this._destination = destination;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<div class="trip-info__main">
              <h1 class="trip-info__title">${this._destination}</h1>
              <p class="trip-info__dates">${new Date(Number(this._beginDate)).getMonth()}/${new Date(Number(this._beginDate)).getDate()} - ${new Date(Number(this._endDate)).getMonth()}/${new Date(Number(this._endDate)).getDate()}</p>
            </div>`;
  }
}

export {TripRoute};
