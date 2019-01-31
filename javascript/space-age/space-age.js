const EARTH_YEAR_IN_SECONDS = 31557600;
const MERCURY_YEAR_IN_EARTH_YEARS = 0.2408467
const VENUS_YEAR_IN_EARTH_YEARS = 0.61519726
const MARS_YEAR_IN_EARTH_YEARS = 1.8808158
const JUPITER_YEAR_IN_EARTH_YEARS = 11.862615
const SATURN_YEAR_IN_EARTH_YEARS = 29.447498
const URANUS_YEAR_IN_EARTH_YEARS = 84.016846
const NEPTUNE_YEAR_IN_EARTH_YEARS = 164.79132

const convert = (seconds, conversionFactor) => {
  return +(seconds / EARTH_YEAR_IN_SECONDS / conversionFactor).toFixed(2);
};

export const age = (planet, seconds) => {
  switch(planet) {
    case 'earth':
      return +((seconds / EARTH_YEAR_IN_SECONDS).toFixed(2));
    case 'mercury':
      return convert(seconds, MERCURY_YEAR_IN_EARTH_YEARS);
    case 'venus':
      return convert(seconds, VENUS_YEAR_IN_EARTH_YEARS);
    case 'mars':
      return convert(seconds, MARS_YEAR_IN_EARTH_YEARS);
    case 'jupiter':
      return convert(seconds, JUPITER_YEAR_IN_EARTH_YEARS);
    case 'saturn':
      return convert(seconds, SATURN_YEAR_IN_EARTH_YEARS);
    case 'uranus':
      return convert(seconds, URANUS_YEAR_IN_EARTH_YEARS);
    case 'neptune':
      return convert(seconds, NEPTUNE_YEAR_IN_EARTH_YEARS);
    default:
      return null;
  }
};