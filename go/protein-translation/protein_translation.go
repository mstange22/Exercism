package protein

import "errors"

// ErrStop is an error for stop codons.
var ErrStop = errors.New("stop codon")

// ErrInvalidBase is an error for invalid strings
var ErrInvalidBase = errors.New("invalid base")

var m = map[string]string{
	"AUG": "Methionine",
	"UUU": "Phenylalanine", "UUC": "Phenylalanine",
	"UUA": "Leucine", "UUG": "Leucine",
	"UCU": "Serine", "UCC": "Serine", "UCA": "Serine", "UCG": "Serine",
	"UAU": "Tyrosine", "UAC": "Tyrosine",
	"UGU": "Cysteine", "UGC": "Cysteine",
	"UGG": "Tryptophan",
	"UAA": "STOP", "UAG": "STOP", "UGA": "STOP",
}

// FromCodon returns a nucleotide sequence
func FromCodon(codon string) (string, error) {
	if _, ok := m[codon]; ok {
		if m[codon] == "STOP" {
			return "", ErrStop
		}
		return m[codon], nil
	}
	return "", ErrInvalidBase
}

// FromRNA returns an array of nucleotide sequences
func FromRNA(protein string) ([]string, error) {
	res := []string{}
	for i := 0; i < len(protein)-2; i += 3 {
		test := string(protein[i : i+3])
		testRes, err := FromCodon(test)
		if err == nil {
			res = append(res, testRes)
		} else {
			if err == ErrStop {
				return res, nil
			}
			return res, ErrInvalidBase
		}
	}
	return res, nil
}
