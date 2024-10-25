import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const TranslationHistory = ({ username }) => {
    const [translations, setTranslations] = useState([]);

    useEffect(() => {
        const fetchTranslations = async () => {
            const response = await axios.get(`/api/users/${username}/translations`);
            setTranslations(response.data);
        };
        fetchTranslations();
    }, [username]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Original Text</th>
                    <th>Translated Text</th>
                    <th>Source Language</th>
                    <th>Target Language</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {translations.map((translation, index) => (
                    <tr key={index}>
                        <td>{translation.text}</td>
                        <td>{translation.translatedText}</td>
                        <td>{translation.sourceLang}</td>
                        <td>{translation.targetLang}</td>
                        <td>{new Date(translation.date).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TranslationHistory;
