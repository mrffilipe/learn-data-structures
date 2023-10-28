import styles from './styles.module.css'

import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

type Props = {
    value: string,
    href: Url,
    selected?: boolean
}

const MenuItem = (props: Props) => {
    return (
        <li className={`${styles.item} ${props.selected ? styles.selected : ''}`}>
            <Link href={props.href}>
                {props.value}
            </Link>
        </li>
    )
}

export default MenuItem