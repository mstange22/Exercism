use 5.10.0;
use strict;
use warnings;

use AllYourBase qw(convert_base);

my $res = AllYourBase::convert_base([1], 2, 10);
print "res: $res\n";
for (@$res) {
  print "res digit: $_\n";
}