export const deg2rad = (deg: number) => deg * (Math.PI / 180)
export const extendClassNameProp = (className1: string, className2?: string) =>
  className2 ? [className1, className2].join(' ').trim() : className1
