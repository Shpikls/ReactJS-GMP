import React, { createContext } from 'react'
import { IModalState, Sort } from './types'

type IModalContext = [IModalState, React.Dispatch<React.SetStateAction<IModalState>>]
type ISortContext = [Sort, React.Dispatch<React.SetStateAction<Sort>>]

export const ModalContext = createContext<IModalContext>([
	{} as IModalState,
	{} as React.Dispatch<React.SetStateAction<IModalState>>,
])
export const SortContext = createContext<ISortContext>([{} as Sort, {} as React.Dispatch<React.SetStateAction<Sort>>])
