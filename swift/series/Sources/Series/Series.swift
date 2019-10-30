struct Series {
    let series: [Int]
    
    init(_ series: String) {
        self.series = series.map({ Int(String($0))! })
    }
    
    func slices(_ length: Int) -> [[Int]] {
        length > series.count ? [[Int]]() :
            (0...series.count - length).map { Array(series[$0..<($0 + length)]) }
    }
}
