package Triangle;
use strict;
use warnings;

sub triangle {
  my ($n) = @_;
  my @res;
  for (my $i = 0; $i <= $n; $i++) {
    $res[$i][0] = 1;
    for (my $j = 1; $j <= $i; $j++) {
      push $res[$i], ($res[$i - 1][$j - 1]) + ($res[$i - 1][$j] || 0);
    }
  }
  return [map { join " ", @$_ } @res]
}

sub is_triangle {
  my $params = shift;
  my $length = scalar @{$params};
  my @valid_triangle = @{triangle($length - 1)};
  for (my $i = 0; $i < $length; $i++) {
    return 0 if $params->[$i] ne $valid_triangle[$i];
  }
  return 1;
}

sub row {
  my $row = shift;
  return @{triangle($row)}[$row];
}

1;
