import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(
            <NumberOfEvents
                updateNumberOfEvents={() => {}}
                updateEvents={() => {}}
            />
        );
    });

    // test 1
    test("renders the component", () => {
        expect(NumberOfEventsWrapper).toBeDefined();
    });

    // test 2
    test("user sees 32 events by default", () => {
        expect(NumberOfEventsWrapper.find("input.number").prop("type")).toBe(
            "number"
        );
        expect(NumberOfEventsWrapper.state("number")).toBe(32);
    });

    // test 3
    test("renders input correctly", () => {
        const number = NumberOfEventsWrapper.state("number");
        expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(
            number
        );
    });

    // test 4
    test("change state when user input changes", () => {
        expect(NumberOfEventsWrapper.state("number")).toBe(32);
        NumberOfEventsWrapper.find("input.number").simulate("change", {
            target: { value: 12 },
        });
        expect(NumberOfEventsWrapper.state("number")).toBe(12);
    });

    // test 5
    test("rendered number of events is equal to the users input", () => {
        const RenderedNumberOfEvents = shallow(
            <NumberOfEvents number={10} updateEvents={() => {}} /> //was updateNumberOfEvents
        );
        expect(RenderedNumberOfEvents.state("number")).toBe(32);
    });
});
