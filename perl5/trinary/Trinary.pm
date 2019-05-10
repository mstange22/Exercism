package Trinary;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(to_decimal);

sub new {
  my ($class, $tri) = @_;
  return bless {
    tri => $tri,
  }, $class;
}

sub to_decimal {
  my $n = shift->{tri};
  my ($res, $exponent) = (0, 0);
  while ($n > 0) {
    use integer;
    $res += (($n % 10) * (3 ** $exponent++));
    $n /= 10;
  }
  return $res;
}

1;
