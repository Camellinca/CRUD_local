import './App.css';
import { MainWindow } from './Pages/MainWindow/ui/MainWindow';
import { CrudPage } from './features/CRUD/ui/CrudPage/CrudPage';

function App() {
    return (
        <MainWindow>
            <CrudPage />
        </MainWindow>
    );
}

export default App;
