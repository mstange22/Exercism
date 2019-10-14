enum TranscriptionError: Error {
    case invalidNucleotide(String)
}

struct Nucleotide {
  var rnaMap = [ "G": "C", "C": "G", "T": "A", "A": "U" ]
  var strand: String

  init(_ incomingStrand: String) {
    strand = incomingStrand
  }

  func complementOfDNA() throws -> String {
    var res: String = ""
    for c in strand {
      guard let rna = rnaMap[String(c)] else {
        throw TranscriptionError.invalidNucleotide("\(c) is not a valid Nucleotide")
      }
      res += rna;
    }
    return res
  }
}