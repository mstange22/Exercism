#include "resistor_color.h"

const resistor_band_t COLORS[] = {
  BLACK, BROWN, RED, ORANGE, YELLOW,
  GREEN, BLUE, VIOLET, GREY, WHITE
};

int color_code(resistor_band_t color)
{
  int index = 0;
  while (COLORS[index] != color)
  {
    index++;
  }
  return index;
}

const resistor_band_t *colors()
{
  return COLORS;
}
