import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './Home.module.scss'
import Link from 'next/link'


export default function Home() {
  return (
    <header className={styles.ContainerImage}>
      <section className={styles.ContentImage}>
        <img src="/image/caue1.jpg" />
      </section>
      <section className={styles.textImage}>
          <h3>Olá!</h3>
          <p>Um pouco sobre mim</p>
          <a>Me chamo Cauê Vinicius tenho 28 ano, um apaixonado por tecnologia. Sou estudante de sistemas da informação e desenvolvedor web front end. 
            A 1 ano migrei de carreira e acabei me encontrando na area de tecnologia, como desenvolvedor junior realizava projetos de
            paginas web e landingPages responsivas e acessiveis. Utilizo as linguagens React Js, JavaScript, TypeScript, HTML & CSS e
            a cada dia buscando se aprofundar cada vez mais em novas linguagens.
          </a>
            <ul >
              <li className={styles.SpanImage}>
                <Link href='/curriculo'>
                  <button>Curriculo</button>
                </Link>
                <Link href='/projetos'>
                  <button>Projetos</button>
                </Link>
              </li>
            </ul>
      </section>
    </header>
  )
}
