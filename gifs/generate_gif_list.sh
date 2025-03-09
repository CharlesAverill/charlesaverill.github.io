#!/bin/bash

# Find all .gif files in the current directory and store them in an array
gif_files=($(find . -maxdepth 1 -type f -name "*.gif" -printf '"%f"\n'))

# Check if any .gif files were found
if [ ${#gif_files[@]} -eq 0 ]; then
  echo "No .gif files found in the current directory."
  exit 1
fi

# Print the JavaScript array
echo "const imageUrls = ["
printf "  %s,\n" "${gif_files[@]}" | sed '$ s/,$//'
echo "];"
