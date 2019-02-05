def triplets_with_sum(sum_of_triplet):
  triplets = []
  for i in range(1, (sum_of_triplet // 3)):
    for j in range(i + 1, (sum_of_triplet - i - 1 // 2) + 1):
        k = sum_of_triplet - i - j
        if i * i + j * j == k * k:
          triplets.append((i, j, k))
        elif i * i + j * j > k * k:
          break
  return set(triplets)