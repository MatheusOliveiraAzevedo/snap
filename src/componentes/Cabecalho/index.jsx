import Acesso from '../Acesso'
import Navbar from '../Navbar'
import './Cabecalho.css'
import logo from '../../images/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { useState, useEffect } from 'react'

const Cabecalho = () => {
    
    let [menuMobile, setMenuMobile] = useState(false)
    
    function mostraMenu (evento) {
        
        if (evento.target.checked) {
            setMenuMobile(true)
        } else {
            setMenuMobile(false)
        }
        
    }
    
    function fechaMenu (evento) {
        setMenuMobile(false)
    }
    
    useEffect(() => {
        
        let larguraTela = window.innerWidth;
        if (larguraTela <= 1024) {
            setMenuMobile(false)
        } else {
            setMenuMobile(true)
        }
        
        const tamanhoTela = () => {
            if (window.matchMedia("(max-width: 1024px)").matches) {
                setMenuMobile(false)
            } else {
                setMenuMobile(true)
            }
        }
        window.addEventListener("resize", tamanhoTela)
    })

    return(
        <div className='cabecalho'>
            <img className='logo' src={logo} alt="" />
            
            <div className='menuMobile'>
                <label htmlFor="menuMobile"><AiOutlineMenu size={40}/></label>
                <input onClick={mostraMenu} type="checkbox" id='menuMobile' checked={menuMobile} />
            </div>
            
            {menuMobile && <div className='menuFundo'>
                <div className='menuInteracoes'>
                    {menuMobile 
                    && <button 
                        className='botaoFechaMenu' 
                        onClick={fechaMenu}
                        >
                        <GrClose size={35}/>
                        </button>}
                    <Navbar/>
                    <Acesso/>
                </div>
            </div>
            
            }
        </div>
    )
}


export default Cabecalho
