#include "nucleotide_count.h"
#include <string.h>
#include <stdlib.h>
#include <stdio.h>

char *count(const char *dna_strand)
{
  int a_count = 0;
  int c_count = 0;
  int g_count = 0;
  int t_count = 0;
  char *res = calloc(16,1);

  for (int i = 0, n = strlen(dna_strand); i < n; i++)
  {
    switch (dna_strand[i])
    {
      case 'A':
        a_count++;
        break;
      case 'C':
        c_count++;
        break;
      case 'G':
        g_count++;
        break;
      case 'T':
        t_count++;
        break;
      default:
        res[0] = '\0';
        return res;
    }
  }
  sprintf(res, "A:%i C:%i G:%i T:%i", a_count, c_count, g_count, t_count);
  return res;
}
