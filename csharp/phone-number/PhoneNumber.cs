using System;
using System.Text.RegularExpressions;

public class PhoneNumber
{
    public static string Clean(string phoneNumber)
    {
        Regex re = new Regex("[^0-9]");
        string cleanedNumber = re.Replace(phoneNumber, "");
        if (cleanedNumber.Length < 10 || cleanedNumber.Length > 11) {
            throw new ArgumentException("Invalid phone number length.");
        }
        if (cleanedNumber.Length == 11) {
            if (cleanedNumber[0] != '1') {
                throw new ArgumentException("Invalid 11-digit phone number.");
            } else {
                cleanedNumber = cleanedNumber.Substring(1);
            }
        }
        if (cleanedNumber[0] == '0' || cleanedNumber[0] == '1' || cleanedNumber[3] == '0' || cleanedNumber[3] == '1') {
            throw new ArgumentException("Invalid area code or exchange.");
        }
        return cleanedNumber;
    }
}