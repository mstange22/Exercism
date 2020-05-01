object Transpose {

    fun transpose(input: List<String>): List<String> {
        var res = mutableListOf<String>();
        input.forEachIndexed { i, row ->
            row.forEachIndexed { j, c ->
                if (res.size < j + 1) {
                    if (j != 0) {
                        res.add(Character.toString(c).padStart(res[j - 1].length))
                    } else {
                        res.add(Character.toString(c))
                    }
                } else {
                    res.set(j, res[j] + Character.toString(c).padStart(i + 1 - res[j].length))
                }
            }
        }
        return res
    }
}
