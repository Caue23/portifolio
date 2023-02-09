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
          <a>Me chamo Cauê Vinicius, tenho 28 anos, um apaixonado por tecnologia. Sou estudante de sistemas da informação e desenvolvedor web front end. 
            Há 1 ano migrei de carreira e acabei me encontrando na área de tecnologia, como desenvolvedor júnior realizava projetos de
            paginas web e landingPages responsivas e acessíveis. Utilizo as linguagens React-JS, JavaScript, TypeScript, HTML & CSS e
            a cada dia buscando se aprofundar cada vez mais em novas linguagens.
          </a>
            <ul >
              <li className={styles.SpanImage}>
                <Link href='/curriculo'>
                  <button>Currículo</button>
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
