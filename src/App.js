import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FirstPage from './FirstPage'
import Find from './Components/Find/Find'
import './App.css';

function App() {
    return (
        <Router>          
            <Routes>
                <Route exact path='/' exact element={<FirstPage />} />
                <Route path='/find' element={<Find />} />
            </Routes>
        </Router>
  );
}

export default App;
