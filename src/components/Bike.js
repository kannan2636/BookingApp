import React from "react";

class Car extends React.Component {
    constructor() {
        super();
        this.state = { numbers: 0 };
    }

    decrease = () => {
        this.setState(prevState => ({ numbers: prevState.numbers - 1 }));
    };

    increase = () => {
        this.setState(prevState => ({ numbers: prevState.numbers + 1 }));
    };

    render() {
        return (
            <>
                <h1>We can operate Number on Class Component</h1>
                <p>{this.state.numbers}</p>
                <button onClick={this.decrease}>Decrement</button>
                <button onClick={this.increase}>Increment</button>
                <p>I'm a Bike!</p>
            </>
        );
    }
}

export default Car;
