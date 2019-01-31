package tournament

import (
	"bufio"
	"errors"
	"fmt"
	"io"
	"sort"
	"strings"
)

// Record is a team's record
type Record struct {
	name   string
	wins   int
	draws  int
	losses int
	points int
}

var results = map[string]Record{}

// Tally writes the results of a tournament.
func Tally(in io.Reader, out io.Writer) error {
	results = make(map[string]Record)
	standings, err := GetStandings(in)
	if err != nil {
		return err
	}
	if len(standings) < 1 {
		return errors.New("invalid input")
	}
	header := "Team                           | MP |  W |  D |  L |  P\n"
	fmt.Fprintf(out, header)
	for _, team := range standings {
		matchesPlayed := team.wins + team.draws + team.losses
		fmt.Fprintf(out, "%s%s|  %d |  %d |  %d |  %d |  %d\n",
			team.name, strings.Repeat(" ", 31-len(team.name)), matchesPlayed,
			team.wins, team.draws, team.losses, team.points)
	}
	return nil
}

// GetStandings returns the standings as an array of Records.
func GetStandings(in io.Reader) ([]Record, error) {
	scanner := bufio.NewScanner(in)
	for scanner.Scan() {
		tokens := strings.Split(scanner.Text(), ";")
		if len(tokens) == 3 && !strings.HasPrefix(tokens[0], "#") {
			err := ProcessResult(tokens[0], tokens[1], tokens[2])
			if err != nil {
				return nil, err
			}
		}
	}

	// copy map into slice and sort
	standings := []Record{}
	for _, r := range results {
		standings = append(standings, r)
	}

	// sort slice on points, then alphabetically
	sort.Slice(standings, func(i, j int) bool {
		if standings[i].points == standings[j].points {
			return standings[i].name < standings[j].name
		}
		return standings[i].points > standings[j].points
	})

	return standings, nil
}

// ProcessResult applies the current result to the result map.
func ProcessResult(team1 string, team2 string, result string) error {
	// if team1 does not exist in results
	if _, ok := results[team1]; !ok {
		team1Record := Record{name: team1}
		results[team1] = team1Record
	}
	// if team1 does not exist in results
	if _, ok := results[team2]; !ok {
		team2Record := Record{name: team2}
		results[team2] = team2Record
	}

	// now update team1 and team2
	team1Record := results[team1]
	team2Record := results[team2]
	if result == "win" {
		team1Record.wins++
		team2Record.losses++
		team1Record.points += 3
	} else if result == "loss" {
		team1Record.losses++
		team2Record.wins++
		team2Record.points += 3
	} else if result == "draw" {
		team1Record.draws++
		team2Record.draws++
		team1Record.points++
		team2Record.points++
	} else {
		return errors.New("invalid input")
	}
	results[team1] = team1Record
	results[team2] = team2Record

	return nil
}
