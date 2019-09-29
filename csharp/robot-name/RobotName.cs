using System;
using System.Collections.Generic;

public class Robot
{
    static HashSet<string> usedNames = new HashSet<string>();
    string name;

    public Robot() {
        Reset();
    }

    public string Name
    {
        get => name;
    }

    public void Reset()
    {
        string s = "";
        Random r = new Random();
        do {
            s += ((char)('A' + r.Next(0, 26)));
            s += ((char)('A' + r.Next(0, 26)));
            s += ((char)('0' + r.Next(0, 10)));
            s += ((char)('0' + r.Next(0, 10)));
            s += ((char)('0' + r.Next(0, 10)));
        } while (!usedNames.Add(s));
        name = s;
    }
}