import styles from './styles.module.scss'
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export  function Footer () {
    return(
        <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <text>Telefone: (11) 9607-79234</text>
          <nav className={styles.navContent}>
              <a>Email: cauevinicius231@gmail.com</a>
              <span>
              Me siga:
              <a href="https://www.linkedin.com/in/cauê-santos-1126b2149"> <BsLinkedin /></a>
              

              </span>
          </nav>
        </div>
      </header>
    )
}