package House;
use strict;
use warnings;

sub new { return bless {}, shift; }

sub recite {
  my @parts = (
    ["house that Jack built.", ""],
    ["malt", "lay in"],
    ["rat", "ate"],
    ["cat", "killed"],
    ["dog", "worried"],
    ["cow with the crumpled horn", "tossed"],
    ["maiden all forlorn", "milked"],
    ["man all tattered and torn", "kissed"],
    ["priest all shaven and shorn", "married"],
    ["rooster that crowed in the morn", "woke"],
    ["farmer sowing his corn", "kept"],
    ["horse and the hound and the horn", "belonged to"],
  );

  my @res;
  for (my $i = 0; $i < scalar @parts; $i++) {
    my $verse = q();
    $verse .= "This is the $parts[$i][0]\n";
    for (my $j = $i; $j > 0; $j--) {
      $verse .= "that $parts[$j][1] the $parts[$j-1][0]\n";
    }
    push @res, $verse;
  }
  return join "\n", @res;
}

1;
