import React, {Component} from 'react';


class Counter extends React.Component {
    render() {
        const { increment, counter, decrement } = this.props;

        return (
            <>
                <button type="button" onClick={decrement}>
                    -
                </button>
                {counter}
                <button type="button" onClick={increment}>
                    +
                </button>
            </>
        );
    }
}

class TestingLiftingUp extends React.Component {
    state = {
        clicks: 0,
        counter: 0
    };

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1,
            clicks: this.state.clicks + 1
        });
    };

    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
            clicks: this.state.clicks + 1
        });
    };

    render() {
        const { clicks, counter } = this.state;

        return (
            <div className="App">
                <Counter
                    increment={this.increment}
                    decrement={this.decrement}
                    counter={counter}
                />
                <p>You have clicked {clicks} times!</p>
            </div>
        );
    }
}

export default TestingLiftingUp;
