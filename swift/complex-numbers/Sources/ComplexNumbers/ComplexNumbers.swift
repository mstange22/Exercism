import Foundation

class ComplexNumber {
    let realComponent: Double
    let imaginaryComponent: Double
    init(realComponent: Double, imaginaryComponent: Double) {
        self.realComponent = realComponent
        self.imaginaryComponent = imaginaryComponent
    }
    
    func getRealComponent() -> Double {
        return self.realComponent
    }
    
    func getImaginaryComponent() -> Double {
        return self.imaginaryComponent
    }
    
    func add(complexNumber: ComplexNumber) -> ComplexNumber {
        return ComplexNumber(
            realComponent:
                self.realComponent + complexNumber.realComponent,
            imaginaryComponent:
                self.imaginaryComponent + complexNumber.imaginaryComponent
        )
    }
    
    func subtract (complexNumber: ComplexNumber) -> ComplexNumber {
        return ComplexNumber(
            realComponent:
                self.realComponent - complexNumber.realComponent,
            imaginaryComponent:
                self.imaginaryComponent - complexNumber.imaginaryComponent
        )
    }
    
    func multiply(complexNumber: ComplexNumber) -> ComplexNumber {
        return ComplexNumber(
            realComponent:
                self.realComponent * complexNumber.realComponent -
                self.imaginaryComponent * complexNumber.imaginaryComponent,
            imaginaryComponent:
                self.imaginaryComponent * complexNumber.realComponent +
                self.realComponent * complexNumber.imaginaryComponent
        )
    }
    
    func divide(complexNumber: ComplexNumber) -> ComplexNumber {
        let denominator = complexNumber.realComponent * complexNumber.realComponent + complexNumber.imaginaryComponent * complexNumber.imaginaryComponent
        return ComplexNumber(
            realComponent:
                (self.realComponent * complexNumber.realComponent + self.imaginaryComponent * complexNumber.imaginaryComponent) /
                denominator,
            imaginaryComponent:
            (self.imaginaryComponent * complexNumber.realComponent - self.realComponent * complexNumber.imaginaryComponent) / denominator
        )
    }
    
    func absolute() -> Double {
        return (self.realComponent * self.realComponent + self.imaginaryComponent * self.imaginaryComponent).squareRoot()
    }
    
    func conjugate() -> ComplexNumber {
        return ComplexNumber(realComponent: self.realComponent, imaginaryComponent: 0 - self.imaginaryComponent)
    }
    
    func exponent() -> ComplexNumber {
        return ComplexNumber(realComponent: exp(self.realComponent) * (cos(self.imaginaryComponent) + sin(self.imaginaryComponent)), imaginaryComponent: 0.0)
    }
}
