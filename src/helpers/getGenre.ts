import { GenreType, Item } from 'src/types'

type GenreArray = GenreType[]

const selectorGenre = (item: Item) => item.genre
const collectGenre = (collect: string[], item: string[]) => Array.from(new Set(collect.concat(item)))
const format = (result: GenreArray, item: string, index: number) => {
	result.push({
		id: index,
		value: item,
	})

	return result
}

export const getGenre = (data: Item[]): GenreArray =>
	data.map(selectorGenre).reduce(collectGenre, []).reduce(format, [])
