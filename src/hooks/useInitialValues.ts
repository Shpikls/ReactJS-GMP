import { useEffect, useState } from 'react'

interface FormikValues {
	title: string
	poster_path: string
	overview: string
	runtime: string
	genres: string[]
	id?: number
	vote_average?: string
	release_date?: string
}

const getDataFromID = async (id?: number): Promise<FormikValues> => {
	const data = await fetch(`http://localhost:4000/movies/${id}`, { method: 'GET' })

	return data.json()
}

export const useInitialValues = (id?: number): FormikValues | undefined => {
	const [data, setData] = useState<FormikValues | undefined>(undefined)

	useEffect(() => {
		if (id) {
			getDataFromID(id).then(({ title, poster_path, overview, runtime, genres, vote_average, release_date }) => {
				setData({
					id,
					title,
					poster_path,
					overview,
					runtime,
					genres,
					vote_average,
					release_date,
				})
			})
		} else {
			setData({
				title: '',
				poster_path: '',
				overview: '',
				runtime: '',
				genres: [] as string[],
				vote_average: '',
				release_date: '',
			})
		}
	}, [])

	return data
}
