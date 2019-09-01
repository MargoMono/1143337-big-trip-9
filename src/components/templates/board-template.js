import {boardEditEventTemplate} from './board-edit-event-template.js';
import {boardEventTemplate} from "./board-event-template";

const boardEventsListTemplate = () => {
  let eventsCount = 3;
  let boardEvents = ``;
  for (let i = 0; i < eventsCount; i++) {
    boardEvents += boardEventTemplate();
  }
  return boardEvents;
};

export const boardTemplate = () => {
  return `<ul class="trip-days">
            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="2019-03-18">MAR 18</time>
              </div>

              <ul class="trip-events__list">
                  ${boardEventsListTemplate()}
                  ${boardEditEventTemplate()}
              </ul>
            </li>
          </ul>`;
};
