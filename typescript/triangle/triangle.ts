export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind() {
        // validate sides
        if (this.sides.some(side => side <= 0)) {
            throw new Error('Invalid length')
        }
        const [a, b, c] = this.sides
        // check for inequality
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Triangle inequality')
        }
        // all sides equal
        if (this.sides.every(side => side === a)) {
            return 'equilateral'
        }
        // any two sides equal
        if (a === b || a === c || b === c) {
            return 'isosceles'
        }
        return 'scalene'
    }
}