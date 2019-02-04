import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond {
    private LocalDateTime age;
    private static final long GIGASECOND = 1000000000;

    Gigasecond(LocalDate birthDate) {
        this(birthDate.atStartOfDay());
    }

    Gigasecond(LocalDateTime birthDateTime) {
        age = birthDateTime.plusSeconds(GIGASECOND);
    }

    LocalDateTime getDateTime() {
        return age;
    }

}
