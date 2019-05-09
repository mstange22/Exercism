package Anagram;
use warnings;
use strict;
use Exporter 'import';
our @EXPORT_OK = qw(match);

sub normalize {
  join '', sort split '', lc shift;
}

sub match {
  my $word = shift;
  my $sorted_word = normalize($word);
  my @candidates = @_;
  return [grep {($_ ne $word) && (normalize($_) eq $sorted_word)} @candidates];
}

1;
