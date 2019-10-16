fileprivate let ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

class Robot {
    public var name = "";
    private var names = Set<String>()

    init() {
        resetName()
    }
    
    public func resetName() {
        var newName: String
        repeat {
            newName = getNewName()
        } while(names.contains(newName))
        self.name = newName
        self.names.insert(newName)
    }
    
    private func getNewName() -> String {
        return (
            String(ALPHA.randomElement()!) +
            String(ALPHA.randomElement()!) +
            String(Int.random(in: 0 ..< 10)) +
            String(Int.random(in: 0 ..< 10)) +
            String(Int.random(in: 0 ..< 10))
        )
    }
}
