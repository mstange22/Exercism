package Phrase;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(word_count);

sub word_count {
  my ($phrase) = lc(shift);
  my %counter;
  $counter{lc $1}++ while $phrase =~ /([a-zA-Z0-9]+)/g;
  return \%counter;
}

1;
