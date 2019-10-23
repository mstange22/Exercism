import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond {
  var date: LocalDateTime;

  constructor(moment:LocalDate) {
      date = moment.atStartOfDay().plusSeconds(1000000000)
  }

  constructor(moment: LocalDateTime) {
    date = moment.plusSeconds(1000000000)
  }

}