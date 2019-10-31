class BinarySearchTree {
    var data: Int
    var left: BinarySearchTree? = nil
    var right: BinarySearchTree? = nil
    
    init(_ data: Int) {
        self.data = data
    }
    
    func insert(_ data: Int) {
        if (data <= self.data) {
            if (self.left == nil) {
                self.left = BinarySearchTree(data)
            } else {
                self.left?.insert(data)
            }
        } else if (self.right == nil) {
            self.right = BinarySearchTree(data)
        } else {
            self.right?.insert(data)
        }
    }
    
    func allData() -> [Int] {
        var dataArr = left?.allData() ?? []
        dataArr.append(data)
        dataArr += right?.allData() ?? []
        return dataArr
    }
}
