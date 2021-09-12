import React from 'react'

class PureRender extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }

        this.renderCount = 0;
    }

    render() {
        this.renderCount++
        return (
            <div>
                <p>Pure Component State Count {this.state.count}</p>
                <button onClick={() => {this.setState({ count: 20 })}}>Set count 20</button>
                <button onClick={() => {this.setState((state) => ({ count: ++state.count }))}}>Increment count</button>
                <br/>
                <code>Render call components: {this.renderCount}</code>
            </div>
        )
    }
}

export { PureRender }