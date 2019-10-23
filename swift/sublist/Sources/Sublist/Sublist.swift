
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
    return .equal
}

func isSublist(l1: [Int], l2: [Int]) -> Bool {
    var possible = possible
    for (i, e1) in l1.enumerated() {
        possible = false
        for (j, e2) in l2.enumerated() {
            if (e2 == e1) {
                // possible start, if length
                let rem1 = l1.count - i + 1
                let rem2 = l2.count - j + 1
                if rem2 < rem1 {
                    break
                }
                possible = true
                for 
            }
        }
    }
    
    return possible;
}

