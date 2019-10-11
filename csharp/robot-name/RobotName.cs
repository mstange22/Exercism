using System;
using System.Collections.Generic;
using System.Text;

public class Robot
{
    static HashSet<string> usedNames = new HashSet<string>();
    static Random r = new Random();
    public string Name { get; set; }

    public Robot() 
    {
        Reset();
    }

    public void Reset()
    {
        var s = new StringBuilder();
        do
        {
            s.Append((char)('A' + r.Next(0, 26)));
            s.Append((char)('A' + r.Next(0, 26)));
            s.Append((char)('0' + r.Next(0, 10)));
            s.Append((char)('0' + r.Next(0, 10)));
            s.Append((char)('0' + r.Next(0, 10)));
        } while (!usedNames.Add(s.ToString()));
        Name = s.ToString();
    }
}