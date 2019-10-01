using System;
using System.Collections.Generic;

public static class PascalsTriangle
{
    public static IEnumerable<IEnumerable<int>> Calculate(int rows)
    {
        var res = new List<List<int>>();

        if (rows == 0) {
            return res;
        }

        res.Add(new List<int>(){ 1 });

        for (int i = 1; i < rows; i++) {
            var row = new List<int>();

            for (int j = 0; j <= i; j++) {
                if (j == 0) {
                    row.Add(res[i - 1][0]);
                } else if (j == i)  {
                    row.Add(res[i - 1][res[i - 1].Count - 1]);
                } else {
                    row.Add(res[i - 1][j - 1] + res[i - 1][j]);
                }
            }
            res.Add(row);
        }
        return res;
    }
}