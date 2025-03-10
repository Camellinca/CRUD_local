import styles from './CrudControl.module.css';

export const CrudControl = () => {
    return (
        <div className={styles.container}>
            <button>Заполнить шаблоном</button>
            <button>Очистить список</button>
            <button>Создать новое</button>
        </div>
    );
};
