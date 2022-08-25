import './index.scss'


export default function Remover(props) {

    return(
        <div>
           <p>{props.item} <span onClick={props.remover(props.item)}>(x)</span></p>
        </div>

    )

}