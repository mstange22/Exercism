class Raindrops {
  String convert(num n) {
    String res = '';
    Map<num, String> map = { 3: 'Pling', 5: 'Plang', 7: 'Plong'};
    map.forEach((k, v) => n % k == 0 ? res += v : null);
    return res != '' ? res : n.toString();
  }
}
