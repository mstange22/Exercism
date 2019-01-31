package tournament

import (
	"bufio"
	"errors"
	"fmt"
	"io"
	"sort"
	"strconv"
	"strings"
)

// Record is a team's record
type Record struct {
	name   string
	wins   int
	losses int
	draws  int
	points int
}

// Tally writes the results of a tournament.
func Tally(in io.Reader, out io.Writer) error {
	standings, err := GetStandings(in)
	if err != nil {
		return err
	}
	header := "Team                           | MP |  W |  D |  L |  P\n"
	fmt.Fprintf(out, header+standings)
	return nil
}

// GetStandings returns the standings as a string.
func GetStandings(in io.Reader) (string, error) {
	res := ""
	teams, err := BuildStandings(in)
	if err != nil {
		return "", err
	}
	if len(teams) < 1 {
		return "", errors.New("invalid input")
	}
	for _, team := range teams {
		res += team
	}
	return res, nil
}

// BuildStandings returns the standings as an array of strings.
func BuildStandings(in io.Reader) (res []string, err error) {
	results := map[string]Record{}
	scanner := bufio.NewScanner(in)
	for scanner.Scan() {
		fmt.Printf("%s\n", scanner.Text())
		// line := scanner.Text()
		tokens := strings.Split(scanner.Text(), ";")
		if len(tokens) == 3 && !strings.HasPrefix(tokens[0], "#") {
			results, err = ProcessResult(tokens[0], tokens[1], tokens[2], results)
			if err != nil {
				return nil, err
			}
		}
	}

	// copy map into slice and sort
	resultsSlice := []Record{}
	for _, r := range results {
		resultsSlice = append(resultsSlice, r)
	}

	// sort slice on points, then alphabetically
	sort.Slice(resultsSlice, func(i, j int) bool {
		if resultsSlice[i].points == resultsSlice[j].points {
			return resultsSlice[i].name < resultsSlice[j].name
		}
		return resultsSlice[i].points > resultsSlice[j].points
	})

	// build each team's record string and append it to res
	for _, v := range resultsSlice {
		temp := v.name + strings.Repeat(" ", 31-len(v.name))
		temp += ("|  " + strconv.Itoa(v.wins+v.draws+v.losses) + " ")
		temp += ("|  " + strconv.Itoa(v.wins) + " ")
		temp += ("|  " + strconv.Itoa(v.draws) + " ")
		temp += ("|  " + strconv.Itoa(v.losses) + " ")
		temp += ("|  " + strconv.Itoa(v.points) + "\n")
		res = append(res, temp)
	}
	return
}

// ProcessResult applies the current result to the result map.
func ProcessResult(team1 string, team2 string, result string, results map[string]Record) (map[string]Record, error) {
	// if team1 does not exist in results
	if _, ok := results[team1]; !ok {
		team1Record := Record{
			name:   team1,
			wins:   0,
			draws:  0,
			losses: 0,
			points: 0,
		}
		results[team1] = team1Record
	}
	// if team1 does not exist in results
	if _, ok := results[team2]; !ok {
		team2Record := Record{
			name:   team2,
			wins:   0,
			draws:  0,
			losses: 0,
			points: 0,
		}
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
		return results, errors.New("invalid input")
	}
	results[team1] = team1Record
	results[team2] = team2Record

	return results, nil
}
