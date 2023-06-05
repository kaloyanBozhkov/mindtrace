import type { DefaultMantineColor, MantineThemeOverride, Tuple } from '@mantine/core'

// will be available as css variables with var(--mantine-color-{colorName}-{shade})
export const colors = {
  frontPrimary: ['#9ACBFF', '#003355'],
  frontPrimaryActive: ['#a3cafa'],
  fontOldPrimary: ['#007aff'],
  frontSecondary: ['#FFF', '#D6E4F7', '#C2C7CF', '#8C9199'],
  frontAction: ['#FFD192', '#232323', '#252525', '#c9c8c8', '#fdfdfd'],
  frontActionActive: ['#e8c497'],
  backPrimary: ['#3A4857', '#333538', 'rgba(35, 35, 35, 0.5)', 'rgba(25, 25, 25, 1)'],
  backPrimaryActive: ['#4a5362'],
  backSecondary: ['#121316', '#42474e'],
  backGradientPrimary: [
    'linear-gradient(to bottom, #223041 0%, #0f141a 33%)',
    ' linear-gradient(180deg, rgba(58, 72, 87, 0.1) 0%, rgba(58, 72, 87, 0) 50.08%);',
  ],
  inputBackPrimary: ['#343538', '#1f1f22'],
  inputBackPrimaryActive: ['#424248', '#2e3032'],
  invalid: ['#fa5252'],
  transparentBgs: ['rgba(255, 255, 255, 0.1)'],
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
    'Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
}

export type ITheme = typeof defaultTheme

// add custom color names here
type ExtendedCustomColors = keyof typeof colors | DefaultMantineColor
declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}
