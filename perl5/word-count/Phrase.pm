package Phrase;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(word_count);

sub word_count {
  my ($phrase) = lc(shift);
  $phrase =~ s/[^a-z0-9 ]//g;
  my %counter;
  $counter{$_}++ for split ' ', $phrase;
  return \%counter;
}

1;
