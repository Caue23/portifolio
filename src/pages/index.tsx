import styles from './Home.module.scss'
import Link from 'next/link'
import Lottie from 'react-lottie';
import animationData from '../../public/image/astronauta.json'
import animationFoguete from '../../public/image/astronauta2.json'

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationFoguete,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <header className={styles.ContainerImage}>
      <section className={styles.ContentImage}>
        <img src="/image/rio.jpg" />
      </section>
      <section className={styles.textImage}>
          <h3>Olá!</h3>
          <span>
          <p>Um pouco sobre mim</p>
          <Lottie 
          options={defaultOptionsTwo}
            height={100}
            width={100}
          />
          </span>

          <a>Me chamo Cauê Vinicius, tenho 29 anos, um apaixonado por tecnologia.<br/>
            Há 2 anos migrei de carreira e acabei me encontrando na área.<br/>
            Sou formado em sistemas da informação e desenvolvedor web frontEnd e backEnd. 
            Hoje como desenvolvedor júnior, realizo projetos de
            paginas web e landingPages responsivas e acessíveis.<br/>
            Utilizo as linguagens React-JS,Angular 9, PHP 7, JavaScript, TypeScript, HTML & CSS e
            busco me aprofundar cada vez mais em novas linguagens.
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
