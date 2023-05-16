import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;

    beforeEach(() => {
        NumberOfEventsWrapper = shallow(
            <NumberOfEvents updateNumberOfEvents={() => {}} />
        );
    });

    test("renders the component", () => {
        expect(NumberOfEventsWrapper.exists()).toBe(true);
    });

    test("displays 32 events by default", () => {
        expect(NumberOfEventsWrapper.state("number")).toBe(32);
    });

    test("renders input correctly", () => {
        const number = NumberOfEventsWrapper.state("number");
        expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(
            number
        );
    });

    test("updates state when user input changes", () => {
        const event = { target: { value: "10" } };
        NumberOfEventsWrapper.find(".number").simulate("change", event);
        expect(NumberOfEventsWrapper.state("number")).toBe("10");
    });

    test("renders the correct number of events based on user input", () => {
        const numberOfEvents = 10;
        const RenderedNumberOfEvents = shallow(
            <NumberOfEvents
                number={numberOfEvents}
                updateNumberOfEvents={() => {}}
            />
        );
        expect(RenderedNumberOfEvents.state("number")).toBe(numberOfEvents);
    });
});
