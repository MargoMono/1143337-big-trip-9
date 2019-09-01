export const routeTemplate = ({beginDate, endDate, destination, totalPrice}) => {
  return `<div class="trip-info__main">
              <h1 class="trip-info__title">${destination}</h1>

              <p class="trip-info__dates">${new Date(Number(beginDate)).getMonth()}/${new Date(Number(beginDate)).getDate()} - ${new Date(Number(endDate)).getMonth()}/${new Date(Number(endDate)).getDate()}</p>
            </div>
            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
            </p>
`;
};
