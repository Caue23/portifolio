import styles from './styles.module.scss'
import { BsLinkedin } from "react-icons/bs";


export  function Footer () {
    return(
        <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <text>Telefone:</text>
            <span>(11) XXXX-XXX</span>
          <nav className={styles.navContent}>
              <a>Email:</a>
              <a>info@meusite.com</a>
          </nav>
          <nav>
              <a>Me siga</a>
              <a href="https://www.linkedin.com/in/cauê-santos-1126b2149"><BsLinkedin/></a>
          </nav>
        </div>
      </header>
    )
}