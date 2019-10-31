class Node<T> {
    var data: T
    var prev: Node<T>? = nil
    var next: Node<T>? = nil
    
    init(_ data: T) {
        self.data = data
    }
}

class Deque<T> {
    var head: Node<T>? = nil
    var tail: Node<T>? = nil
    var size = 0
    
    func push(_ item: T) {
        let newNode = Node(item)
        if (head == nil) {
            head = newNode
            tail = newNode
        } else {
            tail!.next = newNode
            newNode.prev = tail
            tail = newNode
        }
        size += 1
    }
    
    func pop() -> T? {
        guard size != 0 else {
            return nil
        }
        var res: T
        if size == 1 {
            res = head!.data
            head = nil
            tail = nil
        } else {
            res = tail!.data
            tail = tail!.prev
            tail!.next = nil
        }
        size -= 1
        return res
    }
    
    func unshift(_ item: T) {
        let newNode = Node(item)
        if (head == nil) {
            head = newNode
            tail = newNode
        } else {
            head!.prev = newNode
            newNode.next = head
            head = newNode
        }
        size += 1
    }
    
    func shift() -> T? {
        guard size != 0 else {
            return nil
        }
        var res: T
        if size == 1 {
            res = head!.data
            head = nil
            tail = nil
        } else {
            res = head!.data
            head = head!.next
            head!.prev = nil
        }
        size -= 1
        return res
    }
}
