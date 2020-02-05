#include "protein_translation.h"
#include <map>

namespace protein_translation {
  std::vector<std::string> proteins(std::string s) {
    std::vector<std::string> res;
    std::map<std::string, std::string> protein_map = {
      { "AUG", "Methionine" },
      { "UUU", "Phenylalanine" }, { "UUC", "Phenylalanine" },
      { "UUA", "Leucine" }, { "UUG", "Leucine" },
      { "UCU", "Serine" }, { "UCC", "Serine" }, { "UCA", "Serine" }, { "UCG", "Serine" },
      { "UAU", "Tyrosine" }, { "UAC", "Tyrosine" },
      { "UGU", "Cysteine" }, { "UGC", "Cysteine" },
      { "UGG", "Tryptophan" },
      { "UAA", "STOP" }, { "UAG", "STOP" }, { "UGA", "STOP" },
    };

    for (size_t i = 0; i < s.length() - 2; i += 3) {
      std::string protein = protein_map[s.substr(i, 3)];
      if (protein.compare("STOP") == 0) {
        break;
      }
      res.push_back(protein);
    }
    return res;
  }
}