from collections import defaultdict

FORMAT = '{:<31}|{:>3} |{:>3} |{:>3} |{:>3} |{:>3}'

def tally(tournament_results):
    res = [FORMAT.format('Team', 'MP', 'W', 'D', 'L', 'P')]
    if tournament_results:
        teams = {}
        for line in tournament_results.splitlines():
            game_data = line.split(';')

            for i in range(2):
                # add team to dict if not yet seen
                if (game_data[i] not in teams.keys()):
                    teams[game_data[i]] = defaultdict(int)
                teams[game_data[i]]['matches'] += 1

            team1 = game_data[0]
            team2 = game_data[1]

            # update team results
            if game_data[2] == 'win':
                teams[team1]['wins'] += 1
                teams[team1]['points'] += 3
                teams[team2]['losses'] += 1
            elif game_data[2] == 'draw':
                for i in range(2):
                    teams[game_data[i]]['draws'] += 1
                    teams[game_data[i]]['points'] += 1
            else:
                teams[team1]['losses'] += 1
                teams[team2]['wins'] += 1
                teams[team2]['points'] += 3

        # sort by points (desc), then by team name
        for team in sorted(teams.keys(), key=lambda x: (-teams[x]['points'], x)):
            res.append(FORMAT.format(team, teams[team]['matches'], teams[team]['wins'],
                teams[team]['draws'], teams[team]['losses'], teams[team]['points']))
    return '\n'.join(res)
