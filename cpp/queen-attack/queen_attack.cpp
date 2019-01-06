#include "queen_attack.h"
#include <stdexcept>
#include <cmath>

queen_attack::chess_board::chess_board() {
  white_pos = make_pair(0, 3);
  black_pos = make_pair(7, 3);
}

queen_attack::chess_board::chess_board(pair<int, int> new_white_pos, pair<int, int> new_black_pos) {
  if (new_white_pos.first == new_black_pos.first && new_white_pos.second == new_black_pos.second) {
    throw domain_error("queens cannot be in the same position");
  }
  white_pos = new_white_pos;
  black_pos = new_black_pos;
}

pair<int, int> queen_attack::chess_board::white() const {
  return white_pos;
}

pair<int, int> queen_attack::chess_board::black() const {
  return black_pos;
}

queen_attack::chess_board::operator string() const {
  string board_string;
  for (int i = 0; i < 8; i++) {
    string line;
    for (int j = 0; j < 8; j++) {
      if (i == white_pos.first && j == white_pos.second) {
        line += "W ";
      } else if (i == black_pos.second && j == black_pos.first) {
        line += "B ";
      } else {
        line += ("_ ");
      }
    }
    // replace last space with \n
    line[15] = '\n';
    board_string += line;
  }
  return board_string;
}

bool queen_attack::chess_board::can_attack() const {
  if (white_pos.first == black_pos.first || white_pos.second == black_pos.second) return true;
  if (abs(white_pos.first - black_pos.first) == abs(white_pos.second - black_pos.second)) return true;
  return false;
}