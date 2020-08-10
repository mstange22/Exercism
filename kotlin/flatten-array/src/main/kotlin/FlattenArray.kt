object Flattener {
    fun flatten(source: Collection<Any?>): List<Any> {
        var res = mutableListOf<Any>()
        for (e in source) {
            if (e is List<Any?>) {
                for (el in flatten(e)) {
                    res.add(el)
                }
            } else if (e != null) {
                res.add(e)
            }
        }
        return res
    }
}
