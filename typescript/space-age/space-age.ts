const SECONDS_IN_EARTH_YEAR: number = 31557600
const EARTH_YEARS_ON_MERCURY: number = 0.2408467
const EARTH_YEARS_ON_VENUS: number = 0.61519726
const EARTH_YEARS_ON_MARS: number = 1.8808158
const EARTH_YEARS_ON_JUPITER: number = 11.862615
const EARTH_YEARS_ON_SATURN: number = 29.447498
const EARTH_YEARS_ON_URANUS: number = 84.016846
const EARTH_YEARS_ON_NEPTUNE: number = 164.79132

class SpaceAge {
  private readonly _seconds: number;
  private readonly _earthYears: number;

  constructor(seconds: number) {
    this._seconds = seconds
    this._earthYears = seconds / SECONDS_IN_EARTH_YEAR
  }

  get seconds() {
    return this._seconds;
  }

  onEarth() {
    return parseFloat((this.seconds / SECONDS_IN_EARTH_YEAR).toFixed(2))
  }

  onMercury() {
    return parseFloat((this._earthYears / EARTH_YEARS_ON_MERCURY).toFixed(2))
  }

  onVenus() {
    return parseFloat((this._earthYears / EARTH_YEARS_ON_VENUS).toFixed(2))
  }

  onMars() {
    return parseFloat((this._earthYears / EARTH_YEARS_ON_MARS).toFixed(2))
  }

  onJupiter() {
    return parseFloat((this._earthYears / EARTH_YEARS_ON_JUPITER).toFixed(2))
  }

  onSaturn() {
    return parseFloat((this._earthYears / EARTH_YEARS_ON_SATURN).toFixed(2))
  }

  onUranus() {
    return parseFloat((this._earthYears / EARTH_YEARS_ON_URANUS).toFixed(2))
  }

  onNeptune() {
    return parseFloat((this._earthYears / EARTH_YEARS_ON_NEPTUNE).toFixed(2))
  }
}

export default SpaceAge