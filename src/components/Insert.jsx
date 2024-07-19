import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css'; 

const Insert = ({ listMovies, setListMovies, editIndex, setEditIndex }) => {
    const [movieName, setMovieName] = useState('');
    const [selectGenero, setSelectGenero] = useState('');

    useEffect(() => {
        if (editIndex !== -1) {
            setMovieName(listMovies[editIndex].name);
            setSelectGenero(listMovies[editIndex].genero);
        } else {
            setMovieName('');
            setSelectGenero('');
        }
    }, [editIndex, listMovies]);

    const handleChange = (event) => {
        setMovieName(event.target.value);
    };

    const handleGeneroChange = (event) => {
        setSelectGenero(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (movieName && selectGenero) {
            if (editIndex === -1) {
                setListMovies([...listMovies, { name: movieName, genero: selectGenero }]);
            } else {
                const updatedMovies = [...listMovies];
                updatedMovies[editIndex] = { name: movieName, genero: selectGenero };
                setListMovies(updatedMovies);
            }
            setMovieName('');
            setSelectGenero('');
            setEditIndex(-1); 
        } else {
            alert('Preencha o nome do filme e selecione um gênero.');
        }
    };

    return (
        <div className="all-content">
            <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
                <Form.Group className="mb-3">
                    <Form.Label>Nome do Filme</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={movieName}
                        onChange={handleChange}
                        placeholder="Digite o nome do filme"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Gênero</Form.Label>
                    <Form.Select
                        aria-label="Selecione um gênero"
                        value={selectGenero}
                        onChange={handleGeneroChange}
                        required
                    >
                        <option value="">Selecione um gênero</option>
                        <option value="Ação">Ação</option>
                        <option value="Animação">Animação</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Comédia">Comédia</option>
                        <option value="Drama">Drama</option>
                        <option value="Romance">Romance</option>
                        <option value="Suspense">Suspense</option>
                        <option value="Terror">Terror</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    {editIndex === -1 ? 'Cadastrar' : 'Atualizar'}
                </Button>
            </Form>
        </div>
    );
};

export default Insert;
