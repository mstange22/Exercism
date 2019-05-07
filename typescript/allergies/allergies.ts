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
  private allergies: string[] = []
  constructor(n: number) {
    Object.keys(ALLERGENS).forEach((key) => {
      if ((n & Number(key)) === Number(key)) {
        this.allergies.push(ALLERGENS[Number(key)])
      }
    })
  }

  allergicTo(allergen: string) {
    return this.allergies.includes(allergen)
  }

  list() {
    return this.allergies
  }
}

export default Allergies