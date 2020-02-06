#!/usr/bin/env bash

res=""
input=${1//[-_*]/ }

for word in $input; do
  res+=${word:0:1}
done

echo ${res^^}