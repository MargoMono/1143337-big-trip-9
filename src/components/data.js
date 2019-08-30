import {
  getRandomIntWithMax,
  getRandomArrayValue,
  getRandomBool,
  getRandomArrayValues,
  getRandomSeveralDaysFromDate,
} from './utils.js';

const getTypes = () => {
  return [
    `bus`,
    `check-in`,
    `drive`,
    `flight`,
    `restaurant`,
    `ship`,
    `sightseeing`,
    `taxi`,
    `train`,
    `transport`,
    `trip`];
};

const getDestination = () => {
  return [
    `Moscow`,
    `Kazan`,
    `airoport`,
    `Minsk`,
    `Vladimir`];
};

const eventData = () => ({
  type: getRandomArrayValue(getTypes()),
  destination: getRandomArrayValue(getDestination()),
  placeholder: {
    bus: `to`,
    "check-in": `at`,
    drive: `to`,
    flight: `to`,
    restaurant: `to`,
    ship: `to`,
    sightseeing: `to`,
    sightseeing: `to`,

  },
});

console.log(getTypes().length-1);

export {eventData};
