export const keep = <T>(list: T[], func: Function): T[] => {
  return list.reduce((accum: T[], el: T) => {
    return func(el) ? [...accum, el] : accum
  }, [])
}

export const discard = <T>(list: T[], func: Function): T[] => {
  return keep(list, (el: T) => !func(el))
}