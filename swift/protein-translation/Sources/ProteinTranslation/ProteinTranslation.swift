enum TranslationError: Error {
    case invalidArgument
}

class ProteinTranslation {
    static var proteinMap = [
        "AUG": "Methionine",
        "UUU": "Phenylalanine", "UUC": "Phenylalanine",
        "UUA": "Leucine", "UUG": "Leucine",
        "UCU": "Serine", "UCC": "Serine", "UCA": "Serine", "UCG": "Serine",
        "UAU": "Tyrosine", "UAC": "Tyrosine",
        "UGU": "Cysteine",  "UGC": "Cysteine",
        "UGG": "Tryptophan",
        "UAA": "STOP", "UAG": "STOP", "UGA": "STOP"
    ]
    
    static func translationOfCodon(_ codon: String) throws -> String {
        guard let res = self.proteinMap[codon] else {
            throw TranslationError.invalidArgument
        }
        
        return res
    }
    
    static func translationOfRNA(_ rna: String) throws -> [String] {
        var res = [String]()
        var i = 0

        while i <= rna.count - 3 {
            let start = rna.index(rna.startIndex, offsetBy: i)
            let end = rna.index(rna.startIndex, offsetBy: i + 2)
            let codon = String(rna[start...end])

            if (self.proteinMap[codon] == "STOP") {
                return res
            }

            res.append(try translationOfCodon(codon))
            i += 3
        }
        return res
    }
}
