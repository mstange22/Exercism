class SpaceAge(age: Long) {
  private val earthAge = age.toDouble() / 31557600

  fun onEarth() = round(earthAge)
  fun onMercury() = round(earthAge / 0.2408467)
  fun onVenus() = round(earthAge / 0.61519726)
  fun onMars() = round(earthAge / 1.8808158)
  fun onJupiter() = round(earthAge / 11.862615)
  fun onSaturn() = round(earthAge / 29.447498)
  fun onUranus() = round(earthAge / 84.016846)
  fun onNeptune() = round(earthAge / 164.79132)

  private fun round(age: Double) = String.format("%.2f", age).toDouble()
}