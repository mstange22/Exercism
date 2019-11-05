#include "resistor_color.h"
#include <stdlib.h>

int color_code(resistor_band_t color)
{
  return (int)color;
}

const resistor_band_t *colors()
{
  resistor_band_t* res = malloc(sizeof(resistor_band_t) * 10) ;
  for (int i = 0; i < 10; i++) {
    res[i] = (resistor_band_t)i;
  }
  return res;
}
