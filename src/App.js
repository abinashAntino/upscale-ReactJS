import './App.css';
import Counter from './components/Counter';
import Sampleform from './components/Sampleform';
import Helloworld from './components/Helloworld';
import Toggle from './components/Toggle';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imageshow from './components/Imageshow';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/'        element={<Helloworld/>}></Route>
                <Route path='/counter' element={<Counter/>}></Route>
                <Route path='/Form'    element={<Sampleform/>}></Route>
                <Route path='/togle'  element={<Toggle/>}></Route>
                <Route path='/image'   element={<Imageshow/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
