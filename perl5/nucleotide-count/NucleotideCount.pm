package NucleotideCount;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(count_nucleotides);

sub count_nucleotides {
  my ($strand) = @_;
  my %counter = (
    "A" => 0,
    "C" => 0,
    "G" => 0,
    "T" => 0,
  );
  for (split "", $strand) {
    die if $_ =~ /[^ACGT]/;
    $counter{$_}++;
  }
  return \%counter;
}

1;
