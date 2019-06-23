class SecretHandshake {

  Map<String, int> COMMANDS = {
    'wink': 1,
    'double blink': 2,
    'close your eyes': 4,
    'jump': 8,
  };

  List<String> commands(int n) {
    List<String> res = COMMANDS.keys.where((key) => n & COMMANDS[key] > 0).toList();
    return n & 16 > 0 ? res.reversed.toList() : res;
  }
}
