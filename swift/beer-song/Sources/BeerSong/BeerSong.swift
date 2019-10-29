struct BeerSong {
    let n: Int
    
    init(numberOfBeerBottles: Int) {
        n = numberOfBeerBottles
    }
    
    func generateVersesOfBeerSong() -> String {
        var res = [String]()
        var i = n
        while i >= 0 {
            let numBottles1 = i == 0 ? "No more" : String(i)
            let numBottles2 = i == 0 ? "no more" : String(i)
            let bottles = i == 1 ? "bottle" : "bottles"
            let bottles2 = i == 2 ? "bottle" : "bottles"
            let remaining = i == 1 ? "no more" : String(i - 1)
            
            res.append("\(numBottles1) \(bottles) of beer on the wall, \(numBottles2) \(bottles) of beer.")
            if (i == 0) {
                res.append("Go to the store and buy some more, 99 bottles of beer on the wall.")
            } else {
                res.append("Take one down and pass it around, \(remaining) \(bottles2) of beer on the wall.\n")
            }
            i -= 1
        }
        return res.joined(separator: "\n")
    }
}
