import java.util.List;

class BinarySearch {
  private List<Integer> list;

  BinarySearch(List<Integer> list) {
    this.list = list;
  }

  int indexOf(int target) throws ValueNotFoundException {
    int min = 0;
    int max = list.size() - 1;
    while (min <= max) {
      int mid = (min + max) / 2;
      int midValue = list.get(mid);
      if (midValue == target) {
        return mid;
      }
      if (target < midValue) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
    throw new ValueNotFoundException("Value not in array");
  }
}