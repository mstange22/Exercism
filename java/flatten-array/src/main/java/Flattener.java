import java.util.List;
import java.util.ArrayList;

@SuppressWarnings("unchecked")
class Flattener {
  <T> List<T> flatten(List<T> list) {
    List<T> res = new ArrayList<T>();
    for (T element : list) {
      if (element instanceof List) {
        res.addAll(flatten((List<T>)element));
      } else {
        if (element != null) {
          res.add(element);
        }
      }
    }
    return res;
  }
}