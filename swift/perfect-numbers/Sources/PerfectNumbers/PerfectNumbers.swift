class NumberClassifier {
    enum Category {
        case deficient
        case abundant
        case perfect
    }

    let classification: Category

    init(number: Int) {
        var sum = 0
        for i in 1..<number {
            if (number % i == 0) {
                sum += i
            }
        }
        classification = sum == number ? .perfect: sum < number ? .deficient : .abundant
    }
}
