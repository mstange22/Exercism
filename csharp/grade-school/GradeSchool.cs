using System.Collections.Generic;
using System.Linq;

class Student {
    public int grade;
    public string name;

    public Student(string name, int grade) {
        this.name = name;
        this.grade = grade;
    }
}

public class GradeSchool
{
    private List<Student> roster = new List<Student>();

    public void Add(string student, int grade)
    {
        roster.Add(new Student(student, grade));
        roster.Sort((a, b) => {
            if (a.grade == b.grade) {
                return a.name.CompareTo(b.name);
            }
            return  a.grade - b.grade;
        });
    }

    public IEnumerable<string> Roster()
    {
        return roster.Select(student => student.name);
    }

    public IEnumerable<string> Grade(int grade)
    {
        return roster.Where(student => student.grade == grade).Select(student => student.name);
    }
}