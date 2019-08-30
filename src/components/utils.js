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

function getRandomArrayValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const getRandomArrayValues = (array, maxValuesCount) => {
  return getMixArrayValue(array).slice(0, getRandomIntWithMax(maxValuesCount));
};

const getRandomSeveralDaysFromDate = (date, max) => {
  return date + (getRandomIntWithMax(max) * 24 * 60 * 60 * 1000) *
      getRandomPlusOrMinus();
};

export {
  getRandomIntWithMax,
  getRandomBool,
  getMixArrayValue,
  getRandomArrayValues,
  getRandomSeveralDaysFromDate,
  getRandomArrayValue,
};
