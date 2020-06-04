using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public Solution(string total, string[] addends, Dictionary<char, int> letterMap, Dictionary<char, bool> leadingDigits) {
        this.total = total;
        this.addends = addends;
        this.letterMap = letterMap;
        this.leadingDigits = leadingDigits;

    }

    public Dictionary<char, int> letterMap { get; }
    public string total { get; }
    public string[] addends { get; }
    public Dictionary<char, bool> leadingDigits { get; }
} 

public static class Alphametics
{
    private static long calculateTotal(Solution solution) {
        return solution.addends
            .Aggregate((long)0, (sum, addend) => sum + Alphametics.translate(solution.letterMap, addend));
    }

    private static long translate(Dictionary<char, int> letterMap, string value) {
        return Int64.Parse(value.Aggregate("", (accum, c) => accum + letterMap[c]));
    }

    private static bool isSolution(Solution solution) {
        return Alphametics.calculateTotal(solution) == Alphametics.translate(solution.letterMap, solution.total);
    }

    private static bool checkPermutations(Solution solution, List<int> availableNumbers, List<char> availableLetters) {
        if (availableNumbers.Count == 0 || availableLetters.Count == 0) {
            return Alphametics.isSolution(solution);
        }
        var currLetter = availableLetters[0];
        var newAvailableLetters = availableLetters.Skip(1).ToList();

        foreach (var currNumber in availableNumbers) {
            if (currNumber == 0 && solution.leadingDigits.ContainsKey(currLetter)) {
                return false;
            }
            solution.letterMap[currLetter] = currNumber;
            var index = availableNumbers.IndexOf(currNumber);
            var newAvailableNumbers = availableNumbers.Select(e => e).ToList();
            newAvailableNumbers.RemoveRange(index,1);
            var isSolution = Alphametics.checkPermutations(solution, newAvailableNumbers, newAvailableLetters);
            if (isSolution) {
                return true;
            }
        }
        return false;
    }

    public static IDictionary<char, int> Solve(string equation)
    {
        var tokens = equation.Split(' ').Where(token => token != "+" && token != "==");
        var total = tokens.Last();
        var addends = tokens.SkipLast(1).ToArray();
        var letterMap = new Dictionary<char, int>();
        var leadingDigits = new Dictionary<char, bool>();
        var solution = new Solution(total, addends, letterMap, leadingDigits);

        foreach (var token in tokens) {
            leadingDigits[token[0]] = true;
            foreach (char c in token) {
                letterMap[c] = -1;
            }
        }
        
        for (var i = 1; i <= 9; i++) {
            letterMap[addends[0][0]] = i;
            var availableNumbers = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}.Where(n => n != i).ToList();
            var availableLetters = letterMap.Keys.Where(key => key != solution.addends[0][0]).ToList();
            var isSolution = Alphametics.checkPermutations(solution, availableNumbers, availableLetters);
            if (isSolution) {
                return solution.letterMap;
            }
        }
        throw new ArgumentException();
    }
}