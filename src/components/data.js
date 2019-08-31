import {
  getRandomIntWithMax,
  getRandomArrayValue,
  getRandomObjectKeyPropertyValues,
  getRandomBool,
  getRandomArrayValues,
  getRandomSeveralDaysFromDate,
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

const eventData = () => ({
  activitiesAndTypes: getRandomObjectKeyPropertyValues(getActivitiesAndTypes()),
  activities: getActivity(),
  types: getTypes(),
  destination: getRandomArrayValue(getDestination()),
  description: getRandomArrayValues(getDescription(), 3),
  beginDate: getRandomSeveralDaysFromDate(Date.now(), 7),
  endDate: eventData.beginDate,
  price: getRandomIntWithMax(50),
  offers: Array.from(new Array(getRandomIntWithMax(2))).map(() => offer()),
});

const routeData = (eventList) => {
  let eventDateDestination = {};
  eventList.forEach((event) => {
    eventDateDestination[event.beginDate] = event.destination;
  });
  let route = {
    'beginDate' : Object.keys(eventDateDestination)[0],
    'endDate' : Object.keys(eventDateDestination)[Object.keys(eventDateDestination).length-1],
  };
  if (Object.keys(eventDateDestination).length > 3) {
    route.destination = eventDateDestination[Object.keys(eventDateDestination)[0]] + '...' + eventDateDestination[Object.keys(eventDateDestination)[Object.keys(eventDateDestination).length-1]];
  } else {
    route.destination = Object.keys(eventDateDestination).map((eventDate) => `${eventDateDestination[eventDate]}`).join(`-`);
}
  return route;
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

export {eventData, routeData, filtersData};
