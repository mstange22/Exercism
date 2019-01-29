import java.lang.Math;

class DnDCharacter {
    private int _strength;
    private int _dexterity;
    private int _constitution;
    private int _intelligence;
    private int _wisdom;
    private int _charisma;
    private int _constitutionModifier;
    private int _hitpoints;
    
    DnDCharacter() {
        _strength = getRandom();
        _dexterity = getRandom();
        _constitution = getRandom();
        _intelligence = getRandom();
        _wisdom = getRandom();
        _charisma = getRandom();
        _constitutionModifier = Math.floorDiv((_constitution - 10), 2);
        _hitpoints = 10 + _constitutionModifier;
    }

    int ability() {
        return getRandom();
    }

    int modifier(int input) {
        _constitution = input;
        _constitutionModifier = Math.floorDiv((_constitution - 10), 2);
        _hitpoints = 10 + _constitutionModifier;
        return _constitutionModifier;
    }

    int getRandom() {
        int sum = 0;
        int min = 7;
        for (int i = 0; i < 4; i++) {
            int roll = (int)(Math.random() * 6) + 1;
            sum += roll;
            if (roll < min) {
                min = roll;
            }
        }
        return sum - min;
    }

    int getStrength() {
        return _strength;
    }

    int getDexterity() {
        return _dexterity;
    }

    int getConstitution() {
        return _constitution;
    }

    int getIntelligence() {
        return _intelligence;
    }

    int getWisdom() {
        return _wisdom;
    }

    int getCharisma() {
        return _charisma;
    }

    int getHitpoints() {
        return _hitpoints;
    }
}