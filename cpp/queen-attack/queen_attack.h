#ifndef QUEEN_ATTACK_H
#define QUEEN_ATTACK_H
#include <utility>
#include <string>

using namespace std;

namespace queen_attack {
  class chess_board {
    pair<int, int> white_pos;
    pair<int, int> black_pos;
    string board_string;
    public:
      chess_board();
      chess_board(pair<int, int>, pair<int, int>);
      pair<int, int> white() const;
      pair<int, int> black() const;
      operator string() const;
      bool can_attack() const;
  };
}

#endif