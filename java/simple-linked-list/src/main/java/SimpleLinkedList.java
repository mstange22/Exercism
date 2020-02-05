import java.util.List;
import java.util.ArrayList;
import java.util.NoSuchElementException;

class Node<T> {
  T data;
  Node<T> next;

  Node(T data) {
    this.data = data;
    next = null;
  }
}
@SuppressWarnings("unchecked")
class SimpleLinkedList<T> {
  int size = 0;
  Node<T> head = null;

  SimpleLinkedList() {}

  SimpleLinkedList(T[] values) {
    for (int i = 0; i < values.length; i++) {
      push(values[i]);
    }
  }

  public int size() {
    return size;
  }

  public void push(T value) {
    Node<T> newNode = new Node<>(value);
    Node<T> temp = head;
    if (temp == null) {
      head = newNode;
    } else {
      while (temp != null && temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
    size++;
  }

  public T pop() {
    if (size() == 0) {
      throw new NoSuchElementException("List is empty");
    }

    T res;

    if (size() == 1) {
      res = head.data;
      head = null;
    } else {
      Node<T> temp = head;
      while (temp.next.next != null) {
        temp = temp.next;
      }
      res = temp.next.data;
      temp.next = null;
    }
    size--;
    return res;
  }

  private Node<T> reverse(Node<T> head) {
    if (head == null || head.next == null) {
      return head;
    }
    Node<T> newHead = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }

  public void reverse() {
    if (head == null || head.next == null) {
      return;
    }
    head = reverse(head);
  }

  public T[] asArray(Class<T> c) {
    List<T> res = new ArrayList<T>();
    while (size > 0) {
      res.add(pop());
    }
    return (T[])res.toArray();
  }
}