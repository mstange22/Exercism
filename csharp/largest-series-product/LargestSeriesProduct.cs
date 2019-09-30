using System;
using System.Text.RegularExpressions;

public static class LargestSeriesProduct
{
    public static long GetLargestProduct(string digits, int span) 
    {
        validate(digits, span);
        if (digits.Length == 0 || span == 0) return 1;

        int largestProduct = getProduct(digits.Substring(0, span));

        for (int i = 1; i < digits.Length - span + 1; i++) {
            int currentProduct = getProduct(digits.Substring(i, span));
            if (currentProduct > largestProduct) {
                largestProduct = currentProduct;
            }
        }
        return largestProduct;
    }
    
    static int getProduct(string digits) {
        int product = 1;
        for (int i = 0; i < digits.Length; i++) {
            product *= (digits[i] - '0');
        }
        return product;
    }

    static void validate(string digits, int span) {
        if (span > digits.Length) {
            throw new ArgumentException("Span cannot be longer than length of digits");
        }

        if (span < 0) {
            throw new ArgumentException("Span cannot be negative.");
        }

        Regex re = new Regex("[^0-9]");
        if (re.IsMatch(digits)) {
            throw new ArgumentException("Invalid character in digits.");
        }
    }
}