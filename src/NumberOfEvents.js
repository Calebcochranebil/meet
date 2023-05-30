import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    state = {
        number: 32,
        errorText: "",
    };

    handleNumberChange = (event) => {
        let inputValue = event.target.value;

        // Check if the input is a negative number and set it to 0 if true
        if (inputValue < 0) {
            inputValue = 0;
        }

        this.props.updateEvents(null, inputValue);
        this.setState({ number: inputValue });

        if (inputValue > 32) {
            this.setState({ errorText: "Select number from 1 to 32" });
        } else {
            this.setState({ errorText: "" });
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
                    backgroundColor: "#808080",
                    padding: "20px",
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
                    <ErrorAlert
                        text={this.state.errorText}
                        style={{ marginLeft: "-17px", marginTop: "102px" }}
                    />
                </div>
            </div>
        );
    }
}

export default NumberOfEvents;
