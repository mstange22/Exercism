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
        _strength = ability();
        _dexterity = ability();
        _constitution = ability();
        _intelligence = ability();
        _wisdom = ability();
        _charisma = ability();
        _constitutionModifier = Math.floorDiv((_constitution - 10), 2);
        _hitpoints = 10 + _constitutionModifier;
    }

    int ability() {
        int sum = 0;
        int min = 6;
        for (int i = 0; i < 4; i++) {
            int roll = (int)(Math.random() * 6) + 1;
            sum += roll;
            if (roll < min) {
                min = roll;
            }
        }
        return sum - min;
    }

    int modifier(int input) {
        _constitution = input;
        _constitutionModifier = Math.floorDiv((_constitution - 10), 2);
        _hitpoints = 10 + _constitutionModifier;
        return _constitutionModifier;
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