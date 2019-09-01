const filtersTemplate = (filtersList) => {
  return `<form class="trip-filters" action="#" method="get">
          ${filtersList.reduce((acc, filter) => acc + filterTemplate(filter), ``)}
       </form>`;
};

const filterTemplate = ({title, count}) => {
  return `<div class="trip-filteSwitch trip viewrs__filter">
                <input id="filter-${title}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${title}" checked>
                <label class="trip-filters__filter-label" for="filter-${title}">${title}(${count})</label>
              </div>`;
};

export {filtersTemplate};
