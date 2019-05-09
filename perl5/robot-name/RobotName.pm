package RobotName;
use strict;
use warnings;
use Exporter 'import';
our @EXPORT_OK = qw(name reset_name);

sub new {
  my ($class) = @_;
  my $self = bless {}, $class;
  $self->reset_name();
  return $self;
}

sub name {
  return shift->{name};
}

sub reset_name {
  shift->{name} = chr(int(rand(26)) + ord("A")) . chr(int(rand(26)) + ord("A"))
    . int(rand(9)) . int(rand(9)) . int(rand(9));
}