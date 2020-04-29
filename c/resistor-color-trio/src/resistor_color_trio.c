#include "resistor_color_trio.h"
#include "math.h"

resistor_value_t color_code(resistor_band_t colors[]) {
  int unit = OHMS;
  int value = (colors[0] * 10 + colors[1]) * pow(10, colors[2]);
  if (value % 1000 == 0) {
    value /= 1000;
    unit = KILOOHMS;
  }
  return (resistor_value_t){ .value = value, .unit = (unit_t)unit };
}
