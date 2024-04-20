
import { useState } from "react";
import styles from './curriculo.module.scss';
import Skills from '../../components/skills';

const fixo = [
    { ID: 1, nome: 'CSS: dispondo elementos com Flexbox e Grid', site: 'https://cursos.alura.com.br/certificate/a30aa64c-6896-4ee2-9a4b-a1a7ab0da525' },
    { ID: 2, nome: 'Formação HTML e CSS', site: 'https://cursos.alura.com.br/degree/certificate/3274ea5a-cf14-4073-9741-ca2501fe58d3' },
    { ID: 3, nome: 'HTML e CSS: praticando HTML/CSS', site: 'https://cursos.alura.com.br/certificate/7aa2465b-cb60-4f3c-84c3-9e65bfc87832' },
    { ID: 4, nome: 'HTML e CSS: responsividade com mobile-first', site: 'https://cursos.alura.com.br/certificate/0a5a8e87-6a55-470e-a2e9-1dcd6eda6236' },
    { ID: 5, nome: 'JavaScript na Web: armazenando dados no navegador', site: 'https://cursos.alura.com.br/certificate/718a761c-caaf-4459-bebf-11f7e506e4a1' },
    { ID: 6, nome: 'JavaScript para Web: Crie páginas dinâmicas', site: 'https://cursos.alura.com.br/certificate/b3f6dcb4-932a-4a52-9532-cf5930acdc70' },
]

const certificados = [
    { ID: 7, nome: 'JavaScript: manipulando o DOM', site: 'https://cursos.alura.com.br/certificate/31206f5a-2653-48dc-bcca-c5c81a1342e8' },
    { ID: 8, nome: 'React: escrevendo com Typescript', site: 'https://cursos.alura.com.br/certificate/3679e1d9-cb4e-4196-90af-404fb4e0cb10' },
    { ID: 9, nome: 'Bootstrap 4: criando uma landing page responsiva', site: 'https://cursos.alura.com.br/certificate/2224852d-7c24-4f43-a78f-4d091beee08e' },
    { ID: 10, nome: 'JavaScript: programando a Orientação a Objetos', site: 'https://cursos.alura.com.br/certificate/3404c38e-3a97-400b-bb72-78ee019fd6d9' },
    { ID: 11, nome: 'Acessibilidade web parte 1: tornando seu front-end inclusivo', site: 'https://cursos.alura.com.br/certificate/d7eaef7e-0915-4c29-8f7e-09ccaf163d3d' },
    { ID: 12, nome: 'JavaScript: explorando a linguagem', site: 'https://cursos.alura.com.br/certificate/69611a3f-2ad2-466f-93c4-6d0e29accb8e' },
    { ID: 13, nome: 'HTML5 e CSS3 parte 1: crie uma página da Web', site: 'https://cursos.alura.com.br/certificate/eff472d9-0e86-4ad6-ac71-55a43c312e9f' },
    { ID: 14, nome: 'HTML5 e CSS3 parte 2: posicionamento, listas e navegação', site: 'https://cursos.alura.com.br/certificate/2c185091-fa42-46e2-93cc-43ff4dfa35e6' },
    { ID: 15, nome: 'HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas', site: 'https://cursos.alura.com.br/certificate/ad675496-89e9-4302-a372-9810f726b958' },
    { ID: 16, nome: 'HTML5 e CSS3 parte 4: avançando no CSS', site: 'https://cursos.alura.com.br/certificate/49c5eaa2-bf79-445b-97eb-0370c5bbf07c' },
    { ID: 17, nome: 'JavaScript: programando na linguagem da web', site: 'https://cursos.alura.com.br/certificate/f37673cd-547f-424a-96ea-c88bfb8c3317' },
    { ID: 18, nome: 'React: entendendo como a biblioteca funciona', site: 'https://cursos.alura.com.br/certificate/dbbd7682-5a48-4f3c-888d-ef0d258fa68d' },

]


