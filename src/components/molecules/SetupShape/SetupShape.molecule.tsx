import { useMemo } from 'react'

import { Group, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'

import { type ShapeNaming } from 'types/common'

import Circle from 'classes/Circle'
import Rectangle from 'classes/Rectangle'
import Shape from 'classes/Shape'

import ActionButton from 'components/atoms/ActionButton/ActionButton.atom'
import MTextInput from 'components/atoms/TextInput/TextInput.atom'

import styles from './styles.module.scss'

const SetupShape = ({
  shapeNaming,
  onConfirm,
  onCancel,
}: {
  shapeNaming: ShapeNaming
  onConfirm: (setup: Record<string, string | number>) => void
  onCancel: () => void
}) => {
  const { initialValues, validate } = useMemo(() => {
      switch (shapeNaming) {
        case 'circle':
          return {
            initialValues: Circle.getInitialFormFields(),
            validate: Circle.getFormValidaor(),
          }
        case 'rectangle':
          return {
            initialValues: Rectangle.getInitialFormFields(),
            validate: Rectangle.getFormValidaor(),
          }
        default:
          return {
            initialValues: Shape.getInitialFormFields(),
            validate: Shape.getFormValidaor(),
          }
      }
    }, [shapeNaming]),
    form = useForm({
      initialValues,
      validate,
    })

  return (
    <Stack className={styles.setupShape}>
      {Object.entries(initialValues).map((entry) => {
        const [fieldName, val] = entry
        return (
          <MTextInput
            key={fieldName}
            label={fieldName}
            // @TODO if shape types grow this will need changing
            type={typeof val === 'number' ? 'number' : 'text'}
            {...form.getInputProps(fieldName)}
          />
        )
      })}
      <Group position="right">
        <ActionButton
          label="Confirm"
          onClick={() => {
            const validationResult = form.validate()

            if (validationResult.hasErrors) return

            onConfirm(form.values)
          }}
          pl="xl"
          pr="xl"
        />
        <ActionButton label="Cancel" onClick={onCancel} modifier="secondary" pl="xl" pr="xl" />
      </Group>
    </Stack>
  )
}

export default SetupShape
