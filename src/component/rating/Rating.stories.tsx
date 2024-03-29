import type {Meta, StoryObj} from '@storybook/react';

import {Rating, ValueRatingType} from './Rating';
import {useState} from "react";


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export default {
    title: 'Rating stores',
    component: Rating
}

export const EmptyStars = () => <Rating value={0} onClick={x => x}/> ;
    export const Rating1 = () => <Rating value={1} onClick={x => x} />
    export const Rating2 = () => <Rating value={2} onClick={x => x} />
    export const Rating3 = () => <Rating value={3} onClick={x => x} />
    export const Rating4 = () => <Rating value={4} onClick={x => x} />
    export const Rating5 = () => <Rating value={5} onClick={x => x} />
  export const RatingChanging = () => {
        const [rating, setRating] = useState<ValueRatingType>(5);
        return <Rating value={rating} onClick={setRating} />
  }