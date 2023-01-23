const getRandomIntInclusive = (min, max) => {
  const roundedUpMin = Math.ceil(min);
  const roundedDownMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedDownMax - roundedUpMin + 1)) + roundedUpMin;
};

export default getRandomIntInclusive;
