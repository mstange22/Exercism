class SgfTree(object):
    def __init__(self, properties=None, children=None):
        self.properties = properties or {}
        self.children = children or []

    def __eq__(self, other):
        if not isinstance(other, SgfTree):
            return False
        for k, v in self.properties.items():
            if k not in other.properties:
                return False
            if other.properties[k] != v:
                return False
        for k in other.properties.keys():
            if k not in self.properties:
                return False
        if len(self.children) != len(other.children):
            return False
        for a, b in zip(self.children, other.children):
            if a != b:
                return False
        return True

    def __ne__(self, other):
        return not self == other

def parse_node(s, i, properties):
    key = ''
    value = []

    # get property
    while s[i] != '[':
        if not s[i].isupper():
            raise ValueError('Non-uppercase property')
        key += s[i]
        i += 1
        if i == len(s):
            raise ValueError('No delimiter')
    
    i += 1
    # get values
    while s[i] != ']':
        value.append(s[i])
        i += 1
    
    properties[key] = value
    return i + 1


def parse(input_string):
    if  len(input_string) < 3 or input_string[0] != '(' or input_string[-1] != ')':
        raise ValueError('Invalid input')
    
    properties = {}
    children = []
    parent = True

    index = 2
    while index < len(input_string) - 1:
        if parent:
            index = parse_node(input_string, index, properties)
            parent = False
        else:
            child = {}
            index = parse_node(input_string, index, child)
            children.append(SgfTree(child))
        index += 1
    
    return SgfTree(properties, children)

# parse('(;A[B];B[C])')