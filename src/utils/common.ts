export const extendClassNameProp = (className1: string, className2?: string) =>
  className2 ? [className1, className2].join(' ').trim() : className1

export const isValidColor = (str: string) => {
  const s = new Option().style
  s.color = str
  return s.color !== ''
}

export const txtInputVal =
  (label: string, max = 150, min = 2, canBeEmpty = false) =>
  (b: string) => {
    const v = b?.trim()
    if (!v && !canBeEmpty) return `Missing ${label}`
    if (v.length > max) return `Value for ${label} is too long, max ${max} chars`
    if (v.length < min) return `Value for ${label} is too short, at least ${min} chars`
    return null
  }

export const numInputVal =
  (label: string, max = 150, min = 2, canBeEmpty = false) =>
  (v: number) => {
    // assume we do not allow 0
    if (!v && !canBeEmpty) return `Missing ${label}`
    if (v > max) return `Value for ${label} is too big, max ${max}`
    if (v < min) return `Value for ${label} is too small, at least ${min}`
    return null
  }
