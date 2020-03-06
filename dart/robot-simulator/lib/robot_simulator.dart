import 'package:robot_simulator/position.dart';
import 'package:robot_simulator/orientation.dart';

class Robot {
  Position position;
  Orientation orientation;

  Robot(Position p, Orientation o) {
    this.position = p;
    this.orientation = o;
  }

  void move(String command) {
    command.split('').forEach((c) {
      if (c == 'R') {
        orientation = Orientation.values[(orientation.index + 1) % 4];
      } else if (c == 'L') {
        orientation = Orientation.values[(orientation.index - 1 + 4) % 4];
      } else if (orientation == Orientation.north) {
        position.y++;
      } else if (orientation == Orientation.east) {
        position.x++;
      } else if (orientation == Orientation.south) {
        position.y--;
      } else {
        position.x--;
      }
    });
  }
}
