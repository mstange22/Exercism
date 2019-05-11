use 5.10.0;
use strict;
use warnings;

my $module = 'Crypto';
use Crypto;

my $c = Crypto->new('Madness, and then illumination');
# my $res = $c->normalize_plaintext();
# my $res = $c->size();
# my $res = $c->plaintext_segments();
# my $res = $c->ciphertext();
my $res = $c->normalize_ciphertext();
print "res: $res\n";
