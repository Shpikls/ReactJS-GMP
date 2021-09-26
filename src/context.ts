import React, { createContext } from 'react'
import { IModalState } from './types'

type IModalContext = [IModalState, React.Dispatch<React.SetStateAction<IModalState>>]

export const ModalContext = createContext<IModalContext>([{} as IModalState, () => {}])
