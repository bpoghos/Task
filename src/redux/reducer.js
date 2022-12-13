import { FETCH_CATEGORIES, FETCH_CATS_BI_ID } from "./types";

const initState = ({
    categories: [],
    cats: []
})

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, categories: action.payload }
        case FETCH_CATS_BI_ID:
            return { ...state, cats: action.payload }




        default:
            return state

    }

}