import java.util.List;
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;

class Flattener {
  List<Object> flatten(List<Object> list) {
    List<Object> res = new ArrayList<Object>();
    Deque<Object> deque = new LinkedList<>(list);

    while (!deque.isEmpty()) {
      Object first = deque.removeFirst();
      if (first == null) {
        continue;
      }
      if (first instanceof List) {
        Deque<Object> firstDeque = new LinkedList<Object>((List<?>)first);
        while(!firstDeque.isEmpty()) {
          deque.addFirst(firstDeque.removeLast());
        }
      } else {
        res.add(first);
      }
    }
    return res;
  }
}