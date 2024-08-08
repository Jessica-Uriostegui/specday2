
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Exercises from './components/Exercises';


const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercises" element={<Exercises />} />
            </Routes>
        </div>
    );
};

export default App;
