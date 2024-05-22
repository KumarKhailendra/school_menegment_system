import React, { useEffect, useState } from 'react';
import Card from './Card';
import LoadingPage from '../LoadingPage';
import './PerentHome.css'; 

const PerentHome = () => {
    const [data, setData] = useState({ schools: [], universities: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/school_university');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="app1">
            <h1>Top Rated Schools and Universities</h1>
            <div className="card-container">
                <h2>Schools</h2>
                <div className="cards">
                    {data.schools.map((school) => (
                        <Card key={school._id} item={school} />
                    ))}
                </div>
                <h2>Universities</h2>
                <div className="cards">
                    {data.university.map((university) => (
                        <Card key={university._id} item={university} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PerentHome;
