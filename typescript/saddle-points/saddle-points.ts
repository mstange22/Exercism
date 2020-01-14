class SaddlePoints {
    static saddlePoints(matrix: number[][]): { row: number, column: number}[] {
        return matrix.reduce((accum, row, i) => {
            return accum.concat(row.reduce((acc, e, j) => {
                if (e === Math.max(...row)) {
                    let isMin = true
                    for (const currRow of matrix) {
                        if (currRow[j] < e) {
                            isMin = false
                            break
                        }
                    }
                    if (isMin) {
                        acc.push({
                            row: i + 1,
                            column: j + 1
                        })
                    }
                }
                return acc;
            }, [] as { row: number, column: number}[]))
        }, [] as { row: number, column: number}[])
    }
}

export default SaddlePoints
