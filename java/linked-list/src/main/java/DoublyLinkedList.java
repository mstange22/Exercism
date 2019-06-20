class DoublyLinkedList<T> {
  private static class ListNode<T> {
    T data;
    ListNode<T> next = null;
    ListNode<T> prev = null;

    ListNode(T data) {
      this.data = data;
    }
  }
  private ListNode<T> head = null;
  private ListNode<T> tail = null;

  void push(T data) {
    ListNode<T> newNode = new ListNode<T>(data);
    if (head == null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      newNode.prev = tail;
      tail = newNode;
    }
  }

  T pop() {
    T res = tail.data;
    if (tail.prev != null) {
      tail.prev.next = null;
    }
    tail = tail.prev;
    return res;
  }

  T shift() {
    T res = head.data;
    if (head.next != null) {
      head.next.prev = null;
      head = head.next;
    }
    return res;
  }

  void unshift(T data) {
    ListNode<T> newNode = new ListNode<T>(data);
    if (head == null) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.next = head;
      head.prev = newNode;
      head = newNode;
    }
  }
}