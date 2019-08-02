const SECONDS_IN_EARTH_YEAR: number = 31557600

enum Ages {
  Mercury = 0.2408467,
  Venus =  0.61519726,
  Earth = 1,
  Mars = 1.8808158,
  Jupiter = 11.862615,
  Saturn = 29.447498,
  Uranus = 84.016846,
  Neptune = 164.79132,
}

class SpaceAge {
  private readonly _seconds: number;

  constructor(seconds: number) {
    this._seconds = seconds
  }

  get seconds(): number {
    return this._seconds;
  }

  private onPlanet(ageOnPlanet: number): number {
    return parseFloat((this._seconds / SECONDS_IN_EARTH_YEAR / ageOnPlanet).toFixed(2));
  }

  onEarth(): number {
    return this.onPlanet(Ages.Earth)
  }

  onMercury(): number {
    return this.onPlanet(Ages.Mercury)
  }

  onVenus(): number {
    return this.onPlanet(Ages.Venus)
  }

  onMars(): number {
    return this.onPlanet(Ages.Mars)
  }

  onJupiter(): number {
    return this.onPlanet(Ages.Jupiter)
  }

  onSaturn(): number {
    return this.onPlanet(Ages.Saturn)
  }

  onUranus(): number {
    return this.onPlanet(Ages.Uranus)
  }

  onNeptune(): number {
    return this.onPlanet(Ages.Neptune)
  }
}

export default SpaceAge