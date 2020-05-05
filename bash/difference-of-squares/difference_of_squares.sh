#!/usr/bin/env bash

n=$2
(( sum=($n*($n + 1))/2 ))
(( square_of_sum=$sum*$sum ))
(( sum_of_squares=($n * ($n+1) * ((2 * $n) + 1)) / 6 ))

case $1 in
  "square_of_sum" ) res=$square_of_sum ;;
  "sum_of_squares" ) res=$sum_of_squares ;;
  *) (( res=$square_of_sum - $sum_of_squares )) ;;
esac

echo $res
