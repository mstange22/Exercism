package Prime;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(factors);

sub factors {
  my ($n) = @_;
  my @res;
  my $test_val = 2;
  while ($n > 1) {
    if ($n % $test_val == 0) {
      push @res, $test_val ;
      $n /= $test_val ;
    } else {
      $test_val++;
    }
  }
  return \@res;
}
