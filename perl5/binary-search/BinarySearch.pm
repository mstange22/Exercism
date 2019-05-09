package BinarySearch;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(binary_search);

sub binary_search {
  my ($input) = @_;
  my $arr = $input->{"array"};
  my $target = $input->{"value"};

  my $min = 0;
  my $max = scalar(@{$arr}) - 1;

  while ($min <= $max) {
    use integer;
    my $mid = ($min + $max) / 2;
    my $mid_val = $arr->[$mid];
    if ($mid_val == $target) {
      return $mid;
    } elsif ($mid_val < $target) {
      $min = $mid + 1;
    } else {
      $max = $mid - 1;
    }
  }
  my %err = (
    "error" => "value not in array",
  );
  die \%err;
}

1;
