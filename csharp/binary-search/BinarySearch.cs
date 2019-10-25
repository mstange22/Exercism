public static class BinarySearch
{
    public static int Find(int[] input, int value)
    {
        if (input.Length < 1) {
            return -1;
        }
        var min = 0;
        var max = input.Length - 1;
        while (min < max) {
            var mid = (min + max) / 2;
            if (value > input[mid]) {
                min = mid + 1;
            } else {
                max = mid;
            }
        }
        return input[min] == value ? min : -1;
    }
}