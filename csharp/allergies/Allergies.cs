using System;
using System.Linq;

public enum Allergen
{
    Eggs,
    Peanuts,
    Shellfish,
    Strawberries,
    Tomatoes,
    Chocolate,
    Pollen,
    Cats
}

public class Allergies
{
    private int mask;

    public Allergies(int mask)
    {
        this.mask = mask;
    }

    public bool IsAllergicTo(Allergen allergen) => ((int)Math.Pow(2, (int)allergen) & mask) != 0;

    public Allergen[] List() =>
        Enum.GetValues(typeof(Allergen))
            .OfType<Allergen>()
            .Where(a => IsAllergicTo(a))
            .ToArray();
}