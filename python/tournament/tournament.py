def tally(tournament_results):
    res = ['Team                           | MP |  W |  D |  L |  P']
    if len(tournament_results) > 0:
        teams = {}
        for line in tournament_results.split('\n'):
            game_data = line.split(';')

            for i in range(2):
                # add team to dict if not yet seen
                if (game_data[i] not in teams.keys()):
                    teams[game_data[i]] = {
                        'matches': 0,
                        'wins': 0,
                        'draws': 0,
                        'losses': 0,
                        'points': 0,
                    }
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
            res.append(f'{team:<31}|{teams[team]["matches"]:>3} |'
                       f'{teams[team]["wins"]:>3} |{teams[team]["draws"]:>3} |'
                       f'{teams[team]["losses"]:>3} |{teams[team]["points"]:>3}')
    return '\n'.join(res)
