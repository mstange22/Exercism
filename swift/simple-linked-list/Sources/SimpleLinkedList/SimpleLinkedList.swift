class Element<T> {
    var value: T?
    var next: Element?
    
    init(_ value: T? = nil, _ next: Element? = nil) {
        self.value = value
        self.next = next
    }
    
    func reverseElements() -> Element {
        var head: Element = self
        var prev: Element? = nil
        while head.next != nil {
            let next = head.next!
            head.next = prev
            prev = head
            head = next
        }
        head.next = prev
        return head
    }
    
    func toArray() -> [T] {
        var res = [T]()
        var curr = self
        
        if curr.value != nil {
            res.append(curr.value!)
        }
        
        while curr.next != nil {
            curr = curr.next!
            if curr.value != nil {
                res.append(curr.value!)
            }
        }

        return res
    }
    
    static func fromArray(_ arr: [T]) -> Element {
        var next: Element? = nil
        var new = Element(nil, nil)
        for i in arr.reversed() {
            new = Element(i, next)
            next = new
        }
        return new
    }
}
