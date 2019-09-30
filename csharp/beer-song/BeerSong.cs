using System;
using System.Text;

public static class BeerSong
{
    public static string Recite(int startBottles, int takeDown)
    {
        StringBuilder s = new StringBuilder();
        for (int i = 0; i < takeDown; i++, startBottles--) {
            string startBottles1 = startBottles == 0 ? "No more" : startBottles.ToString();
            string startBottles2 = startBottles == 0 ? "no more" : startBottles.ToString();
            string bottleString = $"bottle{(startBottles == 1 ? "" : "s")}";
            string oneOrIt = $"{(startBottles > 1 ? "one" : "it")}";
            string remainingBottles = $"{(startBottles > 1 ? (startBottles - 1).ToString() : "no more")} bottle{(startBottles == 2 ? "" : "s")}";

            s.Append($"{startBottles1} {bottleString} of beer on the wall, {startBottles2} {bottleString} of beer.\n");
            if (startBottles == 0) {
                s.Append("Go to the store and buy some more, 99 bottles of beer on the wall.");
            } else {
                s.Append($"Take {oneOrIt} down and pass it around, {remainingBottles} of beer on the wall.");
            }
            if (i < takeDown - 1) {
                s.Append("\n\n");
            }
        }
        return s.ToString();
    }
}