// Reviews reducer

import { GET_REVIEWS, ADD_REVIEW, DELETE_REVIEW } from '../actions/types.js';

const initialState = {
    reviews: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }
        case DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.payload) // Return all the reviews that weren't deleted
            }
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload] // The payload is the new review
            }
        default:
            return state;
    }
}