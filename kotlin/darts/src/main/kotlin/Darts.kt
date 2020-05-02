import kotlin.math.*

object Darts {

    fun score(x: Number, y: Number): Int {
        when(hypot(x.toDouble(), y.toDouble())) {
            in 0.0..1.0 -> return 10
            in 1.0..5.0 -> return 5
            in 5.0..10.0 -> return 1
            else -> return 0
        }
    }

}
