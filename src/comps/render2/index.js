import { useState } from 'react'
import './index.scss'

export default function Index() {
    const [resp, setResp] = useState(false);

    function show() {
        setResp(!resp)
    }

    return(
        <main>
            <h1>Biscoitinho da sorte</h1>

            <button className='butao' onClick={show}>Abrir</button>

            {resp === true &&
                <p>Sempre haverá pessoas melhores e piores em
                habilidades diferentes. Avance e ajude.</p>
            }


        </main>
    )



}