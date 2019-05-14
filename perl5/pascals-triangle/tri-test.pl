use 5.10.0;
use strict;
use warnings;

use Triangle qw(triangle);

# my @res = @{Triangle::triangle(4)};
# print "res: @res\n";

my $res2 = Triangle::is_triangle(["1", "1 1", "1 2 1", "1 3 3 1", "1 4 6 4 1", "1 5 10 10 5 1"]);
print "res: $res2\n";