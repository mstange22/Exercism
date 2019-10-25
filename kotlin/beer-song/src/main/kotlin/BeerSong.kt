package BeerSong

fun verses(start: Int, end: Int): String {
  var res = arrayListOf<String>();
  for (i in start downTo end) {
    res.add(verse(i))
  }
  return res.joinToString("\n")
}

fun verse(n: Int): String {
  var numBottles1 = if (n == 0) "No more" else n.toString() 
  var numBottles2 = if (n == 0) "no more" else n.toString()
  var bottles = if (n == 1) "bottle" else "bottles"
  var take = if (n == 1) "it" else "one"
  var remaining = if (n == 1) "no more" else (n - 1).toString()
  var bottles2 = if (n == 2) "bottle" else "bottles"

  var part1 = "$numBottles1 $bottles of beer on the wall, $numBottles2 $bottles of beer.\n"
  var part2 = if (n == 0) "Go to the store and buy some more, 99 bottles of beer on the wall.\n" else 
    "Take $take down and pass it around, $remaining $bottles2 of beer on the wall.\n"
  return part1 + part2
}

