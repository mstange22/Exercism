extension Array {
    func keep(_ predicate: (Element) -> Bool) -> [Element] {
        var res = [Element]()
        for e in self {
            if predicate(e) {
                res.append(e)
            }
        }
        return res
    }
    
    func discard(_ predicate:(Element) -> Bool) -> [Element] {
        var res = [Element]()
        for e in self {
            if !predicate(e) {
                res.append(e)
            }
        }
        return res
    }
}
