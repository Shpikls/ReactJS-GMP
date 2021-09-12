import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: null
        }
    }

    componentDidMount() {
        this.handleClick();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !!(nextState.counter % 2);
    }

    handleClick(action) {
        switch (action) {
            case this.actions.INCREMENT:
                this.setState(({ counter }) =>  ({ counter: ++counter }))
                break;
            case this.actions.DECREMENT:
                this.setState(({ counter }) =>  ({ counter: --counter }))
                break;
            default:
                this.setState({ counter: 1 })
        }
    }

    actions = {
        DECREMENT: 'DECREMENT',
        INCREMENT: 'INCREMENT',
    }

    style = {
        "margin": "0 5px"
    }

    render() {
        return (
            <div>
                <p>Render isOdd counter</p>
                <button onClick={() => this.handleClick(this.actions.DECREMENT)}>-</button>
                <span style={this.style}>{this.state.counter}</span>
                <button onClick={() => this.handleClick(this.actions.INCREMENT)}>+</button>
            </div>
        )
    }
}

export { Counter }