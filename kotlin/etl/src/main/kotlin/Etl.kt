object ETL {
  fun transform(source: Map<Int, Collection<Char>>) = source.keys
    .fold(mutableMapOf<Char, Int>()) { res, key ->
      for (c in source[key]!!) {
        res.put(c.toLowerCase(), key)
      }
      res
    }
}
