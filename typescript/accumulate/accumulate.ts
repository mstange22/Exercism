const accumulate = (list: any[], func: Function) => {
  const res: any[] = [];
  for (const element of list) {
    res.push(func(element));
  }
  return res;
}

export default accumulate;
