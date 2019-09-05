import {
  ucFirst,
  createElement,
} from '../utils.js';

class TripEditEvent {
  constructor({activitiesAndTypes, activities, types, price, destination, description, offers, beginDate, hoursToEndDate}) {
    this._activitiesAndTypes = activitiesAndTypes;
    this._activities = activities;
    this._types = types;
    this._price = price;
    this._destination = destination;
    this._description = description;
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

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<form class="event  event--edit" action="#" method="post">
                    <header class="event__header">
                      <div class="event__type-wrapper">
                        <label class="event__type  event__type-btn" for="event-type-toggle-1">
                          <span class="visually-hidden">Choose event type</span>
                          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                        </label>
                        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                        <div class="event__type-list">
                          <fieldset class="event__type-group">
                            <legend class="visually-hidden">Transfer</legend>
                          ${Object.keys(this._types).map((type) => `<div class="event__type-item">
                              <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
                              <label class="event__type-label  event__type-label--${type}" for="event-type-taxi-1">${type}</label>
                            </div>`).join(``)}    
                          </fieldset>
                          <fieldset class="event__type-group">
                            <legend class="visually-hidden">Activity</legend>
                          ${Object.keys(this._activities).map((activity) => `<div class="event__type-item">
                              <input id="event-type-${activity}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${activity}">
                              <label class="event__type-label  event__type-label--${activity}" for="event-type-taxi-1">${activity}</label>
                            </div>`).join(``)}    
                          </fieldset>
                        </div>
                      </div>

                      <div class="event__field-group  event__field-group--destination">
                        <label class="event__label  event__type-output" for="event-destination-1">
                         ${ucFirst(Object.keys(this._activitiesAndTypes)[0])} ${this._activitiesAndTypes[Object.keys(this._activitiesAndTypes)]} 
                        </label>
                        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${this._destination}" list="destination-list-1">
                        <datalist id="destination-list-1">
                          <option value="Amsterdam"></option>
                          <option value="Geneva"></option>
                          <option value="Chamonix"></option>
                        </datalist>
                      </div>

                      <div class="event__field-group  event__field-group--time">
                        <label class="visually-hidden" for="event-start-time-1">
                          From
                        </label>
                        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${new Date(this._beginDate).getDate()}/${new Date(this._beginDate).getUTCMonth()}/${new Date(this._beginDate).getFullYear()} ${new Date(this._beginDate).getHours()}:${new Date(this._beginDate).getMinutes()}">
                        &mdash;
                        <label class="visually-hidden" for="event-end-time-1">
                          To
                        </label>
                        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${new Date(this._beginDate + this._hoursToEndDate).getDate()}/${new Date(this._beginDate + this._hoursToEndDate).getUTCMonth()}/${new Date(this._beginDate + this._hoursToEndDate).getFullYear()} ${new Date(this._beginDate + this._hoursToEndDate).getHours()}:${new Date(this._beginDate + this._hoursToEndDate).getMinutes()}">
                      </div>

                      <div class="event__field-group  event__field-group--price">
                        <label class="event__label" for="event-price-1">
                          <span class="visually-hidden">Price</span>
                          &euro;
                        </label>
                        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${this._price}">
                      </div>

                      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                      <button class="event__reset-btn" type="reset">Delete</button>

                      <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked>
                      <label class="event__favorite-btn" for="event-favorite-1">
                        <span class="visually-hidden">Add to favorite</span>
                        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                        </svg>
                      </label>

                      <button class="event__rollup-btn" type="button">
                        <span class="visually-hidden">Open event</span>
                      </button>
                    </header>

                    <section class="event__details">

                      <section class="event__section  event__section--offers">
                        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                        <div class="event__available-offers">
                          ${this._offers.map((offer) => `
                        <div class="event__offer-selector">
                            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${offer.flag ? `checked` : ``} >
                            <label class="event__offer-label" for="event-offer-luggage-1">
                              <span class="event__offer-title">${offer.name}</span>
                              &plus;
                              &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
                            </label>
                          </div>`).join(``)}        
                        </div>
                      </section>

                      <section class="event__section  event__section--destination">
                        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                        <p class="event__destination-description">${this._description}</p>

                        <div class="event__photos-container">
                          <div class="event__photos-tape">
                            
                            <img class="event__photo" src="http://picsum.photos/300/150?r=${Math.random()}" alt="Event photo">
                            <img class="event__photo" src="http://picsum.photos/300/150?r=${Math.random()}" alt="Event photo">
                            <img class="event__photo" src="http://picsum.photos/300/150?r=${Math.random()}" alt="Event photo">
                            <img class="event__photo" src="http://picsum.photos/300/150?r=${Math.random()}" alt="Event photo">
                            <img class="event__photo" src="http://picsum.photos/300/150?r=${Math.random()}" alt="Event photo">
                          </div>
                        </div>
                      </section>
                    </section>
                  </form>`;
  }
}

export {TripEditEvent};


