using System.Collections.Generic;
using System.Linq;

public class GradeSchool
{
    private class Student {
        public string Name { get; set; }
        public int Grade { get; set; }
    }
    
    private List<Student> roster = new List<Student>();

    public void Add(string student, int grade)
    {
        roster.Add(new Student(){
            Name = student,
            Grade = grade
        });
    }

    public IEnumerable<string> Roster() => roster
        .OrderBy(student => student.Grade)
        .ThenBy(student => student.Name)
        .Select(student => student.Name);

    public IEnumerable<string> Grade(int grade) => roster
        .Where(student => student.Grade == grade)
        .OrderBy(student => student.Name)
        .Select(student => student.Name);
}