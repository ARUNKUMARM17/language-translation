import History from './components/History';
import Home from './components/Home';
import Signup from './components/Signup';
import Translate from './components/Translate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Inside your App component's return statement
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/translate" element={<Translate />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Router>
    );
}

export default App;
