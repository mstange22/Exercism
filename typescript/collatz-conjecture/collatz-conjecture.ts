class CollatzConjecture {
    static steps(n: number) {
        if (n < 1) throw new Error('Only positive numbers are allowed')
        let count: number = 0
        while (n > 1) {
            if (n % 2 === 0) {
                n /= 2
            } else {
                n = 3 * n + 1
            }
            count++
        }
        return count
    }
}

export default CollatzConjecture