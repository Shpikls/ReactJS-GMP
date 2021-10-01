import React, { createContext } from 'react'
import { IModalState, Sort } from './types'

type IModalContext = [IModalState, React.Dispatch<React.SetStateAction<IModalState>>]
type ISortContext = [Sort, React.Dispatch<React.SetStateAction<Sort>>]
interface IState {
	details: number | null
}

type IDetailsState = [IState, React.Dispatch<IAction>]
interface IAction {
	type: string
	id: number | null
}

export const ModalContext = createContext<IModalContext>([
	{} as IModalState,
	{} as React.Dispatch<React.SetStateAction<IModalState>>,
])
export const SortContext = createContext<ISortContext>([{} as Sort, {} as React.Dispatch<React.SetStateAction<Sort>>])

export const DetailsState = createContext<IDetailsState>([{} as IState, {} as React.Dispatch<IAction>])
