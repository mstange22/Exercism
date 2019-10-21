enum BinarySearchError: Error {
    case unsorted
}

class BinarySearch {
    var list: [Int]
    var middle: Int
    
    init (_ list: [Int]) throws {
        guard list == list.sorted() else {
            throw BinarySearchError.unsorted
        }
        self.list = list
        self.middle = (list.count - 1) / 2
    }
    
    func searchFor(_ n: Int) -> Int? {
        var min = 0
        var max = list.count - 1
        while min < max {
            let mid = (min + max) / 2
            if (n > self.list[mid]) {
                min = mid + 1
            } else {
                max = mid
            }
        }
        if self.list[min] == n {
            return min
        }
        return nil
    }
    
}
