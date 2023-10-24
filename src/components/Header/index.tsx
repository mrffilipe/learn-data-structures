import styles from './styles.module.css'

import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <span>Aprender ED</span>
            </Link>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href='/'>Listas lineares</Link>
                    </li>
                    <li>
                        <Link href='/'>Árvores</Link>
                    </li>
                    <li>
                        <Link href='/'>Tabelas hash</Link>
                    </li>
                    <li>
                        <Link href='/'>Grafos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header