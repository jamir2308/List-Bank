import React from 'react';
import PropTypes from 'prop-types';

const BankCard = ({ bankName, description, age, url }) => {
    return (
        <div className="card h-100">
            <div className="container-img">
                <img src={url} className="custom-img" alt={bankName} />
            </div>
            <div className="card-body">
                <h4 className="card-title">{bankName}</h4>
                <p className="card-text height">{description}</p>
                <p className="card-text"><small className="text-muted">{age} años</small></p>
            </div>
        </div>
    );
};

BankCard.propTypes = {
    bankName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
}


export default BankCard;