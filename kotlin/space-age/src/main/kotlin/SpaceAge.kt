class SpaceAge(age: Long) {
  val earthAge: Double = age.toDouble() / 31557600

  fun onEarth(): Double {
    return String.format("%.2f", earthAge).toDouble()
  }
  fun onMercury(): Double {
    return String.format("%.2f", earthAge / 0.2408467).toDouble()
  }
  fun onVenus(): Double {
    return String.format("%.2f", earthAge / 0.61519726).toDouble()
  }
  fun onMars(): Double {
    return String.format("%.2f", earthAge / 1.8808158).toDouble()
  }
  fun onJupiter(): Double {
    return String.format("%.2f", earthAge / 11.862615).toDouble()
  }
  fun onSaturn(): Double {
    return String.format("%.2f", earthAge / 29.447498).toDouble()
  }
  fun onUranus(): Double {
    return String.format("%.2f", earthAge / 84.016846).toDouble()
  }
  fun onNeptune(): Double {
    return String.format("%.2f", earthAge / 164.79132).toDouble()
  }
}