package Triangle;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(kind);

sub kind {
  if (grep {$_ <= 0} @_) {
    die 'TriangleError';
  }

  my ($a, $b, $c) = sort @_;

  if ($a + $b <= $c) {
    die "TriangleError";
  }
  
  if ($a == $c) {
    return "equilateral";
  }
  if ($a == $b || $b == $c) {
    return "isosceles";
  }
  return "scalene";
}

1;