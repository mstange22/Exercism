using System;
using System.Collections.Generic;
using System.Linq;

public class Matrix
{
    private int[][] matrix;

    public Matrix(string input)
    {
        this.matrix = input.Split("\n")
            .Select(s => s.Split(" ")
                .Select(d => Int32.Parse(d)).ToArray()
            ).ToArray();
    }

    public int Rows
    {
        get => matrix.Length;
    }

    public int Cols
    {
        get => matrix[0].Length;
    }

    public int[] Row(int row) => matrix[row - 1];

    public int[] Column(int col) => this.matrix.Select(row => row[col - 1]).ToArray();
}