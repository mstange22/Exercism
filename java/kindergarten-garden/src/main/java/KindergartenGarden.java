import java.util.List;
import java.util.Arrays;

class KindergartenGarden {

    private final String[] plants;

    KindergartenGarden(String garden) {
        this.plants = garden.split("\n");
    }

    List<Plant> getPlantsOfStudent(String student) {
        int start = (student.charAt(0) - 'A') * 2;
        return Arrays.asList(
            Plant.getPlant(plants[0].charAt(start)),
            Plant.getPlant(plants[0].charAt(start + 1)),
            Plant.getPlant(plants[1].charAt(start)),
            Plant.getPlant(plants[1].charAt(start + 1))
        );
    }
}
