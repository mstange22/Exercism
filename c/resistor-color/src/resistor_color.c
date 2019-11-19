#include "resistor_color.h"

static resistor_band_t COLORS[10] = {
  BLACK,
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  VIOLET,
  GREY,
  WHITE,
};

int color_code(resistor_band_t color)
{
  return (int)color;
}

const resistor_band_t *colors()
{
  return COLORS;
}
