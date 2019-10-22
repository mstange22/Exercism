package Pangram
import java.util.EnumSet.range

fun isPangram(s: String): Boolean = ('a'..'z').all {
  s.contains(it, true)
}