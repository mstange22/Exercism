#ifndef GRADE_SCHOOL_H
#define GRADE_SCHOOL_H

#include <stddef.h>
#include <stdint.h>

#define MAX_NAME_LENGTH 20
#define MAX_STUDENTS 20

typedef struct {
   uint8_t grade;
   char *name;
} student_t;

typedef struct {
   size_t count;
   student_t students[MAX_STUDENTS];
} roster_t;

roster_t get_roster();
int compare_student(student_t student_1, student_t student_2);
void insert_student(int index, student_t student);
int add_student(char *name, uint8_t grade);
roster_t get_grade(uint8_t grade);
void clear_roster();

#endif
