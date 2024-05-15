import {reducer, StateType, TOGGLE_COLLAPSED_CONSTANT} from "./reduser";

test('reducer should have value to opposite value', () => {
    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED_CONSTANT})
    // expectation
    expect(newState.collapsed).toBe(true);
})

test('reducer should be false', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED_CONSTANT})
    // expectation
    expect(newState.collapsed).toBe(false);
})
test('reducer should throw an error because action type is incorrect', () => {
    // data
    const state: StateType = {
        collapsed: true
    }
    // action
expect(() => {
reducer(state, {type: "FAKE"})}).toThrowError();
})