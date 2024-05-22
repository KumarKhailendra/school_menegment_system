import Image from 'next/image';
import React from 'react';
import './Card.css';

const Card = ({ item }) => {
    return (
        <div className="card">
            <Image src={item.logo_url} alt={`${item.name} logo`} width={250} height={250} className="card-logo" />
            <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-text">{item.addressLine1}, {item.addressLine2}, {item.addressLine3}</p>
                <p className="card-text">Rating: {item.rating}</p>
                <a href={`mailto:${item.email}`} className="card-link">{item.email}</a>
                <a href={`tel:${item.telephone}`} className="card-link">{item.telephone}</a>
                <a href={`https://${item.website}`} target="_blank" rel="noopener noreferrer" className="card-link">{item.website}</a>
            </div>
        </div>
    );
};

export default Card;
