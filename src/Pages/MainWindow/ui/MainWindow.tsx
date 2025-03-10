import styles from './MainWindow.module.css';

interface Props {
    children: React.ReactNode;
}

export const MainWindow = ({ children }: Props) => {
    return (
        <>
            {/* <header></header> */}
            <main className={styles.main}>{children}</main>
            {/* <footer></footer> */}
        </>
    );
};
