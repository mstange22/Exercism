using System;
using System.Text;
using System.Collections.Generic;

public static class House
{
    static List<(string, string)> parts = new List<(string, string)>(){
        ("", ""),
        ( "house that Jack built", "" ),
        ( "malt", "lay in" ),
        ( "rat", "ate" ),
        ( "cat", "killed" ),
        ( "dog", "worried" ),
        ( "cow with the crumpled horn", "tossed"),
        ( "maiden all forlorn", "milked" ),
        ( "man all tattered and torn", "kissed" ),
        ( "priest all shaven and shorn", "married" ),
        ( "rooster that crowed in the morn", "woke" ),
        ( "farmer sowing his corn", "kept" ),
        ( "horse and the hound and the horn", "belonged to" ),
    };

    public static string Recite(int verseNumber)
    {
        StringBuilder s = new StringBuilder();
        s.Append($"This is the {parts[verseNumber].Item1}");
        for (int i = verseNumber; i > 1; i--) {
            s.Append($" that {parts[i].Item2} the {parts[i - 1].Item1}");
            verseNumber--;
        }
        return s.ToString() + ".";
    }

    public static string Recite(int startVerse, int endVerse)
    {
        var verses = new List<string>();
        for (int i = startVerse; i <= endVerse; i++) {
            verses.Add(Recite(i));
        }
        return string.Join("\n", verses);
    }
}