import React, { useRef, useState } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';

const Select = ({ options,  }) => {
    const [search, setSearch] = useState("");
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const inputContainerRef = useRef();
    const inputRef = useRef();
    
    const handleSearchInputChange = (e) => {
        if (e.target.value) {
            setSearch(e.target.value);
            setShowDropdown(true);
        } else {
            setSearch("");
            setShowDropdown(false);
        }
    };

    const handleCoinSelect = (e) => {
        setSelectedCoin(e.target.dataset.label);
        setSearch(e.target.dataset.label)
        setShowDropdown(false);
    };

    const handleClearSelected = (e) => {
        setSearch("");
        setSelectedCoin(null);
        inputRef.current.focus();
    }

    const filteredCoins = () => {
        if (!search) return options;
    
        return options.filter(coin => {
            return coin.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    };

    const getInputWidth = () => {
        const width = inputContainerRef.current ? inputContainerRef.current.clientWidth : 256;
        return {
            width: width + "px"
        };
    };

    return (
        <div className="dropdown">
            <div className="input-wrapper" ref={inputContainerRef}>
                <input type="text" onChange={handleSearchInputChange} ref={inputRef} value={search} />

                {selectedCoin ? (
                    <span className="close-btn" onClick={handleClearSelected}><BiX /></span>
                ) : (
                    <span><BiSearch /></span>
                )}
               
            </div>
            <div className={"dropdown-content" + (showDropdown ? " show" : "")} style={getInputWidth()}>
                {filteredCoins(search, options).map(option => {
                    return <div 
                                className="option" 
                                data-label={option.label} 
                                onClick={handleCoinSelect}
                            >
                            {option.label}
                            </div>
                })}
                {filteredCoins().length === 0 && (
                    <div className="no-option">no results, sorry :(</div>
                )}
            </div>
        </div>
    );
}

export default Select;