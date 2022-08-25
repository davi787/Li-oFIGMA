import { useState } from 'react'
import './index.scss'

export default function Contador() {
    const [n1, setN1] = useState(0);

    function add(){
        const x = n1 + 1
        setN1(x)
    }


    return(
        <section className='Borda'>
            <h1>Contador de passos</h1>

            <div> {n1} </div>

            <button onClick={add}>Adicionar mais um</button>

        </section>
    )
}