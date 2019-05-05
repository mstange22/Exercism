#!/usr/bin/env perl
use strict;
use warnings;

use FindBin qw($Bin);
use lib $Bin, "$Bin/local/lib/perl5";

my $module = 'Series';
use Series;

my @cases = (
  {
    name => "Simple slices of one",
    input     => "01234",
    size      => 2,
  },
);
     
foreach my $case ( @cases ) {
    my $m = $module->new( $case->{input} );
    my @res = $m->slice($case->{size});
    print $case->{name}, " test result: @res\n";
}