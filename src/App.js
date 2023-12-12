import React from "react";
import "./App.css";

class Button extends React.Component {
    // class compnent
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

const Button1 = (props) => {
    // function component
    return <button>{props.children}</button>;
};

class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         counter: 0,
    //         counterBy2: 0
    //     };
    // }

    state = {
        counter: 0,
        counterBy2: 0
    };

    handleCounter = (e) => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    handleCounterBy2 = (e) => {
        this.setState({
            counterBy2: this.state.counterBy2 + 2
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleCounter}>
                    Click Me {this.state.counter}
                </Button>
                <Button onClick={this.handleCounterBy2}>
                    Click Me {this.state.counterBy2}
                </Button>
            </div>
        );
    }
}

export default App;
