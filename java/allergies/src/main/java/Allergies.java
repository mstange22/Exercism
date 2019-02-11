import java.util.List;
import java.util.ArrayList;

class Allergies {
  int score;

  Allergies(int score) {
    this.score = score;
  }

  public boolean isAllergicTo(Allergen a) {
    if ((this.score & a.getScore()) != 0) {
      return true;
    }
    return false;
  }

  public List<Allergen> getList() {
    List<Allergen> list = new ArrayList<Allergen>();
    for (Allergen a : Allergen.values()) {
      if (isAllergicTo(a)) {
        list.add(a);
      }
    }
    return list;
  }
}