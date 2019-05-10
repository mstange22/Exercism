use 5.10.0;
use strict;
use warnings;

use PhoneNumber qw(clean_number);

print "res", clean_number("+1 (223) 456-7890"), "\n";