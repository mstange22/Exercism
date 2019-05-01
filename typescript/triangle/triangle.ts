export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind() {
        // validate sides
        if (this.sides.some(side => side <= 0)) {
            throw new Error('Invalid length');
        }
        // check for inequality
        if (this.sides[0] + this.sides[1] < this.sides[2] || this.sides[0] + this.sides[2] < this.sides[1]
            || this.sides[1] + this.sides[2] < this.sides[0]) {
            throw new Error('Triangle inequality')
        }
        // all sides equal
        if (this.sides.every(side => side === this.sides[0])) {
            return 'equilateral'
        }
        // all sides different
        if (this.sides[0] !== this.sides[1] && this.sides[1] !== this.sides[2]
            && this.sides[0] !== this.sides[2]) {
            return 'scalene'
        }
        return 'isosceles'
    }
}