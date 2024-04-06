import React from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input />;
export const ControlledInputWithFixedValue = () => <input value = {"it-incubator.by"} />;