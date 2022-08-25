import './index.scss'
import Ex1 from '../comps/compo1'
import Ex2 from '../comps/compo2'
import Ex3 from '../comps/compo3'
import Ex4 from '../comps/compo4'
import Ex5 from '../comps/compo5'
import Ex6 from '../comps/compo6'
import Ex7 from '../comps/compo7'
import Ex8 from '../comps/compo8'
import Efeito from '../comps/Efeito'
import Render1 from '../comps/render1'
import Render2 from '../comps/render2'
import Render3 from '../comps/render3'
import Render4 from '../comps/render4'
import Estado from '../comps/UseStateArray'

export default function Index(){

    return(
        <section className="faixa">
            <h1> Estudando ReactJS | Variável de Estado </h1>

            <Ex1/>
            <Ex2/>
            <Ex3/>
            <Ex4/>
            <Ex5/>
            <Ex6/>
            <Efeito/>
            <Ex7/>
            <Ex8/>
            <Render1/>
            <Render2/>
            <Render3/>
            <Render4/>
            <Estado/>
         

        </section>
    )
}