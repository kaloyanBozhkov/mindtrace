import { useState } from 'react'

import { Box, TextInput, type TextInputProps } from '@mantine/core'

import styles from './styles.module.scss'

const EHTextInput = ({ ...props }: Partial<TextInputProps>) => {
  const [focused, setFocused] = useState(false),
    isActiveByValue = props?.value ? (props.value as string).length > 0 : false

  return (
    <Box
      data-active={focused || isActiveByValue}
      data-invalid={!!props.error}
      className={styles.inputWrapper}
    >
      <TextInput
        type="text"
        className={styles.ehTxtInput}
        {...props}
        onFocus={(e) => {
          setFocused(true)
          props?.onFocus?.(e)
        }}
        onBlur={(e) => {
          setFocused(!!isActiveByValue)
          props?.onBlur?.(e)
        }}
      />
    </Box>
  )
}

export default EHTextInput
