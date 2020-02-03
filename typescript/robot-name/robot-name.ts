const names: string[] = [];
let currentNameIndex = 0;

class RobotName {
  name: string
  constructor() {
    if (!names.length) {
      RobotName.populateNames()
    }
    this.name = this.getName()
  }

  resetName = () => {
    this.name = this.getName()
  }

  getName = (): string => {
    return names[currentNameIndex++]
  }

  static populateNames = (): void => {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        for (let x = 0; x < 10; x++) {
          for (let y = 0; y < 10; y++) {
            for (let z = 0; z < 10; z++) {
              names.push(`${alpha[i]}${alpha[j]}${x}${y}${z}`)
            }
          } 
        }
      }
    }
    // shuffle names
    for (let i = 0; i < names.length - 1; i++) {
      const randomIndex = Math.floor(Math.random() * (names.length - i)) + i
      let temp = names[randomIndex]
      names[randomIndex] = names[i]
      names[i] = temp
    }
  }
}

export default RobotName