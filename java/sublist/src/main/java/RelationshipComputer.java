import java.util.List;

class RelationshipComputer<T> {

  Relationship computeRelationship(List<T> list1, List<T> list2) {
    if (list1.equals(list2)) {
      return Relationship.EQUAL;
    }

    if (isSublist(list1, list2)) {
      return Relationship.SUBLIST;
    }

    if (isSublist(list2, list1)) {
      return Relationship.SUPERLIST;
    }

    return Relationship.UNEQUAL;
  }

  private boolean isSublist(List<T> list1, List<T> list2) {
    if (list1.size() == 0) {
      return true;
    }
    for (int i = 0; i < list2.size() - list1.size() + 1; i++) {
      if (list1.get(0) == list2.get(i)) {
        if (list1.equals(list2.subList(i, i + list1.size()))) {
          return true;
        };
      }
    }
    return false;
  }

}