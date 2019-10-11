import Foundation

class Gigasecond {
  let gigaDate: Date
    init?(from inputDateString: String) {
      let dateFormatter = DateFormatter()
      dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss"
      dateFormatter.locale = Locale(identifier: "en_US_POSIX")
      dateFormatter.timeZone = TimeZone(secondsFromGMT: 0)
    if let gigaDate = dateFormatter.date(from: inputDateString) {
      self.gigaDate = gigaDate + TimeInterval(1000000000)
    } else {
      return nil
    }
  }

  var description: String {
    get {
      let timeInterval = gigaDate.timeIntervalSince1970
      let dateFormatter = DateFormatter()
      dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss"
      dateFormatter.locale = Locale(identifier: "en_US_POSIX")
      dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss"
      dateFormatter.timeZone = TimeZone(secondsFromGMT: 0)
      return dateFormatter.string(from: Date(timeIntervalSince1970: Double(timeInterval)))
    }
  }
}