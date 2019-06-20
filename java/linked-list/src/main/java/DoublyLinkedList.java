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

  /**
   * push() adds ta value to the end of the list
   * @param data type T value
   * @return none
   */
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

  /**
   * pop() returns the data in the tail node of the list
   * @param none
   * @return data value (type T)
   */
  T pop() {
    T res = tail.data;
    tail = tail.prev;
    if (tail == null) {
      head = null;
    } else {
      tail.next = null;
    }
    return res;
  }

  /**
   * shift() returns the data in the head node of the list
   * @param none
   * @return data value (type T)
   */
  T shift() {
    T res = head.data;
    head = head.next;
    if (head == null) {
      tail = null;
    } else {
      head.prev = null;
    }
    return res;
  }

  /**
   * unshift() adds ta value to the head of the list
   * @param data type T value
   * @return none
   */
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