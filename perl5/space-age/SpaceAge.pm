package SpaceAge;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(new);

sub new {
  my ($class, $seconds) = @_;
  return bless {
      seconds => $seconds,
  }, $class;
}

sub seconds {
  my $self = shift;
  return $self->{seconds}
}

sub on_earth {
  my $self = shift;
  return sprintf("%.2f", $self->{seconds} / 31557600);
}

sub on_mercury {
  my $self = shift;
  return sprintf("%.2f", $self->{seconds} / 31557600 / 0.2408467);
}

sub on_venus {
  my $self = shift;
  return sprintf("%.2f", $self->{seconds} / 31557600 / 0.61519726);
}

sub on_mars {
  my $self = shift;
  return sprintf("%.2f", $self->{seconds} / 31557600 / 1.8808158);
}

sub on_jupiter {
  my $self = shift;
  return sprintf("%.2f", $self->{seconds} / 31557600 / 11.862615);
}

sub on_saturn {
  my $self = shift;
  return sprintf("%.2f", $self->{seconds} / 31557600 / 29.447498);
}

sub on_uranus {
  my $self = shift;
  return sprintf("%.2f", $self->{seconds} / 31557600 / 84.016846 );
}

sub on_neptune {
  my $self = shift;
  return sprintf("%.2f", $self->{seconds} / 31557600 / 164.79132);
}