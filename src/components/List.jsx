import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const List = ({ listMovies, onDelete, onEdit }) => {

    const handleDelete = (index) => {
        onDelete(index);
    };

    return (
        <div className='container-list'>
            {listMovies.length === 0 ? (<p>Nenhum filme cadastrado.</p>) : (
                <div className="container my-5">
                    <h2 className="text-center mb-4">List Movies</h2>
                    <ListGroup>
                        {listMovies.map((movie, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                {movie.name}
                                <span className="badge bg-secondary">{movie.genero}</span>
                                <div>
                                    <FontAwesomeIcon icon={faEdit} className="me-2 text-warning" onClick={() => onEdit(index)} />
                                    <FontAwesomeIcon icon={faTrashAlt} className="text-danger" onClick={() => handleDelete(index)} />
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            )}
        </div>
    );    
};

export default List;
