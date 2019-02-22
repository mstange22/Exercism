#include "two_fer.h"
#include <stdio.h>

void two_fer(char *res, char *name)
{
  sprintf(res, "One for %s, one for me.", name == NULL ? "you" : name);
}
