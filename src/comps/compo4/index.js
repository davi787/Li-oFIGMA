import { useState } from 'react'
import './index.scss'

export default function Selecionar(){
    const [valor, setValor] = useState('');

    return(
        <main className='faixa1'>
            <h1> {valor} </h1>

            <select value={valor} onChange={e => setValor(e.target.value)}>
            <option >Carro</option>
            <option >Barco</option>
            <option >Aviao</option>
            <option >Dentista</option>
            </select>

        </main>
    )

}