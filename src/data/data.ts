import { Item } from '~/types'
import img1 from '../asserts/1.png'
import img2 from '../asserts/2.png'
import img3 from '../asserts/3.png'
import img4 from '../asserts/4.png'
import img5 from '../asserts/5.png'
import img6 from '../asserts/6.png'

export const getCards = (): Array<Item> | Array<[]> => {
	return cards

	// if (Math.floor(Math.random() * 10)) {
	// 	return cards
	// }
	//
	// return []
}

export const cards: Array<Item> = [
	{
		id: 1,
		name: 'Pulp Fiction',
		image: img1,
		year: 2004,
		genre: ['Action', 'Adventure'],
	},
	{
		id: 2,
		name: 'Bohemian Rhapsody',
		image: img2,
		year: 2003,
		genre: ['Drama', 'Biography', 'Music'],
	},
	{
		id: 3,
		name: 'Kill Bill: Vol 2',
		image: img3,
		year: 1994,
		genre: ['Action', 'Adventure'],
		feature: 'Oscar winning Movie',
	},
	{
		id: 4,
		name: 'Avengers: War of Infinity',
		image: img4,
		year: 2004,
		genre: ['Action', 'Adventure'],
	},
	{
		id: 5,
		name: 'Inception',
		image: img5,
		year: 2003,
		genre: ['Action', 'Adventure'],
	},
	{
		id: 6,
		name: 'Reservoir dogs',
		image: img6,
		year: 1994,
		genre: ['Action', 'Adventure'],
		feature: 'Oscar winning Movie',
	},
]
