object PascalsTriangle {

    fun computeTriangle(rows: Int): List<List<Int>> {
        if (rows < 0) {
            throw IllegalArgumentException("Rows can't be negative!")
        }
        var res = mutableListOf<List<Int>>()
        for (i in 0..rows - 1) {
            var row = mutableListOf<Int>()
            for (j in 0..i) {
                if (j == 0 || j == i) {
                    row.add(1)
                } else {
                    row.add(res[i - 1][j - 1] + res[i - 1][j])
                }
            }
            res.add(row)
        }
        return res
    }
}
