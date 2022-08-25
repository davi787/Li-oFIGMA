import { useState } from 'react'
import './index.scss'
import Remover from '../remover/remover';

export default function Index() {
    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([]);

    function adicionar() {
            let novalista = [...lista, tarefa]
            setLista(novalista)
            setTarefa('')
    }

    function remover(a) {
        const b = lista.filter(item => item !== a)
        setLista(b)
    }

    return(
        <main>
            <h1> Lista de tarefas </h1>

            <input value={tarefa} onChange={e => setTarefa(e.target.value)}></input>

            <button onClick={adicionar}>Adicionar</button>

            {lista.map(item => (
              <Remover remover={remover} item={item}/>
            ))}


        </main>

    )

}