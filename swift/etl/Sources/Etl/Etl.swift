struct ETL {
  public static func transform(_ old: [Int: [String]]) -> [String: Int] {
    return [String: Int](uniqueKeysWithValues: old.flatMap({ points, letters in
        letters.map({ ($0.lowercased(), points) })
      })
    )
  }
}