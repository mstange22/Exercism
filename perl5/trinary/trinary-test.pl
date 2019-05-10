use 5.10.0;
use strict;
use warnings;

use Trinary qw(to_decimal);

my $tri = Trinary->new(10);

my $res = $tri->to_decimal();
print "res: ", $res, "\n";