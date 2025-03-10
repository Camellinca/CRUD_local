import styles from './CrudEdit.module.css';

import { CrudListItem } from '../../lib/types/CRUD';
import { useNavigate, useParams } from 'react-router';
import { CrudForm } from '../CrudForm/CrudForm';
import { useCrudStore } from '../../model/store';
import { LStorage } from '../../lib/LStorage';

export const CrudEdit = () => {
    const { news, editByIndex } = useCrudStore();
    let { index } = useParams();
    let navigate = useNavigate();

    const initialValues = news[Number(index)];
    const onSubmit = (values: CrudListItem) => {
        const indexInt = Number(index);
        LStorage.updateByindex(indexInt, values.label, values.description);
        editByIndex(values, indexInt);
        navigate('/');
    };

    return (
        <div className={styles.main}>
            <h1>Редактирование элемента</h1>
            {}
            <CrudForm onSubmitCb={onSubmit} initialValues={initialValues} />
        </div>
    );
};
