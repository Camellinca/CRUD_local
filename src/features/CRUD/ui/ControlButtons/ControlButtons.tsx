import styles from './ControlButtons.module.css';

export const ControlButtons = () => {
    return (
        <div className={styles.container}>
            <button>Заполнить шаблоном</button>
            <button>Очистить список</button>
            <button>Создать новое</button>
        </div>
    );
};
