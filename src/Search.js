import React from "react"
import './Search.css'

class Search extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchText: '',
        }

        this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this)
        this.handleClickSearchButton = this.handleClickSearchButton.bind(this)
    }

    handleChangeSearchValue(newValue) {
        this.setState((state) => ({
            ...state,
            searchValue: newValue,
        }))
    }

    handleClickSearchButton() {
        this.setState((state) => ({
            ...state,
            searchText: state.searchValue
        }))
    }

    render() {
        return (
            <>
                <div className="search">
                    <SearchInput value={this.state.searchValue} handleChange={this.handleChangeSearchValue} />
                    <SearchButton handleClick={this.handleClickSearchButton} />
                </div>
                {(this.state.searchText) ? <code>Query search: {this.state.searchText}</code> : null}
            </>
        )
    }
}

class SearchInput extends React.PureComponent {
    render() {
        return (
            <input
                className="search__input"
                type="text"
                value={this.props.value}
                placeholder="What do you want to watch?"
                onChange={(event) => {
                    this.props.handleChange(event.target.value)
                }}
            />
        )
    }
}

class SearchButton extends React.PureComponent {
    render() {
        return (
            <button
                type="button"
                className="search__button"
                onClick={() => {this.props.handleClick()}}
            >search</button>
        )
    }
}

export { Search }