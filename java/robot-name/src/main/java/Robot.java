import java.util.Random;

class Robot {

  private String name;

  Robot() {
    reset();
  }

  String getName() {
    return name;
  }

  void reset() {
    Random r = new Random();
    StringBuilder newName = new StringBuilder();
    newName.append((char)(r.nextInt(26) + (int)'A'));
    newName.append((char)(r.nextInt(26) + (int)'A'));
    for (int i = 0; i < 3; i++) {
      newName.append(r.nextInt(10));
    }
    name = newName.toString();
  }
}