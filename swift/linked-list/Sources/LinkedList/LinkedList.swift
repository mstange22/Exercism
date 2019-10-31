class Node<T> {
    var data: T
    var prev: Node<T>?
    var next: Node<T>?
    
    init(_ data: T) {
        self.data = data
    }
}

class Deque<T> {
    var head: Node<T>?
    var tail: Node<T>?
    
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
    }
    
    func pop() -> T? {
        guard let res = tail else {
            return nil
        }
        tail = tail!.prev
        tail?.next = nil
        return res.data
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
    }
    
    func shift() -> T? {
        guard let res = head else {
            return nil
        }
        head = head!.next
        head?.prev = nil
        return res.data
    }
}
