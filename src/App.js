import React from "react";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        alert("Hello");
                    }}
                >
                    Click me
                </button>
            </div>
        );
    }
}

export default App;
