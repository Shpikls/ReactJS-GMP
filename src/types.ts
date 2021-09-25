type Item = {
	name: string
	id: number
	image: string
	genre: Array<string>
	year: number
	duration?: string
	rating?: string
	description?: string
	feature?: string
}

type GenreType = {
	id: number
	value: string
}

export { Item, GenreType }
