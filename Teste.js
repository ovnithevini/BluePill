import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [itens, setItens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItens = async () => {
            try {
                const response = await axios.get('http://localhost:3000/itens');
                setItens(response.data);
            } catch (err) {
                setError('Erro ao carregar itens');
            } finally {
                setLoading(false);
            }
        };

        fetchItens();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Lista de Itens</h1>
            <ul>
                {itens.map(item => (
                    <li key={item.id}>
                        <h2>{item.titulo}</h2>
                        <p>{item.descricao}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

