import Foundation

struct Day {
    let year: Int
    let month: Int
    let day: Int
    
    init(_ year: Int, _ month: Int, _ day: Int) {
        self.year = year
        self.month = month
        self.day = day
    }
    
    var description: String {
        return String(format: "%d-%02d-%02d", arguments: [year, month, day])
    }
}

struct Meetup {
    var year: Int
    var month: Int
    
    static var daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    init(year: Int, month: Int) {
        self.year = year
        self.month = month
    }
    
    func day(_ targetDay: Int, which: String) -> Day {
        let formatter  = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        let firstDayOfMonth = formatter.date(from: "\(year)-\(month)-01")!
        let calendar = Calendar(identifier: .gregorian)
        let dayOfFirstDayOfMonth = calendar.component(.weekday, from: firstDayOfMonth)
        
        // first target day of month
        var date = targetDay >= dayOfFirstDayOfMonth ? targetDay - dayOfFirstDayOfMonth + 1 : 8 - dayOfFirstDayOfMonth + targetDay
        
        if which == "teenth" {
            date = date > 5 ? date + 7 : date + 14
        } else if which == "2nd" {
            date += 7
        } else if which == "3rd" {
            date += 14
        } else if which == "4th" {
            date += 21
        } else if which == "last" {
            // leap years
            if month == 2 && year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) {
                date = date == 1 ? 29 : date + 21
            } else {
                date = date + 28 > Meetup.daysInMonths[month] ? date + 21 : date + 28
            }
        }
        return Day(year, month, date)
    }
}
