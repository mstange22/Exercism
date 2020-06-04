using System;

public class Clock
{
    int minutes;

    public Clock(int hours, int minutes)
    {
        this.minutes = ((((hours % 24) * 60 + (minutes % (60 * 24))) % (24 * 60)) + (60 * 24)) % (60 * 24);
    }

    public Clock Add(int minutesToAdd)
    {
        return new Clock(0, minutes + minutesToAdd);
    }

    public Clock Subtract(int minutesToSubtract)
    {
        return Add(-minutesToSubtract);
    }
    
    public override string ToString()
    {
        return $"{(minutes / 60).ToString("D2")}:{(minutes % 60).ToString("D2")}";
    }

    public override bool Equals(object obj)
    {
        return this.ToString() == obj.ToString();
    }

    public override int GetHashCode() {
        return this.ToString().GetHashCode();
    }
}
