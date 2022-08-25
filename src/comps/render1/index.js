import { useState } from 'react'
import './index.scss'

export default function Index() {
    const [mostrar, setMostrar] = useState(false);

    const [resp, setResp] = useState('')

    function show() {
        setMostrar(!mostrar)
    }

    return(
        <section> 
            <div className='faixa1'>
            <button className='butao' onClick={show}> Abrir/fechar pergunta </button>

            {mostrar === true &&
                <p>Quem?</p>
                
            }
            </div>

            <div>

                <h1>Qual desses personagens são usúarios de espadas?</h1>


            <input type="radio" onClick={e => setResp(true)} name='One'/>Zoro
            <input type="radio" onClick={e => setResp(false)} name='One'/>Sanji
            <input type="radio" onClick={e => setResp(false)} name='One'/>Luffy
            <input type="radio" onClick={e => setResp(false)} name='One'/>Nami

            {resp === true &&
                <p>Acertou</p>
            }

            {resp === undefined &&
               <p>""</p>
           }

            {resp === false && 
                <p>Errou

                </p>
            }

            </div>
        </section>
    )

}