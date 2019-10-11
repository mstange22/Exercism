using System;
using System.Collections.Generic;

public enum Plant
{
    Violets,
    Radishes,
    Clover,
    Grass
}

public class KindergartenGarden
{    
    private string[] garden;
    private static Dictionary<char, Plant> map = new Dictionary<char, Plant>(){
        { 'V', Plant.Violets },
        { 'R', Plant.Radishes },
        { 'C', Plant.Clover },
        { 'G', Plant.Grass },
    };
    public KindergartenGarden(string diagram)
    {
        garden = diagram.Split(new []{ '\n' });
    }

    public IEnumerable<Plant> Plants(string student)
    {
        return new Plant[]{
            map[garden[0][(student[0] - 'A') * 2]],
            map[garden[0][((student[0] - 'A') * 2) + 1]],
            map[garden[1][(student[0] - 'A') * 2]],
            map[garden[1][((student[0] - 'A') * 2) + 1]],
        };
    }
}