import {createElement} from "../utils";

class Filters {
  constructor(filtersList) {
    this._filtersList = filtersList;
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

  getFilerTemplate({title, count}) {
    return `<div class="trip-filteSwitch trip viewrs__filter">
                <input id="filter-${title}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${title}" checked>
                <label class="trip-filters__filter-label" for="filter-${title}">${title}(${count})</label>
              </div>`;
  }

  getTemplate() {
    return `<form class="trip-filters" action="#" method="get">
          ${this._filtersList.reduce((acc, filter) => acc + this.getFilerTemplate(filter), ``)}
       </form>`;
  }
}

export {Filters};
