import styles from './MainWindow.module.css';

interface Props {
    children: React.ReactNode;
}

export const MainWindow = ({ children }: Props) => {
    return (
        <>
            <header className={styles.header}>Хедер</header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>Футер</footer>
        </>
    );
};
