enum class Classification {
    DEFICIENT, PERFECT, ABUNDANT
}

fun classify(naturalNumber: Int): Classification {
    if (naturalNumber < 1) {
        throw RuntimeException("Not a natural number")
    }

    val sum = (1..naturalNumber / 2).map {
        if (naturalNumber % it == 0) it else 0
    }.sum()

    return when {
        sum == naturalNumber -> Classification.PERFECT
        sum < naturalNumber -> Classification.DEFICIENT
        else -> Classification.ABUNDANT
    }
}
