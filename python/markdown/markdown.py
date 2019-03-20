import re


def parse_heading(line):
    index = 0
    while line[index] == '#':
        index += 1
    return f'<h{index}>{line[index+1:]}</h{index}>'


def parse_bold(text):
    m = re.match('(.*)__(.*)__(.*)', text)
    if m:
        text = f'{m.group(1)}<strong>{m.group(2)}</strong>{m.group(3)}'
    return text


def parse_em(text):
    m = re.match('(.*)_(.*)_(.*)', text)
    if m:
        text = f'{m.group(1)}<em>{m.group(2)}</em>{m.group(3)}'
    return text


def parse_markdown(markdown):
    lines = markdown.split('\n')
    res = ''
    in_list = False
    for line in lines:
        # handle bold and italics
        line = parse_bold(line)
        line = parse_em(line)
        # check if list
        ul = re.match(r'\* (.*)', line)
        if ul:
            curr = ul.group(1)
            if not in_list:
                in_list = True
                line = '<ul><li>' + curr + '</li>'
            else:
                line = '<li>' + curr + '</li>'
        else:
            # added closing out ul tag
            if in_list:
                res += '</ul>'
            in_list = False
            if line[0] == '#':
                line = parse_heading(line)
            else:
                line = '<p>' + line + '</p>'
        res += line
    if in_list:
        res += '</ul>'
    return res
