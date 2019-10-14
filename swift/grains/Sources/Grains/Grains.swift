public enum GrainsError: Error {
  case inputTooHigh(String)
  case inputTooLow(String)
}

var total = UInt64.max

func square(_ n: Int) throws -> UInt64 {
  if n > 64 {
    throw GrainsError.inputTooHigh("Input[\(n)] invalid. Input should be between 1 and 64 (inclusive)")
  }
  if (n < 1) {
    throw GrainsError.inputTooLow("Input[\(n)] invalid. Input should be between 1 and 64 (inclusive)")
  }
  return 1 << UInt64(n - 1)
}