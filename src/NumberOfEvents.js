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
                    top: -25,
                    left: 1350,
                    right: 0,
                    backgroundColor: "#f5f5f5",
                    padding: "10px",
                    textAlign: "center",
                    zIndex: 9999,
                }}
            >
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                        Number of Events
                    </span>
                </div>
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
