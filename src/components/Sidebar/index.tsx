'use client'

import styles from './styles.module.css'

import GroupMenuItems from './GroupMenuItems'
import MenuItem from './MenuItem'

const Sidebar = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <MenuItem value='Introdução' href='/' selected />
                <MenuItem value='Alocação sequencial' href='/' />
                <MenuItem value='Listas lineares em alocação sequencial' href='/' />
                <MenuItem value='Pilhas e filas' href='/' />
                <MenuItem value='Alocação encadeada' href='/' />
                <GroupMenuItems value='Listas lineares em alocação encadeada'>
                    <MenuItem value='Listas simplesmente encadeadas' href='/' selected />
                    <MenuItem value='Pilhas e filas' href='/' />
                    <MenuItem value='Listas circulares' href='/' />
                    <MenuItem value='Listas duplamente encadeadas' href='/' />
                </GroupMenuItems>
                <MenuItem value='Alocação de espaço variável' href='/' />
            </ul>
        </nav>
    )
}

export default Sidebar