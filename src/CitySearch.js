import React, { Component } from "react";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
    state = {
        query: "",
        suggestions: [],
        showSuggestions: undefined,
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true }); //
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            // renders user input and displays info alert if user input does not match suggestions
            this.setState({
                query: value,
                infoText:
                    "We cannot find the city you are looking for. Please try another city.",
            });
        } else {
            return this.setState({
                // else renders user input and list of suggestions, no info alert needed
                query: value,
                suggestions,
                infoText: "",
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            suggestions: [],
            showSuggestions: false,
            infoText: "", //check
        });
        this.props.updateEvents(suggestion);
    };

    render() {
        return (
            <div className="CitySearch" style={{ marginTop: "5px" }}>
                <h3 style={{ marginBottom: "10px" }}>Choose A City</h3>
                <input
                    type="text"
                    className="city"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={() => {
                        this.setState({ showSuggestions: true });
                    }}
                    placeholder="Search"
                    style={{
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        width: "100%",
                        marginBottom: "25px",
                    }}
                />
                <ul
                    className="suggestions"
                    style={
                        this.state.showSuggestions ? {} : { display: "none" }
                    }
                >
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                            style={{
                                padding: "8px",
                                cursor: "pointer",
                                listStyle: "none",
                            }}
                        >
                            {suggestion}
                        </li>
                    ))}
                    <li
                        onClick={() => this.handleItemClicked("all")}
                        style={{
                            padding: "8px",
                            cursor: "pointer",
                            listStyle: "none",
                            fontWeight: "bold",
                        }}
                    >
                        <b>See all cities</b>
                    </li>
                </ul>
                <InfoAlert
                    text={this.state.infoText}
                    style={{ marginTop: "110px", marginLeft: "-75px" }}
                />
            </div>
        );
    }
}

export default CitySearch;
