import { useState } from 'react'
import './Navbar.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { BiSolidBell } from 'react-icons/bi'
import { PiClockFill } from 'react-icons/pi'
import { RiTodoFill, RiCalendarEventFill } from 'react-icons/ri'


const Navbar = () => {

    let [recursos, setRecursos] = useState(false)
    let [empresa, setEmpresa] = useState(false)

    const propsSetas = {
        className: "iconeSeta",
        size: 15,
    }

    const propsIconeSuspenso = {
        size: 20,
        className: "iconeSuspenso"
    }


    function checadoRecurso (evento) {

        if (evento.target.checked) {
            console.log("menu aberto")
            setRecursos(true)
        } else {
            console.log("menu fechado")
            setRecursos(false)
        }

    }
    function checadoEmpresa (evento) {

        if (evento.target.checked) {
            console.log("menu aberto")
            setEmpresa(true)
        } else {
            console.log("menu fechado")
            setEmpresa(false)
        }

    }

    return(
        <ul className='menu'>
            <li className='menuItens'> 
                <label htmlFor="recursos" >Recursos
                    {recursos
                    ? <IoIosArrowUp {...propsSetas}/>
                    : <IoIosArrowDown {...propsSetas}/>}
                 </label>    
                <input onChange={checadoRecurso} className='recursos' id='recursos' name='opcao' type='checkbox' ></input> 
                {recursos && <div>
                    <ul className='menuSuspenso menuRecursos'>
                        <li className='itensMenuSuspenso'><a href="/"><RiTodoFill {...propsIconeSuspenso} color='#7d4f9f' />Lista de Tarefas</a></li>
                        <li className='itensMenuSuspenso'><a href="/"><RiCalendarEventFill {...propsIconeSuspenso} color='#71c0d1' />Calendario</a></li>
                        <li className='itensMenuSuspenso'><a href="/"><BiSolidBell {...propsIconeSuspenso} color='#e8d663'/>Lembretes</a></li>
                        <li className='itensMenuSuspenso'><a href="/"><PiClockFill {...propsIconeSuspenso} color='#9047c8'/>Planejamento</a></li>
                    </ul>
                    </div>}
            </li>
            <li className='menuItens'> 
                <label htmlFor="empresa" >Empresa 
                    {empresa
                        ? <IoIosArrowUp {...propsSetas}/>
                        : <IoIosArrowDown {...propsSetas}/>}
                </label>    
                <input onChange={checadoEmpresa} id='empresa' name='opcao' type='checkbox' ></input> 
                {empresa && <div>
                    <ul className='menuSuspenso menuEmpresa'>
                        <li className='itensMenuSuspenso'><a href="/">Historia</a></li>
                        <li className='itensMenuSuspenso'><a href="/">Nosso Time</a></li>
                        <li className='itensMenuSuspenso'><a href="/">Blog</a></li>
                    </ul>
                    </div>}
            </li>
            <li className='menuItens'><a href='/' >Carreiras</a></li>
            <li className='menuItens'><a href='/' >Sobre</a></li>
        </ul>
    )
}

export default Navbar