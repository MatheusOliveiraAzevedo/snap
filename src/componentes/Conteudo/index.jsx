import './Conteudo.css'
import imgConteudo from '../../images/image-hero-desktop.png'
import imgConteudo2 from '../../images/image-hero-mobile.png'
import img1 from '../../images/client-databiz.svg'
import img2 from '../../images/client-audiophile.svg'
import img3 from '../../images/client-meet.svg'
import img4 from '../../images/client-maker.svg'
import { useEffect, useState } from 'react'

const Conteudo = () => {
    let [foto, setFoto] = useState(true)



        useEffect(() => {

            function tamanhoTelaFoto() {
                if (window.matchMedia("(max-width: 430px)").matches) {
                    setFoto(false)
                } else {
                    setFoto(true)
                }
            }
            window.addEventListener("resize", tamanhoTelaFoto);
        })

    return(
        <section className='conteudo'>
            {foto 
            ? <img className='imgConteudo' src={imgConteudo} alt="" />
            : <img className='imgConteudo' src={imgConteudo2} alt="" />
            }
            <h1>Trabalhe remoto</h1>
            <p>Coloque sua equipe em sincronia, independentemente da sua localização. Simplifique processos, crie rituais de equipe e veja a produtividade disparar.</p>
            <button>Veja mais</button>
            <div>
                <img src={img1} alt="" className="logoRodape" />
                <img src={img2} alt="" className="logoRodape" />
                <img src={img3} alt="" className="logoRodape" />
                <img src={img4} alt="" className="logoRodape" />
            </div>
        </section>
    )
}

export default Conteudo