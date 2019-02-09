#include "rna_transcription.h"
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

char *DNA = "GCTA";
char *RNA = "CGAU";

char *to_rna(const char* dna_string)
{
  char *rna_string = calloc(1, 1);
  rna_string[0] = '\0';

  // for each character in the dna string
  for (int i = 0, n = strlen(dna_string); i < n; i++)
  {
    // check for existence in the global DNA mapping string
    for (int j = 0, n = strlen(DNA); j < n; j++)
    {
      if (dna_string[i] == DNA[j])
      {
        // if found, add mapped RNA value to rna_string
        char temp[2] = { RNA[j], '\0' };
        strcat(rna_string, temp);
        break;
      }
      // if not found, input contained invalid input
      if (j == 3) return NULL;
    }
  }
  return rna_string;
}
