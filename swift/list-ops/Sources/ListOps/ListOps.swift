class ListOps {
  public static func append<T>(_ list: [T], _ items: [T]) -> [T] {
    return list + items
  }

  public static func concat<T>(_ list: [T]...) -> [T] {
    var res = [T]();
    for l in list {
      for e in l {
        res.append(e)
      }
    }
    return res
  }
}