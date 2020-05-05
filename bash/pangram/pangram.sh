#!/usr/bin/env bash
alpha="abcdefghijklmnopqrstuvwxyz"
lower=${1,,}

for (( i=0; i<${#alpha}; i++ )); do
  [[ $lower != *"${alpha:i:1}"* ]] && { echo "false"; exit 0; }
done

echo "true"
