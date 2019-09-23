using System;
using System.Collections.Generic;
using System.Linq;

public class HighScores
{
    private List<int> scores;
    private List<int> sortedScores;
    public HighScores(List<int> list)
    {
        scores = list;
        sortedScores = new List<int>(list);
        sortedScores.Sort();
    }

    public List<int> Scores()
    {
        return scores;
    }

    public int Latest()
    {
        return scores.Last();
    }

    public int PersonalBest()
    {
        return sortedScores.Last();
    }

    public List<int> PersonalTopThree()
    {
        List<int> topThree = new List<int>();
        for (int i = sortedScores.Count - 1, j = 0; j < 3 && j < sortedScores.Count; j++, i--) {
            topThree.Add(sortedScores[i]);
        }
        return topThree;
    }
}