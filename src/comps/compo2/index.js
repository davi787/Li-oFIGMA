import { useState } from 'react'
import './index.scss'

export default function Somar() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resp, setResp] = useState(0);

    function soma(){   
        const x = n1 + n2;
        setResp(x);
    }

    return(
        <section className='faixa1'>
            <h1>Somar</h1>

            <input placeholder='numero 1' value={n1} onChange={e => setN1(Number(e.target.value))} />
            
            <input placeholder='numero 2' value={n2} onChange={e => setN2(Number(e.target.value))}/>

            <button onClick={soma}>Somar valores</button>

            <div > Resultado: {resp} </div>
        </section>
    )

}