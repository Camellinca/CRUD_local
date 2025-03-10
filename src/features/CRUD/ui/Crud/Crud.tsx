import { Routes, Route } from 'react-router';
import { CrudCreate } from '../CrudCreate/CrudCreate';
import { CrudEdit } from '../CrudEdit/CrudEdit';
import { CrudPage } from '../CrudPage/CrudPage';
import { useEffect } from 'react';
import { LStorage } from '../../lib/LStorage';
import { useCrudStore } from '../../model/store';

export const Crud = () => {
    const { setNews } = useCrudStore();

    useEffect(() => {
        setNews(LStorage.getData());
    }, []);

    return (
        <Routes>
            <Route index element={<CrudPage />} />
            <Route path="create" element={<CrudCreate />} />
            <Route path="edit/:index" element={<CrudEdit />} />
        </Routes>
    );
};
