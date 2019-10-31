class CustomSet<T: Hashable & Comparable>: Equatable {
    var set = [T: Bool]()
    var size: Int {
        return set.count
    }
    
    var toSortedArray: [T] {
        var res = [T]()
        for (key, _) in self.set {
            res.append(key)
        }
        return res.sorted()
    }
    
    init(_ arr: [T]) {
        for item in arr {
            put(item)
        }
    }
    
    func put(_ item: T) {
        set[item] = true
    }
    
    func containsMember(_ item: T) -> Bool {
        return set[item] != nil
    }
    
    func difference(_ set2: CustomSet) -> CustomSet {
        var res = [T]()
        for (key, _) in self.set {
            if (!set2.containsMember(key)) {
                res.append(key)
            }
        }
        return CustomSet(res)
    }
    
    func union(_ set2: CustomSet) -> CustomSet {
        return CustomSet(toSortedArray + set2.toSortedArray)
    }
    
    func intersection(_ set2: CustomSet) -> CustomSet {
        var res = [T]()
        for (key, _) in self.set {
            if (set2.containsMember(key)) {
                res.append(key)
            }
        }
        return CustomSet(res)
    }
    
    func isDisjoint(_ set2: CustomSet) -> Bool {
        for (key, _) in self.set {
            if (set2.containsMember(key)) {
                return false
            }
        }
        return true
    }
    
    func isSupersetOf(_ set2: CustomSet) -> Bool {
        return set2.set.allSatisfy({ (key, _) -> Bool in containsMember(key) })
    }
    
    func delete(_ key: T) {
        set[key] = nil
    }
    
    func removeAll() {
        set.removeAll()
    }

    static func == (lhs: CustomSet, rhs: CustomSet) -> Bool {
        for (key, _) in lhs.set {
            if (!rhs.containsMember(key)) {
                return false
            }
        }
        for (key, _) in rhs.set {
            if (!lhs.containsMember(key)) {
                return false
            }
        }
        return true
    }
}