export default function Curriculo() {
    const [show, setShow] = useState(false)
    const status = (show === true) ? "Ver menos" : "Ver mais";

    return (
        <div className={styles.containerCurriculo}>
            <section className={styles.line}>
                <section className={styles.contentCurriculo}>
                    <ul>
                        <li className={styles.textCurriculo}>
                            <h3>Currículo</h3>
                            <p >Experiência Profissional</p>
                        </li>
                    </ul>
                    <section>
                    <ul className={styles.trabalhoCurriculo} >
                            <li className={styles.titleCurriculo}>
                                <p className={styles.date}>Mai 2023 - Atual</p>
                                <li className={styles.curriculo}>
                                    <h3 >Idigital</h3>
                                    <a>Alocado no time de Retail Tech na Cheil Brasil, atuo como desenvolvedor FullStack junior, 
                                        contribuindo tanto para a Cheil Brasil quanto para o cliente Samsung. Minhas responsabilidades 
                                        incluem criação e manutenção de páginas web, Landing Pages, APIs, utilizando as tecnologias 
                                        Angular 9, JavaScript, HTML, CSS, PHP 7. 
                                        Colaboro ativamente na entrega de soluções que atendam às necessidades da Cheil Brasil e do
                                        cliente Samsung.
                                    </a>
                                </li>
                            </li>
                        </ul>
                        <ul className={styles.trabalhoCurriculo} >
                            <li className={styles.titleCurriculo}>
                                <p>Dez 2021 - Jan 2023</p>
                                <li className={styles.curriculo}>
                                    <h3>Suzano Papel e Celulose</h3>
                                    <a>Alocado no time de DigitalTech na Suzano Papel e Celulose como desenvolvedor
                                        Front End junior e inicando os estudos em Back End. Responsável por criações e
                                        desenvolvimento de páginas web e Landing Page voltadas para divulgação de
                                        programas de inclusão e divulgações de engajamento em redes sociais. Utilizando as
                                        linguagens React Js, Javascripts, Typescripts, HTML & CSS.
                                    </a>
                                </li>
                            </li>
                        </ul>
                        <ul className={styles.trabalhoTwoCurriculo} >
                            <li className={styles.titleTwoCurriculo}>
                                <p>Mar 2012 - Dez 2021</p>
                                <li className={styles.curriculo}>
                                    <h3>Retentores Vedabras Ind e Com Ltda</h3>
                                    <a>Visitas a clientes e atendimento no balcão para realizar suporte tecnico,
                                        auxilio em vendas de peças, desenho de peças no solidWorks e autoCad.
                                        inspeção de peças com defeitos e criação de Rnc.
                                    </a>
                                </li>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
            <section className={styles.line}>
                <section className={styles.contentCurriculo}>
                    <ul>
                        <li className={styles.textCurriculo}>
                            <h3 >Educação</h3>
                        </li>
                    </ul>
                    <section>
                        <ul className={styles.trabalhoCurriculo} >
                            <li className={styles.titleEducacao}>
                                <p>2019 - Atual</p>
                                <li className={styles.curriculoTwo}>
                                    <h3>Graduação - Sistemas de Informção</h3>
                                    <a>Cursando ultimo semestre de Sistemas de Informação
                                        na instituição de ensino Universidade nove de julho
                                    </a>
                                </li>
                            </li>
                        </ul>
                        <ul className={styles.trabalhoCurriculo} >
                            <li className={styles.titleEducacao}>
                                <p>2017 - 2019</p>
                                <li className={styles.curriculoTwo}>
                                    <h3>Etec Getúlio Vargas </h3>
                                    <a>Curso tecnico de mecanica industrial realizado no
                                        centro Paula Souza
                                    </a>
                                </li>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
            <section className={styles.finalCurriculo}>
                <ul>
                    <li className={styles.textTwoCurriculo}>
                        <h3 >Skills & Especializações</h3>
                    </li>
                </ul>
                <Skills />
                <section className={styles.cardGroup}>
                    {
                        fixo.map((fixo, i) => {
                            return (
                                <div key={fixo.ID} className={styles.card}>
                                    <img src="/image/alura.jfif" alt="..." />
                                    <h5 >{fixo.nome}</h5>
                                    <p ></p>
                                    <a href={fixo.site} >Ver certificado</a>
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
                                        <img src="/image/alura.jfif" alt="..." />
                                        <h5 >{certificado.nome}</h5>
                                        <p ></p>
                                        <a href={certificado.site} >Ver certificado</a>
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

        </div>
    )
}