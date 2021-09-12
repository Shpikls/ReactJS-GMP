import React from "react"
import { Header } from "./Header"
import { Counter } from "./Counter"
import { PureRender } from "./PureRender"
import { Search } from "./Search"
import {GenreToggle} from "./GenreToggle";

const genreList = [
    {
        name: 'Documentary',
        id: 1,
    },
    {
        name: 'Comedy',
        id: 2,
    },
    {
        name: 'Horror',
        id: 3,
    },
    {
        name: 'Crime',
        id: 4,
    },
]

export const App = () => {
    return (
        <React.Fragment>
            {Header}
            <hr/>
            <Counter />
            <hr/>
            <PureRender />
            <hr/>
            <Search />
            <hr/>
            <GenreToggle genreList={genreList}/>
        </React.Fragment>
    )
}