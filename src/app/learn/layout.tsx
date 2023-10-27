import styles from './page.module.css'

import Sidebar from '@/components/Sidebar'

const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <section className={styles.content}>
            <Sidebar />
            {children}
        </section>
    )
}

export default Layout