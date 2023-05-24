import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    state = {
        number: 32,
        errorText: "",
    };

    handleNumberChange = (event) => {
        let inputValue = event.target.value;
        this.props.updateEvents(null, inputValue);
        this.setState({ number: inputValue });
        if (inputValue > 32) {
            this.setState({ errorText: "Select number from 1 to 32" });
        } else {
            return this.setState({ errorText: "" });
        }
    };

    render() {
        return (
            <div
                className="NumberOfEvents"
                style={{
                    position: "fixed",
                    top: -20,
                    left: 700,
                    right: 0,
                    backgroundColor: "#f5f5f5",
                    padding: "15px",
                    textAlign: "center",
                    zIndex: 9999,
                }}
            >
                <div style={{ marginBottom: "20px" }}>
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
                        padding: "10px",
                    }}
                />
                <div>
                    <ErrorAlert text={this.state.errorText} />
                </div>
            </div>
        );
    }
}

export default NumberOfEvents;
