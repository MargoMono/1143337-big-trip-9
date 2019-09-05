import {AbstractComponent} from '../absctract-component';

class Board extends AbstractComponent {
  constructor(date, i) {
    super();
    this._date = date;
    this._i = i;
  }

  getTemplate() {
    return `<ul class="trip-days">
            <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${this._i}</span>
                <time class="day__date" datetime="">${new Date(Number(this._date)).getMonth()} / ${new Date(Number(this._date)).getDate()}</time>
              </div>
              <ul class="trip-events__list">
              </ul>
            </li>  
          </ul>`;
  }
}

export {Board};
