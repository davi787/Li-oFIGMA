import { useState } from 'react'
import './index.scss'

export default function Index() {
    const [titulo, setTitulo] = useState('');
    const [resp, setResp] = useState('');
    
    function atualizar() {
        const x = titulo
        setResp(x)
    }
    return(
        <main className='faixa1'>
            <h1> {resp} </h1>  

            <input value={titulo} onChange={e => setTitulo(e.target.value)} type="text" />

            <button onClick={atualizar}>Atualizar</button>
        </main>
    )
}