import { type MouseEvent, type ReactNode } from 'react'

import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Button, type ButtonProps } from '@mantine/core'

import { extendClassNameProp } from 'utils/common'

import styles from './styles.module.scss'

export type ActionBtnModifier =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'action'
  | 'actionSecondary'
  | 'chip'
  | 'icon'

export type ActionButtonProps = {
  label?: string | ReactNode
  className?: string
  modifier?: ActionBtnModifier
  isFilled?: boolean
  isNaked?: boolean
  onClick?: ((e: MouseEvent<HTMLButtonElement>) => void) | (() => void)
  onMouseEnter?: ((e: MouseEvent<HTMLButtonElement>) => void) | (() => void)
  onMouseLeave?: ((e: MouseEvent<HTMLButtonElement>) => void) | (() => void)
  rightFontAwesomeIcon?: IconProp
  leftFontAwesomeIcon?: IconProp
  iconStyles?: FontAwesomeIconProps['style']
  withShadow?: boolean
}

const ActionButton = ({
  label,
  className,
  modifier = 'primary',
  rightFontAwesomeIcon,
  leftFontAwesomeIcon,
  iconStyles,
  isNaked,
  isFilled,
  withShadow,
  ...props
}: ActionButtonProps & Partial<ButtonProps>) => (
  <Button
    variant="filled"
    className={extendClassNameProp(styles.actionButton as string, className)}
    data-modifier={modifier}
    data-naked={isNaked}
    data-filled={isFilled}
    data-shadow={withShadow}
    rightIcon={
      rightFontAwesomeIcon && <FontAwesomeIcon icon={rightFontAwesomeIcon} style={iconStyles} />
    }
    leftIcon={
      leftFontAwesomeIcon && <FontAwesomeIcon icon={leftFontAwesomeIcon} style={iconStyles} />
    }
    {...props}
  >
    {typeof label === 'string' ? <p>{label}</p> : label}
  </Button>
)

export default ActionButton
