const getRandomIntWithMax = (max) => {
  return Math.round(Math.random() * max);

};
const getRandomBool = () => {
  return Boolean(Math.round(Math.random()));
};

const getRandomPlusOrMinus = () => {
  return (Math.random() < 0.5) ? -1 : 1;
};

const getMixArrayValue = (array) => {
  return array.sort(() => {
    return Math.random() - 0.5;
  });
};

const getRandomObjectKeyPropertyValues = (obj) => {
  const key = getRandomArrayValue(Object.keys(obj));
  return {
    [key]: obj[key]
  };
};

const getRandomArrayValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomArrayValues = (array, maxValuesCount) => {
  return getMixArrayValue(array).slice(0, getRandomIntWithMax(maxValuesCount));
};

const getRandomSeveralDaysFromDate = (date, max) => {
  return date + (getRandomIntWithMax(max) * 24 * 60 * 60 * 1000) * getRandomPlusOrMinus();
};

const getRandomSeveralHours = (max) => {
  return (getRandomIntWithMax(max) * 60 * 60 * 1000);
};

const ucFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export {
  getRandomIntWithMax,
  getRandomBool,
  getMixArrayValue,
  getRandomArrayValues,
  getRandomSeveralDaysFromDate,
  getRandomArrayValue,
  getRandomObjectKeyPropertyValues,
  getRandomSeveralHours,
  ucFirst,
};
