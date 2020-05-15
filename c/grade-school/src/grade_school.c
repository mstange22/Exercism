#include "grade_school.h"
#include <string.h>

static roster_t roster = { 0 };

roster_t get_roster() {
  return roster;
}

static int compare_student(student_t student_1, student_t student_2) {
  if (student_1.grade < student_2.grade) {
    return -1;
  }
  if (student_1.grade > student_2.grade) {
    return 1;
  }
  return strcmp(student_1.name, student_2.name);
}
 
static void insert_student(int index, student_t student) {
  student_t temp_student;

  for (size_t i = index; i < roster.count; i++) {
    temp_student = roster.students[i];
    roster.students[i] = student;
    student = temp_student;
  }
  roster.students[roster.count] = student;
}

int add_student(char *name, uint8_t grade) {
  student_t new_student = { .grade = grade, .name = name };

  for (size_t i = 0; i <= roster.count; i++) {
    if (i == roster.count || compare_student(new_student, roster.students[i]) < 0) {
      insert_student(i, new_student);
      break;
    }
  }
  return ++roster.count;
}

roster_t get_grade(uint8_t grade) {
  roster_t grade_roster = { 0 };
  for (size_t i = 0; i < roster.count; i++) {
    if (roster.students[i].grade == grade) {
      grade_roster.students[grade_roster.count++] = roster.students[i];
    }
  }
  return grade_roster;
}

void clear_roster() {
  roster = (roster_t){ 0 };
}
