import {AbstractComponent} from '../absctract-component';

class TripRoute extends AbstractComponent {
  constructor({beginDate, endDate, destination}) {
    super();
    this._beginDate = beginDate;
    this._endDate = endDate;
    this._destination = destination;
  }

  getTemplate() {
    return `<div class="trip-info__main">
              <h1 class="trip-info__title">${this._destination}</h1>
              <p class="trip-info__dates">${new Date(Number(this._beginDate)).getMonth()}/${new Date(Number(this._beginDate)).getDate()} - ${new Date(Number(this._endDate)).getMonth()}/${new Date(Number(this._endDate)).getDate()}</p>
            </div>`;
  }
}

export {TripRoute};
