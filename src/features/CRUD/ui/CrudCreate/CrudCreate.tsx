import styles from './CrudCreate.module.css';
import { CrudListItem } from '../../lib/types/CRUD';
import { useNavigate } from 'react-router';
import { CrudForm } from '../CrudForm/CrudForm';
import { LStorage } from '../../lib/LStorage';
import { useCrudStore } from '../../model/store';

export const CrudCreate = () => {
    let navigate = useNavigate();
    const { addNew } = useCrudStore();

    const onSubmit = (values: CrudListItem) => {
        LStorage.createElement(values.label, values.description);
        addNew(values);
        navigate('/');
    };

    return (
        <div className={styles.main}>
            <h1>Создание</h1>
            <CrudForm onSubmitCb={onSubmit} />
        </div>
    );
};
