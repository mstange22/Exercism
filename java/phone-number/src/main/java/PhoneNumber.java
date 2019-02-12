class PhoneNumber {
  private final String phoneNumber;

  PhoneNumber(String number) {
    if (!number.matches("^[\\d()-. ]+$")) {
      throw new IllegalArgumentException("Illegal character in phone number. Only digits, spaces, parentheses, hyphens or dots accepted.");
    }
    
    StringBuilder s = new StringBuilder();
    for (char c : number.toCharArray()) {
      if (c >= '0' && c <= '9') {
        s.append(c);
      }
    }

    if (s.length() != 11 && s.length() != 10) {
      throw new IllegalArgumentException("Number must be 10 or 11 digits");
    }
    if (s.length() == 11 && s.charAt(0) != '1') {
      throw new IllegalArgumentException("Can only have 11 digits if number starts with '1'");
    }
    if (s.length() == 11) {
      this.phoneNumber = s.substring(1);
    } else {
      this.phoneNumber = s.toString();
    }
    if (this.phoneNumber.startsWith("0") || this.phoneNumber.startsWith("1")) {
      throw new IllegalArgumentException("Illegal Area Or Exchange Code. Only 2-9 are valid digits");
    }
    if (this.phoneNumber.charAt(3) == '0' || this.phoneNumber.charAt(3) == '1') {
      throw new IllegalArgumentException("Illegal Area Or Exchange Code. Only 2-9 are valid digits");
    }
  }

  String getNumber() {
    return this.phoneNumber;
  }
}