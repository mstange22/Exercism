using System;

public static class ResistorColor
{
    private static String[] colors = {
        "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"
    };
    public static int ColorCode(string color) => Array.IndexOf(colors, color);

    public static string[] Colors() => colors;
}