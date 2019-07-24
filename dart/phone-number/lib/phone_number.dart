class PhoneNumber {
  // invalid if area code or exchange starts with 0 or 1
  bool isValid(String s) => (
    s[0] != '0' && s[0] != '1' && s[3] != '0' && s[3] != '1'
  );

  String clean(String number) {
    var cleaned = number.replaceAll(new RegExp(r'[^\d]'), '');
    if (cleaned.length != 10) {
      if (cleaned.length == 11) {
        if (cleaned[0] == '1') {
          cleaned = cleaned.substring(1);
          if (isValid(cleaned)) {
            return cleaned;
          }
        }
      }
      return null;
    }
    return isValid(cleaned) ? cleaned : null;
  }
}
