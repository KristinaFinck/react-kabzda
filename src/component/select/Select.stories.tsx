import {Select} from "./Select";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Example/Select',
    component: Select,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Moscow'},
            {value: '3', title: 'Kyiv'}
        ],
        value: '1',
        onChange: () => {
        }
    }
};

