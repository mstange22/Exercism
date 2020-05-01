object ResistorColorDuo {

    fun value(vararg colors: Color) = colors.elementAt(0).ordinal * 10 + colors.elementAt(1).ordinal
    
}
