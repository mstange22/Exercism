using System;
using System.Collections.Generic;
using System.Text;

public static class Minesweeper
{
    public static string[] Annotate(string[] input)
    {
        var res = new List<string>();
        for (int i = 0; i < input.Length; i++) {
            var row = new StringBuilder();
            for (int j = 0; j < input[i].Length; j++) {
                if (input[i][j] == '*') {
                    row.Append('*');
                } else {
                    var count = Minesweeper.countMines(input, i, j);
                    row.Append(count == 0 ? ' ' : (char)(count + '0'));
                }
            }
            res.Add(row.ToString());
        }
        return res.ToArray();
    }

    static int countMines(string[] input, int i, int j) {
        var count = 0;
        for (int k = i - 1; k <= i + 1; k++) {
            for (int l = j - 1; l <= j + 1; l++) {
                if (k == i && l == j) {
                    continue;
                }
                if (k >= 0 && k < input.Length && l >=0 && l < input[i].Length && input[k][l] == '*') {
                    count++;
                }
            }
        }
        return count;
    }
}
