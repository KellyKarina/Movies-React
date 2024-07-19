import React, { useState } from 'react';
import Header from './components/Header';
import Insert from './components/Insert';
import List from './components/List';
import Footer from './components/Footer';


function App() {
    const [listMovies, setListMovies] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const handleDelete = (index) => {
        const updatedList = [...listMovies];
        updatedList.splice(index, 1);
        setListMovies(updatedList);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    return (
        <div>
            <Header />
            <Insert listMovies={listMovies} setListMovies={setListMovies} editIndex={editIndex} setEditIndex={setEditIndex} />
            <List listMovies={listMovies} onDelete={handleDelete} onEdit={handleEdit} />
            <Footer />
        </div>
    );
}

export default App;
