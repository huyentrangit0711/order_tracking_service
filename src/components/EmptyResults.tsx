import React from 'react'
import logo from '../logo.svg';
const EmptyRowsView = () => {
    const message = "No data to show";
    return (
        <div
            style={{ textAlign: "center", backgroundColor: "#ddd", padding: "100px" }}
        >
            <img src={logo} className="App-logo" alt={message} />
            <h3>{message}</h3>
        </div>
    );
}
export default EmptyRowsView
