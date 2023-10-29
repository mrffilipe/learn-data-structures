import dynamic from 'next/dynamic';

const Quill = dynamic(() => import('./Quill'), {
    ssr: false
});

const ContentEditor = () => {
    return (
        <>
            <Quill />
        </>
    )
}

export default ContentEditor