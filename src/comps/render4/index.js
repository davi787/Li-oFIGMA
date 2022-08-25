import { useState } from 'react'
import './index.scss'

export default function Index() {
    const [background, setBackground] = useState(false);
    const [background2, setBackground2] = useState(true);

    const [fundo, setFundo] = useState('')


    return(
        <main className='block1'>

            <div className='block2'>

            </div>

            <p></p>


        </main>


    )

}