#ifndef MINESWEEPER_H
#define MINESWEEPER_H

char **annotate(const char **minefield, int rows);
void free_annotation(char **annotation);
#endif
