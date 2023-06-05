export const extendClassNameProp = (className1: string, className2?: string) =>
  className2 ? [className1, className2].join(' ').trim() : className1

export const isValidColor = (str: string) => {
  const s = new Option().style
  s.color = str
  return s.color !== ''
}
