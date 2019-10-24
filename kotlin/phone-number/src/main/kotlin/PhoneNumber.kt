class PhoneNumber(number: String) {
  val number: String?

  init {
    var stripped = number.filter({ it.isDigit() })
      .removePrefix("1").let { 
        if (it.length == 10 && it.first() > '1' && it[3] > '1') it else null
      }
    this.number = stripped
  }
}