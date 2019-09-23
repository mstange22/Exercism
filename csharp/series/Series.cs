using System;
using System.Text;

public static class Series
{
    public static string[] Slices(string numbers, int sliceLength)
    {
        if (sliceLength > numbers.Length || sliceLength <= 0) {
            throw new ArgumentException("Slice length is invalid.");
        } else if (numbers.Length == 0) {
            throw new ArgumentException("Empty seties is invalid.");
        }
        string[] slices = new string[numbers.Length - sliceLength + 1];
        for (int i = 0; i < numbers.Length - sliceLength + 1; i++) {
            StringBuilder slice = new StringBuilder();
            for (int j = 0; j < sliceLength; j++) {
                slice.Append(numbers[i+j]);
            }
            slices[i] = slice.ToString();
        }
        return slices;
    }
}