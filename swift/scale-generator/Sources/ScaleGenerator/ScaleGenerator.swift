class ScaleGenerator {
    let cScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    let fScale = ["F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"]
    let useSharps = ["G", "D", "A", "E", "B", "F#", "e", "b", "f#", "c#", "g#", "d#", "C", "a"]
    let useFlats = ["F", "Bb", "Eb", "Ab", "Db", "Gb", "d", "g", "c", "f", "bb", "eb"]
    let tonic: String
    let scaleName: String
    let pattern: String
    var formattedTonic: String {
        let formatted = String(self.tonic.prefix(1)).uppercased() + String(self.tonic.dropFirst())
        return "\(formatted)"
    }
    var name: String {
        return "\(self.formattedTonic) \(self.scaleName)"
    }

    init(tonic: String, scaleName: String, pattern: String = "") {
        self.tonic = tonic
        self.scaleName = scaleName
        self.pattern = pattern
    }
    
    func pitches() -> [String] {
        if (scaleName == "chromatic") {
            return tonic == "C" ? cScale : fScale
        }

        let currScale = useSharps.contains(tonic) ? cScale : fScale
        var currNoteIndex = currScale.index(of: formattedTonic)!
        var res = [String]()
        
        for step in pattern {
            res.append(currScale[currNoteIndex])
            var steps: Int
            if step == "m" {
                steps = 1
            } else if step == "M" {
                steps = 2
            } else {
                steps = 3
            }
            currNoteIndex = (currNoteIndex + steps) % currScale.count
        }
        return res
    }
}
