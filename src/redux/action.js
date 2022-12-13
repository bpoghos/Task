import { FETCH_CATEGORIES, FETCH_CATS_BI_ID } from "./types";

export const fetchCatsById = (limit, page, id) => async (dispatch) => {
    const fetchedData = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}_ids=${id}`)
    const data = await fetchedData.json()
    dispatch({type: FETCH_CATS_BI_ID, payload: data})}

export const fetchCategories = async(dispatch) => {
    const fetchData = await fetch('https://api.thecatapi.com/v1/categories')
    const data = await fetchData.json()
    dispatch({type: FETCH_CATEGORIES, payload: data})
}