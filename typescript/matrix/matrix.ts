class Matrix {
    rows: number[][]
    columns: number[][]
    constructor(matrix: string) {
        this.columns = []
        this.rows = matrix.split('\n').map((row, i) => row.split(' ').map((e, j) => {
            const num = Number(e)
            if (i === 0) {
                if (j === 0) {
                    this.columns = [[num]]
                } else {
                    this.columns.push([num])
                }
            } else {
                this.columns[j].push(num)
            }
            return num
        }))
    }
}

export default Matrix
