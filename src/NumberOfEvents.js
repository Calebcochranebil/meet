import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        number: 32,
    };

    handleNumberChange = (event) => {
        let inputValue = event.target.value;
        this.props.updateEvents(null, inputValue);
        this.setState({ number: inputValue });
    };

    render() {
        return (
            <div
                className="NumberOfEvents"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    backgroundColor: "#f5f5f5",
                    padding: "10px",
                }}
            >
                <input
                    id="number-of-events"
                    type="number"
                    className="number"
                    value={this.state.number}
                    onChange={this.handleNumberChange}
                    style={{
                        width: "60px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        padding: "4px",
                    }}
                />
            </div>
        );
    }
}

export default NumberOfEvents;
