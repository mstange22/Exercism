package SpaceAge {
  use strict;
  use warnings;

  sub new {
    my ($class, $seconds) = @_;
    return bless {
        seconds => $seconds,
        earth_years => $seconds / 31557600,
    }, $class;
  }

  sub seconds {
    return shift->{seconds}
  }

  sub on_earth {
    return sprintf("%.2f", shift->{earth_years});
  }

  sub on_mercury {
    return sprintf("%.2f", shift->{earth_years}/ 0.2408467);
  }

  sub on_venus {
    return sprintf("%.2f", shift->{earth_years} / 0.61519726);
  }

  sub on_mars {
    return sprintf("%.2f", shift->{earth_years}/ 1.8808158);
  }

  sub on_jupiter {
    return sprintf("%.2f", shift->{earth_years} / 11.862615);
  }

  sub on_saturn {
    return sprintf("%.2f", shift->{earth_years} / 29.447498);
  }

  sub on_uranus {
    return sprintf("%.2f", shift->{earth_years} / 84.016846 );
  }

  sub on_neptune {
    return sprintf("%.2f", shift->{earth_years} / 164.79132);
  }
};

1;