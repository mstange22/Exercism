class Acronym {
  String abbreviate(String phrase) => phrase
    .toUpperCase()
    .split(new RegExp(r"[_, -]+"))
    .map((word) => word[0])
    .join();
}
