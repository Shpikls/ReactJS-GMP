type Item = {
	title: string
	id: number
	poster_path: string
	genres: Array<string>
	release_date: string
	runtime: number
	vote_average: number
	overview: string
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
