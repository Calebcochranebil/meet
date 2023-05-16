import React, { Component } from "react";

class NumberOfEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number || 32,
        };
    }

    handleNumberChange = (event) => {
        const value = event.target.value;
        this.setState({ number: value });
        this.props.updateNumberOfEvents(value);
    };

    render() {
        const { number } = this.state;

        return (
            <div className="NumberOfEvents">
                <input
                    className="number"
                    value={number}
                    onChange={this.handleNumberChange}
                />
            </div>
        );
    }
}

export default NumberOfEvents;
