extension Array {
  func accumulate<T>(_ task: (Element) -> T) -> [T] {
    var res = [T]()
    for e in self {
      res.append(task(e))
    }
    return res
  }
}
