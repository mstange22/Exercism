using System;
using System.Collections.Generic;

public class GradeSchool
{
    private Dictionary<int, List<string>> roster = new Dictionary<int, List<string>>();

    public void Add(string student, int grade)
    {
        if (!roster.ContainsKey(grade))
        {
            roster.Add(grade, new List<string>{ student });
        }
        else
        {
            roster[grade].Add(student);
            roster[grade].Sort();
        }
    }

    public IEnumerable<string> Roster()
    {
        var res = new List<string>();
        var grades = new List<int>(roster.Keys);
        grades.Sort();
        foreach (int grade in grades)
        {
            res.AddRange(roster[grade]);
        }
        return res;
    }

    public IEnumerable<string> Grade(int grade)
    {
        return roster.GetValueOrDefault(5, new List<string>());
    }
}