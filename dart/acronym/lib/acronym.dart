class Acronym {
  String abbreviate(String phrase) => phrase
    .split(new RegExp(r"[_, -]+"))
    .map((word) => word[0].toUpperCase())
    .join();
}
