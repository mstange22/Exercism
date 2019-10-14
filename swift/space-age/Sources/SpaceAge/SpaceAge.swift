class SpaceAge {
  var seconds: Double
  var onEarth: Double
  var onMercury: Double
  var onVenus: Double
  var onMars: Double
  var onJupiter: Double
  var onSaturn: Double
  var onUranus: Double
  var onNeptune: Double

  init(_ age: Double) {
    seconds = age
    onEarth = seconds / 31557600
    onMercury = onEarth / 0.2408467
    onVenus = onEarth / 0.61519726
    onMars = onEarth / 1.8808158
    onJupiter = onEarth / 11.862615
    onSaturn = onEarth / 29.447498
    onUranus = onEarth / 84.016846
    onNeptune = onEarth / 164.79132
  }
}