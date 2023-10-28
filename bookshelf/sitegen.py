import re

# Define a dictionary to map unsafe characters to their HTML entities
html_entities = {
    'À': '&Agrave;', 'È': '&Egrave;', 'Ì': '&Igrave;', 'Ò': '&Ograve;', 'Ù': '&Ugrave;', 'Ý': '&Yacute;',
    'à': '&agrave;', 'è': '&egrave;', 'ì': '&igrave', 'ò': '&ograve;', 'ù': '&ugrave;', 'Á': '&Aacute;', 'É': '&Eacute;',
    'Í': '&Iacute;', 'Ó': '&Oacute;', 'Ú': '&Uacute;', 'Ý': '&Yacute;', 'á': '&aacute;', 'é': '&eacute;',
    'í': '&iacute;', 'ó': '&oacute;', 'ú': '&uacute;', 'ý': '&yacute;', 'Â': '&Acirc;', 'Ê': '&Ecirc;', 'Î': '&Icirc;',
    'Ô': '&Ocirc;', 'Û': '&Ucirc;', 'â': '&acirc;', 'ê': '&ecirc;', 'î': '&icirc;', 'ô': '&ocirc;', 'û': '&ucirc;',
    'Ã': '&Atilde;', 'Ñ': '&Ntilde;', 'Õ': '&Otilde;', 'ã': '&atilde;', 'ñ': '&ntilde;', 'õ': '&otilde;', 'Ä': '&Auml;',
    'Ë': '&Euml;', 'Ï': '&Iuml;', 'Ö': '&Ouml;', 'Ü': '&Uuml;', 'Ÿ': '&Yuml;', 'ä': '&auml;', 'ë': '&euml;', 'ï': '&iuml;',
    'ö': '&ouml;', 'ü': '&uuml;', 'Ÿ': '&Yuml;'
}

# Function to convert unsafe characters to HTML-safe entities
def convert_unsafe_characters(text):
    for char, entity in html_entities.items():
        text = text.replace(char, entity)
    return text

# Function to parse the markdown content and extract bookshelf items
def parse_markdown(markdown_content):
    items = []
    lines = markdown_content.split('\n')
    current_item = None

    for line in lines:
        line = convert_unsafe_characters(line)
        if re.match(r'^[^-]', line):
            if current_item:
                items.append(current_item)
            current_item = {'title': '', 'authors': [], 'ddc': ''}
            current_item['title'] = line.strip()
        elif re.match(r'^- ', line):
            parts = line.strip('- ').strip()
            if parts[0].isdigit():
                current_item['ddc'] = parts
            else:
                if parts != 'N/A':
                    current_item['authors'] = [author.strip() for author in parts.split(',')]
    if current_item:
        items.append(current_item)
    return items

# Read the markdown file
with open('bookshelf.md', 'r') as file:
    markdown_content = file.read()

# Parse the markdown content
bookshelf_items = parse_markdown(markdown_content)

# Define sections and their DDC ranges
sections = {
    "Computer Science & Generalities": (0, 99),
    "Philosophy and Psychology": (100, 199),
    "Religion": (200, 299),
    "Social Sciences": (300, 399),
    "Language": (400, 499),
    "Mathematics, Physics": (500, 599),
    "Home and Applied Sciences": (600, 699),
    "The Arts": (700, 799),
    "Literature": (800, 899),
    "History, Geography": (900, 999)
}

# Create section tables
section_tables = {section: [] for section in sections}

# Categorize books into sections
for item in bookshelf_items:
    ddc = int(float(item['ddc']))
    for section, (start, end) in sections.items():
        if start <= ddc <= end:
            section_tables[section].append(item)

# Generate the HTML page
html = """<html><head><title>Bookshelf</title>
<link href="/static/css/style.css" rel="stylesheet">
<link href="/static/css/icons/iconstyle.css" rel="stylesheet">
<link rel="icon" type="image/ico" href="/static/favicon.ico"/>
</head><body>"""
html += """<h1 style="display: inline-block;">
<a class="icon" href="../">
    <i class="icon icon-home" style="font-size:36px;"></i>
</a>
My Bookshelf
</h1>"""

# Add a style section for table border
html += "<style>table { border-collapse: collapse; width: 100%; }"
html += "table, th, td { border: 1px solid black; }"
html += "th:nth-child(1), td:nth-child(1) { width: 50%; }"
html += "th:nth-child(2), td:nth-child(2), th:nth-child(3), td:nth-child(3) { width: 25%; }"
html += "td:nth-child(3) { text-align: center; }</style>"

# Generate section headers and book tables
for section, items in section_tables.items():
    html += f"<h1>{section} ({len(items)})</h1>"
    if len(items) > 0:
        html += "<table><tr><th>Title</th><th>Authors</th><th>DDC</th></tr>"
        for item in items:
            html += f"<tr><td>{item['title']}</td><td>{', '.join(item['authors'])}</td><td>{item['ddc']}</td></tr>"
        html += "</table>"

# Close the HTML document
html += "</body></html>"

# Save the generated HTML to a file
with open('index.html', 'w') as output_file:
    output_file.write(html)

print("HTML generated and saved to 'index.html'.")

