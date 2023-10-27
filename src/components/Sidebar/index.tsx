'use client'

import styles from './styles.module.css'

import { useState } from 'react'
import Link from 'next/link'

import { KeyboardArrowRightOutlined } from '@mui/icons-material'

const Sidebar = () => {
    const [expandMenu, setExpandMenu] = useState<boolean>(true);

    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href='/'>
                        Introdução
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        Alocação sequencial
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        Listas lineares em alocação sequencial
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        Pilhas e filas
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        Alocação encadeada
                    </Link>
                </li>
                <li>
                    <ul className={`${styles.expandable_menu} ${expandMenu ? styles.expand_menu : ''}`}>
                        <Link href='/'>
                            Listas lineares em alocação encadeada
                            <KeyboardArrowRightOutlined />
                        </Link>
                        <li>
                            <Link href='/'>
                                Listas simplesmente encadeadas
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                Pilhas e filas
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                Listas circulares
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                Listas duplamente encadeadas
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href='/'>
                        Alocação de espaço variável
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar