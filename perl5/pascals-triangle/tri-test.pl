use 5.10.0;
use strict;
use warnings;

use Triangle qw(triangle);

my @res = @{Triangle::triangle(4)};
print "res: @res\n";
