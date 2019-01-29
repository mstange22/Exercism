import java.lang.Math;
import java.util.stream.IntStream;

class ArmstrongNumbers {
	boolean isArmstrongNumber(int numberToCheck) {
		String s = Integer.toString(numberToCheck);
		int length = s.length();
		return IntStream.range(0, length)
			.reduce(0, (a, b) -> a += Math.pow((int)(s.charAt(b) - '0'), length))
			== numberToCheck;
	}
}