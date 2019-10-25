func flattenArray<T>(_ arr: [Any?]) -> [T] {
  var res: [T] = []
  
  for e in arr {
    if let e = e as? [Any] {
        res += flattenArray(e)
    } else if e != nil {
        res.append(e as! T)
    }
  }
    return res
}
