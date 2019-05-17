use 5.10.0;
use strict;
use warnings;

use Matrix qw(new rows columns);

my $matrix = Matrix->new("1 2\n10 20");
my $rows = $matrix->rows(0);
print "res rows: $rows\n";