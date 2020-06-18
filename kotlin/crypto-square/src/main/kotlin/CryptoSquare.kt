import kotlin.math.ceil
import kotlin.math.sqrt

object CryptoSquare {

    fun ciphertext(plaintext: String): String {
        
        val stripped = plaintext.replace("\\W+".toRegex(), "").toLowerCase()
        if (plaintext.isEmpty()) return ""

        val len = stripped.length.toDouble()
        val rows = ceil(sqrt(len)).toInt()
        val cols = ceil(len / rows.toDouble()).toInt()
            
        val chunks = stripped.padEnd(rows * cols).chunked(rows)

        return (0 until rows).joinToString(" ") { i -> chunks.map { it[i] }.joinToString("") }
    }

}
