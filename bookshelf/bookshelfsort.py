import re

# Function to parse the markdown content and extract bookshelf items
def parse_markdown(markdown_content):
    items = []
    lines = markdown_content.split('\n')
    current_item = None

    for line in lines:
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

# Function to sort bookshelf items by DDC
def sort_by_ddc(items):
    # Sort items by DDC, but leave items with "N/A" DDC in place
    sorted_items = sorted([item for item in items if item['ddc'] != 'N/A'], key=lambda item: item['ddc'])
    return sorted_items

# Read the markdown file
with open('bookshelf.md', 'r') as file:
    markdown_content = file.read()

# Parse the markdown content
bookshelf_items = parse_markdown(markdown_content)

# Sort the items by DDC and leave "N/A" DDC items in their original order
sorted_items = sort_by_ddc(bookshelf_items)

# Print the sorted items
for item in sorted_items:
    print(item['title'])
    if item['authors']:
        print('- ' + ', '.join(item['authors']))
    if item['ddc']:
        print('- ' + item['ddc'])
    print()

