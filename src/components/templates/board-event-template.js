import {
  ucFirst,
} from '../utils.js';

export const boardEventTemplate = ({activitiesAndTypes, destination, price, offers, beginDate, hoursToEndDate}) => {
  return `<li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${Object.keys(activitiesAndTypes)}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${ucFirst(Object.keys(activitiesAndTypes)[0])} ${activitiesAndTypes[Object.keys(activitiesAndTypes)]} ${destination}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                     
                        <time class="event__start-time" datetime="">${new Date(beginDate).getHours()}:${new Date(beginDate).getMinutes()}</time>
                        &mdash;
                        <time class="event__end-time" datetime="">${new Date(beginDate + hoursToEndDate).getHours()}:${new Date(beginDate + hoursToEndDate).getMinutes()}</time>
                      </p>
                      <p class="event__duration">${new Date(hoursToEndDate).getUTCHours()}H ${new Date(hoursToEndDate).getUTCMinutes()}M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      ${offers.map((offer) => `
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
};
