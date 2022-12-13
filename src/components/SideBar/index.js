import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories, fetchCatsById } from "../../redux/action"
import './styles.scss'


export const SideBar = () => {

    const dispatch = useDispatch()
    const { categories } = useSelector((s) => s.reducer)

    useEffect(() => {
        dispatch(fetchCategories)
    }, [dispatch])

    const cats = categories.length ? categories.map((cat) => {
        return (
            <p className="onClick" key={cat.id} id={cat.id} onClick={() => dispatch(fetchCatsById(10, 1, cat.id))}>{cat.name}</p>
        )
    }) : 'error'

    return (
        <div className="sideBar">
            <div className="caategories">
            {cats}
            </div>
        </div>
    )


}


