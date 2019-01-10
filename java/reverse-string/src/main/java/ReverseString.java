class ReverseString {

    String reverse(String inputString) {
        String res = "";
        for (int i = inputString.length() - 1; i >= 0; i--) {
            res += inputString.charAt(i);
        }
        return res;
    }
  
}