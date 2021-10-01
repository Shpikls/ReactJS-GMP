import { goToSearch } from '@containers/App'
import React, { useContext, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import searchButton from '~/asserts/search-button.svg'
import { DetailsState } from '~/context'
import { Item } from '~/types'

type PropsDetails = {
	data: Item[]
}

const useScrollTopOnMount = () => {
	useEffect(() => {
		window.scroll(0, 0)
	}, [])
}

export const Details = ({ data }: PropsDetails): JSX.Element => {
	const [{ details }, dispatchDetailsState] = useContext(DetailsState)

	const detailsData = useMemo(
		() => data.filter((item) => item.id == details).reduce((accum, item) => item),
		[details],
	)

	useScrollTopOnMount()

	return (
		<DetailsWrapper>
			<TopWrapper>
				<Logo>netflixroulette</Logo>
				<Button onClick={() => dispatchDetailsState(goToSearch())}>
					<Img src={searchButton} alt="Search" />
				</Button>
			</TopWrapper>
			<MainWrapper>
				<Image src={detailsData.image} />
				<DetailsInfo>
					<TitleWrapper>
						<Title>{detailsData.name}</Title>
						<Rating>{detailsData.rating}</Rating>
					</TitleWrapper>
					<Genre>{genreFormatting(detailsData.genre)}</Genre>
					<InfoWrapper>
						<Year>{detailsData.year}</Year>
						<Duration>{`${detailsData.duration.hours}h ${detailsData.duration.minutes}min`}</Duration>
					</InfoWrapper>
					<Description>{detailsData.description}</Description>
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

const genreFormatting = (data: string[]): string => {
	if (data.length > 2) {
		return data.reduce((accum, item) => `${accum}, ${item}`)
	}

	return data.reduce((accum, item) => `${accum} & ${item}`)
}

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
