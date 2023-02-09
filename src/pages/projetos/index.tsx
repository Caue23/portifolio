import { useState } from "react";
import styles from './projetos.module.scss'

const fixo = [
    { ID: 1, nome: 'HTML - CSS - JS', site: 'https://fruta-fruto-umber.vercel.app/', src:'/image/fruta.png' },
    { ID: 2, nome: 'HTML - CSS - JS', site: 'https://alura-books-liard.vercel.app/', src:'/image/AluraBooks.png' },
    { ID: 2, nome: 'Em construção', site: '', src:'/image/digitando.webp',  },
    
]

const certificados = [
    { ID: 7, nome: 'Em construção', site: '', src:'/image/digitando.webp'  },
    { ID: 8, nome: 'Em construção', site: '', src:'/image/digitando.webp' },
    { ID: 8, nome: 'Em construção', site: '', src:'/image/digitando.webp' },
]
export default function Curriculo() {
    const [show, setShow] = useState(false)
    const status = (show === true) ? "Ver menos" : "Ver mais";

    return (
        <section className={styles.containerGroup} >
                <h3>Projetos desenvolvidos</h3>
            <section className={styles.cardGroup}>
                {
                    fixo.map((fixo, i) => {
                        return (
                            <div key={fixo.ID} className={styles.card}>
                                <img src={fixo.src} alt="..." />
                                <h5 >{fixo.nome}</h5>
                                <p ></p>
                                <a href={fixo.site} >Ver projeto</a>
                            </div>
                        )
                    })}
            </section>
            {
                show ? <section className={styles.cardGroup}>
                    {
                        certificados.map((certificado, i) => {
                            return (
                                <div key={certificado.ID} className={styles.card}>
                                    <img src={certificado.src} alt="..." />
                                    <h5 >{certificado.nome}</h5>
                                    <p ></p>
                                    <a href={certificado.site} >Ver projeto</a>
                                </div>
                            )
                        })}
                    <div className={styles.toggle}>
                        <span></span>
                    </div>
                </section> : null
            }
            <section className={styles.view}>
                <button onClick={() => setShow(!show)}>{status}</button>
            </section>
        </section>

    )
}