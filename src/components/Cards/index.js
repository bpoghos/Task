import { useSelector } from "react-redux"
import "./styles.scss"


export const Cards = () => {

    const { cats } = useSelector((s) => s.reducer)

    const cards = cats.length ? cats.map((cat) => {
        return (
            <img className="img" key={cat.id} alt="" src={cat.url} />
        )
    }) : 'No Images'

    return (
        <div className="cards">
            {cards}
        </div>
    )
}