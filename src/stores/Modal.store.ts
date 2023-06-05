import type { ReactElement, ReactNode } from 'react'

import { create } from 'zustand'

interface IModalComponentProps {
  title?: ReactNode
  children?: ReactElement
  className?: string
}

type ModalProps = {
  title?: ReactNode
  children?: ReactElement
  opened: boolean
  className?: string
  onClose: () => void
}
interface IModalStore {
  modalProps: ModalProps
  prevModals: ModalProps[]
  // modal controls for handling modal
  controls: {
    closeModal: (onClose?: () => void) => void
    openModal: (
      props: IModalComponentProps,
      onOpen?: () => void,
      // can only handle 1 prev modal for now.. use Mantine's handler in future
      returnToPreviousModalOnCLose?: boolean,
      onClose?: () => void
    ) => void
    toggleModal: (props: IModalComponentProps, onClose?: () => void, onOpen?: () => void) => void
  }
}

export const useModal = create<IModalStore>((set) => ({
  modalProps: {
    opened: false,
    // mandatory onClose for mantine Modal
    onClose: () =>
      set((prev) => ({
        modalProps: {
          ...prev.modalProps,
          opened: false,
        },
      })),
  },
  prevModals: [],
  controls: {
    closeModal: () => {
      set((prev) => {
        const withPrevModalOpen = prev.prevModals.length > 0
        prev.modalProps.onClose?.()
        return {
          modalProps: {
            ...prev.modalProps,
            opened: false,
            ...(withPrevModalOpen && {
              ...prev.prevModals[0],
              opened: true,
            }),
          },
          prevModals: [],
        }
      })
    },
    openModal: (props, onOpen, returnToPreviousModalOnCLose = false, onClose = () => ({})) => {
      set((prev) => ({
        modalProps: {
          ...prev.modalProps,
          ...props,
          onClose,
          opened: true,
        },
        prevModals: returnToPreviousModalOnCLose ? [prev.modalProps] : [],
      }))

      onOpen?.()
    },
    toggleModal: (props, onClose, onOpen) =>
      set((prev) => {
        const opened = !prev.modalProps.opened
        if (opened) onOpen?.()
        else onClose?.()

        return {
          modalProps: {
            ...prev.modalProps,
            ...props,
            opened,
          },
        }
      }),
  },
}))
