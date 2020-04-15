const addZero = (n: number) => {
  const str = n.toString();
  return str.length < 2 ? `0${str}` : str
}

const MINUTES_IN_DAY = (60 * 24)

class Clock {
  minutes: number
  constructor(hours: number, minutes: number = 0) {
    const netHours = (((hours % 24) + 24) % 24) * 60
    const netMinutes = (((minutes % MINUTES_IN_DAY) + MINUTES_IN_DAY)) % MINUTES_IN_DAY 
    this.minutes = netHours + netMinutes
  }

  toString = () => {
    const hours = Math.floor(this.minutes / 60) % 24
    const minutes = this.minutes % 60
    const res = `${addZero(hours)}:${addZero(minutes)}`
    return res
  }

  plus = (minutes: number) => {
    return new Clock(0, this.minutes + minutes)
  }

  minus = (minutes: number) => {
    return this.plus(-minutes)
  }

  equals = (c: Clock) => {
    return this.minutes % (60 * 24) === c.minutes % (60 * 24)
  }
}

export default Clock
