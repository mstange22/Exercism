package Squares;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(square_of_sum);

sub new {
  my $class = shift;
  my ($n) = @_;
  my $self = bless {
      n => $n,
  }, $class;
  return $self;
}

sub square_of_sum {
  my $self = shift;
  my $n = $self->{n};
  my $sum = ($n * ($n + 1)) / 2;
  return $sum * $sum;
}

sub sum_of_squares {
  my $self = shift;
  my $n = $self->{n};
  return ($n * ($n + 1) * ((2 * $n) + 1)) / 6;
}

sub difference {
  my $self = shift;
  return $self->square_of_sum - $self->sum_of_squares;
}

1;