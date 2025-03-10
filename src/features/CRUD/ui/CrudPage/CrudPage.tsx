import { ControlButtons } from '../ControlButtons/ControlButtons';
import { CrudList } from '../CrudList/CrudList';
import styles from './CrudPage.module.css';

export const CrudPage = () => {
    return (
        <>
            <div className={styles.main}>
                <ControlButtons />
                <CrudList />
            </div>
        </>
    );
};
