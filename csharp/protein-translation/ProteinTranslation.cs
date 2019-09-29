using System;
using System.Collections.Generic;

public static class ProteinTranslation
{
    private static Dictionary<string, string[]> givenProteinMap = new Dictionary<string, string[]>(){
        { "Methionine", new string[]{"AUG"} },
        { "Phenylalanine", new string[]{ "UUU", "UUC" } },
        { "Leucine", new string[]{ "UUA", "UUG" } },
        { "Serine", new string[]{ "UCU", "UCC", "UCA", "UCG" } },
        { "Tyrosine", new string[]{ "UAU", "UAC" } },
        { "Cysteine", new string[]{ "UGU", "UGC" } },
        { "Tryptophan", new string[]{ "UGG"} },
        { "STOP", new string[]{ "UAA", "UAG", "UGA" } },
    };
    private static Dictionary<string, string> derivedProteinMap = new Dictionary<string, string>();

    static ProteinTranslation() {
        // convert given protein map to one-to-one map
        foreach (KeyValuePair<string, string[]> entry in givenProteinMap) {
            foreach (string codon in entry.Value) {
                derivedProteinMap.Add(codon, entry.Key);
            }
        }
    }
    public static string[] Proteins(string strand)
    {
        var res = new List<string>();
        for (int i = 0; i < strand.Length - 2; i += 3) {
            var protein = derivedProteinMap[strand.Substring(i, 3)];
            if (protein == "STOP") {
                break;
            }
            res.Add(protein);
        }
        return res.ToArray();
    }
}