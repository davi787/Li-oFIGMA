
import { useState } from 'react'
import './index.scss'

export default function Selecionar(){
    const [resp, setResp] = useState(false);

    return(
        <main className='faixa1'>
            <h1>Selecionado?</h1>

            <div> {resp ? 'Sim' : 'Não'} </div>

            <input type="checkbox" value={resp} onChange={e=> setResp(e.target.checked)}></input>
            
    
        </main>
    )

}