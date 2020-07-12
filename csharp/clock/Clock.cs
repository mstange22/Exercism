public class Clock
{
    int minutes;
    private const int MinutesInDay = 60 * 24;

    public Clock(int hours, int minutes)
    {
        this.minutes = ((((hours * 60) + minutes) % MinutesInDay) + MinutesInDay) % MinutesInDay;
    }

    public Clock Add(int minutesToAdd) => new Clock(0, minutes + minutesToAdd);

    public Clock Subtract(int minutesToSubtract) => Add(-minutesToSubtract);
    
    public override string ToString() => $"{(minutes / 60):D2}:{(minutes % 60):D2}";

    public override bool Equals(object obj) => this.ToString() == obj.ToString();

    public override int GetHashCode() => this.ToString().GetHashCode();
}
