'use client'

import styles from './page.module.css'

import { useState } from 'react'

import EditorTab from '@/components/EditorTab'
import ViewContent from '@/components/ViewContent'

const Publish = () => {
    const [selectedEditor, setSelectedEditor] = useState<boolean>()

    const handleTabChange = (): void => {
        setSelectedEditor(!selectedEditor)
    }

    return (
        <div className={styles.container}>
            <h1>Publicar conteúdo</h1>
            <div className={styles.tabs}>
                <div
                    className={`${styles.tab_editor} ${selectedEditor ? styles.active_tab : ''}`}
                    onClick={handleTabChange}
                >
                    <span>Editor</span>
                </div>
                <div
                    className={`${styles.tab_view} ${selectedEditor ? '' : styles.active_tab}`}
                    onClick={handleTabChange}
                >
                    <span>Vizualizar</span>
                </div>
            </div>
            <div className={styles.tab_content}>
                {
                    selectedEditor ?
                        <EditorTab /> :
                        <ViewContent />
                }
            </div>
        </div>
    )
}

export default Publish