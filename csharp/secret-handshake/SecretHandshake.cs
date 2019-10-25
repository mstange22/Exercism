using System;
using System.Collections.Generic;

public static class SecretHandshake
{
    public static string[] Commands(int commandValue)
    {
        var commands = new Dictionary<int, string>(){
            { 1, "wink" },
            { 2, "double blink" },
            { 4, "close your eyes" },
            { 8, "jump" }
        };
        var res = new List<string>();
        foreach (KeyValuePair<int, string> entry in commands) {
            if ((entry.Key & commandValue) != 0) {
                res.Add(entry.Value);
            }
        }
        if ((commandValue & 16) != 0) {
            res.Reverse();
        }
        return res.ToArray();
    }
}
