import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { getTranslationHistory } from '../api'; // Assuming you have an API function to fetch history

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const userHistory = await getTranslationHistory(); // Fetch user's translation history from your API
            setHistory(userHistory);
        };

        fetchHistory();
    }, []);

    return (
        <Container className="mt-5">
            <h2>Your Translation History</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Source Language</th>
                        <th>Target Language</th>
                        <th>Original Text</th>
                        <th>Translated Text</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {history.length > 0 ? (
                        history.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.sourceLang}</td>
                                <td>{item.targetLang}</td>
                                <td>{item.originalText}</td>
                                <td>{item.translatedText}</td>
                                <td>{new Date(item.date).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No translation history found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default History;
