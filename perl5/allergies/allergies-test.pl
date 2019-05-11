use 5.10.0;
use strict;
use warnings;

my $module = 'Allergies';
use Allergies;

my $a = Allergies->new(509);

my $res = $a->allergic_to('strawberries');
# my $res = $a->list();

print "res: $res\n";