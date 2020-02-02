class Matrix {
    rows: number[][]
    columns: number[][]
    constructor(matrix: string) {
        this.columns = []
        this.rows = matrix.split('\n')
            .map((row, i) => row.split(' ')
            .map((e, j) => {
                const num = Number(e)
                if (i === 0) {
                    this.columns.push([num])
                } else {
                    this.columns[j].push(num)
                }
                return num
            }))
    }
}

export default Matrix
