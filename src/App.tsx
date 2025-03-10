import { BrowserRouter, Route, Routes } from 'react-router';

import './App.css';
import { MainWindow } from './Pages/MainWindow/ui/MainWindow';
import { CrudPage } from './features/CRUD/ui/CrudPage/CrudPage';
import { CrudCreate } from './features/CRUD/ui/CrudCreate/CrudCreate';

function App() {
    return (
        <BrowserRouter>
            <MainWindow>
                <Routes>
                    <Route index element={<CrudPage />} />
                    <Route path="create" element={<CrudCreate />} />
                </Routes>
            </MainWindow>
        </BrowserRouter>
    );
}

export default App;
