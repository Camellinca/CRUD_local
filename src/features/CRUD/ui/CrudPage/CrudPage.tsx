import { CrudControl } from '../CrudControl/CrudControl';
import { CrudList } from '../CrudList/CrudList';
import styles from './CrudPage.module.css';

export const CrudPage = () => {
    return (
        <>
            <div className={styles.main}>
                <CrudControl />
                <CrudList />
            </div>
        </>
    );
};
