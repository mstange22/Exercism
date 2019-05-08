package Anagram;
use warnings;
use strict;
use Exporter 'import';
our @EXPORT_OK = qw(match);

sub match {
  my $word = shift;
  my @candidates = @_;
  my @res;
  my @sorted_word = sort split '', lc($word);

  foreach my $candidate (@candidates) {
    if ($candidate ne $word) {
      my @sorted_candidate = sort split '', lc($candidate);
      if (@sorted_candidate ~~ @sorted_word) {
          push @res, $candidate;
      }
    }
  }

  return \@res;
}

1;
