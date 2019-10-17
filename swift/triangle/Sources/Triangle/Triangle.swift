class Triangle {
    var kind = ""

    init(_ sides: Double...) {
        self.kind = setKind(sides.sorted())
    }
    
    private func setKind(_ sortedSides: [Double]) -> String {
        if isInvalidTriangle(sortedSides) {
            return "ErrorKind"
        }
        if (sortedSides[0] == sortedSides[2]) {
            return "Equilateral"
        }
        if (Set(sortedSides).count == 2) {
            return "Isosceles"
        }
        return "Scalene"
    }
    
    private func isInvalidTriangle(_ sortedSides: [Double]) -> Bool {
        sortedSides[0] <= 0 || sortedSides[1] <= 0 || sortedSides[2] <= 0 ||
            sortedSides[0] + sortedSides[1] < sortedSides[2]
    }
}
