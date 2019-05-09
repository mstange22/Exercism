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

  my @res;
  foreach my $candidate (@candidates) {
    next if $candidate eq $word;
    push @res, $candidate if normalize($candidate) eq $sorted_word;
  }
  return \@res;
}

1;
