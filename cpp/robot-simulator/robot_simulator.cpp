#include "robot_simulator.h"

robot_simulator::Robot::Robot() {
  position = std::make_pair(0, 0);
  bearing = robot_simulator::Bearing::NORTH;
}

robot_simulator::Robot::Robot(std::pair<int, int> pos, Bearing bear) {
  position = pos;
  bearing = bear;
}

std::pair<int, int> robot_simulator::Robot::get_position() const {
  return position;
}

robot_simulator::Bearing robot_simulator::Robot::get_bearing() const {
  return bearing;
};

void robot_simulator::Robot::turn_right() {
  bearing = (robot_simulator::Bearing)((bearing + 1) % 4);
}

void robot_simulator::Robot::turn_left() {
  bearing = (robot_simulator::Bearing)((bearing - 1 + 4) % 4);
}

void robot_simulator::Robot::advance() {
  if (bearing == NORTH) {
    position = std::make_pair(position.first, position.second + 1);
  } else if (bearing == EAST) {
    position = std::make_pair(position.first + 1, position.second);
  } else if (bearing == SOUTH) {
    position = std::make_pair(position.first, position.second - 1);
  } else {
    position = std::make_pair(position.first - 1, position.second);
  }
}

void robot_simulator::Robot::execute_sequence(std::string sequence) {
  for (char c : sequence) {
    if (c == 'L') {
      turn_left();
    } else if (c == 'R') {
      turn_right();
    } else {
      advance();
    }
  }
}

