class Robot {

  GridPosition pos;
  Orientation o;

  Robot(GridPosition pos, Orientation o) {
    this.pos = pos;
    this.o = o;
  }

  Orientation getOrientation() {
    return o;
  }

  GridPosition getGridPosition() {
    return pos;
  }

  void advance() {
    switch (o) {
      case NORTH:
        pos = new GridPosition(pos.x, pos.y + 1);
        break;
      case EAST:
        pos = new GridPosition(pos.x + 1, pos.y);
        break;
      case SOUTH:
        pos = new GridPosition(pos.x, pos.y - 1);
        break;
      case WEST:
        pos = new GridPosition(pos.x - 1, pos.y);
        break;
    }
  }

  void turnLeft() {
    o = Orientation.fromInteger((o.ordinal() - 1 + 4) % 4);
  }

  void turnRight() {
    o = Orientation.fromInteger((o.ordinal() + 1) % 4);
  }

  void simulate(String directions) {
    for (int i = 0; i < directions.length(); i++) {
      char c = directions.charAt(i);
      if (c == 'L') {
        turnLeft();
      } else if (c == 'R') {
        turnRight();
      } else {
        advance();
      }
    }
  }
}