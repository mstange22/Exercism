use 5.10.0;
use strict;
use warnings;

use Luhn qw(is_luhn_valid);

print "res: ", is_luhn_valid("59"), "\n";