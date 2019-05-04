#!/usr/bin/perl
use strict;
use warnings;

sub transform {
  my ($oldRef) = @_;
  my %newMap;
  foreach (keys %{$oldRef})
  {
    print "old entry: ", $_, " : ", $oldRef->{$_}, "\n";
    my $entry = $oldRef->{$_};
    print "entry: $entry\n";
    for my $el (@$entry) {
      my $newKey = lc($el);
      print "newKey: $newKey\n";
      $newMap{$newKey} = $_;
      print "new value: $newMap{$newKey}\n";
    }
  }
  return \%newMap;
}

my %test = ( 1 => ['A'] );

my $transformed = transform(\%test);
foreach (keys %{$transformed})
{
  print $_, " : ", $transformed->{$_}, "\n";
}

print $transformed;