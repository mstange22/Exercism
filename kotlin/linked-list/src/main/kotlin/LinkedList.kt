class Node<T>(val data: T) {
    var prev: Node<T>? = null
    var next: Node<T>? = null
}

class Deque<T> {
    private var head: Node<T>? = null
    private var tail: Node<T>? = null

    fun push(value: T) {
        if (tail == null) {
            tail = Node(value)
            head = tail
        } else {
            val newNode = Node(value)
            newNode.prev = tail
            tail!!.next = Node(value)
            tail = newNode
        }
    }

    fun pop(): T? {
        val res = tail!!.data
        tail = tail!!.prev
        return res
    }

    fun unshift(value: T) {
        if (head == null) {
            head = Node(value)
            tail = head
        } else {
            val newNode = Node(value)
            newNode.next = head
            head!!.prev = Node(value)
            head = newNode
        }
    }

    fun shift(): T? {
        val res = head!!.data
        head = head!!.next
        return res
    }
}
