class ComplexNumber {
	real: number
	imag: number
	abs: number
	constructor(real: number, imag: number) {
		this.real = real
		this.imag = imag
		this.abs = Math.sqrt(real * real + imag * imag)
	}

	get conj (): ComplexNumber {
		return new ComplexNumber(this.real, 0 - this.imag)
	}

	get exp (): ComplexNumber {
		return new ComplexNumber(
			Math.E ** this.real * Math.cos(this.imag),
			Math.E ** this.real * Math.sin(this.imag)
		)
	}

	add(other: ComplexNumber): ComplexNumber {
		return new ComplexNumber(this.real + other.real, this.imag + other.imag)
	}

	sub(other: ComplexNumber): ComplexNumber {
		return new ComplexNumber(this.real - other.real, this.imag - other.imag)
	}

	mul(other: ComplexNumber): ComplexNumber {
		return new ComplexNumber(
			this.real * other.real - this.imag * other.imag,
			this.imag * other.real + this.real * other.imag
		)
	}

	div(other: ComplexNumber): ComplexNumber {
		return new ComplexNumber(
			(this.real * other.real + this.imag * other.imag) / (other.real ** 2 + other.imag ** 2),
			(this.imag * other.real - this.real * other.imag) / (other.real ** 2 + other.imag ** 2)
		)
	}
}

export default ComplexNumber