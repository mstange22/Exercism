#!/usr/bin/env bash

s=${1//[[:space:]]/}

[[ $s == "" ]] && { echo "Fine. Be that way!"; exit 0; }

question='^.*\?$'
letters='[a-zA-Z]+'

if [[ $s =~ $question ]]; then
  [[ $s == ${s^^} && $s =~ $letters ]] && { echo "Calm down, I know what I'm doing!"; exit 0; }
  echo "Sure."
  exit 0
fi

[[ $s == ${s^^} && $s =~ $letters ]] && { echo "Whoa, chill out!"; exit 0; }

echo "Whatever."