import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button 
                className="dark-button" 
                onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
            >Dark Mode</button>
        </div>
    );
}

export default Header;