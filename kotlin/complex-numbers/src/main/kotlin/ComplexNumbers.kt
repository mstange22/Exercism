data class ComplexNumber(val real: Double = 0.0, val imag: Double = 0.0) {
  var abs = Math.sqrt(this.real * this.real + this.imag * this.imag)
  fun conjugate() = ComplexNumber(this.real, 0 - this.imag)
}

operator fun ComplexNumber.plus(other: ComplexNumber) = ComplexNumber(
  this.real + other.real, this.imag + other.imag
)

operator fun ComplexNumber.minus(other: ComplexNumber) = ComplexNumber(
  this.real - other.real, this.imag - other.imag
)

operator fun ComplexNumber.times(other: ComplexNumber) = ComplexNumber(
  this.real * other.real - this.imag * other.imag,
  this.imag * other.real + this.real * other.imag
)

operator fun ComplexNumber.div(other: ComplexNumber) = ComplexNumber(
  (this.real * other.real + this.imag * other.imag) / (other.real * other.real + other.imag * other.imag),
  (this.imag * other.real - this.real * other.imag) / (other.real * other.real + other.imag * other.imag)
)

fun exponential(c: ComplexNumber) = ComplexNumber(
  Math.exp(c.real) * (Math.cos(c.imag) + Math.sin(c.imag)),
  0.0
)