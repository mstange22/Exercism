import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Arrays;

class TeamResults {
  private int wins;
  private int draws;
  private int losses;

  TeamResults(int wins, int draws, int losses) {
    this.wins = wins;
    this.draws = draws;
    this.losses = losses;
  }

  int getWins() {
    return this.wins;
  }

  int getDraws() {
    return this.draws;
  }

  int getLosses() {
    return this.losses;
  }

  void addWin() {
    this.wins++;
  }

  void addDraw() {
    this.draws++;
  }

  void addLoss() {
    this.losses++;
  }

  int getMatches() {
    return this.wins + this.draws + this.losses;
  }

  int getPoints() {
    return this.wins * 3 + this.draws;
  }
}

class Tournament {

  private Map<String, TeamResults> teams = new HashMap<>();

  void applyResults(String matchResults) {
    Arrays.stream(matchResults.split("\n")).forEach(game -> {
      String[] gameInfo = game.split(";");
      for (int i = 0; i < 2; i++) {
        String team = gameInfo[i];
        boolean win = gameInfo[2].equals("win");
        boolean draw = gameInfo[2].equals("draw");
        if (i == 1) {
          win = gameInfo[2].equals("loss");
        }

        TeamResults temp;
        if (this.teams.containsKey(team)) {
          temp = this.teams.get(team);
        } else {
          temp = new TeamResults(0, 0, 0);
        }

        if (win) {
          temp.addWin();
        } else if (draw) {
          temp.addDraw();
        } else {
          temp.addLoss();
        }

        this.teams.put(team, temp);
      }
    });
  }

  String printTable() {
    return "Team                           | MP |  W |  D |  L |  P\n"
      + getRows();
  }

  String getRows() {
    return getSortedKeys().stream().map(key -> {
      TeamResults currTeam = this.teams.get(key);
      return String.format("%-31s| %2d | %2d | %2d | %2d | %2d\n",
        key, currTeam.getMatches(), currTeam.getWins(), currTeam.getDraws(),
        currTeam.getLosses(), currTeam.getPoints());
    }).collect(Collectors.joining(""));
  }

  List<String> getSortedKeys() {
    List<String> keys = new ArrayList<>(teams.keySet());
    keys.sort((a, b) -> {
      int aPoints = teams.get(a).getPoints();
      int bPoints = teams.get(b).getPoints();
      if (aPoints == bPoints) return a.compareTo(b);
      return bPoints - aPoints;
    });
    return keys;
  }
}