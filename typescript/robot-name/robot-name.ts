const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class RobotFactory {
  names: string[] = [];
  currentNameIndex = 0;

  constructor() {
    this.populateNames()
  }

  shuffleNames = (): void => {
    for (let i = 0; i < this.names.length - 1; i++) {
      const randomIndex = Math.floor(Math.random() * (this.names.length - i)) + i
      let temp = this.names[randomIndex]
      this.names[randomIndex] = this.names[i]
      this.names[i] = temp
    }
  }

  populateNames = (): void => {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        for (let x = 0; x < 10; x++) {
          for (let y = 0; y < 10; y++) {
            for (let z = 0; z < 10; z++) {
              this.names.push(`${ALPHA[i]}${ALPHA[j]}${x}${y}${z}`)
            }
          } 
        }
      }
    }
    this.shuffleNames()
  }

  getName = (): string => this.names[this.currentNameIndex++]
}

const FACTORY = new RobotFactory();

class RobotName {
  name: string
  constructor() {
    this.name = this.getName()
  }

  resetName = () => {
    this.name = this.getName()
  }

  getName = () => FACTORY.getName()
}

export default RobotName