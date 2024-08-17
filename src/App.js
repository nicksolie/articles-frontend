import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Search';
import SavedArticles from './SavedArticles';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Articles - Search Historical Newspapers</h1>
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/saved-articles" element={<SavedArticles />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;