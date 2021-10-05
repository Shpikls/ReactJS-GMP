type Item = {
	name: string
	id: number
	image: string
	genre: Array<string>
	year: number
	duration: {
		hours: number
		minutes: number
	}
	rating: string
	description: string
	feature?: string
}

type GenreType = {
	id: number
	value: string
}

interface IModalState {
	addModal: boolean
	editMovie: boolean
	deleteMovie: boolean
}

type Sort = string | undefined

export { Item, GenreType, IModalState, Sort }
