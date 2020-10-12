class RobotFactory {
    var names = mutableListOf<String>()
    public var index = 0
    init {
        ('A'..'Z').toList().forEach { a ->
            ('A'..'Z').toList().forEach { b ->
                (0..9).toList().forEach { x ->
                    (0..9).toList().forEach { y ->
                        (0..9).toList().forEach { z ->
                            names.add("$a$b$x$y$z")
                        }
                    }
                }
            }
        }
        // randomize robot names with Fisher-Yates shuffle
        (0 until names.size).forEach { it ->
            // find random index from remaining names
            val randomIndex = (it until names.size).random()
            // swap current name with name at random index
            val temp = names[it]
            names[it] = names[randomIndex]
            names[randomIndex] = temp
         }
    }
}

class Robot {
    companion object {
        val robots = RobotFactory()
    }

    var myIndex: Int

    init {
        myIndex = robots.index++
    }

    val name: String
        get() = robots.names[myIndex]

    fun reset() {
        myIndex = robots.index++
    }
}
