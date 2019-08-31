import {boardEditEventTemplate} from './board-edit-event-template.js';
import {boardEventTemplate} from "./board-event-template";

const boardEventList = (initEventList) => {
  return initEventList.
  map((data) => boardEventTemplate(data)).
  join(``);
};

export const boardTemplate = (eventListByDate) => {
  return `<ul class="trip-days">
            ${Object.keys(eventListByDate).map((day, index) => `      
            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${index + 1}</span>
                <time class="day__date" datetime="2019-03-18">${new Date(day)}</time>
              </div>
              <ul class="trip-events__list">
                 ${index === 0 ? (boardEditEventTemplate(eventListByDate[day].splice(0, 1)[0])) : ``}
                 ${boardEventList(eventListByDate[day])}
              </ul>
            </li>`).join(``)}  
          </ul>`;
};
