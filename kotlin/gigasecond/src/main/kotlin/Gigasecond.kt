import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond(moment: LocalDateTime) {
  var date: LocalDateTime = moment.plusSeconds(1000000000);

  constructor(moment:LocalDate): this(moment.atStartOfDay()) {}
}