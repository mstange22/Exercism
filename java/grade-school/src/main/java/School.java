import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

class School {

  private Map<Integer, List<String>> school = new HashMap<Integer, List<String>>();

  void add(String name, int grade) {

    List<String> students = new ArrayList<String>();

    students.add(name);
    if (school.containsKey(grade)) {
      school.get(grade).add(name);
      Collections.sort(school.get(grade));
    } else {
      school.put(grade, students);
    }
  }

  List<String> grade(int grade) {
    if (school.containsKey(grade)) {
      return school.get(grade);
    }
    return new ArrayList<String>();
  }

  List<String> roster() {

    List<String> roster = new ArrayList<String>();

    for (int grade : school.keySet()) {
      for (String student : school.get(grade)) {
        roster.add(student);
      }
    }
    return roster;
  }
}