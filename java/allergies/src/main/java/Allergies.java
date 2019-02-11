import java.util.List;
import java.util.stream.Stream;
import java.util.stream.Collectors;

class Allergies {
  private int score;

  Allergies(int score) {
    this.score = score;
  }

  public boolean isAllergicTo(Allergen a) {
    return (this.score & a.getScore()) != 0;
  }

  public List<Allergen> getList() {
    return Stream.of(Allergen.values())
      .filter(a -> isAllergicTo(a))
      .collect(Collectors.toList());
  }
}