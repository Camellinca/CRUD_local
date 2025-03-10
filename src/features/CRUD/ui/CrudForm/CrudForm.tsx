import { Formik } from 'formik';
import styles from './CrudForm.module.css';
import { CrudListItem } from '../../lib/types/CRUD';
import { NavLink } from 'react-router';

interface Props {
    onSubmitCb: (values: CrudListItem) => void;
    initialValues?: CrudListItem;
}

type Errors = { label?: string };

export const CrudForm = ({ onSubmitCb, initialValues }: Props) => {
    const onSubmit = (values: CrudListItem) => {
        onSubmitCb(values);
    };

    const validate = (values: CrudListItem) => {
        const errors: Errors = {};
        if (!values.label) {
            errors.label = 'Required';
        }
        return errors;
    };

    const _initialValues = { label: initialValues?.label ?? '', description: initialValues?.description ?? '' };

    return (
        <Formik initialValues={_initialValues} validate={validate} onSubmit={onSubmit}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                /* and other goodies */
            }) => (
                <form className={styles.container} onSubmit={handleSubmit}>
                    <input
                        autoComplete="off"
                        placeholder="Заголовок"
                        type="text"
                        name="label"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.label}
                        className={
                            errors.label && touched.label && errors.label
                                ? styles.input_requied
                                : !errors.label && touched.label && !errors.label
                                  ? styles.input_validated
                                  : ''
                        }
                    />
                    <textarea
                        className={touched.description && values.description ? styles.input_validated : ''}
                        placeholder="Описание"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                    />

                    <div>
                        <button className={styles.button} type="submit">
                            {' '}
                            Сохранить
                        </button>
                        <NavLink className={styles.button} to="/">
                            Отмена
                        </NavLink>
                    </div>
                </form>
            )}
        </Formik>
    );
};
