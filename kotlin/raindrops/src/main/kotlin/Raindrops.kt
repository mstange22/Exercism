package Raindrops

var map = linkedMapOf(3 to "Pling", 5 to "Plang", 7 to "Plong")

fun convert(n: Int): String {
  var res = StringBuilder();

  for ((num, sound) in map.entries) {
    if (n % num == 0) {
      res.append(sound);
    }
  }

  return if (res.isEmpty()) n.toString() else res.toString()
}