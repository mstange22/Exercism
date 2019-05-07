const ALLERGENS: { [key: number]: string } = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats',
}

class Allergies {
  private allergies: string[]
  constructor(score: number) {
    this.allergies = Object.keys(ALLERGENS).reduce((accum: string[], key) => {
      if ((score & Number(key)) === Number(key)) {
        accum.push(ALLERGENS[Number(key)])
      }
      return accum
    }, [])
  }

  allergicTo(allergen: string) {
    return this.allergies.includes(allergen)
  }

  list() {
    return this.allergies
  }
}

export default Allergies