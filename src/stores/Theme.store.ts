import { create } from 'zustand'

import { type ITheme, defaultTheme } from '@/scss/variables'

export interface IThemeStore {
  theme: ITheme
  updateThemeVar: (k: keyof ITheme, v: ITheme[keyof ITheme]) => void
  updateColor: (
    colorName: keyof NonNullable<ITheme['colors']>,
    c: { shadeIndex: number; color: string }
  ) => void
  reset: () => void
}

export const useTheme = create<IThemeStore>((set) => ({
  theme: defaultTheme,
  updateThemeVar: (k, v) =>
    set((s) => ({
      theme: {
        ...s.theme,
        [k]: v,
      },
    })),
  updateColor: (colorName, { shadeIndex, color }) =>
    set((s) => {
      const exists = s.theme.colors && colorName in s.theme.colors,
        colors = {
          ...s.theme.colors,
          [colorName]: exists
            ? s.theme.colors![colorName]?.map((c, i) => (i === shadeIndex ? color : c))
            : [color],
        }

      return {
        theme: {
          ...s.theme,
          colors,
        },
      }
    }),
  reset: () => set(() => ({ theme: defaultTheme })),
}))
