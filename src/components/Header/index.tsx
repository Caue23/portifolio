import Link from 'next/link'
import styles from './styles.module.scss'

export function Header () {
    return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
          <Link href="/"legacyBehavior>
            <text>Cauê Santos</text>
          </Link>
          <span>Desenvolvedor Front End</span>
        <nav>
          <Link href="/curriculo"legacyBehavior>
            <a>Curriculo</a>
          </Link>
          <Link href="/projetos"legacyBehavior>
            <a>Projetos</a>
          </Link>

        </nav>
      </div>
    </header>
    )
}