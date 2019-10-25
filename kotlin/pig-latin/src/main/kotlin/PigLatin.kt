package PigLatin

val re1 = Regex("""^([aeiou]|xr|yt)""")
val re2 = Regex("""^([^aeiou]+(?=y)|[^aeiou]*qu|[^aeiou]+)([a-z]+)""")

fun translate(phrase: String): String {
  var res = arrayListOf<String>()

  for (word in phrase.split(" ")) {
    if (re1.containsMatchIn(word)) {
      res.add(word + "ay")
    } else {
      res.add(re2.replace(word, "$2$1") + "ay")
    }
  }
  return res.joinToString(" ")
};