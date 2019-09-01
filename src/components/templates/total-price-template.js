import {createElement} from "../utils";

class TotalPrice {
  constructor(totalPrice) {
    this._totalPrice = totalPrice;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${this._totalPrice}</span>
            </p>`;
  }
}

export {TotalPrice};
