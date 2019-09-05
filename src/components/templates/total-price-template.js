import {AbstractComponent} from '../absctract-component';

class TotalPrice extends AbstractComponent {
  constructor(totalPrice) {
    super();
    this._totalPrice = totalPrice;
  }

  getTemplate() {
    return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${this._totalPrice}</span>
            </p>`;
  }
}

export {TotalPrice};
