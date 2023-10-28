import styles from './styles.module.css'

import { useState } from 'react'
import { KeyboardArrowRightOutlined } from '@mui/icons-material'

type Props = {
    value: string,
    selected?: boolean,
    children: Array<JSX.Element>
}

const GroupMenuItems = (props: Props) => {
    const [expandMenu, setExpandMenu] = useState<boolean>();

    const handleToggleMenu = (): void => {
        setExpandMenu(!expandMenu)
    }

    return (
        <li className={styles.container}>
            <ul className={`${styles.menu} ${expandMenu ? styles.expand_menu : ''}`}>
                <button onClick={handleToggleMenu}>
                    {props.value}
                    <KeyboardArrowRightOutlined />
                </button>
                {props.children}
            </ul>
        </li>
    )
}

export default GroupMenuItems