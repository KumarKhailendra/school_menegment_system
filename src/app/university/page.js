"use client";
import Card from '@/components/Home/Card'
import LoadingPage from '@/components/LoadingPage';
import React, { useEffect, useState } from 'react'

const University = () => {
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
    <div style={{textAlign: "center", padding: "20px"}}>
            <h1>Top Rated Universities</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    {data.university.map((university) => (
                        <Card key={university._id} item={university} />
                    ))}
                </div>
            </div>
        </div>
  )
}

export default University
