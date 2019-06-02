import java.util.List;
import java.util.ArrayList;
import java.util.Random;
import java.util.Collections;

class Robot {
  static List<String> robotNames = new ArrayList<String>();
  static int currentNameIndex = 0;
  private String name;

  static {
    generateAllPossibleRobotNames();
    shuffleRobotNames();
  }

  Robot() {
    generateNewRobotName();
  }

  String getName() {
    return name;
  }

  void reset() {
    generateNewRobotName();
  }

  void generateNewRobotName() {
    name = robotNames.get(currentNameIndex++);
  }

  static void generateAllPossibleRobotNames() {
    for (int a = 0; a < 26; a++) {
      for (int b = 0; b < 26; b++) {
        for (int i = 0; i < 10; i++) {
          for (int j = 0; j < 10; j++) {
            for (int k = 0; k < 10; k++) {
              StringBuilder newName = new StringBuilder();
              newName.append((char)(a + (int)'A'));
              newName.append((char)(b + (int)'A'));
              newName.append(i);
              newName.append(j);
              newName.append(k);
              robotNames.add(newName.toString());
            }
          }
        }
      }
    }
  }

  static void shuffleRobotNames() {
    Random r = new Random();
    int lastElementIndex = robotNames.size() - 1;
    for (int i = 0; i <= lastElementIndex; i++) {
      int j = r.nextInt(lastElementIndex - i + 1) + i;
      Collections.swap(robotNames, i, j);
    }
  }
}