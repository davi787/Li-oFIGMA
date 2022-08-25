import { useState } from 'react'
import './index.scss'

export default function Index() {
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [resp, setResp] = useState();
    
    function somar() {
        const x = n1 + n2
        setResp(x)
    }

    return(
        <main className='faixa1'>
            <h1>Somar dois números</h1>

            <input type="number" value={n1} onChange={e => setN1(Number(e.target.value))}></input>
            <input type="number" value={n2}  onChange={e => setN2(Number(e.target.value))}></input>

            <h1>{resp}</h1>

            <button onClick={somar}>Somar</button>
        </main>
    )

}