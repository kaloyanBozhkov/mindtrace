import type { DefaultMantineColor, MantineThemeOverride, Tuple } from '@mantine/core'

// will be available as css variables with var(--mantine-color-{colorName}-{shade})
export const colors = {
  primary: ['#92B4F4'],
  primaryActive: ['#5E7CE2'],
  primaryBg: ['#0A369D', ''],
  secondary: [],
  secondaryActive: [],
  secondaryBg: [],
  gradient: ['linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);'],
}

export const spacing = {
  xxl: '40px',
}

export const fontSizes = {
  xxl: '1.5rem',
}

// same as brekapoints.scss
export const breakpoints = {
  xs: '599px',
  sm: '600px',
  md: '900px',
  lg: '1199px',
  xl: '1200px',
  xxl: '1800px',
}

export const defaultTheme: MantineThemeOverride = {
  // eslint-disable-next-line
  colors,
  spacing,
  breakpoints,
  fontSizes,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
}

export type ITheme = typeof defaultTheme

// add custom color names here
type ExtendedCustomColors = keyof typeof colors | DefaultMantineColor
declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}
