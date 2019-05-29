import java.util.List;
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;

@SuppressWarnings("unchecked")
class Flattener {
  List<Object> flatten(List<Object> list) {
    List<Object> res = new ArrayList<Object>();

    // convert to deque for removing and adding to front of list
    Deque<Object> deque = new LinkedList<>(list);

    while (!deque.isEmpty()) {

      // get first element
      Object first = deque.removeFirst();

      // if first is a single element, add it to res
      if (!(first instanceof List) && first != null) {
        res.add(first);
      } else if (first != null) {
        // we have a list, so convert to deque
        Deque<Object> firstDeque = new LinkedList<Object>((List<Object>)first);

        // push each element back onto front of deque
        while(!firstDeque.isEmpty()) {
          deque.addFirst(firstDeque.removeLast());
        }
      }
    }
    return res;
  }
}