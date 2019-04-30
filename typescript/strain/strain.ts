function keep<T>(list: T[], f: Function): T[] {
  const res: T[] = [];
  for (const element of list) {
    if (f(element)) {
      res.push(element);
    }
  }
  return res;
}

function discard<T>(list: T[], f: Function): T[] {
  const res: T[] = [];
  for (const element of list) {
    if (!f(element)) {
      res.push(element);
    }
  }
  return res;
}

export { keep, discard }
