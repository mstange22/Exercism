import Foundation

let MAX_MINUTES = 24 * 60

class Clock {
    private var minutes: Int

    init(hours: Int, minutes: Int = 0) {
        self.minutes = ((hours % 24 + 24) * 60 + minutes % MAX_MINUTES + MAX_MINUTES) % MAX_MINUTES
    }
    func add(minutes: Int) -> Clock {
        let newMinutes = (self.minutes + minutes + MAX_MINUTES) % MAX_MINUTES
        return Clock(hours: newMinutes / 60, minutes: newMinutes % 60)
    }
    
    func subtract(minutes: Int) -> Clock {
        return add(minutes: -minutes)
    }
}

extension Clock: Equatable {
    static func == (c1: Clock, c2: Clock) -> Bool {
        return c1.minutes == c2.minutes
    }
}
extension Clock: CustomStringConvertible {
    var description: String {
        return String(format: "%02d:%02d", (self.minutes / 60) % 24, self.minutes % 60)
    }
}