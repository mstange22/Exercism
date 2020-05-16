# based on given information, two house colors and one of each of the other properties
# can be determined.  Seed houses with known info to limit possible combinations
houses = {
    0: { 'color': 'yellow', 'inhabitant': 'Norwegian', 'smoke': 'Kools' },
    1: { 'color': 'blue', 'pet': 'horse' },
    2: { 'drink': 'milk' },
    3: {},
    4: {},
}

# remaining unknown properties and available house indexes
PROPERTIES = [{
    'property': 'inhabitants',
    'elements': ['Spaniard', 'Japanese', 'Ukrainian', 'Englishman'],
    'house_indexes': [1, 2, 3, 4],
}, {
    'property': 'smokes',
    'elements': ['Old Gold', 'Chesterfields', 'Lucky Strike', 'Parliaments'],
    'house_indexes': [1, 2, 3, 4],
},
{
    'property': 'drinks',
    'elements': ['orange juice', 'coffee', 'tea', 'water'],
    'house_indexes': [0, 1, 3, 4],
},
{
    'property': 'pets',
    'elements': ['snails', 'dog', 'fox', 'zebra'],
    'house_indexes': [0, 2, 3, 4],  
}]
    
# property index map for quick lookup once determined a possible solution
indexes = {
    'colors': { 'yellow': 0, 'blue': 1, 'red': -1, 'ivory': -1, 'green': -1 },
    'inhabitants': { 'Norwegian': 0, 'Englishman': -1, 'Spaniard': -1, 'Japanese': -1, 'Ukrainian': -1 },
    'smokes': { 'Kools': 0, 'Old Gold': -1, 'Chesterfields': -1, 'Lucky Strike': -1, 'Parliaments': -1 },
    'drinks': { 'milk': 2, 'coffee': -1, 'tea': -1, 'Orange Juice': -1, 'water': -1 },
    'pets': { 'horse': 1, 'dog': -1, 'snails': -1, 'fox': -1, 'zebra': -1 },
}

def check_solution():
    colors = indexes['colors']
    inhabitants = indexes['inhabitants']
    smokes = indexes['smokes']
    drinks = indexes['drinks']
    pets = indexes['pets']

    # successful result must satisfy all (variable) conditions
    if colors['red'] == inhabitants['Englishman'] and inhabitants['Spaniard'] == pets['dog'] and \
        colors['green'] == drinks['coffee'] and inhabitants['Ukrainian'] == drinks['tea'] and \
        smokes['Old Gold'] == pets['snails'] and abs(smokes['Chesterfields'] - pets['fox']) == 1 and \
        smokes['Lucky Strike'] == drinks['orange juice'] and inhabitants['Japanese'] == smokes['Parliaments']:
      return True

    return False

# recursively build all possible combinations, check solution each time
def check_properties(remaining_houses, remaining_elements, property_index):
    if len(remaining_elements) == 0:
        property_index += 1
        if property_index == len(PROPERTIES):
            return check_solution()
        else:
            next_property_houses = PROPERTIES[property_index]['house_indexes']
            next_property_elements = PROPERTIES[property_index]['elements']
            return check_properties(next_property_houses, next_property_elements, property_index)

    curr_property = PROPERTIES[property_index]['property']
    curr_house_index = remaining_houses[0]

    for curr_element in remaining_elements:
        houses[curr_house_index][curr_property[:-1]] = curr_element
        indexes[curr_property][curr_element] = curr_house_index

        new_remaining_elements = [x for x in remaining_elements if x != curr_element]
        is_solved = check_properties(remaining_houses[1:], new_remaining_elements, property_index)
        if is_solved:
            return True

    return False

def solve_puzzle():
    # from given information, 1st house is yellow, 2nd house is blue.
    # green house always to right of ivory house leaves only 2 options for remaining 3 colors
    for currColor in ['red', 'ivory']:
        if currColor == 'red':
            houses[2]['color'] = 'red'
            houses[3]['color'] = 'ivory'
            houses[4]['color'] = 'green'
            indexes['colors']['red'] = 2
            indexes['colors']['ivory'] = 3
            indexes['colors']['green'] = 4
        else:
            houses[2]['color'] = 'ivory'
            houses[3]['color'] = 'green'
            houses[4]['color'] = 'red'
            indexes['colors']['ivory'] = 2
            indexes['colors']['green'] = 3
            indexes['colors']['red'] = 4

        # check all possible combinations until solved
        is_solved = check_properties(PROPERTIES[0]['house_indexes'], PROPERTIES[0]['elements'], 0)
        if is_solved:
            return

solve_puzzle()

def drinks_water():
    return houses[[key for key in houses.keys() if houses[key]['drink'] == 'water'][0]]['inhabitant']

def owns_zebra():
    return houses[[key for key in houses.keys() if houses[key]['pet'] == 'zebra'][0]]['inhabitant']