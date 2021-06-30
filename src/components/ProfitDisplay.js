import React from 'react';

const ProfitDisplay = (props) => {
    return (
        <div className="container">
            <label>Profit/Loss</label>
            <div id="earnings">${props.profit}</div>
        </div>
    );
}

export default ProfitDisplay;