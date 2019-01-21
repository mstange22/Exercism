const EARTH_YEAR_IN_SECONDS = 31557600;
const MERCURY_YEAR_IN_EARTH_YEARS = 0.2408467
const VENUS_YEAR_IN_EARTH_YEARS = 0.61519726
const MARS_YEAR_IN_EARTH_YEARS = 1.8808158
const JUPITER_YEAR_IN_EARTH_YEARS = 11.862615
const SATURN_YEAR_IN_EARTH_YEARS = 29.447498
const URANUS_YEAR_IN_EARTH_YEARS = 84.016846
const NEPTUNE_YEAR_IN_EARTH_YEARS = 164.79132

export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onEarth() {
    return +((this.seconds / EARTH_YEAR_IN_SECONDS).toFixed(2));
  }

  onMercury() {
    return +((this.seconds / EARTH_YEAR_IN_SECONDS / MERCURY_YEAR_IN_EARTH_YEARS).toFixed(2))
  }

  onVenus() {
    return +((this.seconds / EARTH_YEAR_IN_SECONDS / VENUS_YEAR_IN_EARTH_YEARS).toFixed(2))
  }

  onMars() {
    return +((this.seconds / EARTH_YEAR_IN_SECONDS / MARS_YEAR_IN_EARTH_YEARS).toFixed(2))
  }

  onJupiter() {
    return +((this.seconds / EARTH_YEAR_IN_SECONDS / JUPITER_YEAR_IN_EARTH_YEARS).toFixed(2))
  }

  onSaturn() {
    return +((this.seconds / EARTH_YEAR_IN_SECONDS / SATURN_YEAR_IN_EARTH_YEARS).toFixed(2))
  }

  onUranus() {
    return +((this.seconds / EARTH_YEAR_IN_SECONDS / URANUS_YEAR_IN_EARTH_YEARS).toFixed(2))
  }

  onNeptune() {
    return +((this.seconds / EARTH_YEAR_IN_SECONDS / NEPTUNE_YEAR_IN_EARTH_YEARS).toFixed(2))
  }
}