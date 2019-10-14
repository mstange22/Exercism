struct Raindrops {
  static var soundMap = [(3, "Pling"), (5, "Plang"), (7, "Plong")]
  var sounds = ""
  init(_ n: Int) {
    for (num, sound) in Raindrops.soundMap {
      if n % num == 0 {
        self.sounds += sound
      }
    } 
    if self.sounds.isEmpty {
      self.sounds = String(n)
    }
  }
}