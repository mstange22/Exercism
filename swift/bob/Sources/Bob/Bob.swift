import Foundation

struct Bob {
  public static func hey(_ s: String) -> String {
    if s.trimmingCharacters(in: .whitespaces).isEmpty {
      return "Fine. Be that way!"
    }
    if (s.lowercased().contains(where: { $0 > "a" && $0 <= "z" }) && s.uppercased() == s) {
      return "Whoa, chill out!"
    } else if (s.hasSuffix("?")) {
      return "Sure."
    }
    return "Whatever."
  }
}