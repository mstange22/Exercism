#!/usr/bin/env bash
alpha="abcdefghijklmnopqrstuvwxyz"
lower=${1,,}

for (( i=0; i<${#alpha}; i++ )); do
  letter=${alpha:i:1}
  (( found=0 ))
  for (( j=0; j<${#lower}; j++ )); do
    if [[ ${lower:j:1} == $letter ]]; then
      (( found=1 ))
      break
    fi
  done
  (( $found == 0 )) && break
done

(( $found == 0 )) && echo "false" || echo "true"
