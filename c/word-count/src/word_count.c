#include "word_count.h"
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

// helper to check for existence of word in struct and update count
int add_word(char *curr_word, word_count_word_t * words, int index)
{
  // check for quotations around word and strip
  if (curr_word[0] == '\'' && curr_word[strlen(curr_word)-1] == '\'')
  {
    curr_word++;
    curr_word[strlen(curr_word)-1] = '\0';
  }
  // check to see if word is already in word_count struct
  for (int j = 0; j < index; j++)
  {
    if (strcmp(words[j].text, curr_word) == 0)
    {
      words[j].count++;
      return 0;
    }
  }
  strcpy(words[index].text, curr_word);
  words[index].count = 1;
  return 1;
}

int word_count(const char *input_text, word_count_word_t * words)
{
  // clear word count
  memset(words, 0, sizeof(word_count_word_t) * MAX_WORDS);

  // make a lowercase copy of const input
  int length = strlen(input_text);
  char temp[length];
  strcpy(temp, input_text);
  for (int i = 0; i < length; i++)
  {
    temp[i] = tolower(temp[i]);
  }

  int unique_word_count = 0;
  char *word;

  // tokenize input into words
  while ((word = strtok(unique_word_count == 0 ? temp : NULL, " ,.:!@$%^&\n")))
  {
    if (strlen(word) > MAX_WORD_LENGTH)
    {
      return EXCESSIVE_LENGTH_WORD;
    }
    if (unique_word_count == MAX_WORDS)
    {
      return EXCESSIVE_NUMBER_OF_WORDS;
    }
    unique_word_count += add_word(word, words, unique_word_count);
  }
  return unique_word_count;
}
