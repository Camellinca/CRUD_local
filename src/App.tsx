import { BrowserRouter } from 'react-router';

import './App.css';
import { MainWindow } from './Pages/MainWindow/ui/MainWindow';
import { Crud } from './features/CRUD/ui/Crud/Crud';

function App() {
    return (
        <BrowserRouter>
            <MainWindow>
                <Crud />
            </MainWindow>
        </BrowserRouter>
    );
}

export default App;
