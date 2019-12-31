using System;
using System.Collections.Generic;
using System.Linq;

public static class SaddlePoints
{
    public static IEnumerable<(int, int)> Calculate(int[,] matrix)
    {
        var rows = new List<List<int>>();
        var cols = new List<List<int>>();
        var res = new List<(int, int)>();

        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            var row = new List<int>();
            for (int j = 0; j < matrix.GetLength(1); j++)
            {
                row.Add(matrix[i, j]);
                if (i == 0)
                {
                    cols.Add(new List<int>(){ matrix[i, j] });
                }
                else
                {
                    cols[j].Add(matrix[i, j]);
                }
            }
            rows.Add(row);
        }

        for (int i = 0; i < rows.Count; i++)
        {
            for (int j = 0; j < rows[i].Count; j++)
            {
                var el = rows[i][j];
                if (el >= rows[i].Max() && el <= cols[j].Min())
                {
                    res.Add((i + 1, j + 1));
                } 
            }
        }
        return res.ToArray();
    }
}
