class Grains {
  static square(n: number): number {
    if (n < 1 || n > 64) {
      throw new Error("Invalid square.")
    }
    return 2 ** (n - 1)
  }

  static total(): number {
    return (2 ** 64) - 1
  }
}

export default Grains;