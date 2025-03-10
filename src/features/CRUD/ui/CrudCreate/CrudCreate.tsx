import { Formik } from 'formik';
import styles from './CrudCreate.module.css';
import { CrudListItem } from '../../lib/types/CRUD';
import { useNavigate } from 'react-router';

type Errors = { label?: string };

export const CrudCreate = () => {
    let navigate = useNavigate();

    const onSubmit = (values: CrudListItem) => {
        console.log(values);
        navigate('/');
    };

    const validate = (values: CrudListItem) => {
        const errors: Errors = {};
        if (!values.label) {
            errors.label = 'Required';
        }
        return errors;
    };

    const onCancel = () => {
        console.log('onCancel');
        navigate('/');
    };

    return (
        <div className={styles.main}>
            <h1>Создание</h1>
            <Formik initialValues={{ label: '', description: '' }} validate={validate} onSubmit={onSubmit}>
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
                            <button type="submit"> Сохранить</button>
                            <button onClick={onCancel}>Отмена</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};
