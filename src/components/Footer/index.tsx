import styles from './styles.module.scss'
import { BsLinkedin } from "react-icons/bs";


export  function Footer () {
    return(
        <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <text>Telefone: (11) XXXX-XXX</text>
          <nav className={styles.navContent}>
              <a>Email: cauevinicius231@gmail.com</a>
              <a href="https://www.linkedin.com/in/cauê-santos-1126b2149">Me siga <BsLinkedin /></a>
          </nav>
        </div>
      </header>
    )
}