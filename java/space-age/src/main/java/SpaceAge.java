class SpaceAge {
    double _seconds;
    double _onEarth;
    SpaceAge(double seconds) {
        _seconds = seconds;
        _onEarth = _seconds / 31557600;
    }

    double getSeconds() {
        return _seconds;
    }

    double onEarth() {
        return _onEarth;
    }

    double onMercury() {
        return _onEarth * 0.2408467;
    }

    double onVenus() {
        return _onEarth * 0.61519726;
    }

    double onMars() {
        return _onEarth * 1.8808158;
    }

    double onJupiter() {
        return _onEarth * 11.862615;
    }

    double onSaturn() {
        return _onEarth * 29.447498;
    }

    double onUranus() {
        return _onEarth * 84.016846;
    }

    double onNeptune() {
        return _onEarth * 164.79132;
    }
}