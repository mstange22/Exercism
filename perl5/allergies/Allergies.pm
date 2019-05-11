package Allergies;
use strict;
use warnings;
use List::Util qw(any);

our @allergens = qw(eggs peanuts shellfish strawberries tomatoes chocolate pollen cats);

sub new {
  my ($class, $score) = @_;
  my @bitmask = reverse split '', sprintf("%b", $score % 256);
  my @allergies;
  for (my $i = 0; $i < scalar @bitmask; $i++) {
    push @allergies, $allergens[$i] if $bitmask[$i] == 1;
  }
  return bless {
    allergies => \@allergies,
  }, $class;
}

sub allergic_to {
  my ($self, $allergen) = @_;
  return (any { $_ eq $allergen } @{$self->{allergies}}) ? 1 : 0;
}

sub list {
  return shift->{allergies};
}

1;