import {boardEditEvenTemplate} from './boardEditEvenTemplate.js';
import {boardEventsListTemplate} from './boardEventsListTemplate.js';

export const boardTemplate = () => {
  return `<ul class="trip-days">
            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="2019-03-18">MAR 18</time>
              </div>

              <ul class="trip-events__list">
                  ${boardEventsListTemplate()}
                  ${boardEditEvenTemplate()}
              </ul>
            </li>
          </ul>`;
};
