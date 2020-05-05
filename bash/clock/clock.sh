#!/usr/bin/env bash

normalize() {
  (( minutes=((($1 + ($2 / 60)) % 24) + 24) * 60 + ($2 % 60) ))
}

validate() {
  re='^[-0-9]+$'
  if (( $# < 2 || $# > 4 || $# == 3 )) ||
    ( (( $# == 4 )) && ( [[ $3 == "/" ]] || ! [[ $4 =~ $re ]] ) ) ||
    ! ([[ $1 =~ $re ]] && [[ $2 =~ $re ]]); then
      echo *"invalid arguments"*
      exit 1
  fi
}

validate "$@"
normalize "$@"

if (( $# > 2 )); then
  [[ $3 == "+" ]] && (( minutes+=$4 )) || (( minutes-=$4))
  normalize "0" "$minutes"
fi

(( hours = (minutes / 60) % 24 ))
(( minutes%=60 ))
printf "%02d:%02d\n" $hours $minutes
