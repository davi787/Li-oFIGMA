import { useState } from 'react'
import './index.scss'

export default function Mudarnome() {
    const [titulo, setTitulo] = useState('');

    return(
        <main className='tudo'>
            <h1> {titulo}   </h1>

            <input value={titulo} onChange={e => setTitulo(e.target.value)}  ></input>

        </main>
    )

}




