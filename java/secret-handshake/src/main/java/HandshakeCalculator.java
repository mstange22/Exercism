import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

class HandshakeCalculator {

    List<Signal> calculateHandshake(int number) {
        List<Signal> secretMessage = new ArrayList<Signal>();
        if ((number & 1) != 0) {
            secretMessage.add(Signal.WINK);
        }
        if ((number & 2) != 0) {
            secretMessage.add(Signal.DOUBLE_BLINK);
        }
        if ((number & 4) != 0) {
            secretMessage.add(Signal.CLOSE_YOUR_EYES);
        }
        if ((number & 8) != 0) {
            secretMessage.add(Signal.JUMP);
        }
        if ((number & 16) != 0) {
            Collections.reverse(secretMessage); 
        }

        return secretMessage;
    }

}
