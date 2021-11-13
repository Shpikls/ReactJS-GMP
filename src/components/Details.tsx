import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import searchButton from '~/asserts/search-button.svg'
import { queryStateToAppUrl } from '~/helpers/queryStateToAppUrl'
import { querySelectors } from '~/redux/querySlice'

const useScrollTopOnMount = () => {
	useEffect(() => {
		window.scroll(0, 0)
	}, [])
}

const getMovie = async (id: number) => {
	const data = await fetch(`http://localhost:4000/movies/${id}`, { method: 'GET' })

	return data.json()
}

type Genres = string[]

type Data = {
	title: string
	poster_path: string
	vote_average: number
	genres: Genres
	release_date: string
	runtime: number
	overview: string
}

const initialData: Data = {
	title: '',
	poster_path: '',
	vote_average: 0,
	genres: [] as Genres,
	release_date: '',
	runtime: 0,
	overview: '',
}

const mapDataToState = (data: any): Data => {
	return {
		title: data.title || '',
		poster_path: data.poster_path || '',
		vote_average: data.vote_average || 0,
		genres: data.genres || ([] as Genres),
		release_date: data.release_date || '',
		runtime: data.runtime || 0,
		overview: data.overview || '',
	}
}

const useGetMovieByID = (id: number) => {
	const [data, setData] = useState(initialData)

	useEffect(() => {
		getMovie(id).then((data) => {
			setData(mapDataToState(data))
		})
	}, [id])

	return data
}

export const Details = ({ id }: { id: number }): JSX.Element => {
	useScrollTopOnMount()
	const data = useGetMovieByID(id)
	const navigate = useNavigate()
	const query = useSelector(querySelectors.all)

	return (
		<DetailsWrapper>
			<TopWrapper>
				<Logo>netflixroulette</Logo>
				<Button
					onClick={() => {
						const navigateURL = queryStateToAppUrl(query, { movie: false })
						navigate(`?${navigateURL}`, { replace: true })
					}}
				>
					<Img src={searchButton} alt="Search" />
				</Button>
			</TopWrapper>
			<MainWrapper>
				<Image src={data.poster_path} />
				<DetailsInfo>
					<TitleWrapper>
						<Title>{data.title}</Title>
						<Rating>{data.vote_average}</Rating>
					</TitleWrapper>
					<Genre>{data.genres.toString()}</Genre>
					<InfoWrapper>
						<Year>{data.release_date && data.release_date.length > 3 ? data.release_date.slice(0, 4) : ''}</Year>
						<Duration>{`${data.runtime} m`}</Duration>
					</InfoWrapper>
					<Description>{data.overview}</Description>
				</DetailsInfo>
			</MainWrapper>
		</DetailsWrapper>
	)
}

const Description = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	mix-blend-mode: normal;
	opacity: 0.5;
`

const Duration = styled.span`
	font-weight: 300;
	font-size: 24px;
	line-height: 29px;
	margin-right: 50px;
	color: #f65261;
`

const Year = styled.span`
	font-weight: 300;
	font-size: 24px;
	line-height: 29px;
	margin-right: 50px;
	color: #f65261;
`

const InfoWrapper = styled.div`
	display: flex;
	margin-bottom: 30px;
`

const Genre = styled.div`
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	margin-top: 4px;
	color: #ffffff;
	opacity: 0.5;
	margin-bottom: 30px;
`

const Rating = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 300;
	font-size: 20px;
	line-height: 24px;
	text-transform: uppercase;
	border: 1px solid white;
	border-radius: 50%;
	color: #ffffff;
`

const Title = styled.h3`
	padding: 0;
	margin: 0 25px 0 0;
	font-weight: 300;
	font-size: 40px;
	line-height: 49px;
	text-transform: uppercase;
	color: #ffffff;
`

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
`

const DetailsInfo = styled.div``

const Image = styled.img`
	margin-right: 60px;
	width: 324px;
	height: 486px;
`

const MainWrapper = styled.div`
	display: flex;
`

const Logo = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 24px;
	color: #f65261;
`

const TopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
`

const Img = styled.img`
	float: left;
`

const Button = styled.button`
	background-color: transparent;
	padding: 0;
	border: none;
`

const DetailsWrapper = styled.header`
	background-color: #232323;
	width: 1200px;
	margin: 0 auto 10px;
	padding: 20px 56px;
	box-sizing: border-box;
	color: #ffffff;
`
