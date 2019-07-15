#include "queen_attack.h"
#include <stdlib.h>

attack_status_t can_attack(position_t queen_1, position_t queen_2)
{
  // validate positions
  if (queen_1.column < 0 || queen_1.column > 7 || queen_1.row < 0 || queen_1.row > 7 ||
    queen_2.column < 0 || queen_2.column > 7 || queen_2.row < 0 || queen_2.row > 7 ||
    // queens on same position
    (queen_1.column == queen_2.column && queen_1.row == queen_2.row))
  {
    return INVALID_POSITION;
  }
  // can attack id on same row, column, or diagonal
  if (queen_1.column == queen_2.column || queen_1.row == queen_2.row || 
    abs(queen_1.column - queen_2.column) == abs(queen_1.row - queen_2.row))
  {
    return CAN_ATTACK;
  }
  return CAN_NOT_ATTACK;
}
