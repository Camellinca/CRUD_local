import { NavLink } from 'react-router';
import styles from './ControlButtons.module.css';

export const ControlButtons = () => {
    return (
        <div className={styles.container}>
            <NavLink className={styles.button} to="/create">
                Создать новое
            </NavLink>
        </div>
    );
};
