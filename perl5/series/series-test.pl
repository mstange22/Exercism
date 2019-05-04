#!/usr/bin/env perl
use strict;
use warnings;

# use Test::More tests=> 17;
use FindBin qw($Bin);
use lib $Bin, "$Bin/local/lib/perl5";
# use Test2::Tools::Exception qw(dies);

my $module = 'Series';
use Series;

# use_ok($module) or BAIL_OUT("You need to create a module called $module.pm");
# can_ok($module, "new") or BAIL_OUT("You need to implement the new(input)-function");
# can_ok($module, "slice") or BAIL_OUT("You need to implement the slice(size)-function");

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