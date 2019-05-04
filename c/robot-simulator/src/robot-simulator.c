#include "robot_simulator.h"
#include <string.h>

robot_grid_status_t robot_init()
{
  robot_grid_status_t status = {
    DEFAULT_BEARING,
    {DEFAULT_X_COORDINATE, DEFAULT_Y_COORDINATE},
  };
  return status;
}

robot_grid_status_t robot_init_with_position(int bearing, int x, int y)
{
  robot_grid_status_t status = {
    bearing < HEADING_NORTH || bearing > HEADING_WEST ? DEFAULT_BEARING : bearing,
    {x, y},
  };
  return status;
}

void robot_turn_right(robot_grid_status_t * robot)
{
  robot->bearing = (robot->bearing + 1) % HEADING_MAX;
}

void robot_turn_left(robot_grid_status_t * robot)
{
  robot->bearing = (robot->bearing - 1 + 4) % HEADING_MAX;
}

void robot_advance(robot_grid_status_t * robot)
{
  if (robot->bearing == HEADING_NORTH)
  {
    robot->grid.y_position++;
  }
  else if (robot->bearing == HEADING_EAST)
  {
    robot->grid.x_position++;
  }
  else if (robot->bearing == HEADING_SOUTH)
  {
    robot->grid.y_position--;
  }
  else
  {
    robot->grid.x_position--;
  } 
}

void robot_simulator(robot_grid_status_t * robot, const char *commands)
{
  int command_length = strlen(commands);
  for (int i = 0; i < command_length; i++) {
    switch(commands[i])
    {
      case COMMAND_LEFT:
        robot_turn_left(robot);
        break;
      case COMMAND_RIGHT:
        robot_turn_right(robot);
        break;
      case COMMAND_ADVANCE:
        robot_advance(robot);
        break;
      default:
        break;
    }
  }
}
