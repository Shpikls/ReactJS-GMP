import { Item } from '~/types'
import img1 from '../asserts/1.png'
import img2 from '../asserts/2.png'
import img3 from '../asserts/3.png'
import img4 from '../asserts/4.png'
import img5 from '../asserts/5.png'
import img6 from '../asserts/6.png'

const sortString = (stringA: string, stringB: string) => {
	const arrayA = stringA.toLowerCase().split('')
	const arrayB = stringB.toLowerCase().split('')

	for (let key = 0; key < arrayA.length; key++) {
		if (arrayA[key] > arrayB[key]) {
			return 1
		} else if (arrayA[key] < arrayB[key] || (arrayA[key + 1] === undefined && arrayB[key + 1] !== undefined)) {
			return -1
		}
	}

	return 0
}

type Duration = {
	hours: number
	minutes: number
}

const durationSort = (a: Duration, b: Duration) => {
	if (a.hours > b.hours) {
		return -1
	}

	if (a.hours < b.hours) {
		return 1
	}

	if (a.minutes > b.minutes) {
		return -1
	}

	if (a.minutes < b.minutes) {
		return 1
	}

	return 0
}

export const getCards = (sort?: string): Item[] => {
	switch (sort) {
		case 'rating':
			return cards.sort(({ rating: ratingA }, { rating: ratingB }) => sortString(ratingB, ratingA))
		case 'movie title':
			return cards.sort(({ name: nameA }, { name: nameB }) => sortString(nameA, nameB))
		case 'duration':
			return cards.sort(({ duration: durationA }, { duration: durationB }) => durationSort(durationA, durationB))
	}

	return cards.sort(({ year: yearA }, { year: yearB }) => yearB - yearA)
}

export const cards: Item[] = [
	{
		id: 1,
		name: 'Pulp Fiction',
		image: img1,
		year: 2004,
		genre: ['Action', 'Adventure'],
		rating: '8.9',
		duration: {
			hours: 2,
			minutes: 34,
		},
		description:
			'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two ' +
			'hit men who are out to retrieve a suitcase stolen from their employer, mob boss ' +
			'Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia ' +
			'(Uma Thurman) out a few days later when Wallace himself will be out of town. Butch ' +
			'Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. ' +
			'The lives of these seemingly unrelated people are woven together comprising of a ' +
			'series of funny, bizarre and uncalled-for incidents.—Soumitra',
	},
	{
		id: 2,
		name: 'Bohemian Rhapsody',
		image: img2,
		year: 2003,
		genre: ['Drama', 'Biography', 'Music'],
		rating: '7.9',
		duration: {
			hours: 2,
			minutes: 14,
		},
		description: '',
	},
	{
		id: 3,
		name: 'Kill Bill: Vol 2',
		image: img3,
		year: 1994,
		genre: ['Action', 'Adventure'],
		feature: 'Oscar winning Movie',
		rating: '8.0',
		duration: {
			hours: 2,
			minutes: 17,
		},
		description: '',
	},
	{
		id: 4,
		name: 'Avengers: War of Infinity',
		image: img4,
		year: 2004,
		genre: ['Action', 'Adventure'],
		rating: '7.9',
		duration: {
			hours: 2,
			minutes: 40,
		},
		description: '',
	},
	{
		id: 5,
		name: 'Inception',
		image: img5,
		year: 2003,
		genre: ['Action', 'Adventure'],
		rating: '8.7',
		duration: {
			hours: 2,
			minutes: 28,
		},
		description: '',
	},
	{
		id: 6,
		name: 'Reservoir dogs',
		image: img6,
		year: 1994,
		genre: ['Action', 'Adventure'],
		feature: 'Oscar winning Movie',
		rating: '8.3',
		duration: {
			hours: 1,
			minutes: 40,
		},
		description: '',
	},
]
