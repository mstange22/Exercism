using System;
using System.Collections.Generic;

public static class ScaleGenerator
{
    static List<string> sharps = new List<string> { "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" };
    static List<string> flats = new List<string> { "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E" };
    static List<string> usesFlats = new List<string> { "F", "Bb", "Eb", "Ab", "Db", "Gb", "d", "g", "c", "f", "bb", "eb" };

    private static readonly Dictionary<Char, int> stepMap = new Dictionary<Char, int>() {
        { 'm', 1 },
        { 'M', 2 },
        { 'A', 3 },
    };

    public static string[] Chromatic(string tonic)
    {
        return tonic == "C" ? sharps.ToArray() : flats.ToArray();
    }

    public static string[] Interval(string tonic, string pattern)
    {
        var res = new List<String>();
        List<string> notes = usesFlats.Contains(tonic) ? flats : sharps;
        var index = notes.IndexOf(tonic.ToUpper()[0] + tonic.Substring(1));

        foreach (var step in pattern) {
            res.Add(notes[index]);
            index = (index + stepMap[step]) % notes.Count;
        }
        return res.ToArray();
    }
}
