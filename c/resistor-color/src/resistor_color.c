#include "resistor_color.h"

resistor_band_t COLORS[10];

int color_code(resistor_band_t color)
{
  return (int)color;
}

const resistor_band_t *colors()
{
  for (int i = 0; i < 10; i++) {
    COLORS[i] = (resistor_band_t)i;
  }
  return COLORS;
}
