import React from "react"
import './GenreToggle.css'

class GenreToggle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 'default'
        }

        this.handleClick = this.handleClick.bind(this)
        this.classNameButton = this.classNameButton.bind(this)
    }

    handleClick(element) {
        this.setState({
                isActive: element.dataset.id.toString()
            }
        )
    }

    classNameButton(id) {
        return (
            'genre-list__button' + ((this.state.isActive === id) ? ' genre-list__button_active' : '')
        )
    }

    render() {
        return (
            <div className="genre-list">
                <button
                    className={this.classNameButton('default')}
                    data-id="default"
                    onClick={(event) => {this.handleClick(event.target)}}
                >All</button>
                {this.props.genreList.map((genre) => {
                    return (
                        <button
                            className={this.classNameButton(genre.id.toString())}
                            key={genre.id}
                            data-id={genre.id}
                            onClick={(event) => {this.handleClick(event.target)}}
                        >{genre.name}</button>
                    )
                })}
            </div>
        )
    }
}

export { GenreToggle }