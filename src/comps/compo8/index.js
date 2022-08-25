import { useState } from 'react'
import './index.scss'


export default function Index(){
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState(0);
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [trabalha, setTrabalha] = useState('');

    const [nomeresp, setNomeresp] = useState('');
    const [nascimentoresp, setNascimentoresp] = useState(0);
    const [alturaresp, setAlturaresp] = useState('');
    const [pesoresp, setPesoresp] = useState('');


    function atualizar() {
        const a = nome 
        setNomeresp(a)
    
        const b = nascimento 
        setNascimentoresp(b)

        const c = altura
        setAlturaresp(c)

        const d = peso
        setPesoresp(d)

    }




    return(
        <main className='borda'>  
            <h1>Sobre mim</h1>

            <input type="text"  value={nome} onChange={e => setNome(e.target.value)} placeholder='Informe seu nome'></input>
            <input type="date"  value={nascimento} onChange={e => setNascimento(Number(e.target.value))} placeholder='Nascimento'></input>
            <input type="text" value={altura} onChange={e => setAltura(e.target.value)} placeholder='Altura'></input>
            <input type="text" value={peso} onChange={e => setPeso(e.target.value)} placeholder='Peso'></input>
            <input type="checkbox" value={trabalha} onChange={e => setTrabalha(e.target.checked)} placeholder='Peso'></input>

            <button onClick={atualizar} type="text"> Atualizar</button>


            <h1>Ficha </h1>
            <h1>Nome:{nomeresp} </h1>
            <h1>Nascimento: {nascimentoresp}</h1>
            <h1>Altura: {alturaresp}</h1>
            <h1>Trabalha:{trabalha ? "Sim" : "Não"} </h1>
            <h1>Peso:{pesoresp}</h1>
            <h1>IMC:</h1>
            

       </main>
    )

}