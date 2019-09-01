import {
  getRandomIntWithMax,
  getRandomArrayValue,
  getRandomObjectKeyPropertyValues,
  getRandomBool,
  getRandomArrayValues,
  getRandomSeveralDaysFromDate,
  getRandomSeveralHours,
} from './utils.js';

const getTypes = () => {
  return {
    'bus': `to`,
    'drive': `to`,
    'ship': `to`,
  };
};

const getActivity = () => {
  return {
    'restaurant': `to`,
    'check-in': `to`,
    'sightseeing': `at`,
  };
};

const getDestination = () => {
  return [
    `Moscow`,
    `Kazan`,
    `airoport`,
    `Minsk`,
    `Vladimir`];
};

const getActivitiesAndTypes = () => {
  return Object.assign(getActivity(), getTypes());
};

const getDescription = () => {
  return [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  ];
};

const offerNames = () => {
  return [
    `Add luggage`,
    `Switch to comfort class`,
    `Choose seats`,
    ` Add meal`];
};

const offer = () => {
  return {
    'name': getRandomArrayValue(offerNames()),
    'price': getRandomIntWithMax(50),
    'flag': getRandomBool(),
  };
};

const getEventData = () => ({
  activitiesAndTypes: getRandomObjectKeyPropertyValues(getActivitiesAndTypes()),
  activities: getActivity(),
  types: getTypes(),
  destination: getRandomArrayValue(getDestination()),
  description: getRandomArrayValues(getDescription(), 3),
  beginDate: getRandomSeveralDaysFromDate(Date.now(), 7),
  hoursToEndDate: getRandomSeveralHours(3),
  price: getRandomIntWithMax(50),
  offers: Array.from(new Array(getRandomIntWithMax(2))).map(() => offer()),
});

const getTripRouteData = (eventList) => {
  let eventDateDestination = {};
  eventList.forEach((event) => {
    eventDateDestination[event.beginDate] = event.destination;
  });

  let eventDateDestinationSort = {};
  Object.keys(eventDateDestination).sort().forEach((key) => {
    eventDateDestinationSort[key] = eventDateDestination[key];
  });

  let data = {
    'beginDate': Object.keys(eventDateDestinationSort)[0],
    'endDate': Object.keys(eventDateDestinationSort)[Object.keys(eventDateDestinationSort).length - 1],
  };
  if (Object.keys(eventDateDestinationSort).length > 3) {
    data.destination = eventDateDestinationSort[Object.keys(eventDateDestinationSort)[0]] + `...` + eventDateDestinationSort[Object.keys(eventDateDestinationSort)[Object.keys(eventDateDestinationSort).length - 1]];
  } else {
    data.destination = Object.keys(eventDateDestinationSort).map((eventDate) => `${eventDateDestinationSort[eventDate]}`).join(`-`);
  }
  return data;
};

const getTotalPrice = (eventMocks) => {
  let totalPrice = 0;
  eventMocks.forEach((eventMock) => {
    eventMock.offers.forEach((eventMockOffer) => {
      totalPrice += eventMockOffer.price;
    });
    totalPrice += eventMock.price;
  });
  return totalPrice;
};

const filtersData = (eventList) => {

  const everythingEventListCount = eventList.length;

  let pastEventListCount = 0;
  let futureEventListCount = 0;

  eventList.forEach((event) => {
    if (event.beginDate < Date.now()) {
      pastEventListCount++;
    }
    if (event.beginDate > Date.now()) {
      futureEventListCount++;
    }
  });

  return [
    {title: `everything`, count: everythingEventListCount},
    {title: `past`, count: pastEventListCount},
    {title: `future`, count: futureEventListCount},
  ];
};

export {getEventData, getTripRouteData, filtersData, getTotalPrice};
