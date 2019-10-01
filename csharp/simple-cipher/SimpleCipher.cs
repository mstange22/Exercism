using System;
using System.Text;

public class SimpleCipher
{
    readonly string key;

    public SimpleCipher()
    {
        Random r = new Random();
        StringBuilder s = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            s.Append((char)r.Next('a', 'z'));
        }
        key = s.ToString();
    }

    public SimpleCipher(string key) => this.key = key;
    
    public string Key { get => key; }

    public string Encode(string plaintext, bool decode = false)
    {
        StringBuilder s = new StringBuilder();
        for (int i = 0; i < plaintext.Length; i++) {
            int offset = decode ? 'a' - key[i % key.Length] : key[i % key.Length] - 'a';
            char newChar = (char)((((plaintext[i] - 'a' + offset) + 26) % 26) + 'a');
            s.Append(newChar);
        }
        return s.ToString();
    }

    public string Decode(string ciphertext) => Encode(ciphertext, true);
}