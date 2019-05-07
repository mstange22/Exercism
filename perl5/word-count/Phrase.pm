package Phrase;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(word_count);

sub word_count {
  my ($phrase) = lc(shift);
  $phrase =~ s/[^a-zA-Z0-9 ]//g;
  my %counter;
  for my $word (split /[ ]+/, $phrase) {
    if (exists $counter{$word}) {
      $counter{$word}++
    } else {
      $counter{$word} = 1;
    }
  }
  return \%counter;
}

1;
