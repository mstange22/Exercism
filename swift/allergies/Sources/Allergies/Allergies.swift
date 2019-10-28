enum Allergen: Int {
    case eggs, peanuts, shellfish, strawberries, tomatoes, chocolate, pollen, cats
}

struct Allergies {
    let mask: UInt
    
    init(_ mask: UInt) {
        self.mask = mask
    }
    
    func hasAllergy(_ allergen: Allergen) -> Bool {
        (1 << allergen.rawValue) & self.mask != 0
    }
}
