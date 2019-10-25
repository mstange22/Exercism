enum Classification {
    case equal
    case sublist
    case superlist
    case unequal
}

func classifier(listOne: [Int], listTwo: [Int]) -> Classification {
    if listOne == listTwo {
        return .equal
    }
    if (isSublist(l1: listOne, l2: listTwo)) {
        return .sublist
    }
    if (isSublist(l1: listTwo, l2: listOne)) {
        return .superlist
    }
    return .unequal
}

func isSublist(l1: [Int], l2: [Int]) -> Bool {
    if l1.isEmpty {
        return true
    }
    if l1.count > l2.count {
        return false
    }
    for (i, e2) in l2[0...l2.count - l1.count].enumerated() {
        if e2 == l1[0] && l1 == Array(l2[i...(i + l1.count - 1)]) {
            return true
        }
    }
    return false
}
