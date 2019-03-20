import re


def parse_heading(line):
    index = 0
    while line[index] == '#':
        index += 1
    return f'<h{index}>{line[index+1:]}</h{index}>'


def parse_bold_and_em(text):
    p = re.compile('(.*)__(.*)__(.*)')
    text = p.sub(r'\1<strong>\2</strong>\3', text)
    p = re.compile('(.*)_(.*)_(.*)')
    return p.sub(r'\1<em>\2</em>\3', text)


def parse_markdown(markdown):
    lines = markdown.split('\n')
    res = ''
    in_list = False
    for line in lines:
        # handle bold and italics
        line = parse_bold_and_em(line)
        # check if list
        if line[0] == '*':
            curr = line[2:]
            if not in_list:
                in_list = True
                line = f'<ul><li>{curr}</li>'
            else:
                line = f'<li>{curr}</li>'
        else:
            # added ul close tag
            if in_list:
                res += '</ul>'
                in_list = False
            if line[0] == '#':
                line = parse_heading(line)
            else:
                line = f'<p>{line}</p>'
        res += line

    return res if not in_list else f'{res}</ul>'