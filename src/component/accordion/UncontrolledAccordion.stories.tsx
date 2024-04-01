import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UnControlledAccordion} from "./UnControlledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UnControlledAccordion,
};

const callback = action('accordion mode change event fired');

export const ModeChanging = () => {
    return <UnControlledAccordion titleValue={"Users"}  />
};