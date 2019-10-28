class SecretHandshake {
    var mask: Int
    let commandList = ["wink", "double blink", "close your eyes", "jump"]

    init(_ n: Int) {
        self.mask = n
    }
    
    var commands: [String] {
        var res = [String]()
        for (i, command) in self.commandList.enumerated() {
            if self.mask & (1 << i) != 0 {
                res.append(command)
            }
        }
        if self.mask & 16 != 0 {
            res.reverse()
        }
        return res
    }
}
