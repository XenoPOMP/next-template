#!/bin/bash

# Set IFS to newline only
IFS=$'\n'

file_path="./.temp/missing-dependabot-deps.txt"

# Recreate file
mkdir -p .temp
rm -rf $file_path
touch $file_path

function cmd-installed() {
  if command -v "$1" &> /dev/null; then
      echo true
  else
      echo false
  fi
}

function require-cmd() {
    cmd=$1
    error_message=$2
    is_installed=$(cmd-installed $cmd)

    # Command is not installed. Show error message.
    if [[ "$is_installed" = "false" ]]; then
      # Check if error message is provided
      if [[ -n "$error_message" ]]; then
        echo "$error_message" >&2
      else
        echo "\"$cmd\" is required for script execution. Please, install it." >&2
      fi

      exit 1
    fi
}

require-cmd jq
require-cmd yq

# Fetch dependencies, presented in Dependabot groups
dependabot_deps=$(yq '.updates[0].groups[].patterns[]' -o json .github/dependabot.yml)
# Fetch package.json dependencies
package_json_deps=$(jq '(.["dependencies"] * .["devDependencies"]) | keys.[]' package.json)

handled_count=0
skipped_count=0

echo -e "$package_json_deps" >> $file_path

for handled_dep in $dependabot_deps; do
  for installed_dep in $package_json_deps; do
    if [[ $installed_dep == $handled_dep ]]; then
      ((handled_count++))

    if grep -q "$installed_dep" $file_path; then
      new_content=$(sed "s#$installed_dep##g" $file_path | sed '/^[[:space:]]*$/d')
      echo "$new_content" > $file_path
      ((handled_count++))
    else
      ((handled_count++))
    fi

    else
      ((skipped_count++))
    fi
  done
done