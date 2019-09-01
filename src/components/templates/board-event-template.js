import {
  ucFirst,
  createElement,
} from '../utils.js';

class Event {
  constructor({activitiesAndTypes, destination, price, offers, beginDate, hoursToEndDate}) {
    this._activitiesAndTypes = activitiesAndTypes;
    this._destination = destination;
    this._price = price;
    this._offers = offers;
    this._beginDate = beginDate;
    this._hoursToEndDate = hoursToEndDate;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${Object.keys(this._activitiesAndTypes)}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${ucFirst(Object.keys(this._activitiesAndTypes)[0])} ${this._activitiesAndTypes[Object.keys(this._activitiesAndTypes)]} ${this._destination}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                     
                        <time class="event__start-time" datetime="">${new Date(this._beginDate).getHours()}:${new Date(this._beginDate).getMinutes()}</time>
                        &mdash;
                        <time class="event__end-time" datetime="">${new Date(this._beginDate + this._hoursToEndDate).getHours()}:${new Date(this._beginDate + this._hoursToEndDate).getMinutes()}</time>
                      </p>
                      <p class="event__duration">${new Date(this._hoursToEndDate).getUTCHours()}H ${new Date(this._hoursToEndDate).getUTCMinutes()}M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${this._price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      ${this._offers.map((offer) => `
                       <li class="event__offer">
                        <span class="event__offer-title">${offer.name}</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
                       </li>`).join(``)}        
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>`;
  }
}

export {Event};
